import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const headers = fs.readFileSync(path.join(root, 'public/_headers'), 'utf8');
const robots = fs.readFileSync(path.join(root, 'public/robots.txt'), 'utf8');

test('Cloudflare publica HSTS sin afectar subdominios no auditados', () => {
  assert.match(headers, /Strict-Transport-Security: max-age=31536000\s*$/m);
  assert.doesNotMatch(headers, /Strict-Transport-Security:.*includeSubDomains/i);
});

test('la CSP se aplica en modo estricto tras validar producción', () => {
  assert.match(headers, /^\s*Content-Security-Policy:/m);
  assert.doesNotMatch(headers, /Content-Security-Policy-Report-Only:/);
  assert.match(headers, /default-src 'self'/);
  assert.match(headers, /object-src 'none'/);
  assert.match(headers, /script-src 'self' https:\/\/static\.cloudflareinsights\.com/);
});

test('robots.txt no bloquea los assets compilados de Astro', () => {
  assert.doesNotMatch(robots, /^Disallow:\s*\/_astro\/?/m);
});
