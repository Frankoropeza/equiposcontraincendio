import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const read = (file) => fs.readFileSync(path.resolve(file), 'utf8');

test('el schema de productos declara el contrato estricto de variantes', () => {
  const schema = read('src/content.config.ts');

  assert.match(schema, /variantes:\s*z\s*\.array\(/);
  assert.match(schema, /nombre:\s*z\.string\(\)\.min\(5\)\.max\(80\)/);
  assert.match(schema, /badge:\s*z\.string\(\)\.max\(30\)\.optional\(\)/);
  assert.match(schema, /desc:\s*z\.string\(\)\.min\(50\)\.max\(300\)/);
  assert.match(schema, /specs:\s*z\.string\(\)\.min\(20\)\.max\(200\)/);
  assert.match(schema, /imagen:\s*imagePath\.optional\(\)/);
  assert.match(schema, /waText:\s*z\.string\(\)\.min\(20\)/);
});

test('el render de variantes evita repetir la imagen de ficha y conserva waUrl sin JavaScript cliente', () => {
  const file = 'src/layouts/ProductLayout.astro';
  assert.equal(fs.existsSync(file), true, `Falta ${file}`);
  const component = read(file);
  const card = read('src/components/ExtintorCard.astro');
  const genericCard = read('src/components/ProductVariantCard.astro');

  assert.match(component, /<ExtintorCard[\s\S]*showFicha=\{false\}/);
  // La imagen de la ficha ya vive en la vitrina; repetirla en cada card dispara su alto.
  assert.doesNotMatch(component, /variante\.imagen\s*\?\?\s*image/);
  assert.doesNotMatch(genericCard, /imagen\s*\?\?\s*image/);
  assert.match(card, /waUrl\(item\.waText\)/);
  assert.doesNotMatch(component, /<script(?:\s|>)/);
});

test('la página dinámica entrega variantes al layout solo cuando hay variantes', () => {
  const detail = read('src/pages/productos/[...slug].astro');

  assert.match(detail, /variantes=\{d\.variantes \?\? \[\]\}/);
});

test('los extintores usan slugs de familia y conservan redirects 301', () => {
  const canonical = ['extintor-pqs.md', 'extintor-co2.md', 'extintor-clase-k.md'];
  const old = ['extintor-pqs-6kg.md', 'extintor-co2-45kg.md', 'extintor-clase-k-6l.md'];
  for (const file of canonical) assert.equal(fs.existsSync(path.join('src/content/productos', file)), true, `Falta ${file}`);
  for (const file of old) assert.equal(fs.existsSync(path.join('src/content/productos', file)), false, `Slug antiguo aún activo: ${file}`);

  const redirects = read('public/_redirects');
  assert.match(redirects, /^\/productos\/extintor-pqs-6kg \/productos\/extintor-pqs 301$/m);
  assert.match(redirects, /^\/productos\/extintor-co2-45kg \/productos\/extintor-co2 301$/m);
  assert.match(redirects, /^\/productos\/extintor-clase-k-6l \/productos\/extintor-clase-k 301$/m);
});
