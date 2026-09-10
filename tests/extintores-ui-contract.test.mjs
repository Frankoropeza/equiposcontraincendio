import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const ROOT = path.resolve(import.meta.dirname, '..');

test('slugify conserva la equivalencia ASCII del subíndice ₂', async () => {
  const source = fs.readFileSync(path.join(ROOT, 'src/lib/slug.ts'), 'utf8');
  assert.match(source, /₂.*2/);
});

test('la L3 contiene los bloques y contratos del catálogo', () => {
  const page = fs.readFileSync(path.join(ROOT, 'src/pages/productos/extintores/index.astro'), 'utf8');
  const components = ['ExtintorCatalog.astro', 'UsoGrid.astro', 'BrandGrid.astro', 'DataTable.astro']
    .map((file) => fs.readFileSync(path.join(ROOT, 'src/components', file), 'utf8')).join('\n');
  const source = `${page}\n${components}`;
  for (const id of ['catalogo', 'por-negocio', 'marcas', 'mantenimiento']) {
    assert.match(source, new RegExp(`id=["']${id}["']`));
  }
  assert.match(page, /ExtintorCatalog/);
  assert.match(page, /UsoGrid/);
  assert.match(page, /BrandGrid/);
  assert.match(page, /DataTable/);
});
