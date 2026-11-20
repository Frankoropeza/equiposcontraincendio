#!/usr/bin/env node
// ============================================================================
// scripts/text-parity.mjs — paridad de texto entre dos `dist/`.
// ----------------------------------------------------------------------------
// POR QUÉ EXISTE: el build verde NO es el gate de un refactor de contenido.
// Precedente INFLABLEE (2026-11-20): Codex pasó build + `astro check` 0/0/0 +
// 42 rutas correctas mientras había borrado 11 paquetes publicados, sustituido
// el copy SEO único de 10 páginas por copy genérico y quitado 6 tarjetas. Nada
// de eso lo ve un compilador: solo se ve comparando el texto servido.
//
// USO:
//   node scripts/text-parity.mjs <dist-antes> [dist-despues]
//   node scripts/text-parity.mjs /tmp/eci-dist-base dist
//
// QUÉ COMPARA: el texto visible de cada página (sin <script>, <style>, <svg>
// ni comentarios), partido en frases. Reporta por página las frases ausentes y
// las nuevas, además de las rutas que desaparecieron o aparecieron.
//
// SALIDA: código 1 si hay frases ausentes o rutas perdidas (lo que rompe), 0
// si solo hay añadidos. Crecer está bien; perder texto publicado hay que
// justificarlo.
// ============================================================================
import fs from 'node:fs';
import path from 'node:path';

const [beforeDir, afterDir = 'dist'] = process.argv.slice(2);
if (!beforeDir) {
  console.error('uso: node scripts/text-parity.mjs <dist-antes> [dist-despues]');
  process.exit(2);
}

/** Rutas relativas de todos los .html de un dist. */
function pages(root) {
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const f = path.join(dir, e.name);
      if (e.isDirectory()) walk(f);
      else if (e.name.endsWith('.html')) out.push(path.relative(root, f));
    }
  };
  walk(root);
  return out.sort();
}

/** Texto visible de un HTML, en frases normalizadas. */
function phrases(file) {
  let html = fs.readFileSync(file, 'utf8');
  html = html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<(script|style|svg|noscript)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
  const text = html
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
  return new Set(
    text
      .split(/(?<=[.!?:;])\s+|\s+·\s+|\s+—\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length >= 25),
  );
}

const before = pages(beforeDir);
const after = pages(afterDir);
const gone = before.filter((p) => !after.includes(p));
const added = after.filter((p) => !before.includes(p));

let missingTotal = 0;
let newTotal = 0;
const report = [];

for (const rel of before) {
  if (!after.includes(rel)) continue;
  const a = phrases(path.join(beforeDir, rel));
  const b = phrases(path.join(afterDir, rel));
  const missing = [...a].filter((s) => !b.has(s));
  const fresh = [...b].filter((s) => !a.has(s));
  missingTotal += missing.length;
  newTotal += fresh.length;
  if (missing.length || fresh.length) report.push({ rel, missing, fresh });
}

console.log(`text-parity · ${beforeDir} → ${afterDir}`);
console.log('─'.repeat(100));
console.log(`${before.length} páginas antes · ${after.length} después · ${gone.length} perdidas · ${added.length} nuevas`);
if (gone.length) console.log(`\nRUTAS PERDIDAS:\n  ${gone.join('\n  ')}`);
if (added.length) console.log(`\nRUTAS NUEVAS:\n  ${added.slice(0, 40).join('\n  ')}${added.length > 40 ? `\n  …y ${added.length - 40} más` : ''}`);

for (const { rel, missing, fresh } of report) {
  console.log(`\n${rel}  −${missing.length} +${fresh.length}`);
  for (const s of missing.slice(0, 6)) console.log(`  − ${s.slice(0, 160)}`);
  if (missing.length > 6) console.log(`  − …y ${missing.length - 6} frases ausentes más`);
  for (const s of fresh.slice(0, 3)) console.log(`  + ${s.slice(0, 160)}`);
  if (fresh.length > 3) console.log(`  + …y ${fresh.length - 3} frases nuevas más`);
}

console.log('\n' + '─'.repeat(100));
console.log(`${missingTotal} frases ausentes · ${newTotal} frases nuevas · ${report.length} páginas con cambios`);
if (missingTotal || gone.length) {
  console.log('✗ text-parity — hay texto publicado que desapareció. Justifícalo o recupéralo.');
  process.exit(1);
}
console.log('✓ text-parity — no se perdió texto publicado.');
