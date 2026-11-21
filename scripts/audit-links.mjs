#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { SITE, TAXONOMY } from '../src/config/site.ts'
import { NON_PAGE_HTML_FILE } from './lib/html-seo-audit.mjs'
import { auditSiteLinks } from './lib/site-links-audit.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST_DIR = path.join(ROOT, 'dist')
const PRODUCTS_DIR = path.join(ROOT, 'src/content/productos')
const CATEGORY_ROUTES = Object.fromEntries(
  TAXONOMY.categories
    .filter(({ href }) => href !== '/productos/')
    .map(({ slug, href }) => [slug, href]),
)

function walk(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) walk(fullPath, files)
    else files.push(fullPath)
  }
  return files
}

function publicPath(file) {
  const relative = path.relative(DIST_DIR, file).replaceAll(path.sep, '/')
  return `/${relative}`
}

function pageUrl(file) {
  const publishedPath = publicPath(file)
  if (publishedPath === '/index.html') return '/'
  if (publishedPath === '/404.html') return '/404/'
  if (publishedPath.endsWith('/index.html'))
    return publishedPath.slice(0, -'index.html'.length)
  return publishedPath
}

function readProducts() {
  return fs
    .readdirSync(PRODUCTS_DIR)
    .filter((name) => /\.mdx?$/.test(name))
    .flatMap((name) => {
      const source = fs.readFileSync(path.join(PRODUCTS_DIR, name), 'utf8')
      const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---/)
      if (!frontmatter || /^draft:\s*true\s*$/m.test(frontmatter[1])) return []
      const category = frontmatter[1].match(
        /^category:\s*["']?([^\s"']+)["']?\s*$/m,
      )?.[1]
      if (!category) throw new Error(`${name}: falta category en frontmatter`)
      return [{ slug: name.replace(/\.mdx?$/, ''), category }]
    })
}

if (!fs.existsSync(DIST_DIR)) {
  console.error('✗ audit-links: no hay dist/. Corre `npm run build` primero.')
  process.exit(1)
}

const files = walk(DIST_DIR)
const pageFiles = files.filter(
  (file) =>
    file.endsWith('.html') && !NON_PAGE_HTML_FILE.test(path.basename(file)),
)
const pages = pageFiles.map((file) => ({
  url: pageUrl(file),
  html: fs.readFileSync(file, 'utf8'),
}))
const pageFileSet = new Set(pageFiles)
const assets = new Set(
  files.filter((file) => !pageFileSet.has(file)).map(publicPath),
)
const products = readProducts()
const { brokenLinks, coverageFailures } = auditSiteLinks({
  pages,
  assets,
  products,
  categoryRoutes: CATEGORY_ROUTES,
  siteUrl: SITE.url,
})

if (brokenLinks.length || coverageFailures.length) {
  if (brokenLinks.length) {
    console.error(
      `audit:links — ${brokenLinks.length} enlace(s) interno(s) sin destino:`,
    )
    brokenLinks.forEach((failure) => console.error(`- ${failure}`))
  }
  if (coverageFailures.length) {
    console.error(
      `audit:links — ${coverageFailures.length} omisión(es) de catálogo:`,
    )
    coverageFailures.forEach((failure) => console.error(`- ${failure}`))
  }
  process.exit(1)
}

console.log(
  `✓ audit:links — ${pages.length} páginas, ${products.length} productos y cero enlaces internos rotos.`,
)
