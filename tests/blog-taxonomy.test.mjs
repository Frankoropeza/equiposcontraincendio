// ============================================================================
// tests/blog-taxonomy.test.mjs — coherencia de la taxonomía editorial del blog.
// ----------------------------------------------------------------------------
// POR QUÉ (estrategia editorial 2026-09-09): el blog pasó de la taxonomía de
// plantilla ['guias','novedades','general'] a siete categorías reales, y el
// copy de cada archivo de categoría vive en BLOG_CATEGORIES (site.ts) mientras
// el enum que valida el frontmatter vive en content.config.ts. Son dos archivos
// distintos: en cuanto divergen, /blog/categoria/<slug>/ se publica con el copy
// de respaldo (genérico) sin que nada falle — exactamente el modo de fallo
// silencioso que ya costó meses en /servicios/ y /cobertura/ (NUEVO-3).
//
// QUÉ VIGILA:
//   1. ARTICLE_CATEGORIES ↔ BLOG_CATEGORIES: mismos slugs en ambos lados.
//   2. Todo artículo publicado usa una categoría del enum.
//   3. Todo artículo publicado tiene `funnel` válido (decide su CTA).
//   4. Todo artículo publicado tiene al menos UNA salida comercial declarada
//      (relatedProducts o relatedServices): un artículo sin ruta a producto o
//      servicio es tráfico que no puede convertir.
//
//   npm test
// ============================================================================
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE = fs.readFileSync(path.join(ROOT, 'src', 'config', 'site.ts'), 'utf8');
const CONFIG = fs.readFileSync(path.join(ROOT, 'src', 'content.config.ts'), 'utf8');
const ARTICLES_DIR = path.join(ROOT, 'src', 'content', 'articulos');

const FUNNELS = ['tofu', 'mofu', 'bofu'];

/** Slugs del enum ARTICLE_CATEGORIES (content.config.ts). */
function enumCategories() {
  const block = CONFIG.split('export const ARTICLE_CATEGORIES = [')[1]?.split('] as const;')[0] ?? '';
  return [...block.matchAll(/'([^']+)'/g)].map((m) => m[1]).sort();
}

/** Slugs con copy en BLOG_CATEGORIES (site.ts). */
function copyCategories() {
  const block = SITE.split('export const BLOG_CATEGORIES')[1]?.split('] as const;')[0] ?? '';
  return [...block.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]).sort();
}

/** Frontmatter crudo de cada artículo publicado (draft: false). */
function articles() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, f), 'utf8');
      const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
      return { file: f, fm };
    })
    .filter(({ fm }) => !/^draft:\s*true\s*$/m.test(fm));
}

const value = (fm, key) => fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1].trim();

test('ARTICLE_CATEGORIES (content.config.ts) ↔ BLOG_CATEGORIES (site.ts)', () => {
  const enums = enumCategories();
  const copies = copyCategories();
  assert.ok(enums.length > 0, 'No se pudo leer ARTICLE_CATEGORIES de content.config.ts');
  assert.ok(copies.length > 0, 'No se pudo leer BLOG_CATEGORIES de site.ts');

  const sinCopy = enums.filter((s) => !copies.includes(s));
  const sinEnum = copies.filter((s) => !enums.includes(s));

  assert.deepEqual(sinCopy, [], `Categorías del enum sin copy en BLOG_CATEGORIES (el archivo saldría genérico): ${sinCopy.join(', ')}`);
  assert.deepEqual(sinEnum, [], `Categorías con copy pero fuera del enum (nunca se podrán usar): ${sinEnum.join(', ')}`);
});

test('cada artículo publicado usa una categoría del enum', () => {
  const enums = enumCategories();
  for (const { file, fm } of articles()) {
    const cat = value(fm, 'category');
    assert.ok(cat, `${file}: falta \`category\` en el frontmatter`);
    assert.ok(enums.includes(cat), `${file}: categoría "${cat}" fuera de ARTICLE_CATEGORIES`);
  }
});

test('cada artículo publicado declara una etapa de embudo válida', () => {
  for (const { file, fm } of articles()) {
    const funnel = value(fm, 'funnel');
    assert.ok(funnel, `${file}: falta \`funnel\` (tofu|mofu|bofu) — define el CTA del artículo`);
    assert.ok(FUNNELS.includes(funnel), `${file}: funnel "${funnel}" inválido`);
  }
});

test('cada artículo publicado tiene al menos una salida comercial', () => {
  for (const { file, fm } of articles()) {
    const hasCommercial = /^relatedProducts:/m.test(fm) || /^relatedServices:/m.test(fm);
    assert.ok(
      hasCommercial,
      `${file}: sin relatedProducts ni relatedServices — el artículo no enlaza a ninguna página que venda`,
    );
  }
});
