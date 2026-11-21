#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

import { extractJsonLd, findProductOfferIssues } from './lib/schema-audit.mjs';

const dist = path.resolve(import.meta.dirname, '../dist');

function walk(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file, files);
    else if (entry.name.endsWith('.html')) files.push(file);
  }
  return files;
}

if (!fs.existsSync(dist)) {
  console.error('✗ audit-schema: no hay dist/. Corre `npm run build` primero.');
  process.exit(1);
}

const failures = [];
for (const file of walk(dist)) {
  const html = fs.readFileSync(file, 'utf8');
  try {
    const issues = findProductOfferIssues(extractJsonLd(html));
    issues.forEach((issue) => failures.push(`${path.relative(dist, file)}: ${issue}`));
  } catch (error) {
    failures.push(`${path.relative(dist, file)}: JSON-LD inválido (${error.message})`);
  }
}

if (failures.length) {
  console.error('✗ audit-schema encontró datos estructurados inválidos:');
  failures.forEach((failure) => console.error(`  - ${failure}`));
  process.exit(1);
}

console.log('✓ audit-schema — JSON-LD válido y ningún Product publica Offer sin precio.');
