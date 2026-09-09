#!/usr/bin/env node
// check-demo.mjs — Gate de datos placeholder/demo (compuerta predeploy).
// Escanea SOLO los archivos que cargan datos del negocio (SSoT + contenido),
// no el código del motor. Falla (exit 1) si hay placeholders que no deben
// llegar a producción. Origen: docs/guias/05-fabrica «compuertas predeploy».
//
// ── REVISIÓN 2026-09-09 (auditoría · hallazgo P0-2) ──────────────────────────
// La versión anterior daba VERDE EN FALSO: sus centinelas no cubrían el
// placeholder realmente publicado. `/52550{6,}/` exige seis ceros seguidos y el
// número en producción era `525512345678`; no había patrón para `1234 5678` ni
// para `+5255…`. Resultado: el sitio salió a producción con teléfono y WhatsApp
// de ejemplo y el build imprimía «Listo para publicar».
//
// Dos capas ahora:
//   1) CENTINELAS (negativos)  — patrones de texto que no deben aparecer.
//   2) CONTRATO DEL NAP (positivo) — el teléfono/WhatsApp/email/CP de
//      `src/config/site.ts` deben tener FORMA válida, ser COHERENTES entre sí
//      y no estar en la lista negra de números de ejemplo. Un centinela sólo
//      atrapa lo que alguien previó; el contrato atrapa cualquier placeholder.
// ────────────────────────────────────────────────────────────────────────────
import fs from 'node:fs';
import path from 'node:path';

const CONFIG = 'src/config/site.ts';
const TARGETS = [CONFIG, 'src/content'];

// ── 1) CENTINELAS ────────────────────────────────────────────────────────────
// Aplican a TODOS los archivos escaneados. Se evita cualquier patrón que pueda
// aparecer en prosa legítima (p. ej. «reemplazo de mangueras» en un servicio).
const SENTINELS = [
  [/TODO/,                    'marcador TODO'],
  [/0000\s?0000/,             'teléfono placeholder'],
  [/\b1234\s?5678\b/,         'teléfono placeholder (1234 5678)'],
  [/\+?52\s?55\s?1234\s?5678/,'teléfono placeholder E.164 (+525512345678)'],
  [/5512345678/,              'teléfono/WhatsApp placeholder (5512345678)'],
  [/52550{6,}/,               'WhatsApp placeholder'],
  [/wa\.me\/\D/,              'enlace de WhatsApp sin número'],
  [/\b00000\b/,               'código postal placeholder'],
  [/Av\.\s?Demo/i,            'dirección demo'],
  [/ejemplos?\.mx/i,          'dominio plantilla'],
  [/plantilla-gu[ií]a/i,      'texto plantilla-guía'],
  [/DEMO de la plantilla/i,   'texto DEMO'],
  [/lorem ipsum/i,            'texto lorem ipsum'],
  [/tu-?dominio|midominio|example\.com/i, 'dominio de ejemplo'],
];

function files(t, acc = []) {
  if (!fs.existsSync(t)) return acc;
  const st = fs.statSync(t);
  if (st.isFile()) { acc.push(t); return acc; }
  for (const e of fs.readdirSync(t, { withFileTypes: true })) {
    const p = path.join(t, e.name);
    if (e.isDirectory()) files(p, acc);
    else if (/\.(ts|md|mdx)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

const hits = [];
for (const t of TARGETS)
  for (const f of files(t)) {
    fs.readFileSync(f, 'utf8').split('\n').forEach((ln, i) => {
      // Los comentarios del archivo de configuración documentan el propio
      // placeholder; lo que importa es el VALOR, que valida el contrato de abajo.
      const code = ln.replace(/\/\/.*$/, '');
      for (const [re, label] of SENTINELS)
        if (re.test(code)) hits.push({ f, n: i + 1, label, text: ln.trim().slice(0, 90) });
    });
  }

// ── 2) CONTRATO DEL NAP ──────────────────────────────────────────────────────
// Números de ejemplo conocidos (10 dígitos nacionales, sin lada país).
const DENY_PHONES = new Set([
  '5512345678', '5500000000', '5555555555', '1234567890', '0000000000',
  '5599999999', '5511111111',
]);
const digits = (s) => (s ?? '').replace(/\D/g, '');

/** Extrae `clave: 'valor'` del bloque de código de site.ts (ignora comentarios). */
function readField(src, key) {
  const re = new RegExp(`^\\s*${key}\\s*:\\s*['"\`]([^'"\`]*)['"\`]`, 'm');
  const m = src.replace(/\/\/.*$/gm, '').match(re);
  return m ? m[1] : null;
}

const nap = [];
if (fs.existsSync(CONFIG)) {
  const src = fs.readFileSync(CONFIG, 'utf8');
  const phone     = readField(src, 'phone');
  const phoneE164 = readField(src, 'phoneE164');
  const phoneRaw  = readField(src, 'phoneRaw');
  const whatsapp  = readField(src, 'whatsapp');
  const email     = readField(src, 'email');
  const postal    = readField(src, 'postalCode');

  const fail = (m) => nap.push(m);

  if (!phone) fail('CONTACT.phone no se pudo leer de site.ts.');
  if (!phoneE164) fail('CONTACT.phoneE164 no se pudo leer de site.ts.');
  if (!whatsapp) fail('CONTACT.whatsapp no se pudo leer de site.ts.');

  const nat = digits(phone);                      // 10 dígitos nacionales
  if (phone && nat.length !== 10) fail(`CONTACT.phone debe tener 10 dígitos nacionales (tiene ${nat.length}: "${phone}").`);
  if (nat && DENY_PHONES.has(nat)) fail(`CONTACT.phone es un número de EJEMPLO (${phone}). Pon el teléfono real del negocio.`);
  if (nat && /^(\d)\1{9}$/.test(nat)) fail(`CONTACT.phone es un número inválido (dígito repetido): ${phone}.`);

  if (phoneE164 && !/^\+52\d{10}$/.test(phoneE164)) fail(`CONTACT.phoneE164 debe ser +52 + 10 dígitos (es "${phoneE164}").`);
  if (phoneRaw && phoneRaw !== phoneE164) fail(`CONTACT.phoneRaw ("${phoneRaw}") debe ser idéntico a phoneE164 ("${phoneE164}").`);
  if (whatsapp && !/^52\d{10}$/.test(whatsapp)) fail(`CONTACT.whatsapp debe ser 52 + 10 dígitos, sin "+" (es "${whatsapp}").`);

  // Coherencia NAP: los tres campos describen el MISMO número.
  if (nat.length === 10) {
    if (phoneE164 && phoneE164 !== `+52${nat}`) fail(`Incoherencia NAP: phoneE164 ("${phoneE164}") no corresponde a phone ("${phone}").`);
    if (whatsapp && digits(whatsapp) !== `52${nat}`) fail(`Incoherencia NAP: whatsapp ("${whatsapp}") no corresponde a phone ("${phone}"). Si el WhatsApp es OTRA línea, documenta la excepción aquí.`);
  }
  if (whatsapp && DENY_PHONES.has(digits(whatsapp).replace(/^52/, ''))) fail(`CONTACT.whatsapp es un número de EJEMPLO (${whatsapp}).`);

  if (!email || !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) fail(`CONTACT.email inválido o ausente ("${email ?? ''}").`);
  if (postal && !/^\d{5}$/.test(postal)) fail(`CONTACT.postalCode debe tener 5 dígitos (es "${postal}").`);
}

// ── Salida ───────────────────────────────────────────────────────────────────
if (!hits.length && !nap.length) {
  console.log('✓ check:demo — sin datos placeholder y NAP coherente. Listo para publicar.');
  process.exit(0);
}

if (hits.length) {
  console.error(`✗ check:demo — ${hits.length} marcador(es) pendiente(s) en datos del negocio:\n`);
  for (const h of hits) console.error(`  ${h.f}:${h.n}  [${h.label}]  ${h.text}`);
}
if (nap.length) {
  console.error(`\n✗ check:demo — el NAP de ${CONFIG} no cumple el contrato:\n`);
  for (const m of nap) console.error(`  · ${m}`);
}
console.error('\nCorrige los puntos anteriores (NAP real, dominio, contenido) y re-corre `npm run check:demo`.');
process.exit(1);
