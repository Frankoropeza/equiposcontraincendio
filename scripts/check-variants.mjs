#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { auditProductVariants } from './lib/variant-frontmatter.mjs';

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const PRODUCT_DIR = path.join(ROOT, 'src', 'content', 'productos');

// El surtido determina la cantidad de presentaciones; no se exige relleno.
// La veracidad técnica se revisa con la documentación del modelo, no por conteo.
const result = auditProductVariants(PRODUCT_DIR);

console.log('check:variants · al menos una presentación por producto');
console.log('─'.repeat(90));
for (const product of result.products) {
  console.log(`${product.status.padEnd(9)} ${product.file.padEnd(48)} ${product.message}`);
}
console.log('─'.repeat(90));
console.log(`${result.products.length} productos · ${result.failures.length} incumplimientos`);

if (result.failures.length > 0) process.exit(1);
console.log('✓ check:variants — todas las fichas tienen presentaciones; este control no certifica sus datos técnicos.');
