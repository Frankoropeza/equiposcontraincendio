import assert from 'node:assert/strict'
import test from 'node:test'

import { findInlineExecutableScripts } from '../scripts/lib/csp-audit.mjs'

test('detecta JavaScript inline ejecutable', () => {
  const html = '<script>window.alert(1)</script><script type="module">start()</script>'
  assert.equal(findInlineExecutableScripts(html).length, 2)
})

test('permite JSON-LD inline y scripts externos', () => {
  const html = [
    '<script type="application/ld+json">{"@type":"Product"}</script>',
    '<script src="/_astro/app.js"></script>',
  ].join('')
  assert.deepEqual(findInlineExecutableScripts(html), [])
})
