import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import YAML from 'yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const readFrontmatter = (file) => {
  const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(match, `${file} no contiene frontmatter`);
  return YAML.parse(match[1]);
};

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
  { page: 'src/pages/productos/extintores/index.astro', content: 'src/content/l3/productos/extintores.md' },
  { page: 'src/pages/productos/deteccion-alarmas/index.astro', content: 'src/content/l3/productos/deteccion-alarmas.md' },
  { page: 'src/pages/productos/hidrantes-mangueras/index.astro', content: 'src/content/l3/productos/hidrantes-mangueras.md' },
  { page: 'src/pages/productos/senalizacion/index.astro', content: 'src/content/l3/productos/senalizacion.md' },
  { page: 'src/pages/productos/accesorios/index.astro', content: 'src/content/l3/productos/accesorios.md' },
  { page: 'src/pages/servicios/mantenimiento/index.astro', content: 'src/content/l3/servicios/mantenimiento.md' },
  { page: 'src/pages/servicios/prueba-hidrostatica/index.astro', content: 'src/content/l3/servicios/prueba-hidrostatica.md' },
  { page: 'src/pages/servicios/inspeccion/index.astro', content: 'src/content/l3/servicios/inspeccion.md' },
  { page: 'src/pages/servicios/diagnostico-de-riesgo/index.astro', content: 'src/content/l3/servicios/diagnostico-de-riesgo.md' },
  { page: 'src/pages/servicios/capacitacion-dc3/index.astro', content: 'src/content/l3/servicios/capacitacion-dc3.md' },
  { page: 'src/pages/servicios/gestion-documental/index.astro', content: 'src/content/l3/servicios/gestion-documental.md' },
  { page: 'src/pages/servicios/instalacion/index.astro', content: 'src/content/l3/servicios/instalacion.md' },
];

test('las L3 no usan retículas de 3 ni de 2 columnas', () => {
  for (const { page } of L3) {
    const source = fs.readFileSync(path.join(ROOT, page), 'utf8');
    assert.doesNotMatch(source, /card-grid--(trio|duo)/, `${page} usa una variante en retiro`);
  }
});

test('cada vitrina L3 tiene fichas en múltiplos de 4, con 3 specs cada una', () => {
  for (const { data, list, content } of L3) {
    if (content) {
      const frontmatter = readFrontmatter(content);
      const fichas = frontmatter.vitrina?.tarjetas ?? frontmatter.tarjetas;
      assert.ok(fichas.length > 0 && fichas.length % 4 === 0, `${content}: ${fichas.length} fichas (debe ser múltiplo de 4)`);
      assert.ok(fichas.every(({ specs }) => specs.length === 3), `${content}: cada ficha lleva exactamente 3 specs`);
      continue;
    }
  }
});

test('el catálogo completa su última fila con fichas de cierre, no con presentaciones', () => {
  const catalog = fs.readFileSync(path.join(ROOT, 'src/components/ExtintorCatalog.astro'), 'utf8');
  assert.match(catalog, /extCatalogoCierre/, 'el catálogo debe leer las fichas de cierre de @data');
  assert.match(catalog, /data-cierre/, 'las fichas de cierre se marcan con data-cierre');
  assert.match(catalog, /gridTemplateColumns/, 'las columnas se leen de la retícula real, sin duplicar breakpoints');
});

test('las fichas de cierre exportadas cumplen el contrato de retícula', () => {
  const cierre = fs.readFileSync(path.join(ROOT, 'src/data/cierre.ts'), 'utf8');
  assert.match(cierre, /export const cierreExtintores/);
  assert.match(cierre, /export const cierreGeneral/);
  assert.match(cierre, /export const cierrePlantillas/);
  assert.match(cierre, /export const cierreCobertura/);
  assert.match(cierre, /export const cierreProteccionCivil/);
  assert.match(cierre, /export function faltanParaCuatro/);

  const sources = [
    cierre,
    fs.readFileSync(path.join(ROOT, 'src/data/extintores-catalogo.ts'), 'utf8'),
  ].join('\n');
  const fichas = [...sources.matchAll(/\{\s*\n\s*badge:.*?\n\s*title: '([^']+)'[\s\S]*?description: '([^']+)'[\s\S]*?ctaLabel: '([^']+)'[\s\S]*?\n\s*\},/g)];
  assert.ok(fichas.length >= 12, 'debe haber fichas de cierre para todas las retículas');
  for (const [, title, description, ctaLabel] of fichas) {
    assert.ok(title.length <= 40, `título demasiado largo: ${title}`);
    assert.ok(description.length <= 85, `descripción demasiado larga: ${description}`);
    assert.ok(ctaLabel.length <= 24, `CTA demasiado largo: ${ctaLabel}`);
  }
});

test('src no conserva variantes de retícula ni animaciones prohibidas', () => {
  const files = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(astro|css)$/.test(entry.name)) files.push(full);
    }
  };
  walk(path.join(ROOT, 'src'));
  const source = files.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
  assert.doesNotMatch(source, /card-grid--(?:trio|duo)/);
  assert.doesNotMatch(source, /@keyframes|animation\s*:|behavior\s*:\s*['"]smooth['"]/);
});

test('las transiciones quedan limitadas a controles y enlaces accionables', () => {
  const files = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(astro|css)$/.test(entry.name)) files.push(full);
    }
  };
  walk(path.join(ROOT, 'src'));
  // Se permiten únicamente botones: clases btn/CTA, <button> (burger, trigger del
  // menú móvil, «subir» del footer) y enlaces
  // cuyo contrato ya está marcado con `__link`; las tarjetas deben ser estáticas.
  const rule = /([^{}]+)\{[^{}]*(?<!-)transition\s*:/gs;
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(rule)) {
      const selector = match[1].replace(/\/\*[\s\S]*?\*\//g, ' ').trim();
      assert.match(selector, /btn|cta|button|burger|trigger|__top|__link/i, `${file}: transición fuera de un control o enlace`);
    }
  }
});

test('ProcessSteps y todos sus datos usan ocho pasos con textos acotados', () => {
  const component = fs.readFileSync(path.join(ROOT, 'src/components/ProcessSteps.astro'), 'utf8');
  assert.match(component, /steps\.length\s*%\s*4/);
  assert.match(component, /repeat\(4/);

  const dataFiles = [
    ['src/data/home.ts', 'homeSteps'],
    ['src/data/servicios.ts', 'serviciosSteps'],
    ['src/data/productos.ts', 'productosSteps'],
    ['src/data/cobertura.ts', 'coberturaSteps'],
    ['src/data/herramientas.ts', 'herramientasSteps'],
    ['src/data/plantillas.ts', 'plantillasSteps'],
    ['src/data/proteccion-civil.ts', 'pcSteps'],
    ['src/content/l3/productos/extintores.md', 'extintoresL3'],
    ['src/content/l3/servicios/mantenimiento.md', 'mantenimientoL3'],
  ];
  for (const [file, name] of dataFiles) {
    if (file.endsWith('.md')) {
      const frontmatter = readFrontmatter(file);
      const steps = frontmatter.proceso?.steps ?? frontmatter.steps;
      assert.equal(steps.length, 8, `${name}: debe tener 8 pasos`);
      for (const { title, desc } of steps) {
        assert.ok(title.length <= 30, `${name}: título demasiado largo: ${title}`);
        assert.ok(desc.length <= 110, `${name}: descripción demasiado larga: ${desc}`);
      }
      continue;
    }
    const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const start = source.indexOf(`export const ${name}`);
    assert.ok(start !== -1, `${file} no exporta ${name}`);
    const end = source.indexOf('\n];', start);
    const block = source.slice(start, end === -1 ? source.length : end);
    const steps = [...block.matchAll(/num:\s*['"]\d+['"],\s*title:\s*['"]([^'"]+)['"],\s*desc:\s*['"]([^'"]+)['"]/g)];
    assert.equal(steps.length, 8, `${name}: debe tener 8 pasos`);
    for (const [, title, desc] of steps) {
      assert.ok(title.length <= 30, `${name}: título demasiado largo: ${title}`);
      assert.ok(desc.length <= 110, `${name}: descripción demasiado larga: ${desc}`);
    }
  }

  for (const file of [
    'prueba-hidrostatica.md',
    'inspeccion.md',
    'diagnostico-de-riesgo.md',
    'capacitacion-dc3.md',
    'gestion-documental.md',
    'instalacion.md',
  ]) {
    const steps = readFrontmatter(`src/content/l3/servicios/${file}`).proceso.steps;
    assert.equal(steps.length, 8, `${file}: proceso debe tener 8 pasos`);
    for (const { title, desc } of steps) {
      assert.ok(title.length <= 30, `${file}: título demasiado largo: ${title}`);
      assert.ok(desc.length <= 110, `${file}: descripción demasiado larga: ${desc}`);
    }
  }

  for (const file of [
    'acta-simulacro-evacuacion.md',
    'bitacora-revision-extintores.md',
    'censo-brigada-emergencia.md',
  ]) {
    const source = fs.readFileSync(path.join(ROOT, 'src/content/plantillas', file), 'utf8');
    const block = source.slice(source.indexOf('steps:'), source.indexOf('seoTitle:'));
    const steps = [...block.matchAll(/^\s*-\s*"([^"]+)"/gm)];
    assert.equal(steps.length, 8, `${file}: debe tener 8 pasos`);
    for (const [, step] of steps) {
      const [title] = step.split(':', 1);
      assert.ok(title.length <= 30, `${file}: título demasiado largo: ${title}`);
      assert.ok(step.length <= 110, `${file}: descripción demasiado larga: ${step}`);
    }
  }
});

test('el archivo del blog usa la retícula global y completa filas de cuatro', () => {
  const archive = fs.readFileSync(path.join(ROOT, 'src/components/BlogArchive.astro'), 'utf8');
  assert.match(archive, /card-grid/);
  assert.match(archive, /cierreGeneral/);
  assert.match(archive, /faltanParaCuatro/);
  const site = fs.readFileSync(path.join(ROOT, 'src/config/site.ts'), 'utf8');
  const pageSize = Number(site.match(/BLOG_PAGE_SIZE\s*=\s*(\d+)/)?.[1]);
  assert.ok(pageSize > 0 && pageSize % 4 === 0, 'BLOG_PAGE_SIZE debe ser múltiplo de 4');
});
