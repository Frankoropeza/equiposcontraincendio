import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const files = [
  'src/content.config.ts',
  'src/data/ficha-schema.ts',
  'src/data/l3-schema.ts',
];

test('Zod se importa desde astro/zod y no desde astro:content', () => {
  const offenders = files.filter((file) => {
    const source = fs.readFileSync(path.join(root, file), 'utf8');
    return /import\s*\{[^}]*\bz\b[^}]*\}\s*from\s*['"]astro:content['"]/.test(source);
  });

  assert.deepEqual(offenders, []);
});

test('los formatos URL usan la API superior de Zod 4', () => {
  const source = files.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n');
  assert.doesNotMatch(source, /z\.string\(\)\.url\(/);
});
