#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { auditProductVariants } from './lib/variant-frontmatter.mjs';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const PRODUCT_DIR = path.join(ROOT, 'src', 'content', 'productos');

// Una excepción solo es válida cuando coincide con el conteo medido y apunta al
// expediente que explica las fuentes revisadas y por qué se agotó el eje real.
const DOCUMENTED_EXCEPTIONS = {
  'extintor-clase-k.md': {
    verifiedCount: 3,
    documentation: 'docs/expedientes-variantes.md#excepción-extintor-clase-k',
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
