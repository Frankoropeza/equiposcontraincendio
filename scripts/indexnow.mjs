#!/usr/bin/env node
// ============================================================================
// scripts/indexnow.mjs — avisa a IndexNow (Bing, Copilot, Yandex, Seznam…) de
// las URLs del sitemap. Correr DESPUÉS de un deploy verificado:
//   node scripts/indexnow.mjs            → envía todas las URLs del sitemap de dist/
//   node scripts/indexnow.mjs --dry-run  → solo muestra qué enviaría
// La clave es el archivo public/<32 hex>.txt (su contenido = su nombre). El
// generador crea una clave nueva por sitio. Sin clave → no hace nada.
// Docs: https://www.indexnow.org/documentation
// ============================================================================
import fs from 'node:fs';
import path from 'node:path';

const dry = process.argv.includes('--dry-run');
const keyFile = fs.readdirSync('public').find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) { console.log('indexnow — sin clave en public/, nada que enviar.'); process.exit(0); }
const key = keyFile.replace(/\.txt$/, '');

const sitemaps = fs.readdirSync('dist').filter((f) => /^sitemap-\d+\.xml$/.test(f));
const urls = sitemaps.flatMap((f) =>
  [...fs.readFileSync(path.join('dist', f), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
if (!urls.length) { console.error('✗ indexnow — no hay URLs en dist/sitemap-*.xml (¿corriste el build?)'); process.exit(1); }
const host = new URL(urls[0]).host;

const body = { host, key, keyLocation: `https://${host}/${keyFile}`, urlList: urls.slice(0, 10000) };
if (dry) { console.log(`indexnow (dry-run) — ${urls.length} URL(s) de ${host}, clave ${keyFile}`); process.exit(0); }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});
// 200 = aceptado · 202 = aceptado, clave pendiente de validar.
if (res.status === 200 || res.status === 202) console.log(`✓ indexnow — ${urls.length} URL(s) enviadas (HTTP ${res.status}).`);
else { console.error(`✗ indexnow — HTTP ${res.status}: ${await res.text()}`); process.exit(1); }
