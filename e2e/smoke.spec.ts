import { expect, test } from '@playwright/test'

test('la portada publica SEO canónico y contacto', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/equipo contra incendio/i)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://equiposcontraincendio.com/',
  )
  await expect(page.locator('a[href*="wa.me"]').first()).toBeVisible()
})

test('una ficha de producto no inventa una oferta sin precio', async ({
  page,
}) => {
  await page.goto('/productos/extintor-pqs/')

  const jsonLd = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents()
  const nodes = jsonLd.flatMap((value) => {
    const parsed = JSON.parse(value) as Record<string, unknown>
    const graph = parsed['@graph']
    return Array.isArray(graph) ? graph : [parsed]
  })
  const product = nodes.find((node) => node['@type'] === 'Product')

  expect(product).toBeTruthy()
  expect(product).not.toHaveProperty('offers')
})

test('una evidencia de servicio no se presenta como venta independiente', async ({
  page,
}) => {
  await page.goto('/productos/etiqueta-collarin-mantenimiento-extintor/')

  await expect(page.locator('.showcase__price')).toHaveText(
    'Se atiende dentro del servicio de mantenimiento',
  )
  await expect(
    page
      .locator('main')
      .getByRole('link', { name: 'Solicitar mantenimiento' })
      .first(),
  ).toBeVisible()
  await expect(page.locator('.pvcard__cta')).toHaveText([
    'Solicitar servicio',
    'Solicitar servicio',
  ])

  const jsonLd = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents()
  const product = jsonLd
    .map((value) => JSON.parse(value) as Record<string, unknown>)
    .find((node) => node['@type'] === 'Product')

  expect(product).toBeTruthy()
  expect(product).not.toHaveProperty('offers')
})

test('la calculadora entrega un desglose consistente', async ({ page }) => {
  await page.goto('/herramientas/cuantos-extintores-necesito/')

  await page
    .getByRole('spinbutton', { name: /superficie construida/i })
    .fill('850')
  await page.getByRole('spinbutton', { name: /niveles ocupados/i }).fill('2')
  await page.getByRole('checkbox', { name: /cocina comercial/i }).check()
  await page.getByRole('button', { name: 'Calcular mi equipo' }).click()

  const result = page.locator('#ext-res')
  await expect(result.getByText('4', { exact: true })).toBeVisible()
  await expect(result).toContainText(
    '3 por superficie y niveles + 1 por áreas con riesgo propio',
  )
  await expect(result).toContainText('Clase K')
})

test('la ruta inexistente conserva el 404 real', async ({ page }) => {
  const response = await page.goto('/ruta-que-no-existe-e2e/')

  expect(response?.status()).toBe(404)
  await expect(
    page.getByRole('heading', { level: 1, name: 'Esta página no existe' }),
  ).toBeVisible()
})

test('el menú móvil abre con estado accesible', async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name !== 'mobile',
    'comportamiento exclusivo del viewport móvil',
  )
  await page.goto('/')

  const button = page.locator('#hdr-burger-btn')
  await expect(button).toHaveAccessibleName('Abrir menú')
  await button.click()

  await expect(button).toHaveAttribute('aria-expanded', 'true')
  await expect(button).toHaveAccessibleName('Cerrar menú')
  await expect(
    page.getByRole('dialog', { name: 'Menú principal' }),
  ).toBeVisible()
})

test('el catálogo permite filtrar clase D y anuncia los resultados', async ({
  page,
}) => {
  await page.goto('/productos/extintores/')
  const catalog = page.locator('#catalogo')
  const cards = catalog.locator('.ecard')
  const total = await cards.count()
  const results = catalog.getByRole('status')

  await expect(results).toHaveText(`${total} de ${total} presentaciones`)
  await catalog
    .locator('[data-filter-group="clase"]')
    .getByRole('button', { name: 'Clase D', exact: true })
    .click()
  const visible = cards.filter({ visible: true })
  await expect(visible.first()).toBeVisible()
  for (const card of await visible.all()) {
    await expect(card).toHaveAttribute('data-clases', /(?:^| )D(?: |$)/)
  }
  await expect(results).toHaveText(
    `${await visible.count()} de ${total} presentaciones`,
  )
  await catalog.getByRole('button', { name: 'Limpiar filtros' }).click()
  await expect(results).toHaveText(`${total} de ${total} presentaciones`)
  await expect(cards.filter({ visible: true })).toHaveCount(total)
})
