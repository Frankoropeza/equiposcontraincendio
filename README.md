# equiposcontraincendio.com

Sitio de **Equipos Contra Incendio** — Astro 6 (SSG) + Markdown. Generado a partir
del template `EJEMPLOS` del Master System de OrigenLab (motor compartido: layouts,
componentes, SEO y tokens; contenido y datos propios del sitio).

## Stack
- Astro 6 SSG (salida estática, `trailingSlash: 'never'`).
- Contenido en Markdown/MDX validado por Zod `.strict()` (Content Collections).
- SSoT en `src/config/site.ts` · tokens en `src/styles/tokens.css` · SEO en `src/lib/seo.ts`.
- Deploy: GitHub Actions → Cloudflare Pages (proyecto `equiposcontraincendio`).

## Correr
Requiere Node ≥ 22.12.0.
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check && astro build → ./dist
npm run check:demo # gate: falla si quedan datos placeholder (TODO/0000/DEMO)
```

## Dónde editar
| Quieres cambiar… | Edita… |
| --- | --- |
| Nombre, dominio, contacto (NAP), taxonomía, WhatsApp | `src/config/site.ts` |
| Colores / tipografía (tema rojo) | `src/styles/tokens.css` |
| Catálogo (productos / servicios / zonas / blog) | `src/content/<colección>/*.md(x)` |
| Reglas de validación del contenido | `src/content.config.ts` |
| Metadatos y JSON-LD | `src/lib/seo.ts` |

## ⚠️ PENDIENTE antes de publicar (TODO)
Este sitio se entregó con **datos de contacto placeholder**. `npm run check:demo`
falla a propósito hasta que se reemplacen. Antes de deploy:
1. **NAP real** en `src/config/site.ts` (`CONTACT`: teléfono, WhatsApp, email, domicilio, CP, geo).
2. Confirmar `SITE.business` (horario, área servida) y `SITE.organization` (razón social, fundación).
3. Sustituir los **placeholders SVG** de `public/images/` por fotos reales (AVIF) con nombre por keyword.
4. Crear el proyecto **`equiposcontraincendio`** en Cloudflare Pages y confirmar `accountId`/secreto `CLOUDFLARE_API_TOKEN` en el repo.
5. Revisar textos legales (privacidad/términos/cookies) con un profesional.

## Reglas del sistema
- **Cero contenido fabricado**: sin reseñas/clientes/cifras inventadas (`SITE.allowSelfReviews=false`).
- WhatsApp siempre vía `waUrl()` (nunca un `wa.me` a mano).
- Datos repetidos → SSoT en `site.ts`. Estilos → solo tokens.
