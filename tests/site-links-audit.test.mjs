import assert from 'node:assert/strict'
import test from 'node:test'

import { auditSiteLinks } from '../scripts/lib/site-links-audit.mjs'

test('detecta enlaces internos cuyo destino no existe', () => {
  const result = auditSiteLinks({
    pages: [
      {
        url: '/',
        html: '<a href="/existente/">Bien</a><a href="/ausente/">Mal</a><a href="https://example.com/">Externo</a>',
      },
      { url: '/existente/', html: '<h1>Existe</h1>' },
    ],
    assets: new Set(),
    products: [],
    categoryRoutes: {},
  })

  assert.deepEqual(result.brokenLinks, ['/ → /ausente/'])
})

test('acepta rutas con query o ancla y archivos publicados', () => {
  const result = auditSiteLinks({
    pages: [
      {
        url: '/',
        html: '<a href="/destino/?origen=home#formulario">Página</a><a href="/images/ficha.webp">Asset</a>',
      },
      { url: '/destino/', html: '<h1>Destino</h1><div id="formulario"></div>' },
    ],
    assets: new Set(['/images/ficha.webp']),
    products: [],
    categoryRoutes: {},
  })

  assert.deepEqual(result.brokenLinks, [])
})

test('exige cada producto en el catálogo general y en su categoría L3', () => {
  const result = auditSiteLinks({
    pages: [
      {
        url: '/productos/',
        html: '<a href="/productos/extintor-a/">Extintor A</a>',
      },
      {
        url: '/productos/extintores/',
        html: '<a href="/productos/extintor-b/">Extintor B</a>',
      },
      { url: '/productos/extintor-a/', html: '<h1>A</h1>' },
      { url: '/productos/extintor-b/', html: '<h1>B</h1>' },
    ],
    assets: new Set(),
    products: [
      { slug: 'extintor-a', category: 'extintores' },
      { slug: 'extintor-b', category: 'extintores' },
    ],
    categoryRoutes: { extintores: '/productos/extintores/' },
  })

  assert.deepEqual(result.coverageFailures, [
    '/productos/ no enlaza /productos/extintor-b/',
    '/productos/extintores/ no enlaza /productos/extintor-a/',
  ])
})

test('cuenta como cobertura un enlace directo a una sección de la ficha', () => {
  const productUrl = '/productos/extintor-a/'
  const result = auditSiteLinks({
    pages: [
      {
        url: '/productos/',
        html: `<a href="${productUrl}#presentaciones">Extintor A</a>`,
      },
      {
        url: '/productos/extintores/',
        html: `<a href="${productUrl}#extintor-de-6-kg">Extintor A de 6 kg</a>`,
      },
      {
        url: productUrl,
        html: '<h1>Extintor A</h1><section id="presentaciones"></section><article id="extintor-de-6-kg"></article>',
      },
    ],
    assets: new Set(),
    products: [{ slug: 'extintor-a', category: 'extintores' }],
    categoryRoutes: { extintores: '/productos/extintores/' },
  })

  assert.deepEqual(result.brokenLinks, [])
  assert.deepEqual(result.coverageFailures, [])
})

test('audita enlaces absolutos del dominio propio y omite dominios externos', () => {
  const result = auditSiteLinks({
    pages: [
      {
        url: '/',
        html: '<a href="https://example.com/ausente/">Propio</a><a href="//example.com/tampoco/">Propio relativo</a><a href="https://externo.example/ausente/">Externo</a>',
      },
    ],
    assets: new Set(),
    products: [],
    categoryRoutes: {},
    siteUrl: 'https://example.com',
  })

  assert.deepEqual(result.brokenLinks, ['/ → /ausente/', '/ → /tampoco/'])
})

test('detecta fragmentos inexistentes en la misma página y en otra ruta', () => {
  const result = auditSiteLinks({
    pages: [
      {
        url: '/',
        html: '<a href="#existe">Bien</a><a href="#ausente">Mal</a><a href="/destino/#seccion-ausente">Mal remoto</a><div id="existe"></div>',
      },
      { url: '/destino/', html: '<section id="seccion-real"></section>' },
    ],
    assets: new Set(),
    products: [],
    categoryRoutes: {},
    siteUrl: 'https://example.com',
  })

  assert.deepEqual(result.brokenLinks, [
    '/ → /#ausente (fragmento inexistente)',
    '/ → /destino/#seccion-ausente (fragmento inexistente)',
  ])
})
