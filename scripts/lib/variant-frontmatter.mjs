import fs from 'node:fs';
import path from 'node:path';

const FRONTMATTER_BOUNDARY = /^---\s*$/;
const TOP_LEVEL_KEY = /^[A-Za-z_][\w-]*\s*:/;
const VARIANT_NAME = /^\s{2}-\s+nombre\s*:/;

export function parseProductFrontmatter(source) {
  const lines = source.split(/\r?\n/);
  const opening = lines.findIndex((line) => FRONTMATTER_BOUNDARY.test(line));
  if (opening === -1) return { hasVariants: false, variantCount: 0 };

  const closingOffset = lines.slice(opening + 1).findIndex((line) => FRONTMATTER_BOUNDARY.test(line));
  if (closingOffset === -1) return { hasVariants: false, variantCount: 0 };

  const frontmatter = lines.slice(opening + 1, opening + 1 + closingOffset);
  const start = frontmatter.findIndex((line) => /^variantes\s*:/.test(line));
  if (start === -1) return { hasVariants: false, variantCount: 0 };

  let variantCount = 0;
  for (const line of frontmatter.slice(start + 1)) {
    if (TOP_LEVEL_KEY.test(line)) break;
    if (VARIANT_NAME.test(line)) variantCount += 1;
  }

  return { hasVariants: true, variantCount };
}

export function auditProductVariants(productDir, exceptions = {}) {
  const files = fs.readdirSync(productDir)
    .filter((file) => file.endsWith('.md'))
    .sort();

  const products = [];
  const failures = [];

  for (const file of files) {
    const source = fs.readFileSync(path.join(productDir, file), 'utf8');
    const parsed = parseProductFrontmatter(source);
    const exception = exceptions[file];
    let status = 'PASS';
    let message = `${parsed.variantCount} variantes`;

    if (!parsed.hasVariants) {
      status = 'FAIL';
      message = 'sin bloque variantes; mínimo 5';
    } else if (parsed.variantCount < 5) {
      if (!exception) {
        status = 'FAIL';
        message = `${parsed.variantCount} variantes; mínimo 5`;
      } else if (exception.verifiedCount !== parsed.variantCount) {
        status = 'FAIL';
        message = `la excepción declara ${exception.verifiedCount}, pero el conteo ${parsed.variantCount} no coincide`;
      } else if (!exception.documentation) {
        status = 'FAIL';
        message = 'la excepción no tiene documentación';
      } else {
        status = 'EXCEPTION';
        message = `${parsed.variantCount} variantes verificadas; ${exception.documentation}`;
      }
    }

    const row = { file, ...parsed, status, message };
    products.push(row);
    if (status === 'FAIL') failures.push(row);
  }

  return { products, failures };
}
