import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const source = fs.readFileSync(
  path.resolve(import.meta.dirname, '../src/components/Header.astro'),
  'utf8',
);

test('el menú móvil mide el header antes de modificar el layout', () => {
  const setMenu = source.match(/const setMenu = \(isOpen: boolean\) => \{([\s\S]*?)\n {4}\}/)?.[1] ?? '';
  const measurement = setMenu.indexOf('getBoundingClientRect()');
  const layoutWrite = setMenu.indexOf('mobileNav.hidden = !isOpen');

  assert.ok(measurement >= 0, 'No se encontró la medición del header');
  assert.ok(layoutWrite >= 0, 'No se encontró el cambio de visibilidad del menú');
  assert.ok(measurement < layoutWrite, 'La lectura geométrica debe ocurrir antes de escribir en el layout');
});
