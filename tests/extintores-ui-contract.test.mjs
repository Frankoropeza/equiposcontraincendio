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
  // 2026-09-10 · PATRÓN L3: el bloque «mantenimiento» se retiró (su contenido
  // vive en la L3 /servicios/mantenimiento/); entran la vitrina y las 3 tablas.
  for (const id of ['agentes', 'catalogo', 'por-negocio', 'comparativa', 'por-capacidad', 'portatil-o-ruedas', 'marcas']) {
    assert.match(source, new RegExp(`id=["']${id}["']`));
  }
  assert.match(page, /ExtintorCatalog/);
  assert.match(page, /UsoGrid/);
  assert.match(page, /BrandGrid/);
  assert.match(page, /DataTable/);
});

// ── Regla de cards (2026-09-10): 4 por fila y total en múltiplos de 4 ────────
// Vigila las L3 del PATRÓN L3 canónico: ninguna usa las variantes en retiro
// (--trio / --duo) y cada vitrina declara un número de fichas múltiplo de 4.
const L3 = [
  { page: 'src/pages/productos/extintores/index.astro', data: 'src/data/extintores.ts', list: 'extintoresTarjetas' },
  { page: 'src/pages/servicios/mantenimiento/index.astro', data: 'src/data/mantenimiento.ts', list: 'mantTarjetas' },
  { page: 'src/pages/servicios/prueba-hidrostatica/index.astro', data: 'src/data/prueba-hidrostatica.ts', list: 'phTarjetas' },
  { page: 'src/pages/servicios/inspeccion/index.astro', data: 'src/data/inspeccion.ts', list: 'inspTarjetas' },
  { page: 'src/pages/servicios/diagnostico-de-riesgo/index.astro', data: 'src/data/diagnostico-de-riesgo.ts', list: 'diagTarjetas' },
  { page: 'src/pages/servicios/capacitacion-dc3/index.astro', data: 'src/data/capacitacion-dc3.ts', list: 'capTarjetas' },
  { page: 'src/pages/servicios/gestion-documental/index.astro', data: 'src/data/gestion-documental.ts', list: 'docTarjetas' },
  { page: 'src/pages/servicios/instalacion/index.astro', data: 'src/data/instalacion.ts', list: 'instTarjetas' },
];

test('las L3 no usan retículas de 3 ni de 2 columnas', () => {
  for (const { page } of L3) {
    const source = fs.readFileSync(path.join(ROOT, page), 'utf8');
    assert.doesNotMatch(source, /card-grid--(trio|duo)/, `${page} usa una variante en retiro`);
  }
});

test('cada vitrina L3 tiene fichas en múltiplos de 4, con 3 specs cada una', () => {
  for (const { data, list } of L3) {
    const source = fs.readFileSync(path.join(ROOT, data), 'utf8');
    const start = source.indexOf(`export const ${list}`);
    assert.ok(start !== -1, `${data} no exporta ${list}`);
    const block = source.slice(start, source.indexOf('\n];', start));
    const fichas = (block.match(/ctaLabel:/g) ?? []).length;
    const specs = (block.match(/\{ label: '[^']+', value: '[^']+' \}/g) ?? []).length;
    assert.ok(fichas > 0 && fichas % 4 === 0, `${list}: ${fichas} fichas (debe ser múltiplo de 4)`);
    assert.equal(specs, fichas * 3, `${list}: cada ficha lleva exactamente 3 specs`);
  }
});

test('el catálogo completa su última fila con fichas de cierre, no con presentaciones', () => {
  const catalog = fs.readFileSync(path.join(ROOT, 'src/components/ExtintorCatalog.astro'), 'utf8');
  assert.match(catalog, /extCatalogoCierre/, 'el catálogo debe leer las fichas de cierre de @data');
  assert.match(catalog, /data-cierre/, 'las fichas de cierre se marcan con data-cierre');
  assert.match(catalog, /gridTemplateColumns/, 'las columnas se leen de la retícula real, sin duplicar breakpoints');
});
