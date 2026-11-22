import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const redirects = fs.readFileSync(path.join(projectRoot, 'public/_redirects'), 'utf8');

const rules = redirects
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => {
    const [source, destination, status] = line.split(/\s+/);
    return { source, destination, status };
  });

test('las redirecciones permanentes apuntan directo a la URL canónica con barra', () => {
  for (const { source, destination, status } of rules) {
    if (status !== '301' || !destination.startsWith('/')) continue;

    const pathname = destination.split(/[?#]/, 1)[0];
    if (path.extname(pathname)) continue;

    assert.ok(
      pathname.endsWith('/'),
      `${source} apunta a ${destination} y provoca una segunda redirección`,
    );
  }
});
