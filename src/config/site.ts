// site.ts — SSoT (Single Source of Truth) · equiposcontraincendio.com
// ============================================================================
// FUENTE ÚNICA DE VERDAD del sitio. Todo dato que aparezca en más de una página
// vive aquí: identidad, contacto (NAP), taxonomías y mensajes de WhatsApp. Nada
// se hardcodea en componentes ni páginas — se importa de este archivo.
//
// Contrato canónico (interoperable con lib/seo.ts, layouts y componentes del
// Master System OrigenLab). Respetar las claves EXACTAS: renombrar una clave
// rompe el JSON-LD o el chrome aguas abajo.
//
// ESTADO DEL NAP (2026-09-09):
//   ✓ Teléfono y WhatsApp REALES (55 3934 0581). Frank indicó que es la línea
//     disponible por ahora; si más adelante llega una definitiva, se cambia aquí
//     y se propaga sola a topbar, header, botón flotante, formulario y JSON-LD.
//   ✓ Domicilio REAL confirmado 2026-09-09: Lago Alberto 319, Piso 6, Col.
//     Granada, Miguel Hidalgo, 11520 CDMX. Geo verificado por geocoding
//     (OpenStreetMap/Nominatim, house_number 319 exacto).
//   ⚠ PENDIENTE de verificar: horario sigue sin confirmarse contra el negocio
//     real, y `organization.legalName` es el nombre comercial, no una razón
//     social. Eso afecta al aviso de privacidad y a los términos, que publican
//     esa identidad. Ver hallazgo P0-4 de la auditoría.
// El gate `npm run check:demo` valida forma y coherencia del NAP en cada build.
// NO se inventan credenciales (años, reseñas, clientes).
// ============================================================================

// ── SITE — identidad de marca + SEO + organización + negocio local ───────────
export const SITE = {
  name: 'Equipos Contra Incendio',          // Nombre comercial.
  brand: 'Equipos Contra Incendio',         // Marca para footer/logo.
  tagline: 'Venta, instalación y mantenimiento de equipo contra incendio',
  domain: 'equiposcontraincendio.com',
  url: 'https://equiposcontraincendio.com', // URL canónica, sin slash final.
  lang: 'es-MX',
  locale: 'es-MX',
  description:
    'Equipos contra incendios con venta e instalación en CDMX y Edomex: extintores, detección, hidrantes y señalización certificados, listos para tu expediente.',
  defaultImage: '/images/og/default.png', // OG default 1200×630 PNG (SVG no renderiza en WhatsApp/FB/X).

  // MEDIDO en vivo 2026-08-12: Cloudflare Pages sirve /ruta → 308 → /ruta/ (200).
  // Debe coincidir con astro.config.mjs (trailingSlash: 'always' + build.format: 'directory').
  trailingSlash: 'always' as 'never' | 'always',
  searchUrl: undefined as string | undefined,
  allowSelfReviews: false, // No se auto-emiten reseñas (Google penaliza self-serving).

  seo: {
    // Title y description alineados al análisis NeuronWriter de «equipos contra
    // incendios» (google.com.mx, 2026-09-09 · query 8b9220ebed40be2c). La SERP es
    // 60 % transaccional y `cdmx` está infraexplotado: solo el 30 % del contenido
    // y el 10 % de los H1 de la competencia lo usan. De ahí el verbo de compra y
    // la señal local. Ver el plan de contenido del index en el vault.
    title: 'Equipos contra incendios | venta e instalación CDMX', // 51 chars.
    description:
      'Equipos contra incendios con venta e instalación en CDMX y Edomex: extintores, detección, hidrantes y señalización certificados, listos para tu expediente.',
    image: '/images/og/default.png',
    titleMaxLength: 60,
    descriptionMaxLength: 160,
    appendBrand: false,
  },

  social: {
    twitter: undefined as string | undefined,
    facebook: undefined as string | undefined,
    instagram: undefined as string | undefined,
    linkedin: undefined as string | undefined,
    youtube: undefined as string | undefined,
  },

  organization: {
    name: 'Equipos Contra Incendio',
    legalName: 'Equipos Contra Incendio', // Razón social (ejemplo; usa la legal real al darla de alta).
    logo: '/images/brand/logo.svg',
    foundingDate: undefined as string | undefined, // Sin año de fundación declarado (no se inventa).
    sameAs: [] as string[], // Solo perfiles verificados (deja [] si no hay).
  },

  // business: negocio local (JSON-LD LocalBusiness).
  business: {
    type: ['LocalBusiness'] as string | string[],
    priceRange: '$$',
    address: {
      street: 'Lago Alberto 319, Piso 6, Col. Granada, Miguel Hidalgo',
      locality: 'Ciudad de México',
      region: 'CDMX',
      postalCode: '11520',
      country: 'MX',
    },
    geo: {
      lat: 19.439817 as string | number, // Lago Alberto 319, Col. Granada, Miguel Hidalgo, CDMX.
      lng: -99.185217 as string | number,
    },
    // openingHours OMITIDO a propósito (alcance SEO técnico · SOP 2026-07-10):
    // el horario era de EJEMPLO (no verificado). Emitir OpeningHoursSpecification
    // con horas placeholder = dato de negocio fabricado en el JSON-LD (rompe la
    // regla del portafolio "cero contenido fabricado"). Cuando llegue el horario
    // REAL del negocio, reponer el bloque:
    //   openingHours: { weekdays: { opens: '09:00', closes: '18:00' },
    //                   saturday: { opens: '09:00', closes: '14:00' } },
    // y localBusinessSchema() en src/lib/seo.ts lo re-emitirá automáticamente.
    areaServed: ['Ciudad de México', 'Estado de México'] as string[],
  },
} as const;

// ── KEYWORDS — 3 palabras clave del sitio (kw1 principal → kw3 variante) ───────
// Regla de metas (keyword-first): el title es "kw1 | kw2 | kw3" (kw1 primero, sin
// marca, ≤60); la description abre con kw1 y teje las 3 con naturalidad (≤160).
// Actualizado 2026-09-09 tras el análisis NeuronWriter: la keyword de la SERP es
// el PLURAL («equipos contra incendios»), no el singular que usaba el sitio.
// buildKeywordTitle() ensambla kw1 | kw2 = 51 chars; añadir kw3 daría 76, así que
// la descarta sola y el title queda exacto. kw3 sigue alimentando la description
// y metaAudit(). El ángulo del sitio frente al resto del portafolio es el
// cumplimiento: proveedor integral para la empresa que tiene que estar en regla.
export const KEYWORDS = [
  'equipos contra incendios', // kw1 · principal (plural — así se busca)
  'venta e instalación CDMX', // kw2 · transaccional + señal local
  'equipo certificado NOM',   // kw3 · ángulo diferencial; no cabe en el title
] as const;

// ── CONTACT — NAP (Name, Address, Phone) + geo + horario ─────────────────────
export const CONTACT = {
  phone: '55 3934 0581',          // Línea de contacto del negocio (2026-09-09).
  phoneE164: '+525539340581',     // tel:
  phoneRaw: '+525539340581',      // JSON-LD (idéntico a phoneE164).
  whatsapp: '525539340581',       // wa.me — E.164 sin '+'. MISMA línea que el teléfono.
  email: 'equipocontraincendios737@gmail.com',
  street: 'Lago Alberto 319, Piso 6, Col. Granada, Miguel Hidalgo',
  city: 'Ciudad de México',
  state: 'CDMX',
  postalCode: '11520',
  country: 'MX',
  geo: {
    lat: 19.439817, // Lago Alberto 319, Col. Granada, Miguel Hidalgo, CDMX.
    lng: -99.185217,
  },
  hours: {
    weekdays: 'Lun–Vie 9:00–18:00',
    saturday: 'Sáb 9:00–14:00',
    sunday: 'Dom Cerrado',
    display: 'Lun–Vie 9:00–18:00',
  },
  schedule: {
    display: 'Lun–Vie 9:00–18:00',
    weekdays: 'Lun–Vie  9:00–18:00',
    saturday: 'Sábado  9:00–14:00',
    sunday: 'Domingo  Cerrado',
  },
} as const;

// ── TAXONOMY — categorías de producto / servicios / cobertura (as const) ─────
// Fuente única de navegación, footer y rutas. Cada `slug` de categoría debe
// existir en el enum PRODUCT_CATEGORIES de content.config.ts; cada `id` de
// servicio, en SERVICE_CATEGORIES. Las categorías enlazan al catálogo (/productos)
// hasta que existan páginas por categoría (pendiente: landings /productos/<cat>).
export const TAXONOMY = {
  categories: [
    { slug: 'extintores',          label: 'Extintores',                badge: undefined, href: '/productos/' },
    { slug: 'deteccion-alarmas',   label: 'Detección y alarmas',       badge: undefined, href: '/productos/' },
    { slug: 'hidrantes-mangueras', label: 'Hidrantes y mangueras',     badge: undefined, href: '/productos/' },
    { slug: 'senalizacion',        label: 'Señalización y emergencia', badge: undefined, href: '/productos/' },
    { slug: 'accesorios',          label: 'Accesorios y refacciones',  badge: undefined, href: '/productos/' },
  ],
  // Los `id` DEBEN coincidir con los nombres de archivo de src/content/servicios/
  // (lo vigila tests/taxonomy-collections.test.mjs). Orden = orden del dropdown.
  services: [
    { id: 'instalacion',           label: 'Instalación de sistemas',   desc: 'Proyecto e instalación de sistemas y equipo contra incendio.' },
    { id: 'mantenimiento',         label: 'Mantenimiento y recarga',   desc: 'Mantenimiento preventivo y recarga de extintores conforme a norma.' },
    { id: 'prueba-hidrostatica',   label: 'Prueba hidrostática',       desc: 'Prueba de presión del cilindro cada 5 años conforme a la NOM-154.' },
    { id: 'inspeccion',            label: 'Inspección y dictamen',     desc: 'Revisión, pruebas y reporte del equipo contra incendio.' },
    { id: 'diagnostico-de-riesgo', label: 'Diagnóstico de riesgo',     desc: 'Clasificación del grado de riesgo conforme a la NOM-002-STPS.' },
    { id: 'capacitacion-dc3',      label: 'Capacitación y DC-3',       desc: 'Cursos de brigada y uso de extintores, con constancia DC-3.' },
    { id: 'gestion-documental',    label: 'Gestión documental',        desc: 'Expediente para Protección Civil y STPS, ordenado y al día.' },
  ],
  sectors: [] as readonly { slug: string; label: string }[],
  coverageStates: [
    { slug: 'cdmx',   label: 'CDMX',              type: 'operativo' as 'operativo' | 'comercial' },
    { slug: 'edomex', label: 'Estado de México', type: 'operativo' as 'operativo' | 'comercial' },
  ],
} as const;

// ── Alias planos de TAXONOMY — contrato de componentes ───────────────────────
export const PRODUCT_CATEGORIES = TAXONOMY.categories;
export const SERVICES = TAXONOMY.services;
export const SECTORS = TAXONOMY.sectors;
export const COVERAGE_STATES = TAXONOMY.coverageStates;

export type ProductCategory = (typeof TAXONOMY.categories)[number];
export type Service = (typeof TAXONOMY.services)[number];
export type Sector = (typeof TAXONOMY.sectors)[number];
export type CoverageState = (typeof TAXONOMY.coverageStates)[number];

// ── NAV — menú principal del Header (FUENTE ÚNICA: escritorio + móvil) ────────
export type NavLink = { label: string; href: string; desc?: string };
export type NavItem = {
  label: string;
  href: string;
  panel?: 'mega' | 'dropdown';
  allLabel?: string;
  items?: readonly NavLink[];
};
export const NAV: readonly NavItem[] = [
  {
    label: 'Productos',
    href: '/productos/',
    panel: 'mega',
    allLabel: 'Ver catálogo completo',
    items: PRODUCT_CATEGORIES.map((c) => ({ label: c.label, href: c.href })),
  },
  {
    label: 'Servicios',
    href: '/servicios/',
    panel: 'dropdown',
    allLabel: 'Ver todos los servicios',
    items: SERVICES.map((s) => ({ label: s.label, href: `/servicios/${s.id}/`, desc: s.desc })),
  },
  {
    label: 'Cobertura',
    href: '/cobertura/',
    panel: 'dropdown',
    allLabel: 'Ver toda la cobertura',
    items: COVERAGE_STATES.map((s) => ({ label: s.label, href: `/cobertura/${s.slug}/` })),
  },
  ...(SECTORS.length > 0
    ? [{
        label: 'Sectores',
        href: '/sectores/',
        panel: 'dropdown' as const,
        allLabel: 'Ver todos los sectores',
        items: SECTORS.map((s) => ({ label: s.label, href: `/sectores/${s.slug}/` })),
      }]
    : []),
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/contacto/' },
];

// ── SHOWCASE — vitrina de categorías de la home (cards con subcategorías) ─────
export type ShowcaseSub = { label: string; href: string };
export type ShowcaseCategory = {
  slug: string;
  label: string;
  href: string;
  image: string;
  imageAlt: string;
  badge?: string;
  blurb: string;
  subcategories: readonly ShowcaseSub[];
  ctaLabel?: string;
};
export const SHOWCASE: readonly ShowcaseCategory[] = [
  {
    slug: 'extintores',
    label: 'Extintores',
    href: '/productos/',
    image: '/images/showcase/extintores-catalogo-profesional.avif',
    imageAlt: 'Extintores PQS, CO₂ y agua para distintas clases de fuego',
    badge: 'NOM-154 · A·B·C·K',
    blurb:
      'Extintores PQS, CO₂, agua y agentes especiales para cada clase de fuego. Te ayudamos a elegir el agente y la capacidad según tu riesgo, con recarga y mantenimiento conforme a la NOM-002-STPS.',
    subcategories: [
      { label: 'PQS multipropósito', href: '/productos/' },
      { label: 'CO₂', href: '/productos/' },
      { label: 'Agente K (cocinas)', href: '/productos/' },
    ],
    ctaLabel: 'Ver extintores',
  },
  {
    slug: 'deteccion-alarmas',
    label: 'Detección y alarmas',
    href: '/productos/',
    image: '/images/servicios/instalacion-deteccion-alarma.avif',
    imageAlt: 'Detectores de humo y panel de alarma contra incendio',
    badge: 'NFPA 72',
    blurb:
      'Detectores de humo y calor, paneles, estaciones manuales y sirenas. Sistemas que avisan a tiempo para proteger personas y bienes, dimensionados a tu inmueble.',
    subcategories: [
      { label: 'Detectores de humo', href: '/productos/' },
      { label: 'Paneles de alarma', href: '/productos/' },
      { label: 'Estaciones manuales', href: '/productos/' },
    ],
    ctaLabel: 'Ver detección',
  },
  {
    slug: 'hidrantes-mangueras',
    label: 'Hidrantes y mangueras',
    href: '/productos/',
    image: '/images/showcase/gabinete-manguera-hidrante.avif',
    imageAlt: 'Gabinete con manguera contra incendio e hidrante',
    badge: 'Red NFPA 14',
    blurb:
      'Gabinetes, mangueras, hidrantes, válvulas y conexiones siamesas para tu red hidráulica contra incendio. Componentes para una respuesta efectiva ante conatos mayores.',
    subcategories: [
      { label: 'Gabinetes', href: '/productos/' },
      { label: 'Mangueras', href: '/productos/' },
      { label: 'Válvulas e hidrantes', href: '/productos/' },
    ],
    ctaLabel: 'Ver hidrantes',
  },
  {
    slug: 'senalizacion',
    label: 'Señalización y emergencia',
    href: '/productos/',
    image: '/images/showcase/senalizacion-rutas-evacuacion.svg',
    imageAlt: 'Señalización fotoluminiscente de ruta de evacuación y salida',
    badge: 'NOM-003 · Fotoluminiscente',
    blurb:
      'Señalización fotoluminiscente, lámparas de emergencia, rutas de evacuación y equipo de apoyo. Lo que tu inmueble necesita para cumplir y guiar una evacuación segura.',
    subcategories: [
      { label: 'Señales fotoluminiscentes', href: '/productos/' },
      { label: 'Lámparas de emergencia', href: '/productos/' },
      { label: 'Rutas de evacuación', href: '/productos/' },
    ],
    ctaLabel: 'Ver señalización',
  },
  {
    slug: 'sistemas-supresion',
    label: 'Sistemas contra incendio',
    href: '/productos/',
    image: '/images/showcase/sistema-rociadores-industrial.avif',
    imageAlt: 'Sistemas fijos contra incendio: rociadores y supresión de cocina',
    badge: 'Rociadores · Cocina K',
    blurb:
      'Sistemas fijos que actúan solos: rociadores, supresión de cocina clase K en campana y agente limpio para sites y cuartos eléctricos. Proyecto e instalación dimensionados a tu inmueble.',
    subcategories: [
      { label: 'Rociadores', href: '/productos/' },
      { label: 'Supresión de cocina (K)', href: '/productos/' },
      { label: 'Agente limpio', href: '/productos/' },
    ],
    ctaLabel: 'Ver sistemas',
  },
  {
    slug: 'proteccion-primeros-auxilios',
    label: 'Protección y primeros auxilios',
    href: '/productos/',
    image: '/images/showcase/proteccion-primeros-auxilios.svg',
    imageAlt: 'Botiquín de primeros auxilios y equipo de apoyo para brigada',
    badge: 'Brigada',
    blurb:
      'Equipo de apoyo para tu brigada y botiquines conforme a la NOM-020-STPS: lo que tu personal necesita para responder mientras llega la ayuda.',
    subcategories: [
      { label: 'Botiquines', href: '/productos/' },
      { label: 'Equipo de brigada', href: '/productos/' },
      { label: 'Mantas y apoyo', href: '/productos/' },
    ],
    ctaLabel: 'Ver protección',
  },
  {
    slug: 'equipo-proteccion-personal',
    label: 'Equipo de protección personal',
    href: '/productos/',
    image: '/images/showcase/equipo-proteccion-bomberos-epp.avif',
    imageAlt: 'Casco, guantes y equipo de protección personal contra incendio',
    badge: 'EPP · NOM-115',
    blurb:
      'Cascos, guantes, trajes y equipo de protección personal para brigadas de emergencia. Cumplimiento a la NOM-115-STPS para el personal de respuesta interna.',
    subcategories: [
      { label: 'Cascos y caretas', href: '/productos/' },
      { label: 'Guantes térmicos', href: '/productos/' },
      { label: 'Trajes de aproximación', href: '/productos/' },
    ],
    ctaLabel: 'Ver EPP',
  },
  {
    slug: 'accesorios-refacciones',
    label: 'Accesorios y refacciones',
    href: '/productos/',
    image: '/images/showcase/refacciones-equipo-contra-incendio.avif',
    imageAlt: 'Accesorios y refacciones para extintores y sistemas contra incendio',
    badge: 'Mantenimiento',
    blurb:
      'Mangueras de descarga, válvulas, collarines, manómetros, soportes y todo lo necesario para el mantenimiento y recarga de extintores y sistemas.',
    subcategories: [
      { label: 'Refacciones de extintor', href: '/productos/' },
      { label: 'Soportes y señales', href: '/productos/' },
      { label: 'Herramienta de servicio', href: '/productos/' },
    ],
    ctaLabel: 'Ver accesorios',
  },
];

// ── BRANCHES — sucursales (opcional). Vacío → el Footer omite el bloque. ──────
export const BRANCHES: { label: string; address: string; mapsUrl?: string }[] = [];

// ── SOCIAL — perfiles en redes (fila de iconos del Footer) ───────────────────
// Vacío a propósito: agrega solo perfiles REALES del negocio cuando existan.
export type SocialNetwork = 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'x' | 'tiktok';
export const SOCIAL: { network: SocialNetwork; label: string; url: string }[] = [];

// ── LEGAL — enlaces legales de la barra inferior del Footer ──────────────────
export const LEGAL: { label: string; href: string }[] = [
  { label: 'Aviso de privacidad', href: '/privacidad/' },
  { label: 'Términos y condiciones', href: '/terminos/' },
  { label: 'Política de cookies', href: '/cookies/' },
  { label: 'Mapa del sitio', href: '/sitemap-index.xml' },
];

// ── BLOG_CATEGORIES — taxonomía editorial del blog (SSoT) ────────────────────
// Origen: «2026-09-09 — Estrategia editorial del blog (arquitectura SEO)».
// Cada `slug` DEBE existir en ARTICLE_CATEGORIES (src/content.config.ts) y al
// revés; lo vigila tests/blog-taxonomy.test.mjs. La página de archivo
// /blog/categoria/<slug>/ lee de aquí su title, su meta y su copy: antes
// improvisaba texto genérico que además le explicaba SEO al visitante.
//
// `cta` = destino comercial del cluster. Es lo que convierte al blog en soporte
// de venta y no en un silo aislado: cada categoría empuja a una página que vende.
export type BlogCategory = {
  slug: string;
  label: string;
  /** Título de la página de archivo (≤60 caracteres). */
  seoTitle: string;
  /** Meta description de la página de archivo (140-160 caracteres). */
  seoDescription: string;
  /** Entradilla visible bajo el H1 del archivo. */
  intro: string;
  /** Párrafos de apoyo (columna derecha del hero). */
  body: readonly string[];
  /** Destino comercial del cluster. */
  cta: { label: string; href: string };
};

export const BLOG_CATEGORIES: readonly BlogCategory[] = [
  {
    slug: 'extintores',
    label: 'Extintores',
    seoTitle: 'Extintores: guías de selección y uso',
    seoDescription:
      'Guías para elegir el extintor correcto según la clase de fuego, cuántos necesita tu inmueble, dónde colocarlos y cómo usarlos. Explicado para empresas en México.',
    intro:
      'Qué extintor necesita cada área, por qué el agente importa más que el tamaño y cómo distribuirlos para cumplir con la norma.',
    body: [
      'Elegir un extintor no es cuestión de tamaño: es cuestión de qué se puede quemar en el lugar. Aquí explicamos las clases de fuego, el agente que corresponde a cada una y los criterios de cantidad y colocación que revisa un verificador.',
      'Si ya sabes qué necesitas, puedes pasar directo al catálogo; si no, escríbenos y te orientamos con el giro y el tamaño de tu inmueble.',
    ],
    cta: { label: 'Ver catálogo de extintores', href: '/productos/' },
  },
  {
    slug: 'mantenimiento',
    label: 'Mantenimiento y recarga',
    seoTitle: 'Mantenimiento y recarga de extintores',
    seoDescription:
      'Cada cuándo se recarga un extintor, qué exige la NOM-154, qué incluye un servicio serio y cómo verificar que el mantenimiento se hizo bien.',
    intro:
      'Vigencias, recarga, prueba hidrostática e inspección: lo que mantiene tu equipo operativo y tu expediente en regla.',
    body: [
      'Un extintor sin mantenimiento vigente es un extintor que no cuenta en una verificación, aunque esté colgado en la pared. En esta sección explicamos las frecuencias que pide la norma, qué incluye un servicio profesional y cómo detectar a un proveedor que solo pinta el cilindro.',
      'Damos servicio de mantenimiento, recarga, prueba hidrostática e inspección en CDMX y Estado de México.',
    ],
    cta: { label: 'Ver servicio de mantenimiento', href: '/servicios/mantenimiento/' },
  },
  {
    slug: 'sistemas',
    label: 'Sistemas contra incendio',
    seoTitle: 'Sistemas contra incendio: guías técnicas',
    seoDescription:
      'Qué integra un sistema contra incendio: detección y alarma, hidrantes, gabinetes, mangueras y supresión. Criterios de selección e instalación para inmuebles en México.',
    intro:
      'Detección y alarma, red de hidrantes, gabinetes y sistemas de supresión: qué lleva cada uno y qué se revisa al instalarlo.',
    body: [
      'Un sistema contra incendio no es un equipo, es una cadena: detectar, alertar, evacuar y combatir. Aquí desglosamos cada eslabón, cuándo conviene un panel convencional o uno direccionable, qué detector va en cada área y qué exige la instalación de gabinetes e hidrantes.',
      'Proyectamos e instalamos sistemas completos; si tienes obra nueva o remodelación, conviene revisarlo antes de cerrar el proyecto eléctrico.',
    ],
    cta: { label: 'Ver instalación de sistemas', href: '/servicios/instalacion/' },
  },
  {
    slug: 'normatividad',
    label: 'Normatividad y cumplimiento',
    seoTitle: 'Normatividad contra incendio en México',
    seoDescription:
      'NOM-002-STPS, NOM-154-SCFI, NOM-026-STPS y Protección Civil explicadas: qué obliga cada norma, a quién aplica y cómo se acredita el cumplimiento.',
    intro:
      'Qué exige cada norma mexicana a tu centro de trabajo y cómo se demuestra ante la STPS o Protección Civil.',
    body: [
      'La mayoría de las empresas no compra equipo contra incendio por gusto: lo compra porque una norma o una verificación se lo exige. En esta sección traducimos las normas aplicables a acciones concretas y verificables, con la clave completa de cada una.',
      'Si tienes una visita encima o un expediente incompleto, podemos hacer el diagnóstico y armar la documentación.',
    ],
    cta: { label: 'Ver inspección y dictamen', href: '/servicios/inspeccion/' },
  },
  {
    slug: 'capacitacion',
    label: 'Capacitación y brigadas',
    seoTitle: 'Capacitación y brigadas contra incendio',
    seoDescription:
      'Cómo se forma una brigada contra incendios, qué exige la NOM-002-STPS, cuándo se necesita constancia DC-3 y cómo se documentan los simulacros.',
    intro:
      'Brigadas, cursos con constancia DC-3 y simulacros: la parte del cumplimiento que no se compra, se entrena.',
    body: [
      'El equipo sin personal capacitado no protege a nadie y tampoco acredita cumplimiento. Aquí explicamos cómo se integra una brigada, qué funciones tiene cada rol, con qué frecuencia debe capacitarse y cómo se documenta para que cuente en una verificación.',
      'Impartimos cursos de brigada y manejo de extintores con constancia DC-3.',
    ],
    cta: { label: 'Ver capacitación y DC-3', href: '/servicios/capacitacion-dc3/' },
  },
  {
    slug: 'prevencion',
    label: 'Prevención por giro',
    seoTitle: 'Prevención de incendios por giro de negocio',
    seoDescription:
      'Qué equipo contra incendio necesita un restaurante, una oficina, una bodega o un edificio, además de señalización y rutas de evacuación obligatorias.',
    intro:
      'Qué necesita tu giro en concreto: restaurantes, oficinas, bodegas y edificios, más señalización y evacuación.',
    body: [
      'El riesgo de una cocina no se parece al de una bodega ni al de un piso de oficinas, y el equipo exigible tampoco. En esta sección resolvemos la pregunta que de verdad hace el dueño de un negocio: qué me van a pedir a mí.',
      'Hacemos el levantamiento del inmueble y proponemos el equipo mínimo exigible para tu giro, en CDMX y Estado de México.',
    ],
    cta: { label: 'Ver diagnóstico de riesgo', href: '/servicios/diagnostico-de-riesgo/' },
  },
  {
    slug: 'costos',
    label: 'Costos y decisión de compra',
    seoTitle: 'Costos de equipo contra incendio',
    seoDescription:
      'De qué depende el precio de un extintor, qué debe incluir una cotización seria de equipo contra incendio y cómo comparar proveedores sin llevarte sorpresas.',
    intro:
      'De qué depende el precio, qué debe incluir una cotización y cómo comparar proveedores sin sorpresas.',
    body: [
      'Aquí no publicamos listas de precios: publicamos las variables que los mueven —capacidad, agente, certificación, volumen, si incluye instalación o traslado— para que puedas comparar cotizaciones con criterio.',
      'Cuéntanos qué necesitas y te mandamos una cotización con el desglose completo.',
    ],
    cta: { label: 'Solicitar cotización', href: '/contacto/' },
  },
] as const;

/** Busca una categoría del blog por slug. Devuelve undefined si no existe. */
export function blogCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

// ── WA_MESSAGES — mensajes de WhatsApp pre-armados por intención ─────────────
export const WA_MESSAGES = {
  default: 'Hola, necesito información sobre equipo contra incendio.',
  cotizar: 'Hola, quiero una cotización de equipo contra incendio.',
  cotizacion: 'Hola, quiero una cotización de equipo contra incendio.',
  productos: 'Hola, estoy viendo el catálogo y quiero cotizar varios productos contra incendio.',
  servicios: 'Hola, necesito información sobre instalación, mantenimiento o recarga.',
  blog: 'Hola, leí un artículo de su blog y tengo una pregunta sobre equipo contra incendio.',
  contacto: 'Hola, quiero atención personalizada para mi proyecto contra incendio.',
  urgente: 'Hola, necesito atención urgente hoy con equipo contra incendio.',
} as const;

// ── waUrl() — constructor canónico de enlaces de WhatsApp (regla D4) ──────────
export function waUrl(message: string = WA_MESSAGES.default): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

// ── telUrl() — constructor canónico del enlace de llamada ────────────────────
export function telUrl(): string {
  return `tel:${CONTACT.phoneE164}`;
}
