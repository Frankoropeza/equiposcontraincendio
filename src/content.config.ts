// content.config.ts — Content Collections (Zod .strict()). Síntesis: MESECI + EVENTECH + SEGURIDADPRIVADA
// ============================================================================
// CANÓNICO D1: toda entidad repetible (producto, servicio, artículo, zona, caso)
// vive en una Content Collection con esquema Zod .strict() — nunca hardcodeada
// en .astro (anti-patrón D3). Astro 6 valida el frontmatter en build-time.
//
// DECISIONES Y SU ORIGEN (cada bloque cita de dónde se extrajo):
//  • .strict() en todas las colecciones → MESECI/src/content.config.ts:70,82
//      (Zod v2 endurecido: rechaza campos desconocidos como "hero_image:" que
//       antes se ignoraban en silencio en 16 archivos).
//  • category como z.enum() cerrado, NUNCA z.string() libre → MESECI:67,79
//      (string libre generó 13 variantes tipográficas; INFLAPY tuvo "Guias" vs
//       "Guías" como categorías distintas → SEO fragmentado).
//  • imagen OBLIGATORIA con regex ^/images/ → MESECI:57-59 (imagePath).
//  • heroSchema reutilizable compartido entre colecciones → EVENTECH/src/content/config.ts:11-29.
//  • faqSchema reutilizable (FAQPage JSON-LD) → EVENTECH (faqs en servicios/eventos/blog).
//  • reference() entre colecciones → patrón canónico D1 (MEDEDULCOM grafo);
//      aquí enlaza artículos↔productos↔servicios↔casos por slug tipado.
//  • Colección `zonas` para SEO local multi-zona → SEGURIDADPRIVADA/src/content.config.ts:228-285
//      + INFLAPY (cobertura por alcaldía).
//  • Colección `casos` (casos de éxito / testimonios) → SEGURIDADPRIVADA (testimonios:171-222).
//  • SIN aggregateRating/reviews fabricados en el schema → patrón B4
//      (EVENTECH/PODIUMEX: si no hay reseñas reales verificables, no se modelan).
//
// MARCADORES: reemplaza los valores de cada z.enum([...]) con la taxonomía real
// del cliente. Los slugs DEBEN coincidir con TAXONOMY en src/config/site.ts.
// ============================================================================

import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SITE } from './config/site';

// ── Helpers reutilizables ────────────────────────────────────────────────────

// imagePath — imagen obligatoria como ruta absoluta bajo /images/. Origen: MESECI:57-59.
const imagePath = z.string().regex(/^\/images\//, {
  message: 'La imagen debe ser una ruta absoluta bajo /images/ (ej. /images/productos/foo.avif)',
});

// faqSchema — bloque FAQ reutilizable. Lo consume el FAQPage JSON-LD. Origen: EVENTECH.
const faqSchema = z
  .array(
    z.object({
      question: z.string(),
      answer: z.string(),
    }),
  )
  .optional();

// heroSchema — hero opcional reutilizable. Origen: EVENTECH/src/content/config.ts:11-29.
const heroSchema = z
  .object({
    badge: z.string().optional(),
    title: z.string(),
    subtitle: z.string(),
    primaryCTA: z.object({ label: z.string(), href: z.string() }),
    secondaryCTA: z.object({ label: z.string(), href: z.string() }).optional(),
  })
  .optional();

// seoSchema — campos SEO comunes. Origen: EVENTECH/SEGURIDADPRIVADA (seoTitle/seoDescription/noindex).
// max(60)/max(160) alineados a la convención de títulos del Master System (≤60) y meta (≤160).
const seoFields = {
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  keywords: z.array(z.string()).max(15).optional(),
  noindex: z.boolean().default(false),
};

// ── Enums de taxonomía (CERRADOS) — personaliza con los slugs reales ─────────
// Regla MESECI: category siempre enum cerrado. Mantén estos slugs sincronizados
// con TAXONOMY.categories / .services / .coverageStates de src/config/site.ts.

export const PRODUCT_CATEGORIES = [
  'extintores',
  'deteccion-alarmas',
  'hidrantes-mangueras',
  'senalizacion',
  'accesorios',
  'general',
] as const;

export const SERVICE_CATEGORIES = [
  'instalacion',
  'mantenimiento',
  'inspeccion',
  // Añadidas en la auditoría 2026-09-09 · Fase 2 (hallazgo P2-4): la home
  // promocionaba 8 servicios y solo 3 tenían página. Estas dos categorías dan
  // cabida a los servicios que no encajaban en las tres originales.
  'capacitacion',
  'documentacion',
  'general',
] as const;

// Taxonomía editorial del blog (estrategia 2026-09-09). Sustituye a
// ['guias','novedades','general'], que era la taxonomía de plantilla: seis de
// los siete artículos vivían en `guias`, así que el archivo de categoría era un
// duplicado del índice del blog y no acumulaba autoridad temática por ningún
// tema. Cada slug de aquí DEBE tener copy en BLOG_CATEGORIES (src/config/site.ts);
// lo vigila tests/blog-taxonomy.test.mjs.
export const ARTICLE_CATEGORIES = [
  'extintores',      // C1-C2 — selección, clases de fuego, uso, cantidad
  'mantenimiento',   // C3-C4 — recarga, prueba hidrostática, vigencias
  'sistemas',        // C5-C7 — fijos, detección y alarma, hidrantes y gabinetes
  'normatividad',    // C8-C9 — NOM aplicables, Protección Civil, expediente
  'capacitacion',    // C10   — brigadas, DC-3, simulacros
  'prevencion',      // C11-C12 — señalización, evacuación, protección por giro
  'costos',          // guía de compra y decisión (sin publicar precios)
] as const;

// Etapa del embudo del artículo. Decide qué CTA renderiza ArticleLayout:
// tofu → orientación, mofu → diagnóstico/servicio, bofu → cotización directa.
export const ARTICLE_FUNNELS = ['tofu', 'mofu', 'bofu'] as const;

// Taxonomía técnica de las presentaciones de extintor (2026-09-10, catálogo
// de la L3 /productos/extintores/). Son los ejes de los filtros del catálogo:
// cada presentación declara su agente, formato, clases de fuego y usos. Las
// etiquetas visibles viven en src/data/extintores.ts (EXT_*_LABEL).
export const EXT_AGENTES = ['pqs', 'co2', 'clase-k', 'agua', 'agua-nebulizada', 'espuma', 'agente-limpio'] as const;
export const EXT_FORMATOS = ['portatil', 'movil'] as const;
export const EXT_CLASES = ['A', 'B', 'C', 'D', 'K'] as const;
export const EXT_USOS = ['oficina', 'comercio', 'restaurante', 'hotel', 'bodega', 'industria', 'vehiculo', 'site'] as const;

export const ZONE_TYPES = ['ciudad', 'estado', 'alcaldia', 'municipio', 'zona'] as const;

// ── Colección: productos ──────────────────────────────────────────────────────
// Arquetipo A (catálogo). Schema Product+Offer aguas abajo. Origen base: MESECI:73-83.
const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: z
    .object({
      title: z.string().min(10).max(110),
      description: z.string().min(70).max(280),
      category: z.enum(PRODUCT_CATEGORIES), // enum cerrado — MESECI.
      image: imagePath, // imagen obligatoria — MESECI.
      price: z.string().optional(), // string libre ("Desde $X", "Cotizar"). NO number forzado.
      sku: z.string().optional(),
      brand: z.string().optional(),
      gallery: z.array(imagePath).optional(),
      variantes: z
        .array(
          z.object({
            nombre: z.string().min(5).max(80),
            badge: z.string().max(30).optional(),
            desc: z.string().min(50).max(300),
            specs: z.string().min(20).max(200),
            imagen: imagePath.optional(),
            waText: z.string().min(20),
            // ── Ficha técnica estructurada (opcional; la usa el catálogo de
            // extintores). `clasificacion` SOLO si consta en la ficha del
            // fabricante; `validacion: 'pendiente'` pinta el aviso en la card.
            // Resumen corto y ÚNICO para la card del catálogo L3 (no repite
            // `desc`, que se publica en la ficha L4: evita contenido duplicado).
            resumen: z.string().min(40).max(160).optional(),
            agente: z.enum(EXT_AGENTES).optional(),
            capacidad: z.string().min(2).max(24).optional(),
            formato: z.enum(EXT_FORMATOS).optional(),
            clases: z.array(z.enum(EXT_CLASES)).min(1).optional(),
            clasificacion: z.string().max(24).optional(),
            usos: z.array(z.enum(EXT_USOS)).min(1).max(5).optional(),
            validacion: z.enum(['verificado', 'pendiente']).optional(),
          }),
        )
        .min(1)
        .optional(),
      // Interlinking tipado entre colecciones — reference() (D1).
      relatedProducts: z.array(reference('productos')).optional(),
      relatedServices: z.array(reference('servicios')).optional(),
      faqs: faqSchema,
      featured: z.boolean().default(false),
      order: z.number().default(0),
      draft: z.boolean().default(false),
      ...seoFields,
    })
    .strict(), // rechaza campos desconocidos — MESECI.
});

// ── Colección: servicios ──────────────────────────────────────────────────────
// Arquetipo B/C. Schema Service+OfferCatalog aguas abajo. Origen: EVENTECH:34-123 + SEGURIDADPRIVADA:13-83.
const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z
    .object({
      title: z.string().min(10).max(110),
      description: z.string().min(70).max(280),
      category: z.enum(SERVICE_CATEGORIES),
      image: imagePath,
      // pricing transparente opcional (EVENTECH:64-73). Sin number obligatorio.
      pricing: z
        .object({
          min: z.number().optional(),
          max: z.number().optional(),
          unit: z.enum(['pieza', 'set', 'evento', 'hora', 'dia', 'mes', 'servicio']).optional(),
          note: z.string().optional(),
        })
        .optional(),
      includes: z.array(z.string()).optional(), // qué incluye el servicio (EVENTECH:85).
      // badge — etiqueta corta para la card del servicio (home, /servicios).
      // Añadido en la auditoría 2026-09-09 · Fase 2 (P2-5): la home tenía los
      // servicios hardcodeados con su badge; al pasar a leer la colección, el
      // badge necesita vivir en el frontmatter y no en el .astro.
      badge: z.string().max(30).optional(),
      isHub: z.boolean().default(false), // página hub vs servicio individual (EVENTECH:120).
      relatedServices: z.array(reference('servicios')).optional(),
      relatedProducts: z.array(reference('productos')).optional(),
      hero: heroSchema,
      faqs: faqSchema,
      featured: z.boolean().default(false),
      order: z.number().default(0),
      draft: z.boolean().default(false),
      ...seoFields,
    })
    .strict(),
});

// ── Colección: articulos (blog) — SIEMPRE .mdx ───────────────────────────────
// Regla D3: el blog vive en colección .mdx, nunca .astro sueltos. Schema Article
// aguas abajo. Origen: EVENTECH:267-328 (enum de categoría) + SEGURIDADPRIVADA.
// REQUIERE @astrojs/mdx en astro.config.mjs.
const articulos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articulos' }),
  schema: z
    .object({
      title: z.string().min(10).max(70), // ≤70 para SEO (convención de títulos).
      description: z.string().min(70).max(160),
      // Sin default: la categoría es una decisión editorial, no un descarte. El
      // viejo default 'general' existía para una taxonomía de plantilla que ya no
      // está; ahora publicar sin categoría debe fallar en build, no caer en un cajón.
      category: z.enum(ARTICLE_CATEGORIES), // enum cerrado — evita "Guias"/"Guías" (INFLAPY).
      heroImage: imagePath, // imagen obligatoria.
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Autor institucional = la marca (SITE.name). Los artículos anteriores al
      // cambio de nombre (2026-09-10) traen «Equipos Contra Incendio» en el
      // frontmatter; se normalizan aquí a CONINC para no reescribir los .mdx
      // mientras otra sesión los edita. Cuando el árbol se calme, basta un sed.
      author: z
        .string()
        .default(SITE.name)
        .transform((a) => (a === 'Equipos Contra Incendio' ? SITE.name : a)),
      tags: z.array(z.string()).max(10).optional(),
      // funnel — etapa del embudo (estrategia editorial 2026-09-09). Gobierna el
      // CTA del artículo; default 'mofu' porque es la etapa mayoritaria del blog.
      funnel: z.enum(ARTICLE_FUNNELS).default('mofu'),
      // Interlinking blog ↔ catálogo (cross-sell). reference() tipado.
      relatedProducts: z.array(reference('productos')).optional(),
      relatedServices: z.array(reference('servicios')).optional(),
      relatedPosts: z.array(reference('articulos')).optional(),
      faqs: faqSchema,
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      ...seoFields,
    })
    .strict(),
});

// ── Colección: zonas (SEO local multi-zona) ──────────────────────────────────
// Arquetipo C. Schema LocalBusiness+Service+areaServed aguas abajo. Origen:
// SEGURIDADPRIVADA/src/content.config.ts:228-285 + INFLAPY (cobertura/alcaldía).
const zonas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/zonas' }),
  schema: z
    .object({
      title: z.string().min(10).max(70),
      description: z.string().min(70).max(160),
      zoneName: z.string(), // nombre humano de la zona. Ej: 'Benito Juárez'.
      type: z.enum(ZONE_TYPES), // ciudad|estado|alcaldia|municipio|zona — EVENTECH:208/SEGURIDADPRIVADA.
      municipality: z.string().optional(),
      state: z.string().default('CDMX'),
      image: imagePath,
      geo: z
        .object({
          lat: z.number().optional(),
          lng: z.number().optional(),
          postalCodes: z.array(z.string()).optional(),
        })
        .optional(),
      colonias: z.array(z.string()).optional(), // SEGURIDADPRIVADA:283 — colonias de la zona.
      // areas — subdivisiones administrativas que componen la zona (alcaldías de
      // CDMX, municipios de un estado). Distinto de `colonias`, que es el nivel
      // de barrio. Se usa para el copy de cobertura y para el interlinking local.
      // Añadido en la auditoría 2026-09-09 · Fase 2.
      areas: z.array(z.string()).optional(),
      // delivery/cobertura local (INFLAPY): tiempo y notas de entrega.
      delivery: z
        .object({
          time: z.string().optional(),
          note: z.string().optional(),
        })
        .optional(),
      availableServices: z.array(reference('servicios')).optional(),
      nearbyZones: z.array(reference('zonas')).optional(),
      faqs: faqSchema,
      hero: heroSchema,
      draft: z.boolean().default(false),
      ...seoFields,
    })
    .strict(),
});

// ── Colección: casos (casos de éxito / testimonios) ──────────────────────────
// Prueba social. NO se emite aggregateRating fabricado (B4): el `rating` por
// caso es dato real verificable y se muestra en página, no se agrega a un
// AggregateRating global inventado. Origen: SEGURIDADPRIVADA testimonios:171-222.
const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: z
    .object({
      title: z.string().min(10).max(110),
      clientName: z.string(),
      clientRole: z.string().optional(),
      clientCompany: z.string().optional(),
      clientLocation: z.string().optional(),
      quote: z.string(), // testimonio textual real.
      summary: z.string().optional(), // resumen del caso de éxito.
      image: imagePath,
      rating: z.number().min(1).max(5).optional(), // SOLO si es real y verificable.
      // A qué categoría/servicio/producto pertenece el caso (interlinking).
      relatedServices: z.array(reference('servicios')).optional(),
      relatedProducts: z.array(reference('productos')).optional(),
      date: z.coerce.date().optional(),
      featured: z.boolean().default(false),
      approved: z.boolean().default(true), // gate editorial — SEGURIDADPRIVADA.
      draft: z.boolean().default(false),
    })
    .strict(),
});

// ── Colección: plantillas (formatos descargables) ────────────────────────────
// Bloque E del plan de activos de utilidad pública (2026-09-09). Entidad
// repetible con cuerpo propio → colección, nunca .astro sueltos (D1/D3).
// Los archivos viven en /public/plantillas/ y se reproducen con los scripts de
// scripts/plantillas/; aquí se declara qué se publica de cada uno.
const plantillas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plantillas' }),
  schema: z
    .object({
      title: z.string().min(10).max(110),
      description: z.string().min(70).max(280),
      /** Etiqueta corta para el hub y el menú. */
      label: z.string().min(5).max(70),
      /** Imagen de la tarjeta (CategoryCard) — el sitio lista con foto real. */
      image: imagePath,
      imageAlt: z.string(),
      /** Norma de la que sale el formato (se cita en la página). */
      norm: z.string(),
      /** Archivos publicados. Al menos uno; la ruta debe estar bajo /plantillas/. */
      files: z
        .array(
          z.object({
            ext: z.string(),
            href: z.string().regex(/^\/plantillas\//, {
              message: 'El archivo debe vivir bajo /plantillas/ (public/plantillas/…)',
            }),
            size: z.string(),
          }),
        )
        .min(1),
      /** Pasos de llenado, en orden. */
      steps: z.array(z.string()).min(2).optional(),
      faqs: faqSchema,
      relatedServices: z.array(reference('servicios')).optional(),
      relatedPosts: z.array(reference('articulos')).optional(),
      order: z.number().default(0),
      draft: z.boolean().default(false),
      ...seoFields,
    })
    .strict(),
});

// ── Colección: tramites (Protección Civil por entidad) ───────────────────────
// Bloque A del plan de activos de utilidad pública (2026-09-09). Cada ficha
// describe un trámite REAL con su fuente oficial y la fecha en que se verificó.
//
// REGLA DURA DE ESTA COLECCIÓN: nada sin fuente. `sources` y `verifiedAt` son
// OBLIGATORIOS, y los campos que no se pudieron verificar se omiten en vez de
// rellenarse — un requisito inventado en materia de trámites es peor que no
// publicar la ficha. `pending` deja constancia visible de qué falta confirmar.
const tramites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tramites' }),
  schema: z
    .object({
      title: z.string().min(10).max(110),
      description: z.string().min(70).max(280),
      /** Nombre corto para el hub y las migas. */
      label: z.string().min(3).max(60),
      /** Entidad o demarcación a la que aplica. */
      entidad: z.string(),
      /** Autoridad que recibe o resuelve el trámite. */
      autoridad: z.string(),
      /** Nombre oficial del trámite, tal como lo publica la autoridad. */
      tramiteOficial: z.string().optional(),
      quienAplica: z.string().optional(),
      modalidad: z.string().optional(),
      plazo: z.string().optional(),
      costo: z.string().optional(),
      resultado: z.string().optional(),
      vigencia: z.string().optional(),
      requisitos: z.array(z.string()).optional(),
      fundamento: z.array(z.string()).optional(),
      /** Qué falta confirmar. Se publica a la vista: honestidad > apariencia. */
      pending: z.array(z.string()).optional(),
      /** Fuentes oficiales consultadas. Obligatorio. */
      sources: z
        // Validación de URL absoluta. `z.string().url()` marca un aviso de
        // deprecación en Zod v4, pero `z.url()` sobre el re-export de astro:content
        // dispara avisos en cascada: se queda el primero, que es el inocuo.
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .min(1),
      /** Fecha de la última verificación contra la fuente. Obligatorio. */
      verifiedAt: z.coerce.date(),
      image: imagePath.optional(),
      imageAlt: z.string().optional(),
      faqs: faqSchema,
      relatedServices: z.array(reference('servicios')).optional(),
      relatedZones: z.array(reference('zonas')).optional(),
      order: z.number().default(0),
      draft: z.boolean().default(false),
      ...seoFields,
    })
    .strict(),
});

// ── Colección: giros (Protección Civil por tipo de negocio) ────────────────
const giros = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/giros' }),
  schema: z
    .object({
      title: z.string(), nombre: z.string(), h1: z.string(), h1Accent: z.string(), heroBadge: z.string(),
      cardDescription: z.string().max(90), ctaLabel: z.string().max(24), image: z.string(), imageAlt: z.string(),
      seoTitle: z.string().max(60), seoDescription: z.string().min(120).max(160), kwPrincipal: z.string(),
      impactoCdmx: z.string(), impactoEdomex: z.string(), waMessage: z.string(), fusionaDe: z.string().optional(),
      grupo: z.enum(['alimentos-y-bebidas', 'hospedaje-y-eventos', 'oficinas-y-servicios', 'educacion-y-cuidado', 'salud', 'comercio', 'deporte-y-bienestar', 'industria-y-logistica', 'movilidad', 'habitacional', 'por-nivel-de-riesgo']),
      riesgoProbable: z.enum(['bajo', 'bajo-medio', 'medio', 'medio-alto', 'alto']),
      prioridad: z.enum(['alta', 'media', 'baja']), orden: z.number(),
      intro: z.array(z.string()).min(1).max(3), kwSecundarias: z.array(z.string()),
      aplica: z.array(z.object({ nivel: z.string(), criterio: z.string(), tramite: z.string(), firma: z.string() })).length(3),
      documentos: z.array(z.object({ entidad: z.enum(['cdmx', 'edomex', 'ambas']), doc: z.string(), fund: z.string(), tag: z.enum(['OL', 'RI', 'BP']), confianza: z.enum(['alta', 'media']).optional() })),
      equipo: z.array(z.object({ item: z.string(), uso: z.string(), fund: z.string(), prio: z.enum(['B', 'R', 'E']), tag: z.string() })),
      senalizacion: z.array(z.string()), capacitacion: z.array(z.string()), errores: z.array(z.object({ title: z.string(), desc: z.string() })),
      vitrina: z.array(z.string()).length(8), hermanos: z.array(z.string()).length(4), enlacesSoporte: z.array(z.string()),
      normas: z.array(z.object({ norma: z.string(), alcance: z.string(), aplica: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })).min(4).max(8),
      sources: z.array(z.object({ label: z.string(), url: z.string().url() })).min(1), verifiedAt: z.coerce.date(), draft: z.boolean().optional(),
    })
    .strict(),
});

// ── Export ────────────────────────────────────────────────────────────────────
// Borra las colecciones que el proyecto no use (un sitio puede no tener `zonas`
// o `casos`). Mantén `articulos` si hay blog (siempre .mdx — D3).
export const collections = {
  productos,
  servicios,
  articulos,
  zonas,
  plantillas,
  tramites,
  giros,
};
