import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const read = (file) => fs.readFileSync(path.resolve(file), 'utf8');

const accessoryPages = {
  'base-tripie-porta-extintor-piso': 1,
  'etiqueta-collarin-mantenimiento-extintor': 2,
  'gabinete-para-extintor-empotrado': 2,
  'refacciones-manometro-valvula-extintor': 5,
  'sello-seguridad-pin-extintor': 2,
  'soporte-vehicular-montacargas-extintor': 2,
  'tablero-brigada-emergencia-acrilico': 1,
};

function variantCount(source) {
  const block = source.match(/^variantes:\s*\n([\s\S]*?)(?=^[A-Za-z_][\w-]*:|^---$)/m)?.[1] ?? '';
  return (block.match(/^ {2}- nombre:/gm) ?? []).length;
}

test('las siete fichas de accesorios existen con imágenes dedicadas y alcance honesto', () => {
  for (const [slug, expectedVariants] of Object.entries(accessoryPages)) {
    const file = `src/content/productos/${slug}.md`;
    assert.equal(fs.existsSync(file), true, `Falta ${file}`);
    const source = read(file);

    assert.match(source, /^category: accesorios$/m, `${slug}: categoría incorrecta`);
    assert.match(source, new RegExp(`^image: /images/productos/${slug}\\.avif$`, 'm'));
    assert.equal(variantCount(source), expectedVariants, `${slug}: no inventar variantes para completar la retícula`);
  }
});

test('etiqueta, collarín, pin y sello se presentan como evidencia del servicio, no como venta suelta', () => {
  for (const slug of ['etiqueta-collarin-mantenimiento-extintor', 'sello-seguridad-pin-extintor']) {
    const source = read(`src/content/productos/${slug}.md`);
    assert.match(source, /^conversionMode: service$/m);
    assert.doesNotMatch(source, /^price:/m);
    assert.match(source, /no se (?:vende|cotiza|entrega)[^\n]*(?:suelta|separado|independiente)/i);
  }

  const refacciones = read('src/content/productos/refacciones-manometro-valvula-extintor.md');
  assert.match(refacciones, /^conversionMode: service$/m);
  assert.doesNotMatch(refacciones, /^price:/m);
  assert.match(refacciones, /no ofrece piezas sueltas/i);

  const schema = read('src/content.config.ts');
  const route = read('src/pages/productos/[...slug].astro');
  const layout = read('src/layouts/ProductLayout.astro');
  const showcase = read('src/components/ProductShowcase.astro');
  const variantCard = read('src/components/ProductVariantCard.astro');

  assert.match(schema, /conversionMode:\s*z\.enum\(\['quote', 'service'\]\)\.default\('quote'\)/);
  assert.match(route, /conversionMode=\{d\.conversionMode\}/);
  assert.match(layout, /conversionMode === 'service'/);
  assert.match(layout, /Solicitar mantenimiento/);
  assert.match(showcase, /ctaLabel/);
  assert.match(showcase, /statusLabel/);
  assert.match(variantCard, /ctaLabel/);
});

test('la L3 enlaza a las siete fichas y elimina autoanclas sin destino', () => {
  const l3 = read('src/content/l3/productos/accesorios.md');

  for (const slug of Object.keys(accessoryPages)) {
    assert.match(l3, new RegExp(`href: /productos/${slug}/`), `Falta enlace a ${slug}`);
  }
  assert.doesNotMatch(l3, /^\s+href: ['"]?#/m);
});

test('orden y etiquetas del catálogo incluyen las siete fichas nuevas', () => {
  const data = read('src/data/productos.ts');

  for (const slug of Object.keys(accessoryPages)) {
    assert.match(data, new RegExp(`'${slug}'`), `Falta ${slug} en productos.ts`);
    assert.match(data, new RegExp(`'${slug}': 'Accesorios'`), `Falta badge de ${slug}`);
  }
});
