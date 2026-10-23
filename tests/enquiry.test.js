import test, { afterEach } from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/enquiry.js'
const originalFetch = globalThis.fetch
const env = { ...process.env }
afterEach(() => { globalThis.fetch = originalFetch; process.env = { ...env } })
const lead = { name: 'Test Visitor', email: 'visitor@example.com', projectDescription: 'Help with bookings', requestId: 'a4de50c0-5637-47f2-8903-2d87e2177089' }
async function submit(body = lead, method = 'POST', origin = 'https://onesash.co.in') {
  const res = { code: 0, headers: {}, setHeader(k,v) { this.headers[k] = v }, status(code) { this.code = code; return this }, json(data) { this.data = data; return this } }
  await handler({ method, headers: { origin }, body }, res)
  return res
}
function configured() { process.env.LEAD_WEBHOOK_URL = 'https://receiver.example/lead'; process.env.LEAD_WEBHOOK_TOKEN = 'test-secret' }
test('rejects invalid input, spam and cross-origin requests without delivery', async () => {
  globalThis.fetch = () => { throw new Error('Must not contact receiver') }
  assert.equal((await submit({ ...lead, email: 'invalid' })).code, 400)
  assert.equal((await submit({ ...lead, projectDescription: 'x'.repeat(5001) })).code, 400)
  assert.equal((await submit({ ...lead, website: 'spam' })).code, 400)
  assert.equal((await submit(lead, 'POST', 'https://other.example')).code, 403)
  assert.equal((await submit(lead, 'GET')).code, 405)
})
test('missing configuration fails closed rather than claiming receipt', async () => {
  delete process.env.LEAD_WEBHOOK_URL
  assert.equal((await submit()).code, 503)
})
test('requires durable receiver acceptance, forwarding an idempotency key', async () => {
  configured()
  globalThis.fetch = async (_url, options) => {
    assert.equal(options.headers['Idempotency-Key'], lead.requestId)
    assert.equal(options.headers.Authorization, 'Bearer test-secret')
    assert.equal(JSON.parse(options.body).email, lead.email)
    return { ok: true, json: async () => ({ accepted: true, id: 'crm-123' }) }
  }
  const response = await submit()
  assert.equal(response.code, 200)
  assert.deepEqual(response.data, { accepted: true, id: 'crm-123' })
})
test('receiver failures, missing IDs and timeouts never report success', async () => {
  configured()
  for (const fetcher of [async () => ({ ok: false }), async () => ({ ok: true, json: async () => ({ accepted: true }) }), async () => { throw new Error('timeout') }]) {
    globalThis.fetch = fetcher
    assert.equal((await submit()).code, 502)
  }
})
