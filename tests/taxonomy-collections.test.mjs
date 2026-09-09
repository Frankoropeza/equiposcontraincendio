// ============================================================================
// tests/taxonomy-collections.test.mjs — coherencia menú ↔ colecciones.
// ----------------------------------------------------------------------------
// POR QUÉ (auditoría 2026-09-09 · hallazgo NUEVO-3): las rutas /servicios/<id>
// y /cobertura/<slug> se generaban desde TAXONOMY (site.ts) mientras el
// contenido vivía en las colecciones `servicios` y `zonas`. Como los ids no
// coincidían con nada, el markdown NUNCA se renderizaba y las tres fichas de
// servicio caían al mismo texto genérico de plantilla — publicado en producción
// durante meses sin que nada fallara.
//
// Ahora las rutas salen de las colecciones y el menú sigue saliendo de TAXONOMY.
// Este test vigila que ambos lados sigan hablando de lo mismo: cada entrada del
// menú debe tener su archivo de contenido, y cada archivo debe estar en el menú.
// Si divergen, hay una página huérfana o una entrada de menú que lleva a un 404.
//
//   npm test
// ============================================================================
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE = fs.readFileSync(path.join(ROOT, 'src', 'config', 'site.ts'), 'utf8');

/** Slugs de una colección = nombres de archivo sin extensión. */
function collectionIds(name, ext = /\.mdx?$/) {
  const dir = path.join(ROOT, 'src', 'content', name);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => ext.test(f))
    .map((f) => f.replace(ext, ''))
    .sort();
}

/** Extrae los valores de una clave repetida dentro de un bloque de site.ts. */
function idsFromBlock(blockName, key) {
  const block = SITE.split(`${blockName}: [`)[1]?.split('],')[0] ?? '';
  return [...block.matchAll(new RegExp(`${key}:\\s*'([^']+)'`, 'g'))].map((m) => m[1]).sort();
}

test('TAXONOMY.services coincide con la colección `servicios`', () => {
  const menu = idsFromBlock('services', 'id');
  const files = collectionIds('servicios');
  assert.ok(menu.length > 0, 'No se pudo leer TAXONOMY.services de site.ts');

  const sinArchivo = menu.filter((id) => !files.includes(id));
  const sinMenu = files.filter((id) => !menu.includes(id));

  assert.deepEqual(sinArchivo, [], `Entradas del menú sin archivo en src/content/servicios/ (llevan a un 404): ${sinArchivo.join(', ')}`);
  assert.deepEqual(sinMenu, [], `Servicios con archivo pero fuera del menú (páginas huérfanas): ${sinMenu.join(', ')}`);
});

test('TAXONOMY.coverageStates coincide con la colección `zonas`', () => {
  const menu = idsFromBlock('coverageStates', 'slug');
  const files = collectionIds('zonas');
  assert.ok(menu.length > 0, 'No se pudo leer TAXONOMY.coverageStates de site.ts');

  const sinArchivo = menu.filter((id) => !files.includes(id));
  const sinMenu = files.filter((id) => !menu.includes(id));

  assert.deepEqual(sinArchivo, [], `Zonas del menú sin archivo en src/content/zonas/: ${sinArchivo.join(', ')}`);
  assert.deepEqual(sinMenu, [], `Zonas con archivo pero fuera del menú: ${sinMenu.join(', ')}`);
});

test('las categorías de producto del menú existen en el enum de content.config.ts', () => {
  const enumBlock = fs
    .readFileSync(path.join(ROOT, 'src', 'content.config.ts'), 'utf8')
    .split('PRODUCT_CATEGORIES = [')[1]
    ?.split(']')[0] ?? '';
  const validas = [...enumBlock.matchAll(/'([^']+)'/g)].map((m) => m[1]);
  const menu = idsFromBlock('categories', 'slug');

  const invalidas = menu.filter((slug) => !validas.includes(slug));
  assert.deepEqual(invalidas, [], `Categorías del menú que no existen en PRODUCT_CATEGORIES: ${invalidas.join(', ')}`);
});
