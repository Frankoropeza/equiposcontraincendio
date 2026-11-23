import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { pathToFileURL } from 'node:url';

const modulePath = path.resolve('scripts/lib/variant-frontmatter.mjs');

async function loadSubject() {
  if (!fs.existsSync(modulePath)) {
    assert.fail('Falta scripts/lib/variant-frontmatter.mjs');
  }
  return import(`${pathToFileURL(modulePath).href}?test=${Date.now()}`);
}

const product = (names) => `---
title: "Familia de producto verificable"
description: "Descripción suficientemente larga para representar una ficha válida del catálogo."
category: accesorios
image: /images/productos/familia.svg
variantes:
${names.map((name) => `  - nombre: "${name}"
    desc: "Descripción suficientemente larga para distinguir esta presentación de las demás."
    specs: "Tipo real · Aplicación concreta"
    waText: "Hola, necesito cotizar ${name} en CDMX"`).join('\n')}
---

Contenido.
`;

test('parseProductFrontmatter cuenta únicamente las variantes del bloque YAML', async () => {
  const { parseProductFrontmatter } = await loadSubject();
  const parsed = parseProductFrontmatter(product(['Uno real', 'Dos real', 'Tres real', 'Cuatro real', 'Cinco real']));

  assert.equal(parsed.hasVariants, true);
  assert.equal(parsed.variantCount, 5);
});

test('parseProductFrontmatter informa cuando el bloque variantes no existe', async () => {
  const { parseProductFrontmatter } = await loadSubject();
  const parsed = parseProductFrontmatter(`---\ntitle: "Sin variantes"\n---\n`);

  assert.equal(parsed.hasVariants, false);
  assert.equal(parsed.variantCount, 0);
});

test('auditProductVariants admite una presentación real sin exigir relleno', async () => {
  const { auditProductVariants } = await loadSubject();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'variant-audit-'));
  fs.writeFileSync(path.join(dir, 'unico.md'), product(['Presentación única']));
  const result = auditProductVariants(dir);
  assert.equal(result.failures.length, 0);
  assert.equal(result.products[0].status, 'PASS');
});

test('auditProductVariants rechaza un bloque vacío', async () => {
  const { auditProductVariants } = await loadSubject();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'variant-empty-'));
  fs.writeFileSync(path.join(dir, 'vacio.md'), product([]));
  const result = auditProductVariants(dir);
  assert.equal(result.failures.length, 1);
  assert.match(result.failures[0].message, /al menos una presentación/);
});

test('auditProductVariants rechaza una ficha sin presentaciones', async () => {
  const { auditProductVariants } = await loadSubject();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'variant-missing-'));
  fs.writeFileSync(path.join(dir, 'sin.md'), '---\ntitle: Sin presentaciones\n---\n');
  const result = auditProductVariants(dir);
  assert.equal(result.failures.length, 1);
  assert.match(result.failures[0].message, /sin bloque variantes/);
});
