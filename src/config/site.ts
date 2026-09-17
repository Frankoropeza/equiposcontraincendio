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
//   ✓ IDENTIDAD confirmada por Frank 2026-09-10: la empresa se llama CONINC
//     («contra incendios» con INC), con más de 35 años vendiendo equipo contra
//     incendio en el mercado mexicano. Se publica «más de 35 años» y NUNCA un año
//     de fundación (no está declarado). Horario oficial Lun–Vie 9–18 y Sáb 9–14.
//     Servicio, por ahora, en toda la CDMX y el Estado de México.
//   ⚠ PENDIENTE: razón social y RFC. Hasta que lleguen, el responsable legal que
//     publican privacidad/términos es el nombre comercial CONINC y
//     `organization.legalName` queda sin definir (el JSON-LD no emite legalName).
// El gate `npm run check:demo` valida forma y coherencia del NAP en cada build.
// NO se inventan credenciales (reseñas, clientes, certificaciones). La única
// credencial de trayectoria es la que declaró el negocio: COMPANY.experience.
// ============================================================================

// ── SITE — identidad de marca + SEO + organización + negocio local ───────────
export const SITE = {
  name: 'CONINC',                           // Nombre comercial (confirmado 2026-09-10).
  brand: 'CONINC',                          // Marca para header/footer/logo.
  tagline: 'Equipos contra incendios con más de 35 años en el mercado mexicano',
  domain: 'equiposcontraincendio.com',
  url: 'https://equiposcontraincendio.com', // URL canónica, sin slash final.
  lang: 'es-MX',
  locale: 'es-MX',
  description:
    'Equipo contra incendio en CDMX y Edomex: venta de equipos contra incendios, instalación y mantenimiento con equipo certificado y documentación en regla.',
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
    // 2026-09-11 — Ahrefs (MX): «equipo contra incendio» 350/mes y «equipo contra
    // incendios» 100, contra 70 del plural «equipos contra incendios». Frank eligió
    // el singular para title y H1; el plural se queda en el cuerpo.
    title: 'Equipo contra incendio | venta de equipo contra incendios', // 57 car. — decisión de Frank 2026-09-11.
    // 2026-09-15 — description según terms_txt.desc de NEURONwriter (query 4193151777ab1331).
    description:
      'Equipo contra incendio en CDMX y Edomex: extintores, detectores, mangueras y sistemas contra incendio certificados, con asesoría, instalación y mantenimiento.',
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
    name: 'CONINC',
    // Variantes con que el cliente puede buscar la marca (JSON-LD alternateName).
    alternateName: ['CONINC Contra Incendios', 'Coninc'] as string[],
    slogan: 'Equipos contra incendios con más de 35 años en el mercado mexicano',
    legalName: undefined as string | undefined, // Razón social PENDIENTE (Frank la enviará). No se emite hasta tenerla.
    logo: '/images/brand/logo.png',
    foundingDate: undefined as string | undefined, // Solo «más de 35 años»: sin año exacto por decisión de Frank.
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
    // Horario REAL confirmado por Frank 2026-09-10 → se emite como
    // OpeningHoursSpecification en localBusinessSchema() (src/lib/seo.ts).
    openingHours: {
      weekdays: { opens: '09:00', closes: '18:00' },
      saturday: { opens: '09:00', closes: '14:00' },
    },
    areaServed: ['Ciudad de México', 'Estado de México'] as string[],
  },
} as const;

// ── KEYWORDS — 3 palabras clave del sitio (kw1 principal → kw3 variante) ───────
// Regla de metas (keyword-first): el title es "kw1 | kw2 | kw3" (kw1 primero, sin
// marca, ≤60); la description abre con kw1 y teje las 3 con naturalidad (≤160).
// Actualizado 2026-09-09 tras el análisis NeuronWriter: la keyword de la SERP es
// el PLURAL («equipos contra incendios»), no el singular que usaba el sitio.
// buildKeywordTitle() ensambla kw1 | kw2 = 60 chars justos (el límite); añadir kw3
// daría 85, así que la descarta sola. kw3 sigue alimentando la description y
// metaAudit(). El ángulo del sitio frente al resto del portafolio es el
// cumplimiento: proveedor integral para la empresa que tiene que estar en regla.
//
// kw2 repite kw1 completa a propósito (decisión de Frank, 2026-09-09). metaAudit()
// lo marcará como token repetido en el title: es un aviso, no un error, y el
// patrón lo usan varios competidores de esta SERP (p. ej. IND LEMER, rank 2:
// «Extintores y equipos contra incendios - Equipos Contra Incendio»).
export const KEYWORDS = [
  'equipo contra incendio',            // kw1 · principal (Ahrefs MX 2026-09-11: 350/mes; el plural, 70)
  'venta de equipo contra incendios',  // kw2 · transaccional; repite kw1 a propósito
  'equipo certificado NOM',            // kw3 · ángulo diferencial; no cabe en el title
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
  // Horario oficial confirmado por Frank 2026-09-10.
  hours: {
    weekdays: 'Lunes a viernes 9:00–18:00',
    saturday: 'Sábado 9:00–14:00',
    sunday: 'Domingo cerrado',
    display: 'Lun–Vie 9:00–18:00 · Sáb 9:00–14:00',
  },
  schedule: {
    display: 'Lun–Vie 9–18 · Sáb 9–14',
    weekdays: 'Lun–Vie  9:00–18:00',
    saturday: 'Sábado  9:00–14:00',
    sunday: 'Domingo  Cerrado',
  },
} as const;

// ── COMPANY — ficha de la empresa (FUENTE ÚNICA de identidad institucional) ──
// Todo lo que el sitio afirma sobre QUIÉN es la empresa sale de aquí: /nosotros/,
// el footer, la barra de confianza, el JSON-LD y los textos legales. Datos
// confirmados por Frank el 2026-09-10. Regla: nada de este bloque se amplía sin
// confirmación del negocio (ni año de fundación, ni clientes, ni certificaciones).
export const COMPANY = {
  name: 'CONINC',
  /** Origen del nombre, tal como lo explica el negocio. */
  nameOrigin: 'CONINC viene de «contra incendios»: CON de contra e INC de incendios.',
  descriptor: 'Equipos contra incendios',
  experience: {
    years: 35,
    /** Forma canónica de publicarlo. Nunca «desde 19xx»: no hay año declarado. */
    label: 'Más de 35 años',
    long: 'Más de 35 años vendiendo equipo contra incendio en el mercado mexicano',
  },
  market: 'México',
  /** Cobertura vigente. «Por el momento»: se ampliará cuando el negocio lo decida. */
  coverage: 'Toda la Ciudad de México y el Estado de México',
  coverageShort: 'CDMX y Estado de México',
  office: 'Lago Alberto 319, Piso 6, Col. Granada, Miguel Hidalgo, 11520, Ciudad de México',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=19.439817,-99.185217',
  /** Qué hace la empresa, en una frase (footer, schema description de /nosotros/). */
  summary:
    'CONINC vende, instala y da mantenimiento a equipo contra incendio para empresas e inmuebles de la Ciudad de México y el Estado de México, con más de 35 años de experiencia en el mercado mexicano.',
  /** Razón social y RFC: PENDIENTES. Mientras sean undefined no se publican. */
  legalName: undefined as string | undefined,
  rfc: undefined as string | undefined,
} as const;

// ── TAXONOMY — categorías de producto / servicios / cobertura (as const) ─────
// Fuente única de navegación, footer y rutas. Cada `slug` de categoría debe
// existir en el enum PRODUCT_CATEGORIES de content.config.ts; cada `id` de
// servicio, en SERVICE_CATEGORIES. Cada categoría enlaza a su página L3
// (/productos/<cat>/) cuando existe; mientras no, al catálogo (/productos/).
// ProductLayout usa este `href` para decidir si la ficha lleva la miga de
// categoría: solo cuando apunta a una L3 real, nunca al catálogo genérico.
export const TAXONOMY = {
  categories: [
    { slug: 'extintores',          label: 'Extintores',                badge: undefined, href: '/productos/extintores/' },
    { slug: 'deteccion-alarmas',   label: 'Detección y alarmas',       badge: undefined, href: '/productos/deteccion-alarmas/' },
    { slug: 'hidrantes-mangueras', label: 'Hidrantes y mangueras',     badge: undefined, href: '/productos/hidrantes-mangueras/' },
    { slug: 'senalizacion',        label: 'Señalización y emergencia', badge: undefined, href: '/productos/senalizacion/' },
    { slug: 'accesorios',          label: 'Accesorios y refacciones',  badge: undefined, href: '/productos/accesorios/' },
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

// ── TOOLS — herramientas de utilidad pública (SSoT) ─────────────────────────
// Origen: «2026-09-09 — Activos de utilidad pública para tráfico e interlinking».
// Calculadoras y verificadores gratuitos, sin registro. Son el activo con más
// potencial de conseguir enlaces del plan: una herramienta útil se enlaza y se
// comparte; un artículo se lee y se olvida.
//
// REGLA: orientan, no dictaminan. Cada herramienta cita la norma de la que sale
// su criterio y deja claro que el dictamen lo firma quien está facultado.
export type Tool = {
  slug: string;
  label: string;
  /** Frase de una línea para el hub y el menú. */
  desc: string;
  /** Norma de la que sale el criterio (se cita en la página). */
  norm?: string;
  /** Imagen de la tarjeta (CategoryCard) y del hero de la sección. */
  image: string;
  imageAlt: string;
};

export const TOOLS: readonly Tool[] = [
  {
    slug: 'riesgo-de-incendio',
    label: 'Riesgo de incendio: ordinario o alto',
    desc: 'Clasifica tu centro de trabajo con los mismos criterios que aplica la autoridad.',
    norm: 'NOM-002-STPS-2010',
    image: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
    imageAlt: 'Inspección de sistema de alarma y extintor en un centro de trabajo',
  },
  {
    slug: 'cuantos-extintores-necesito',
    label: 'Cuántos extintores necesito',
    desc: 'Mínimo de extintores por superficie y qué agente corresponde a cada área.',
    norm: 'NOM-002-STPS-2010',
    image: '/images/showcase/extintores-variedad-colores-catalogo.avif',
    imageAlt: 'Extintores de distintos agentes y capacidades en catálogo',
  },
  {
    slug: 'verifica-tu-extintor',
    label: 'Verifica tu extintor',
    desc: 'Revisa si el servicio que te dieron es real y no una calcomanía.',
    norm: 'NOM-154-SCFI-2005',
    image: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
    imageAlt: 'Revisión de gabinete de hidrante y extintor en sitio',
  },
] as const;

// ── PLANTILLAS — nota de arquitectura ───────────────────────────────────────
// Los formatos descargables (bitácora de extintores, acta de simulacro, censo
// de brigada) NO viven aquí: son una Content Collection (`plantillas`), porque
// son entidad repetible con cuerpo propio (regla D1). site.ts sólo aporta el
// enlace de menú a /plantillas/.
//
// Y NO existe una sección /normas/ paralela: las fichas por norma son el
// cluster `normatividad` del blog. Duplicarlas habría canibalizado los
// artículos del mapa editorial — una URL por intención.

// ── NAV — menú principal del Header (FUENTE ÚNICA: escritorio + móvil) ────────
// Rediseño 2026-09-10. Seis entradas en vez de ocho: Herramientas, Protección
// Civil y Blog se agrupan en «Recursos», con lo que la barra de escritorio cabe
// desde 1024 px (antes el menú hamburguesa cubría hasta 1279 px) y «Nosotros»,
// que no estaba en el menú, entra como enlace directo.
//
// Contrato de los paneles:
//   • panel 'mega'     → `groups` (columnas de enlaces con descripción) + `promo`
//                        (tarjeta de acción a la derecha). Ancho completo.
//   • panel 'dropdown' → `items` (lista corta). Se ancla bajo su disparador.
//   • `href` + `allLabel` = enlace «ver todo» a la página hub de la sección; va
//     en la cabecera del panel y como primera fila del acordeón móvil.
//   • `match` = prefijos de ruta que marcan la entrada como activa.
//   • `sub` = subtítulo de una línea (acordeón móvil y cabecera del panel).
//
// Reglas de contenido: etiquetas ≤ 32 caracteres; `desc` ≤ 60 caracteres, una
// sola línea a 1280 px; nada se afirma que no esté en la página de destino.
// Las categorías de producto sin página L3 propia enlazan a su ficha real, no
// al catálogo: cuatro enlaces a /productos/ con textos distintos confunden al
// usuario y al rastreador. TAXONOMY.categories[].href NO se toca (ProductLayout
// lo usa para decidir la miga de categoría).
export type NavLink = { label: string; href: string; desc?: string; external?: boolean };
export type NavGroup = { title: string; href?: string; links: readonly NavLink[] };
export type NavPromo = {
  eyebrow: string;
  title: string;
  text: string;
  cta: NavLink;
  secondary?: NavLink;
};
export type NavItem = {
  label: string;
  href: string;
  sub?: string;
  panel?: 'mega' | 'dropdown';
  allLabel?: string;
  match?: readonly string[];
  groups?: readonly NavGroup[];
  items?: readonly NavLink[];
  promo?: NavPromo;
};

export const NAV: readonly NavItem[] = [
  {
    label: 'Productos',
    href: '/productos/',
    sub: 'Extintores, detección, hidrantes y señalización',
    panel: 'mega',
    allLabel: 'Ver todos los productos',
    groups: [
      {
        title: 'Categorías',
        href: '/productos/',
        links: [
          { label: 'Extintores portátiles',     href: '/productos/extintores/',                         desc: 'PQS, CO₂, agua, clase K y agente limpio' },
          { label: 'Detección y alarmas',       href: '/productos/deteccion-alarmas/',                  desc: 'Detectores de humo y alarma contra incendio' },
          { label: 'Hidrantes y mangueras',     href: '/productos/hidrantes-mangueras/',               desc: 'Gabinetes con manguera contra incendio' },
          { label: 'Señalización y emergencia', href: '/productos/senalizacion/',                       desc: 'Señalización fotoluminiscente de evacuación' },
          { label: 'Accesorios y refacciones',  href: '/productos/accesorios/',                          desc: 'Soportes, gabinetes y accesorios para extintor' },
        ],
      },
      {
        title: 'Extintores por agente',
        href: '/productos/extintores/',
        links: [
          { label: 'Polvo químico seco PQS', href: '/productos/extintor-pqs/',           desc: 'Fuegos clase A, B y C · uso general' },
          { label: 'Dióxido de carbono CO₂', href: '/productos/extintor-co2/',           desc: 'Riesgo eléctrico y líquidos inflamables' },
          { label: 'Clase K',                href: '/productos/extintor-clase-k/',       desc: 'Cocinas con aceites y grasas' },
          { label: 'Agua y espuma AFFF',     href: '/productos/extintor-agua/',          desc: 'Agua a presión, nebulizada y espuma' },
          { label: 'Agente limpio',          href: '/productos/extintor-agente-limpio/', desc: 'Equipo electrónico, sin residuo' },
        ],
      },
      {
        title: 'Equipo de emergencia',
        href: '/productos/',
        links: [
          { label: 'Señalamientos de seguridad', href: '/productos/senalamientos-de-seguridad/', desc: 'Protección civil e industriales NOM-026' },
          { label: 'Lámparas de emergencia',     href: '/productos/lamparas-de-emergencia/',     desc: 'Rutas de evacuación y áreas de riesgo' },
          { label: 'Botiquín para empresa',      href: '/productos/botiquin-primeros-auxilios/', desc: 'Lo que pide la ley y su contenido' },
          { label: 'Rociadores contra incendio', href: '/productos/rociadores-contra-incendio/', desc: 'Venta e instalación de la red' },
          { label: 'Detector de gas',            href: '/productos/detector-de-gas/',            desc: 'Gas LP y natural, con corte automático' },
        ],
      },
    ],
    promo: {
      eyebrow: 'Herramienta gratuita',
      title: '¿Cuántos extintores necesitas?',
      text: 'Calcula el mínimo por superficie y el agente de cada área con el criterio de la NOM-002-STPS-2010.',
      cta: { label: 'Calcular extintores', href: '/herramientas/cuantos-extintores-necesito/' },
      secondary: { label: 'Cotizar por WhatsApp', href: 'wa:productos', external: true },
    },
  },
  {
    label: 'Servicios',
    href: '/servicios/',
    sub: 'Instalación, mantenimiento y cumplimiento',
    panel: 'mega',
    allLabel: 'Ver todos los servicios',
    groups: [
      {
        title: 'Instalación y mantenimiento',
        links: [
          { label: 'Instalación de sistemas', href: '/servicios/instalacion/',         desc: 'Proyecto e instalación de equipo contra incendio' },
          { label: 'Mantenimiento y recarga', href: '/servicios/mantenimiento/',       desc: 'Mantenimiento anual y recarga de extintores' },
          { label: 'Prueba hidrostática',     href: '/servicios/prueba-hidrostatica/', desc: 'Prueba del cilindro cada 5 años (NOM-154)' },
          { label: 'Inspección y dictamen',   href: '/servicios/inspeccion/',          desc: 'Revisión, pruebas y reporte del equipo' },
        ],
      },
      {
        title: 'Cumplimiento y capacitación',
        links: [
          { label: 'Diagnóstico de riesgo', href: '/servicios/diagnostico-de-riesgo/', desc: 'Grado de riesgo conforme a la NOM-002-STPS' },
          { label: 'Capacitación y DC-3',   href: '/servicios/capacitacion-dc3/',      desc: 'Brigada y uso de extintores, con DC-3' },
          { label: 'Gestión documental',    href: '/servicios/gestion-documental/',    desc: 'Expediente para Protección Civil y STPS' },
        ],
      },
    ],
    promo: {
      eyebrow: 'Servicio en sitio',
      title: 'CDMX y Estado de México',
      text: 'Agenda mantenimiento, recarga o inspección y recibe la evidencia que te piden STPS y Protección Civil.',
      cta: { label: 'Agendar servicio', href: 'wa:servicios', external: true },
      secondary: { label: 'Zonas de cobertura', href: '/cobertura/' },
    },
  },
  {
    label: 'Cobertura',
    href: '/cobertura/',
    sub: 'Toda la CDMX y el Estado de México',
    panel: 'dropdown',
    allLabel: 'Ver cobertura',
    items: [
      { label: 'Ciudad de México', href: '/cobertura/cdmx/',   desc: 'Servicio en toda la Ciudad de México' },
      { label: 'Estado de México', href: '/cobertura/edomex/', desc: 'Servicio en el Estado de México' },
    ],
  },
  {
    label: 'Recursos',
    href: '/recursos/',
    sub: 'Herramientas, Protección Civil y guías',
    panel: 'mega',
    allLabel: 'Ver todos los recursos',
    match: ['/recursos/', '/herramientas/', '/plantillas/', '/proteccion-civil/', '/blog/'],
    groups: [
      {
        title: 'Por tipo de negocio',
        href: '/proteccion-civil/',
        links: [
          { label: 'Restaurantes', href: '/proteccion-civil/restaurantes/', desc: 'Clase K, detector de gas y dictamen de gas LP' },
          { label: 'Oficinas', href: '/proteccion-civil/oficinas/', desc: 'Quién presenta qué y el extintor del site' },
          { label: 'Locales comerciales', href: '/proteccion-civil/locales-comerciales/', desc: 'Extintor, señales y visto bueno municipal' },
          { label: 'Guarderías', href: '/proteccion-civil/guarderias/', desc: 'Lo que exige la NOM-009 al centro' },
        ],
      },
      {
        title: 'Herramientas',
        href: '/herramientas/',
        links: [
          { label: 'Cuántos extintores necesito', href: '/herramientas/cuantos-extintores-necesito/', desc: 'Mínimo por superficie y agente por área' },
          { label: 'Riesgo de incendio',          href: '/herramientas/riesgo-de-incendio/',          desc: 'Ordinario o alto según la NOM-002-STPS' },
          { label: 'Verifica tu extintor',        href: '/herramientas/verifica-tu-extintor/',        desc: 'Revisión guiada para comprobar el servicio' },
          { label: 'Formatos descargables',       href: '/plantillas/',                               desc: 'Bitácora, acta de simulacro y brigada' },
        ],
      },
      {
        title: 'Protección Civil',
        href: '/proteccion-civil/',
        links: [
          { label: 'Qué exige Protección Civil', href: '/proteccion-civil/',        desc: 'Comparativa entre CDMX y Edomex' },
          { label: 'Programa Interno en CDMX',   href: '/proteccion-civil/cdmx/',   desc: 'Trámite digital ante la SGIRPC' },
          { label: 'Programa en Edomex',         href: '/proteccion-civil/edomex/', desc: 'Requisitos, plazo y fundamento' },
        ],
      },
    ],
    promo: {
      eyebrow: 'Herramienta gratuita',
      title: 'Verifica tu extintor',
      text: 'Revisa si el servicio que te dieron es real y no solo una calcomanía.',
      cta: { label: 'Verificar mi extintor', href: '/herramientas/verifica-tu-extintor/' },
      secondary: { label: 'Todas las guías del blog', href: '/blog/' },
    },
  },
  { label: 'Nosotros', href: '/nosotros/', sub: 'Más de 35 años en el mercado mexicano' },
  { label: 'Contacto', href: '/contacto/', sub: 'WhatsApp, teléfono y oficinas' },
];

/**
 * Resuelve el `href` de un enlace del menú. Los destinos de WhatsApp se
 * declaran como `wa:<clave de WA_MESSAGES>` para que el mensaje precargado
 * salga de la fuente única y el enlace se arme siempre con waUrl().
 */
export function navHref(href: string): string {
  if (href.startsWith('wa:')) {
    const key = href.slice(3) as keyof typeof WA_MESSAGES;
    return waUrl(WA_MESSAGES[key] ?? WA_MESSAGES.default);
  }
  return href;
}

// ── SECTION_MENU — barra de secciones bajo el hero (FUENTE ÚNICA) ────────────
// Desacoplada de NAV desde el rediseño del header (2026-09-10): el menú
// principal agrupa Herramientas, Protección Civil y Blog en «Recursos», pero la
// barra de secciones conserva sus seis accesos directos, que son los que el
// visitante usa para saltar de sección sin abrir paneles.
export const SECTION_MENU: readonly { label: string; href: string }[] = [
  { label: 'Productos',        href: '/productos/' },
  { label: 'Servicios',        href: '/servicios/' },
  { label: 'Cobertura',        href: '/cobertura/' },
  { label: 'Herramientas',     href: '/herramientas/' },
  { label: 'Protección Civil', href: '/proteccion-civil/' },
  { label: 'Blog',             href: '/blog/' },
];

export const SECTION_MENU_SUB: Record<string, string> = {
  Productos: 'Equipos contra incendios',
  Servicios: 'Instalación y mantenimiento',
  Cobertura: 'Zonas que atendemos',
  Herramientas: 'Calculadoras y formatos',
  'Protección Civil': 'Qué exige por entidad',
  Blog: 'Guías y normatividad',
};

/** Items del menú de secciones, con subtítulo. */
export function sectionMenuItems(): { label: string; href: string; sub: string }[] {
  return SECTION_MENU.map((n) => ({
    label: n.label,
    href: n.href,
    sub: SECTION_MENU_SUB[n.label] ?? 'Ir a la sección',
  }));
}

// ── FOOTER_NAV — columnas de enlaces del Footer (FUENTE ÚNICA) ───────────────
// Rediseño 2026-09-10: cuatro columnas del mismo tipo (enlaces), en vez de siete
// columnas mezcladas con la ficha de la empresa. Etiquetas cortas: el footer es
// un índice, no una vitrina (los títulos SEO completos de las fichas partían en
// dos líneas). Sin duplicados entre columnas. En móvil cada columna es un
// acordeón; en escritorio van abiertas.
export const FOOTER_NAV: readonly NavGroup[] = [
  {
    title: 'Productos',
    href: '/productos/',
    links: [
      { label: 'Catálogo completo',         href: '/productos/' },
      { label: 'Extintores portátiles',     href: '/productos/extintores/' },
      { label: 'Extintor PQS',              href: '/productos/extintor-pqs/' },
      { label: 'Extintor CO₂',              href: '/productos/extintor-co2/' },
      { label: 'Extintor clase K',          href: '/productos/extintor-clase-k/' },
      { label: 'Detección y alarmas',       href: '/productos/deteccion-alarmas/' },
      { label: 'Hidrantes y mangueras',     href: '/productos/hidrantes-mangueras/' },
      { label: 'Señalización y emergencia', href: '/productos/senalizacion/' },
    ],
  },
  {
    title: 'Servicios',
    href: '/servicios/',
    links: [
      { label: 'Todos los servicios',     href: '/servicios/' },
      { label: 'Instalación de sistemas', href: '/servicios/instalacion/' },
      { label: 'Mantenimiento y recarga', href: '/servicios/mantenimiento/' },
      { label: 'Prueba hidrostática',     href: '/servicios/prueba-hidrostatica/' },
      { label: 'Inspección y dictamen',   href: '/servicios/inspeccion/' },
      { label: 'Diagnóstico de riesgo',   href: '/servicios/diagnostico-de-riesgo/' },
      { label: 'Capacitación y DC-3',     href: '/servicios/capacitacion-dc3/' },
      { label: 'Gestión documental',      href: '/servicios/gestion-documental/' },
    ],
  },
  {
    title: 'Recursos',
    href: '/herramientas/',
    links: [
      { label: 'Herramientas',                href: '/herramientas/' },
      { label: 'Cuántos extintores necesito', href: '/herramientas/cuantos-extintores-necesito/' },
      { label: 'Riesgo de incendio',          href: '/herramientas/riesgo-de-incendio/' },
      { label: 'Verifica tu extintor',        href: '/herramientas/verifica-tu-extintor/' },
      { label: 'Formatos descargables',       href: '/plantillas/' },
      { label: 'Protección Civil',            href: '/proteccion-civil/' },
      { label: 'Blog',                        href: '/blog/' },
    ],
  },
  {
    title: 'Empresa',
    href: '/nosotros/',
    links: [
      { label: 'Nosotros',                  href: '/nosotros/' },
      { label: 'Cobertura',                 href: '/cobertura/' },
      { label: 'Servicio en CDMX',          href: '/cobertura/cdmx/' },
      { label: 'Servicio en Edomex',        href: '/cobertura/edomex/' },
      { label: 'Contacto',                  href: '/contacto/' },
      { label: 'Cotizar por WhatsApp',      href: 'wa:cotizacion', external: true },
    ],
  },
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
// Reglas de contenido (las asume CategoryCard para mantener la simetría):
//   • blurb de 77–90 caracteres. La caja reserva 3 líneas; por encima de ~95
//     caracteres la elipsis aparece en las tarjetas cuyo texto rompe peor
//     (medido en la vitrina de la home a 1440 px de ancho de ventana).
//   • exactamente 3 subcategorías, con etiqueta ≤ 24 caracteres (sin wrap).
//   • ctaLabel = ANCHOR TEXT SEO: la palabra clave limpia de la sección a la
//     que lleva el botón, sin el verbo "ver" y sin genéricos repetidos. Es un
//     enlace interno real, así que su texto debe describir el destino — no
//     decir "Catálogo" ocho veces. Se elige distinto del título de la tarjeta
//     para variar el anchor sin perder la keyword.
//     Tope práctico de 24 caracteres. El límite real depende del ancho de los
//     glifos, no del conteo: «Extintores contra incendio» (26) entra y
//     «Señalización de emergencia» (26) no. Si se roza el tope, hay que
//     medirlo en el navegador antes de darlo por bueno.
//   • href → la página L3 de la categoría cuando existe (/productos/extintores/);
//     si todavía no existe, el ancla real de su módulo en /productos/.
export const SHOWCASE: readonly ShowcaseCategory[] = [
  {
    slug: 'extintores',
    label: 'Extintores portátiles',
    href: '/productos/extintores/',
    image: '/images/showcase/extintores-catalogo-profesional.avif',
    imageAlt: 'Extintores PQS, CO₂ y agente K para distintas clases de fuego',
    badge: 'NOM-154 · Clases A B C K',
    blurb:
      'Extintores de PQS, CO₂, agua y agente K para cada clase de fuego, con recarga anual.',
    subcategories: [
      { label: 'Extintores PQS ABC', href: '/productos/extintor-pqs/' },
      { label: 'Extintores de CO₂', href: '/productos/extintor-co2/' },
      { label: 'Extintores clase K', href: '/productos/extintor-clase-k/' },
    ],
    ctaLabel: 'Venta de extintores',
  },
  {
    slug: 'deteccion-alarmas',
    label: 'Detección y alarmas',
    href: '/productos/deteccion-alarmas/',
    image: '/images/servicios/instalacion-deteccion-alarma.avif',
    imageAlt: 'Detectores de humo y panel de alarma contra incendio',
    badge: 'NFPA 72 · Detección temprana',
    blurb:
      'Detectores de humo y calor, paneles direccionables, estaciones y sirenas.',
    subcategories: [
      { label: 'Detectores de humo', href: '/productos/detector-humo-fotoelectrico/' },
      { label: 'Detectores de gas', href: '/productos/detector-de-gas/' },
      { label: 'Paneles direccionables', href: '/productos/deteccion-alarmas/#panel-alarma' },
    ],
    ctaLabel: 'Alarmas contra incendios',
  },
  {
    slug: 'hidrantes-mangueras',
    label: 'Hidrantes y mangueras',
    href: '/productos/hidrantes-mangueras/',
    image: '/images/showcase/gabinete-manguera-hidrante.avif',
    imageAlt: 'Gabinete con manguera contra incendio e hidrante',
    badge: 'NFPA 14 · Red hidráulica',
    blurb:
      'Gabinetes, mangueras contra incendio, hidrantes, válvulas y siamesas para tu red.',
    subcategories: [
      { label: 'Gabinetes y mangueras', href: '/productos/gabinete-manguera-contra-incendio/' },
      { label: 'Hidrantes y siamesas', href: '/productos/hidrantes-mangueras/#toma-siamesa' },
      { label: 'Válvulas de control', href: '/productos/hidrantes-mangueras/#valvulas' },
    ],
    ctaLabel: 'Mangueras contra incendio',
  },
  {
    slug: 'senalizacion',
    label: 'Señalización y emergencia',
    href: '/productos/senalizacion/',
    image: '/images/productos/senalizacion-luces-emergencia.avif',
    imageAlt: 'Señal de salida de emergencia, lámpara autónoma y plano de evacuación',
    badge: 'NOM-003 · Fotoluminiscente',
    blurb:
      'Señalización fotoluminiscente, lámparas de emergencia y rutas de evacuación NOM-003.',
    subcategories: [
      { label: 'Señales de evacuación', href: '/productos/senalizacion-fotoluminiscente/' },
      { label: 'Lámparas de emergencia', href: '/productos/lamparas-de-emergencia/' },
      { label: 'Señales de seguridad', href: '/productos/senalamientos-de-seguridad/' },
    ],
    ctaLabel: 'Señales de emergencia',
  },
  {
    slug: 'sistemas-supresion',
    label: 'Sistemas contra incendio',
    href: '/productos/#sistemas-supresion',
    image: '/images/showcase/sistema-rociadores-industrial.avif',
    imageAlt: 'Sistemas fijos contra incendio: rociadores y supresión de cocina',
    badge: 'Rociadores · Agente limpio',
    blurb:
      'Rociadores automáticos, supresión de cocina clase K y agente limpio para tu site.',
    subcategories: [
      { label: 'Rociadores automáticos', href: '/productos/rociadores-contra-incendio/' },
      { label: 'Supresión de cocina K', href: '/productos/#sistemas-supresion' },
      { label: 'Agente limpio', href: '/productos/#sistemas-supresion' },
    ],
    ctaLabel: 'Sistemas de supresión',
  },
  {
    slug: 'proteccion-primeros-auxilios',
    label: 'Protección y primeros auxilios',
    href: '/productos/#proteccion-primeros-auxilios',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
    imageAlt: 'Brigada revisando el equipo contra incendio de la planta',
    badge: 'Brigadas y botiquines',
    blurb:
      'Botiquines y equipo de apoyo para que tu brigada responda a tiempo.',
    subcategories: [
      { label: 'Botiquines', href: '/productos/botiquin-primeros-auxilios/' },
      { label: 'Equipo de brigada', href: '/productos/#proteccion-primeros-auxilios' },
      { label: 'Mantas y camillas', href: '/productos/#proteccion-primeros-auxilios' },
    ],
    ctaLabel: 'Botiquines y brigada',
  },
  {
    slug: 'equipo-proteccion-personal',
    label: 'Equipo de protección personal',
    href: '/productos/#equipo-proteccion-personal',
    image: '/images/showcase/equipo-proteccion-bomberos-epp.avif',
    imageAlt: 'Casco, guantes y equipo de protección personal contra incendio',
    badge: 'EPP · NOM-115',
    blurb:
      'Cascos, guantes térmicos y trajes de aproximación conforme a la NOM-115-STPS.',
    subcategories: [
      { label: 'Cascos y caretas', href: '/productos/#equipo-proteccion-personal' },
      { label: 'Guantes térmicos', href: '/productos/#equipo-proteccion-personal' },
      { label: 'Trajes de aproximación', href: '/productos/#equipo-proteccion-personal' },
    ],
    ctaLabel: 'Equipo de protección',
  },
  {
    slug: 'accesorios-refacciones',
    label: 'Accesorios y refacciones',
    href: '/productos/accesorios/',
    image: '/images/showcase/refacciones-equipo-contra-incendio.avif',
    imageAlt: 'Accesorios y refacciones para extintores y sistemas contra incendio',
    badge: 'Mantenimiento · Recarga',
    blurb:
      'Mangueras de descarga, válvulas, collarines, manómetros y soportes de extintor.',
    subcategories: [
      { label: 'Refacciones de extintor', href: '/productos/accesorios/#refacciones' },
      { label: 'Soportes y bases', href: '/productos/soportes-accesorios-extintor/' },
      { label: 'Gabinetes para extintor', href: '/productos/accesorios/#gabinetes-extintor' },
    ],
    ctaLabel: 'Refacciones de extintor',
  },
];

// ── SERVICE_ANCHOR — anchor text SEO del botón de cada servicio ─────────────
// Los enlaces a /servicios/<id>/ salían todos con el mismo texto genérico
// («Detalle del servicio»), que no describe el destino ni aporta señal. Aquí
// vive la palabra clave limpia de cada servicio, para que la home y
// /servicios/ enlacen con el MISMO anchor y no vuelvan a divergir.
// Tope práctico: 24 caracteres (más allá el botón parte en dos líneas).
export const SERVICE_ANCHOR: Record<string, string> = {
  'instalacion':           'Instalación de sistemas',
  'mantenimiento':         'Mantenimiento de extintores',
  'prueba-hidrostatica':   'Prueba hidrostática',
  'inspeccion':            'Inspección y dictamen',
  'diagnostico-de-riesgo': 'Diagnóstico de riesgo',
  'capacitacion-dc3':      'Capacitación de brigada',
  'gestion-documental':    'Gestión documental',
};

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
    cta: { label: 'Catálogo de extintores', href: '/productos/' },
  },
  {
    slug: 'mantenimiento',
    label: 'Mantenimiento y recarga',
    seoTitle: 'Mantenimiento y recarga de extintores',
    seoDescription:
      'Cada cuándo se recarga un extintor, qué exige la NOM-154, qué incluye un servicio profesional y cómo verificar que el mantenimiento se hizo bien.',
    intro:
      'Vigencias, recarga, prueba hidrostática e inspección: lo que mantiene tu equipo operativo y tu expediente en regla.',
    body: [
      'Un extintor sin mantenimiento vigente es un extintor que no cuenta en una verificación, aunque esté colgado en la pared. En esta sección explicamos las frecuencias que pide la norma, qué incluye un servicio profesional y cómo comprobar que se realizó conforme a norma.',
      'Damos servicio de mantenimiento, recarga, prueba hidrostática e inspección en CDMX y Estado de México.',
    ],
    cta: { label: 'Mantenimiento de extintores', href: '/servicios/mantenimiento/' },
  },
  {
    slug: 'sistemas',
    label: 'Sistemas contra incendio',
    seoTitle: 'Sistemas contra incendio: guías técnicas',
    seoDescription:
      'Qué integra un sistema contra incendio: detección y alarma, hidrantes, gabinetes, mangueras y supresión, y cómo se eligen para inmuebles en México.',
    intro:
      'Detección y alarma, red de hidrantes, gabinetes y sistemas de supresión: qué lleva cada uno y qué se revisa al instalarlo.',
    body: [
      'Un sistema contra incendio no es un equipo, es una cadena: detectar, alertar, evacuar y combatir. Aquí desglosamos cada eslabón, cuándo conviene un panel convencional o uno direccionable, qué detector va en cada área y qué exige la instalación de gabinetes e hidrantes.',
      'Proyectamos e instalamos sistemas completos; si tienes obra nueva o remodelación, conviene revisarlo antes de cerrar el proyecto eléctrico.',
    ],
    cta: { label: 'Instalación de sistemas', href: '/servicios/instalacion/' },
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
      'En esta sección traducimos las normas aplicables a acciones concretas y verificables, con la clave completa de cada una y la autoridad que revisa su cumplimiento.',
      'Si tienes una verificación próxima o un expediente incompleto, podemos revisar el inmueble y ordenar la documentación.',
    ],
    cta: { label: 'Inspección y dictamen', href: '/servicios/inspeccion/' },
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
    cta: { label: 'Capacitación y DC-3', href: '/servicios/capacitacion-dc3/' },
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
      'El riesgo de una cocina no se parece al de una bodega ni al de un piso de oficinas, y el equipo exigible tampoco. En esta sección respondemos, por giro, qué equipo y qué medidas corresponden a cada tipo de negocio.',
      'Hacemos el levantamiento del inmueble y proponemos el equipo mínimo exigible para tu giro, en CDMX y Estado de México.',
    ],
    cta: { label: 'Diagnóstico de riesgo', href: '/servicios/diagnostico-de-riesgo/' },
  },
  {
    slug: 'costos',
    label: 'Costos y decisión de compra',
    seoTitle: 'Costos de equipo contra incendio',
    seoDescription:
      'De qué depende el precio de un extintor, qué debe incluir una cotización completa de equipo contra incendio y cómo comparar proveedores con criterio.',
    intro:
      'De qué depende el precio, qué debe incluir una cotización y cómo comparar proveedores sin sorpresas.',
    body: [
      'Aquí no publicamos listas de precios: publicamos las variables que los mueven —capacidad, agente, certificación, volumen, si incluye instalación o traslado— para que puedas comparar cotizaciones con criterio.',
      'Cuéntanos qué necesitas y te mandamos una cotización con el desglose completo.',
    ],
    cta: { label: 'Solicitar cotización', href: '/contacto/' },
  },
] as const;

// Artículos por página en el blog y en los archivos de categoría. Contrato de
// URL: página 1 = /blog/ (o /blog/categoria/<slug>/), página N = <base>/pagina/N/.
export const BLOG_PAGE_SIZE = 8;

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
