import { randomUUID } from 'node:crypto'

// Receiver must persist the lead before returning { accepted: true, id: "record-id" }.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }) }
  const allowed = (process.env.ENQUIRY_ALLOWED_ORIGINS || 'https://onesash.co.in,https://www.onesash.co.in').split(',').map(s => s.trim())
  if (req.headers.origin && !allowed.includes(req.headers.origin)) return res.status(403).json({ error: 'Origin not allowed' })
  let body
  try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body } catch { return res.status(400).json({ error: 'Invalid request' }) }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return res.status(400).json({ error: 'Invalid request' })
  if (body.website) return res.status(400).json({ error: 'Unable to accept this enquiry' })
  const limits = { name: 120, email: 254, phone: 40, projectType: 120, projectDescription: 5000, budget: 120, service: 100, project: 100, source: 200 }
  const enquiry = {}
  for (const [field, max] of Object.entries(limits)) {
    const value = body[field] ?? ''
    if (typeof value !== 'string' || value.length > max) return res.status(400).json({ error: 'Check your message and field lengths' })
    enquiry[field] = value.trim()
  }
  if (!enquiry.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email) || !enquiry.projectDescription) return res.status(400).json({ error: 'Name, valid email and a message are required' })
  const endpoint = process.env.LEAD_WEBHOOK_URL
  const token = process.env.LEAD_WEBHOOK_TOKEN
  if (!endpoint || !token || !endpoint.startsWith('https://')) return res.status(503).json({ error: 'Online enquiries unavailable. Please use WhatsApp or email.' })
  const requestId = typeof body.requestId === 'string' && /^[\w-]{16,80}$/.test(body.requestId) ? body.requestId : randomUUID()
  try {
    const response = await fetch(endpoint, {
      method: 'POST', redirect: 'error',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'Idempotency-Key': requestId },
      body: JSON.stringify({ ...enquiry, requestId, receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(12000),
    })
    if (!response.ok) throw new Error('Receiver rejected enquiry')
    const result = await response.json()
    if (result.accepted !== true || typeof result.id !== 'string' || !result.id || result.id.length > 200) throw new Error('Missing durable acceptance')
    return res.status(200).json({ accepted: true, id: result.id })
  } catch {
    return res.status(502).json({ error: 'Receipt could not be confirmed. Retry or use WhatsApp.' })
  }
}
