#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { auditProductVariants } from './lib/variant-frontmatter.mjs';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const PRODUCT_DIR = path.join(ROOT, 'src', 'content', 'productos');

// Una excepción solo es válida cuando coincide con el conteo medido y apunta al
// expediente que explica las fuentes revisadas y por qué se agotó el eje real.
//
// 2026-11-19 (auditoría): el puntero anterior era
// `docs/expedientes-variantes.md#excepción-extintor-clase-k`, un archivo que
// NUNCA existió en el repo — `/docs/` está en .gitignore por la regla de
// mantener la documentación fuera del repo, y este script no valida que el
// destino exista. El expediente vive donde debe, en el vault:
const DOCUMENTED_EXCEPTIONS = {
  'extintor-clase-k.md': {
    verifiedCount: 3,
    documentation: 'PROJECTS/04-SEO/ECI-Expediente-Variantes-ExtintorClaseK-2026-11-19.md',
  },
  // T4b: el conteo refleja únicamente las presentaciones que constan en el
  // contenido editorial o en el activo aprobado. No se rellenan retículas con
  // capacidades, materiales ni compatibilidades no verificadas.
  'base-tripie-porta-extintor-piso.md': {
    verifiedCount: 1,
    documentation: 'public/images/productos/base-tripie-porta-extintor-piso.avif',
  },
  'etiqueta-collarin-mantenimiento-extintor.md': {
    verifiedCount: 2,
    documentation: 'src/content/l3/productos/accesorios.md (Etiqueta y collarín)',
  },
  'gabinete-para-extintor-empotrado.md': {
    verifiedCount: 2,
    documentation: 'src/content/productos/soportes-accesorios-extintor.md (gabinetes)',
  },
  'sello-seguridad-pin-extintor.md': {
    verifiedCount: 2,
    documentation: 'src/content/l3/productos/accesorios.md (Seguro y marchamo)',
  },
  'soporte-vehicular-montacargas-extintor.md': {
    verifiedCount: 2,
    documentation: 'src/content/productos/soportes-accesorios-extintor.md (soportes vehiculares)',
  },
  'tablero-brigada-emergencia-acrilico.md': {
    verifiedCount: 1,
    documentation: 'public/images/productos/tablero-brigada-emergencia-acrilico.avif',
  },
};

const result = auditProductVariants(PRODUCT_DIR, DOCUMENTED_EXCEPTIONS);

console.log('check:variants · mínimo 5 variantes verificadas por producto');
console.log('─'.repeat(90));
for (const product of result.products) {
  console.log(`${product.status.padEnd(9)} ${product.file.padEnd(48)} ${product.message}`);
}
console.log('─'.repeat(90));
console.log(`${result.products.length} productos · ${result.failures.length} incumplimientos`);

if (result.failures.length > 0) process.exit(1);
console.log('✓ check:variants — catálogo completo o excepciones documentadas.');
