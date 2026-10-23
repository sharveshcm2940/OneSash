import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

test('built service HTML has its own initial title and exactly one production canonical', async () => {
  const html = await readFile('dist/services/web-development.html', 'utf8')
  assert.match(html, /<title>Web Application Development/)
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1)
  assert.match(html, /rel="canonical" href="https:\/\/onesash.co.in\/services\/web-development"/)
  assert.match(html, /property="og:url" content="https:\/\/onesash.co.in\/services\/web-development"/)
  assert.doesNotMatch(html, /SearchAction/)
})
