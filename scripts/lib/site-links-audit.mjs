function decodeHref(value) {
  return value.replace(/&amp;/g, '&').replace(/&#38;/g, '&')
}

function decodeUrlPart(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export function extractAnchorHrefs(html) {
  const hrefs = []
  for (const match of html.matchAll(
    /<a\b[^>]*\shref=(?:"([^"]*)"|'([^']*)')[^>]*>/gi,
  )) {
    hrefs.push(decodeHref((match[1] ?? match[2]).trim()))
  }
  return hrefs
}

function extractFragmentIds(html) {
  const ids = new Set()
  for (const tag of html.match(/<[a-z][^>]*>/gi) ?? []) {
    for (const name of ['id', 'name']) {
      const match = tag.match(
        new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, 'i'),
      )
      const value = match?.[1] ?? match?.[2]
      if (value) ids.add(decodeHref(value))
    }
  }
  return ids
}

function internalTarget(href, sourceUrl, siteUrl) {
  if (!href) return null
  if (/^(?:mailto:|tel:|sms:|data:|javascript:)/i.test(href)) return null

  try {
    const site = new URL(siteUrl)
    const resolved = new URL(href, new URL(sourceUrl, `${site.origin}/`))
    if (!['http:', 'https:'].includes(resolved.protocol)) return null
    if (resolved.hostname !== site.hostname) return null
    return {
      pathname: decodeUrlPart(resolved.pathname),
      fragment: resolved.hash ? decodeUrlPart(resolved.hash.slice(1)) : null,
    }
  } catch {
    return null
  }
}

function resolvePageUrl(pathname, pageUrls) {
  if (pageUrls.has(pathname)) return pathname
  if (pathname.endsWith('/') && pageUrls.has(pathname.slice(0, -1)))
    return pathname.slice(0, -1)
  if (!pathname.endsWith('/') && pageUrls.has(`${pathname}/`))
    return `${pathname}/`
  return null
}

export function auditSiteLinks({
  pages,
  assets,
  products,
  categoryRoutes,
  siteUrl = 'https://example.com',
}) {
  const pageUrls = new Set(pages.map((page) => page.url))
  const fragmentsByPage = new Map(
    pages.map((page) => [page.url, extractFragmentIds(page.html)]),
  )
  const targetsByPage = new Map(
    pages.map((page) => [
      page.url,
      extractAnchorHrefs(page.html)
        .map((href) => internalTarget(href, page.url, siteUrl))
        .filter(Boolean),
    ]),
  )
  const brokenLinks = []

  for (const page of pages) {
    for (const target of targetsByPage.get(page.url)) {
      const targetPage = resolvePageUrl(target.pathname, pageUrls)
      if (!targetPage && !assets.has(target.pathname)) {
        brokenLinks.push(`${page.url} → ${target.pathname}`)
        continue
      }
      if (
        targetPage &&
        target.fragment &&
        !fragmentsByPage.get(targetPage)?.has(target.fragment)
      ) {
        brokenLinks.push(
          `${page.url} → ${target.pathname}#${target.fragment} (fragmento inexistente)`,
        )
      }
    }
  }

  const coverageFailures = []
  const catalogTargets = new Set(
    (targetsByPage.get('/productos/') ?? []).map((target) => target.pathname),
  )

  for (const product of products) {
    const productUrl = `/productos/${product.slug}/`
    if (!catalogTargets.has(productUrl)) {
      coverageFailures.push(`/productos/ no enlaza ${productUrl}`)
    }

    const categoryRoute = categoryRoutes[product.category]
    if (categoryRoute) {
      const categoryTargets = new Set(
        (targetsByPage.get(categoryRoute) ?? []).map(
          (target) => target.pathname,
        ),
      )
      if (!categoryTargets.has(productUrl)) {
        coverageFailures.push(`${categoryRoute} no enlaza ${productUrl}`)
      }
    }
  }

  return {
    brokenLinks: [...new Set(brokenLinks)].sort(),
    coverageFailures: [...new Set(coverageFailures)].sort(),
  }
}
