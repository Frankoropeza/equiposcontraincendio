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
// ⚠️ DATOS DE EJEMPLO — sitio recién dado de alta. El NAP (teléfono, WhatsApp,
// domicilio, geo) es un PLACEHOLDER realista: reemplázalo por los datos reales del
// negocio antes de promocionar. El gate `npm run check:demo` exige que no queden
// marcadores pendientes. NO se inventan credenciales (años, reseñas, clientes).
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
    'Equipo contra incendio en México: venta de extintores, detección, hidrantes y señalización, con instalación, mantenimiento y recarga certificados. Cotiza por WhatsApp.',
  defaultImage: '/images/og/default.svg',

  trailingSlash: 'never' as 'never' | 'always',
  searchUrl: undefined as string | undefined,
  allowSelfReviews: false, // No se auto-emiten reseñas (Google penaliza self-serving).

  seo: {
    title: 'Equipo contra incendio | extintores | mantenimiento', // ≤60, keyword-first sin marca.
    description:
      'Equipo contra incendio en México: venta de extintores, detección, hidrantes y señalización, con instalación, mantenimiento y recarga certificados. Cotiza por WhatsApp.',
    image: '/images/og/default.svg',
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

  // business: negocio local (JSON-LD LocalBusiness). NAP de EJEMPLO (reemplazar por el real).
  business: {
    type: ['LocalBusiness'] as string | string[],
    priceRange: '$$',
    address: {
      street: 'Av. Cuauhtémoc 1235, Col. Santa Cruz Atoyac', // Ejemplo — domicilio real al alta.
      locality: 'Ciudad de México',
      region: 'CDMX',
      postalCode: '03310', // Ejemplo (Benito Juárez, CDMX).
      country: 'MX',
    },
    geo: {
      lat: 19.376 as string | number, // Ejemplo (Santa Cruz Atoyac, CDMX).
      lng: -99.157 as string | number,
    },
    openingHours: {
      weekdays: { opens: '09:00', closes: '18:00' }, // Horario de ejemplo.
      saturday: { opens: '09:00', closes: '14:00' } as { opens: string; closes: string } | undefined,
    },
    areaServed: ['Ciudad de México', 'Estado de México'] as string[],
  },
} as const;

// ── KEYWORDS — 3 palabras clave del sitio (kw1 principal → kw3 variante) ───────
// Regla de metas (keyword-first): el title es "kw1 | kw2 | kw3" (kw1 primero, sin
// marca, ≤60); la description abre con kw1 y teje las 3 con naturalidad (≤160).
export const KEYWORDS = [
  'equipo contra incendio', // kw1 · principal
  'extintores',             // kw2 · secundaria
  'mantenimiento',          // kw3 · variante / long-tail
] as const;

// ── CONTACT — NAP (Name, Address, Phone) + geo + horario ─────────────────────
// ⚠️ DATOS DE EJEMPLO: reemplaza teléfono, WhatsApp y domicilio por los reales
//    antes de promocionar. El número es un placeholder de ejemplo (no llamar).
export const CONTACT = {
  phone: '55 1234 5678',          // Ejemplo (display) — placeholder, no llamar.
  phoneE164: '+525512345678',     // Ejemplo (tel:).
  phoneRaw: '+525512345678',      // Ejemplo (JSON-LD).
  whatsapp: '525512345678',       // Ejemplo (wa.me, E.164 sin +).
  email: 'contacto@equiposcontraincendio.com', // Correo de dominio propio.
  street: 'Av. Cuauhtémoc 1235, Col. Santa Cruz Atoyac', // Ejemplo.
  city: 'Ciudad de México',
  state: 'CDMX',
  postalCode: '03310',            // Ejemplo (Benito Juárez, CDMX).
  country: 'MX',
  geo: {
    lat: 19.376,                  // Ejemplo.
    lng: -99.157,
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
    { slug: 'extintores',          label: 'Extintores',                badge: undefined, href: '/productos' },
    { slug: 'deteccion-alarmas',   label: 'Detección y alarmas',       badge: undefined, href: '/productos' },
    { slug: 'hidrantes-mangueras', label: 'Hidrantes y mangueras',     badge: undefined, href: '/productos' },
    { slug: 'senalizacion',        label: 'Señalización y emergencia', badge: undefined, href: '/productos' },
    { slug: 'accesorios',          label: 'Accesorios y refacciones',  badge: undefined, href: '/productos' },
  ],
  services: [
    { id: 'instalacion',   label: 'Instalación de sistemas', desc: 'Proyecto e instalación de sistemas y equipo contra incendio.' },
    { id: 'mantenimiento', label: 'Mantenimiento y recarga', desc: 'Mantenimiento preventivo y recarga de extintores conforme a norma.' },
    { id: 'inspeccion',    label: 'Inspección y dictamen',   desc: 'Revisión, pruebas y dictamen del equipo contra incendio.' },
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
    href: '/productos',
    panel: 'mega',
    allLabel: 'Ver catálogo completo',
    items: PRODUCT_CATEGORIES.map((c) => ({ label: c.label, href: c.href })),
  },
  {
    label: 'Servicios',
    href: '/servicios',
    panel: 'dropdown',
    allLabel: 'Ver todos los servicios',
    items: SERVICES.map((s) => ({ label: s.label, href: `/servicios/${s.id}`, desc: s.desc })),
  },
  {
    label: 'Cobertura',
    href: '/cobertura',
    panel: 'dropdown',
    allLabel: 'Ver toda la cobertura',
    items: COVERAGE_STATES.map((s) => ({ label: s.label, href: `/cobertura/${s.slug}` })),
  },
  ...(SECTORS.length > 0
    ? [{
        label: 'Sectores',
        href: '/sectores',
        panel: 'dropdown' as const,
        allLabel: 'Ver todos los sectores',
        items: SECTORS.map((s) => ({ label: s.label, href: `/sectores/${s.slug}` })),
      }]
    : []),
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
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
    href: '/productos',
    image: '/images/showcase/extintores-pqs-co2-agua.svg',
    imageAlt: 'Extintores PQS, CO₂ y agua para distintas clases de fuego',
    badge: 'NOM-154 · A·B·C·K',
    blurb:
      'Extintores PQS, CO₂, agua y agentes especiales para cada clase de fuego. Te ayudamos a elegir el agente y la capacidad según tu riesgo, con recarga y mantenimiento conforme a la NOM-002-STPS.',
    subcategories: [
      { label: 'PQS multipropósito', href: '/productos' },
      { label: 'CO₂', href: '/productos' },
      { label: 'Agente K (cocinas)', href: '/productos' },
    ],
    ctaLabel: 'Ver extintores',
  },
  {
    slug: 'deteccion-alarmas',
    label: 'Detección y alarmas',
    href: '/productos',
    image: '/images/showcase/deteccion-humo-alarma.svg',
    imageAlt: 'Detectores de humo y panel de alarma contra incendio',
    badge: 'NFPA 72',
    blurb:
      'Detectores de humo y calor, paneles, estaciones manuales y sirenas. Sistemas que avisan a tiempo para proteger personas y bienes, dimensionados a tu inmueble.',
    subcategories: [
      { label: 'Detectores de humo', href: '/productos' },
      { label: 'Paneles de alarma', href: '/productos' },
      { label: 'Estaciones manuales', href: '/productos' },
    ],
    ctaLabel: 'Ver detección',
  },
  {
    slug: 'hidrantes-mangueras',
    label: 'Hidrantes y mangueras',
    href: '/productos',
    image: '/images/showcase/hidrantes-mangueras-gabinete.svg',
    imageAlt: 'Gabinete con manguera contra incendio e hidrante',
    badge: 'Red NFPA 14',
    blurb:
      'Gabinetes, mangueras, hidrantes, válvulas y conexiones siamesas para tu red hidráulica contra incendio. Componentes para una respuesta efectiva ante conatos mayores.',
    subcategories: [
      { label: 'Gabinetes', href: '/productos' },
      { label: 'Mangueras', href: '/productos' },
      { label: 'Válvulas e hidrantes', href: '/productos' },
    ],
    ctaLabel: 'Ver hidrantes',
  },
  {
    slug: 'senalizacion',
    label: 'Señalización y emergencia',
    href: '/productos',
    image: '/images/showcase/senalizacion-rutas-evacuacion.svg',
    imageAlt: 'Señalización fotoluminiscente de ruta de evacuación y salida',
    badge: 'NOM-003 · Fotoluminiscente',
    blurb:
      'Señalización fotoluminiscente, lámparas de emergencia, rutas de evacuación y equipo de apoyo. Lo que tu inmueble necesita para cumplir y guiar una evacuación segura.',
    subcategories: [
      { label: 'Señales fotoluminiscentes', href: '/productos' },
      { label: 'Lámparas de emergencia', href: '/productos' },
      { label: 'Rutas de evacuación', href: '/productos' },
    ],
    ctaLabel: 'Ver señalización',
  },
  {
    slug: 'sistemas-supresion',
    label: 'Sistemas contra incendio',
    href: '/productos',
    image: '/images/showcase/sistemas-rociadores-supresion.svg',
    imageAlt: 'Sistemas fijos contra incendio: rociadores y supresión de cocina',
    badge: 'Rociadores · Cocina K',
    blurb:
      'Sistemas fijos que actúan solos: rociadores, supresión de cocina clase K en campana y agente limpio para sites y cuartos eléctricos. Proyecto e instalación dimensionados a tu inmueble.',
    subcategories: [
      { label: 'Rociadores', href: '/productos' },
      { label: 'Supresión de cocina (K)', href: '/productos' },
      { label: 'Agente limpio', href: '/productos' },
    ],
    ctaLabel: 'Ver sistemas',
  },
  {
    slug: 'proteccion-primeros-auxilios',
    label: 'Protección y primeros auxilios',
    href: '/productos',
    image: '/images/showcase/proteccion-primeros-auxilios.svg',
    imageAlt: 'Botiquín de primeros auxilios y equipo de apoyo para brigada',
    badge: 'Brigada',
    blurb:
      'Equipo de apoyo para tu brigada y botiquines conforme a la NOM-020-STPS: lo que tu personal necesita para responder mientras llega la ayuda.',
    subcategories: [
      { label: 'Botiquines', href: '/productos' },
      { label: 'Equipo de brigada', href: '/productos' },
      { label: 'Mantas y apoyo', href: '/productos' },
    ],
    ctaLabel: 'Ver protección',
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
  { label: 'Aviso de privacidad', href: '/privacidad' },
  { label: 'Términos y condiciones', href: '/terminos' },
  { label: 'Política de cookies', href: '/cookies' },
  { label: 'Mapa del sitio', href: '/sitemap-index.xml' },
];

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
