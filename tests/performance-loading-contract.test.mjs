import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const categoryCardSource = fs.readFileSync(
  path.join(projectRoot, 'src/components/CategoryCard.astro'),
  'utf8',
);
const girosSource = fs.readFileSync(
  path.join(projectRoot, 'src/components/GirosQueLoNecesitan.astro'),
  'utf8',
);

test('CategoryCard permite forzar la estrategia de carga de su imagen', () => {
  assert.match(categoryCardSource, /loading\?:\s*['"]eager['"]\s*\|\s*['"]lazy['"]/);
  assert.match(
    categoryCardSource,
    /const imageLoading = loading \?\? \(priority \|\| index < 4 \? ['"]eager['"] : ['"]lazy['"]\)/,
  );
  assert.match(categoryCardSource, /loading=\{imageLoading\}/);
});

test('el directorio por giro carga todas sus imágenes fuera de pantalla en lazy', () => {
  const cards = [...girosSource.matchAll(/<CategoryCard[\s\S]*?\/>/g)].map(
    ([source]) => source,
  );

  assert.ok(cards.length >= 2, 'Se esperaban las fichas por giro y la ficha de cierre');
  for (const card of cards) {
    assert.match(card, /loading="lazy"/, `CategoryCard sin lazy explícito:\n${card}`);
  }
});
