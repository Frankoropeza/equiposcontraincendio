import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { validateContentReferences } from '../scripts/lib/content-references.mjs';

function writeEntry(root, collection, slug, frontmatter = '') {
  const directory = path.join(root, collection);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(
    path.join(directory, `${slug}.md`),
    `---\ntitle: ${slug}\n${frontmatter}---\n`,
    'utf8',
  );
}

test('detecta referencias de colección cuyo destino no existe', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'eci-content-refs-'));
  writeEntry(root, 'productos', 'panel', 'relatedProducts:\n  - modulo-ausente\n');

  const result = validateContentReferences(root);

  assert.deepEqual(result, [
    'productos/panel.md: relatedProducts[0] referencia productos/modulo-ausente, pero no existe',
  ]);
});

test('acepta referencias existentes entre colecciones', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'eci-content-refs-'));
  writeEntry(root, 'productos', 'panel', 'relatedServices:\n  - instalacion\n');
  writeEntry(root, 'servicios', 'instalacion');

  assert.deepEqual(validateContentReferences(root), []);
});

test('todas las referencias del contenido real tienen destino', () => {
  const root = path.resolve(import.meta.dirname, '../src/content');
  assert.deepEqual(validateContentReferences(root), []);
});
