import { readdirSync, readFileSync, statSync } from 'node:fs'
import { basename, join, relative, resolve } from 'node:path'

import { findInlineExecutableScripts } from './lib/csp-audit.mjs'
import { NON_PAGE_HTML_FILE } from './lib/html-seo-audit.mjs'

const dist = resolve('dist')
const htmlFiles = []

function walk(directory) {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name)
    if (statSync(path).isDirectory()) walk(path)
    else if (name.endsWith('.html') && !NON_PAGE_HTML_FILE.test(basename(path)))
      htmlFiles.push(path)
  }
}

walk(dist)
const failures = htmlFiles.flatMap((path) =>
  findInlineExecutableScripts(readFileSync(path, 'utf8')).map((issue) => ({
    file: relative(dist, path),
    ...issue,
  })),
)

if (failures.length) {
  console.error('audit:csp — JavaScript inline ejecutable detectado:')
  for (const failure of failures) {
    console.error(`- ${failure.file} [${failure.type}] ${failure.preview}`)
  }
  process.exit(1)
}

console.log(
  `✓ audit:csp — ${htmlFiles.length} páginas sin JavaScript inline ejecutable.`,
)
