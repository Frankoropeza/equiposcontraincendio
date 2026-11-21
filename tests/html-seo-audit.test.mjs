import assert from 'node:assert/strict'
import test from 'node:test'

import {
  auditHtmlPages,
  extractPageSeo,
} from '../scripts/lib/html-seo-audit.mjs'

function page({
  title = 'Título único',
  description = 'Descripción única',
  canonical = 'https://example.com/uno/',
  h1 = 1,
} = {}) {
  return `<!doctype html><html><head><title>${title}</title><meta name="description" content="${description}"><link rel="canonical" href="${canonical}"></head><body>${'<h1>Encabezado</h1>'.repeat(h1)}</body></html>`
}

test('extrae metadatos, canonical y cantidad de H1 del HTML publicado', () => {
  assert.deepEqual(
    extractPageSeo(page({ title: 'Protección &amp; seguridad' })),
    {
      title: 'Protección & seguridad',
      description: 'Descripción única',
      canonical: 'https://example.com/uno/',
      titleCount: 1,
      descriptionCount: 1,
      canonicalCount: 1,
      h1Count: 1,
    },
  )
})

test('detecta title, description y canonical duplicados entre URLs', () => {
  const result = auditHtmlPages([
    {
      url: '/uno/',
      html: page({ canonical: 'https://example.com/duplicada/' }),
    },
    {
      url: '/dos/',
      html: page({ canonical: 'https://example.com/duplicada/' }),
    },
  ])

  assert.equal(result.failures.length, 2)
  assert.match(result.failures[0].problems.join(' '), /title duplicado/)
  assert.match(result.failures[0].problems.join(' '), /description duplicada/)
  assert.match(result.failures[0].problems.join(' '), /canonical duplicado/)
})

test('exige exactamente un H1 y los metadatos esenciales', () => {
  const html =
    '<!doctype html><html><head></head><body><h1>Uno</h1><h1>Dos</h1></body></html>'
  const result = auditHtmlPages([{ url: '/incompleta/', html }])

  assert.deepEqual(result.failures[0].problems, [
    'sin <title>',
    'sin meta description',
    'sin canonical',
    '2 elementos <h1> (debe existir exactamente 1)',
  ])
})

test('acepta páginas únicas dentro de los límites', () => {
  const result = auditHtmlPages([
    { url: '/uno/', html: page() },
    {
      url: '/dos/',
      html: page({
        title: 'Otro título',
        description: 'Otra descripción',
        canonical: 'https://example.com/dos/',
      }),
    },
  ])

  assert.deepEqual(result.failures, [])
})

test('rechaza múltiples title, descriptions o canonicals en una página', () => {
  const html = page().replace(
    '</head>',
    '<title>Segundo título</title><meta name="description" content="Otra"><link rel="canonical" href="https://example.com/otra/"></head>',
  )
  const result = auditHtmlPages([{ url: '/uno/', html }])

  assert.match(result.failures[0].problems.join(' '), /2 elementos <title>/)
  assert.match(result.failures[0].problems.join(' '), /2 meta descriptions/)
  assert.match(result.failures[0].problems.join(' '), /2 canonicals/)
})

test('exige canonical HTTPS, del origen esperado y autorreferente', () => {
  const cases = [
    ['http://example.com/uno/', 'canonical debe usar HTTPS'],
    ['https://otro.example/uno/', 'canonical fuera del origen'],
    ['https://example.com/otra/', 'canonical no autorreferente'],
  ]

  for (const [canonical, expectedProblem] of cases) {
    const result = auditHtmlPages([{ url: '/uno/', html: page({ canonical }) }])
    assert.match(
      result.failures[0].problems.join(' '),
      new RegExp(expectedProblem),
    )
  }
})
