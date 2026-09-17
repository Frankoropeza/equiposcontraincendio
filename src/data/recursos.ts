// ============================================================================
// src/data/recursos.ts — L2 /recursos/ (hub de Recursos).
// ----------------------------------------------------------------------------
// Autor del contenido: Claude (2026-09-11). Página fina en
// src/pages/recursos/index.astro con el esqueleto canónico de toda L2:
// Hero → SectionMenu → TrustBar → vitrina (8) → CategoryFeature → RiskGuide →
// NormsTable → ProcessSteps → CompanyAbout → RelatedLinks → FAQ + contacto.
//
// ÁNGULO — «tengo que ponerme al corriente: ¿por dónde empiezo?». Las otras L2
// responden «qué compro» (/productos/), «qué me toca y cada cuándo»
// (/servicios/) o «cómo lo calculo» (/herramientas/). Esta ordena los recursos
// gratuitos por la pregunta con la que llega el visitante.
//
// FUENTES: páginas existentes del sitio (herramientas, plantillas, fichas de
// trámite y el directorio por giro). No introduce afirmaciones normativas que
// no estén ya verificadas en esas páginas.
// ============================================================================

export const recursosCards = [
  {
    label: 'Directorio por tipo de negocio',
    href: '/proteccion-civil/',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
    imageAlt: 'Revisión de seguridad contra incendio en un establecimiento',
    badge: 'CDMX y Edomex',
    blurb: 'Elige tu giro: documentos que revisar y equipo contra incendio.',
    ctaLabel: 'Directorio por giro',
    subcategories: [
      { label: 'Restaurantes', href: '/proteccion-civil/restaurantes/' },
      { label: 'Oficinas', href: '/proteccion-civil/oficinas/' },
      { label: 'Guarderías', href: '/proteccion-civil/guarderias/' },
    ],
  },
  {
    label: 'Programa Interno en CDMX',
    href: '/proteccion-civil/cdmx/',
    image: '/images/general/hero-proveedor-equipo-contra-incendio.avif',
    imageAlt: 'Inmueble equipado con protección contra incendio en la Ciudad de México',
    badge: 'SGIRPC',
    blurb: 'Cómo se presenta el Programa Interno y quién lo puede firmar.',
    ctaLabel: 'Trámite en CDMX',
    subcategories: [
      { label: 'Qué revisa la visita', href: '/blog/que-revisa-proteccion-civil/' },
      { label: 'Aforo de 100 personas', href: '/blog/aforo-100-personas-programa-interno/' },
      { label: 'Dictamen de Bomberos', href: '/blog/dictamen-bomberos-cdmx/' },
    ],
  },
  {
    label: 'Programa en el Estado de México',
    href: '/proteccion-civil/edomex/',
    image: '/images/servicios/instalacion-equipo-almacen.avif',
    imageAlt: 'Instalación de equipo contra incendio en un almacén',
    badge: 'CGPCyGIR',
    blurb: 'Trámite estatal, dictamen municipal y su fundamento.',
    ctaLabel: 'Trámite en Edomex',
    subcategories: [
      { label: 'Requisitos por negocio', href: '/blog/requisitos-proteccion-civil-negocio/' },
      { label: 'STPS y Protección Civil', href: '/blog/cumplimiento-stps-proteccion-civil/' },
      { label: 'Programa Interno', href: '/blog/programa-interno-proteccion-civil/' },
    ],
  },
  {
    label: 'Riesgo de incendio',
    href: '/herramientas/riesgo-de-incendio/',
    image: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
    imageAlt: 'Inspección de sistema de alarma y extintor en un centro de trabajo',
    badge: 'NOM-002-STPS-2010',
    blurb: 'Clasifica tu inmueble en ordinario o alto con los criterios de la Tabla 1.',
    ctaLabel: 'Riesgo de incendio',
    subcategories: [
      { label: 'La Tabla 1 explicada', href: '/blog/riesgo-de-incendio-tabla-1-nom-002/' },
      { label: 'Quién debe firmarlo', href: '/blog/quien-clasifica-riesgo-de-incendio-empresa/' },
      { label: 'Obligaciones en alto', href: '/blog/obligaciones-riesgo-alto-incendio/' },
    ],
  },
  {
    label: 'Cuántos extintores necesito',
    href: '/herramientas/cuantos-extintores-necesito/',
    image: '/images/showcase/extintores-variedad-colores-catalogo.avif',
    imageAlt: 'Extintores de distintos agentes y capacidades en catálogo',
    badge: 'NOM-002-STPS-2010',
    blurb: 'Mínimo por superficie y el agente que pide cada área de tu inmueble.',
    ctaLabel: 'Cuántos extintores',
    subcategories: [
      { label: 'Extintores por m²', href: '/blog/cuantos-extintores-por-metro-cuadrado/' },
      { label: 'Por área de riesgo', href: '/blog/extintores-por-area-riesgo-cocina-cuarto-electrico/' },
      { label: 'Dónde colocarlos', href: '/blog/donde-colocar-extintores/' },
    ],
  },
  {
    label: 'Verifica tu extintor',
    href: '/herramientas/verifica-tu-extintor/',
    image: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
    imageAlt: 'Revisión de gabinete de hidrante y extintor en sitio',
    badge: 'NOM-154-SCFI-2005',
    blurb: 'Revisa si el servicio que te dieron fue real.',
    ctaLabel: 'Verifica tu extintor',
    subcategories: [
      { label: 'Servicio real o no', href: '/blog/como-saber-si-mantenimiento-extintor-es-real/' },
      { label: 'Leer el manómetro', href: '/blog/manometro-extintor-zonas-que-significan/' },
      { label: 'Calcomanía sin servicio', href: '/blog/calcomania-sin-servicio-extintores-fraude/' },
    ],
  },
  {
    label: 'Formatos descargables',
    href: '/plantillas/',
    image: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif',
    imageAlt: 'Revisión de gabinete y manguera contra incendio en sitio',
    badge: 'Excel y PDF',
    blurb: 'Bitácora de revisión, acta de simulacro y censo de brigada, listos para llenar.',
    ctaLabel: 'Descargar formatos',
    subcategories: [
      { label: 'Bitácora de revisión', href: '/plantillas/bitacora-revision-extintores/' },
      { label: 'Acta de simulacro', href: '/plantillas/acta-simulacro-evacuacion/' },
      { label: 'Censo de brigada', href: '/plantillas/censo-brigada-emergencia/' },
    ],
  },
  {
    label: 'Guías del blog',
    href: '/blog/',
    image: '/images/servicios/capacitacion-brigada-extintores.avif',
    imageAlt: 'Capacitación de brigada en el uso de extintores',
    badge: 'Guías prácticas',
    blurb: 'Normas, mantenimiento y cumplimiento explicados para quien tiene que resolverlo.',
    ctaLabel: 'Guías del blog',
    subcategories: [
      { label: 'Tipos de extintores', href: '/blog/como-elegir-extintor-clase-fuego/' },
      { label: 'Recarga y mantenimiento', href: '/blog/mantenimiento-recarga-extintores-nom/' },
      { label: 'Señalización y rutas', href: '/blog/senalizacion-rutas-evacuacion-nom/' },
    ],
  },
];

// ── Módulos de detalle (CategoryFeature: texto a la izquierda, galería a la derecha)
export const recursosFeatures = [
  {
    eyebrow: 'Directorio · CDMX y Estado de México',
    title: 'Qué necesita tu negocio',
    titleAccent: 'según su giro',
    description:
      'Restaurantes, oficinas, locales, escuelas, guarderías, bodegas y más: cada ficha reúne los documentos que conviene revisar en cada entidad, el equipo contra incendio por área, la señalización, la capacitación y los errores que más observaciones generan, con la fuente de cada punto.',
    features: [
      { label: 'Documentos por entidad', desc: 'CDMX y Estado de México por separado, con su fundamento.' },
      { label: 'Equipo por área', desc: 'Qué agente va en cada zona y qué depende de tu tamaño.' },
      { label: 'Obligación o recomendación', desc: 'Separamos lo que exige la ley de lo que conviene.' },
      { label: 'Errores frecuentes', desc: 'Lo que más se observa en visita, para corregirlo antes.' },
    ],
    ctaLabel: 'Directorio por giro',
    ctaHref: '/proteccion-civil/',
    ctaSecondaryLabel: 'Requisitos generales',
    ctaSecondaryHref: '/blog/requisitos-proteccion-civil-negocio/',
    imgMain: { src: '/images/servicios/auditoria-seguridad-contra-incendio.avif', alt: 'Revisión de seguridad contra incendio en un establecimiento' },
    imgA: { src: '/images/servicios/supresion-cocina-comercial.avif', alt: 'Cocina comercial con equipo contra incendio' },
    imgB: { src: '/images/productos/extintor-oficina-gabinete.avif', alt: 'Extintor en gabinete dentro de una oficina' },
  },
  {
    eyebrow: 'Herramientas gratuitas · NOM-002-STPS-2010',
    title: 'Calcula antes',
    titleAccent: 'de cotizar',
    description:
      'Clasifica tu riesgo de incendio, calcula cuántos extintores te pide la norma y comprueba si el servicio que recibiste fue real. Son las mismas cuentas que hacemos en un levantamiento, abiertas para que llegues a la cotización sabiendo qué pedir.',
    features: [
      { label: 'Riesgo de incendio', desc: 'Ordinario o alto con los criterios de la Tabla 1.' },
      { label: 'Cuántos extintores', desc: 'Mínimo por superficie y agente por área.' },
      { label: 'Verifica tu extintor', desc: 'Revisión guiada para detectar un servicio falso.' },
      { label: 'Orientan, no dictaminan', desc: 'El estudio formal lo firma quien está facultado.' },
    ],
    ctaLabel: 'Ver herramientas',
    ctaHref: '/herramientas/',
    ctaSecondaryLabel: 'Riesgo de incendio',
    ctaSecondaryHref: '/herramientas/riesgo-de-incendio/',
    imgMain: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Inspección de sistema de alarma y extintor' },
    imgA: { src: '/images/showcase/extintores-variedad-colores-catalogo.avif', alt: 'Extintores de distintos agentes y capacidades' },
    imgB: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Etiqueta de inspección en un extintor' },
  },
  {
    eyebrow: 'Formatos descargables · Excel y PDF',
    title: 'El papel que se revisa,',
    titleAccent: 'listo para llenar',
    description:
      'La bitácora mensual de extintores, el acta de simulacro y el censo de brigada son de los documentos que más faltan en un expediente. Descárgalos, llénalos y guárdalos con las constancias de servicio: es la evidencia que te piden la autoridad y el tercero que firma tu programa.',
    features: [
      { label: 'Bitácora mensual', desc: 'Revisión de extintores con anomalías y seguimiento.' },
      { label: 'Acta de simulacro', desc: 'Hipótesis, participantes, tiempos y hallazgos.' },
      { label: 'Censo de brigada', desc: 'Quién es brigadista, en qué turno y con qué constancia.' },
      { label: 'Cada cuándo', desc: 'Qué se llena cada mes, cada año y en cada simulacro.' },
    ],
    ctaLabel: 'Formatos descargables',
    ctaHref: '/plantillas/',
    ctaSecondaryLabel: 'Gestión documental',
    ctaSecondaryHref: '/servicios/gestion-documental/',
    imgMain: { src: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif', alt: 'Revisión de gabinete y manguera contra incendio' },
    imgA: { src: '/images/servicios/inspeccion-recarga-extintores.avif', alt: 'Inspección y recarga de extintores' },
    imgB: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Capacitación de brigada con extintores' },
  },
  {
    eyebrow: 'Trámites · CDMX y Estado de México',
    title: 'Dos entidades,',
    titleAccent: 'dos trámites distintos',
    description:
      'En la Ciudad de México el Programa Interno se presenta en línea y lo firma un responsable registrado; en el Estado de México el bajo riesgo se resuelve con el municipio y el mediano y alto riesgo con un Programa Específico. Cada ficha de trámite enlaza a la cédula oficial y dice qué no pudimos confirmar.',
    features: [
      { label: 'CDMX', desc: 'Plataforma de la SGIRPC, Llave CDMX y tercero acreditado.' },
      { label: 'Estado de México', desc: 'Dictamen municipal o Programa Específico estatal.' },
      { label: 'Con fuente y fecha', desc: 'Cada dato enlaza a la autoridad que lo publica.' },
      { label: 'Lo pendiente, marcado', desc: 'Lo no confirmado no se presenta como requisito.' },
    ],
    ctaLabel: 'Trámite en CDMX',
    ctaHref: '/proteccion-civil/cdmx/',
    ctaSecondaryLabel: 'Trámite en Edomex',
    ctaSecondaryHref: '/proteccion-civil/edomex/',
    imgMain: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Inmueble equipado con protección contra incendio' },
    imgA: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Equipo contra incendio en un almacén' },
    imgB: { src: '/images/productos/senalizacion-luces-emergencia.avif', alt: 'Señalización y luces de emergencia en ruta de evacuación' },
  },
];

// ── ¿Qué recurso uso? (RiskGuide, 4 columnas) ───────────────────────────────
export type RecursoRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export const recursosColumns: [string, string, string, string] = ['Tu pregunta', 'Empieza por', 'Te llevas', 'Después'];
export const recursosGuia: RecursoRow[] = [
  { nivel: '¿Qué me pide Protección Civil para mi negocio?', ejemplos: 'Directorio por giro', minimo: 'Documentos, equipo y errores de tu giro', complementos: 'Ficha de trámite de tu entidad' },
  { nivel: '¿Mi inmueble es de riesgo ordinario o alto?', ejemplos: 'Riesgo de incendio', minimo: 'Tu clasificación con el criterio que la define', complementos: 'Cuántos extintores necesito' },
  { nivel: '¿Cuántos extintores tengo que tener?', ejemplos: 'Cuántos extintores necesito', minimo: 'Mínimo por superficie y agente por área', complementos: 'Catálogo de extintores' },
  { nivel: '¿El servicio que me dieron fue real?', ejemplos: 'Verifica tu extintor', minimo: 'Revisión punto por punto de tu equipo', complementos: 'Mantenimiento y recarga' },
  { nivel: '¿Qué papeles me faltan?', ejemplos: 'Formatos descargables', minimo: 'Bitácora, acta de simulacro y censo', complementos: 'Gestión documental' },
  { nivel: '¿Cómo se presenta el Programa Interno?', ejemplos: 'Trámite en CDMX o Edomex', minimo: 'Quién lo firma, modalidad y fuentes', complementos: 'Diagnóstico de riesgo' },
];

export type NormRow = { norma: string; alcance: string; aplica: string };
export const recursosNormRows: NormRow[] = [
  { norma: 'NOM-002-STPS-2010', alcance: 'Clasificación del riesgo, extintores, revisión mensual y mantenimiento anual', aplica: 'Todo centro de trabajo' },
  { norma: 'NOM-154-SCFI-2005', alcance: 'Mantenimiento y recarga de extintores; prueba hidrostática cada 5 años', aplica: 'Todo extintor en servicio' },
  { norma: 'NOM-003-SSPC-2011', alcance: 'Señales y avisos de protección civil (antes NOM-003-SEGOB-2011)', aplica: 'Inmuebles con Programa Interno' },
  { norma: 'Ley de GIRPC y su Reglamento (CDMX)', alcance: 'Nivel de riesgo, Programa Interno, póliza y vigencias', aplica: 'Negocios en la Ciudad de México' },
  { norma: 'Código Administrativo, Libro Sexto (Edomex)', alcance: 'Dictamen municipal, Programa Específico y simulacros', aplica: 'Negocios en el Estado de México' },
];

export type Step = { num: string; title: string; desc: string };
export const recursosSteps: Step[] = [
  { num: '01', title: 'Elige tu giro', desc: 'En el directorio, la ficha de tu tipo de negocio.' },
  { num: '02', title: 'Clasifica tu riesgo', desc: 'Con la herramienta de la Tabla 1 de la NOM-002.' },
  { num: '03', title: 'Calcula el equipo', desc: 'Mínimo por superficie y agente de cada área.' },
  { num: '04', title: 'Revisa lo que tienes', desc: 'Verifica que el servicio de tus extintores sea real.' },
  { num: '05', title: 'Descarga los formatos', desc: 'Bitácora, acta de simulacro y censo de brigada.' },
  { num: '06', title: 'Ubica tu trámite', desc: 'CDMX o Estado de México, con su fuente oficial.' },
  { num: '07', title: 'Cierra la brecha', desc: 'Equipo, señalización y capacitación que falten.' },
  { num: '08', title: 'Presenta con quien firma', desc: 'Tercero acreditado o consultor, con todo al día.' },
];

export const recursosCompany = {
  que: {
    title: 'Por qué publicamos esto gratis',
    body: [
      'Porque la mayoría de los negocios llega a nosotros con un requerimiento encima y sin saber qué le aplica. Si llegas sabiendo tu giro, tu riesgo y lo que te falta, la cotización es más corta y más exacta.',
      'Somos proveedores de equipo y servicio contra incendio: no elaboramos Programas Internos ni emitimos dictámenes. Lo decimos en cada recurso para que sepas qué resolvemos nosotros y qué firma un tercero.',
    ],
  },
  como: {
    title: 'Cómo los mantenemos',
    pillars: [
      { title: 'Solo lo confirmado', desc: 'Cada requisito sale de una ley, norma o cédula con enlace.' },
      { title: 'Con fecha de revisión', desc: 'Las fichas dicen cuándo se verificaron por última vez.' },
      { title: 'Correcciones visibles', desc: 'Cuando una norma cambia, actualizamos y lo fechamos.' },
    ],
  },
};

export const recursosRelated = [
  { label: 'Diagnóstico de riesgo', href: '/servicios/diagnostico-de-riesgo/', desc: 'Clasificación del inmueble y lista de lo que falta.' },
  { label: 'Gestión documental', href: '/servicios/gestion-documental/', desc: 'Expediente listo para Protección Civil y STPS.' },
  { label: 'Capacitación y DC-3', href: '/servicios/capacitacion-dc3/', desc: 'Brigada y uso de extintores con constancia.' },
  { label: 'Catálogo de extintores', href: '/productos/extintores/', desc: 'PQS, CO₂, clase K, agua y agente limpio.' },
];

export const recursosFaqs = [
  {
    question: '¿Los recursos tienen algún costo?',
    answer: 'No. Las herramientas, los formatos, las fichas por giro y las guías son gratuitos y no piden registro. Si después quieres cotizar equipo o servicio, nos escribes por WhatsApp.',
  },
  {
    question: '¿Una ficha del directorio sustituye la revisión de Protección Civil?',
    answer: 'No. Te dice qué revisar y de dónde sale cada requisito, pero lo que te exijan depende de tu alcaldía o municipio, del giro, los metros, el aforo y tu nivel de riesgo. La autoridad y, en su caso, el tercero acreditado que firma tu programa son quienes deciden.',
  },
  {
    question: '¿Qué hago si mi giro no aparece en el directorio?',
    answer: 'Empieza por la ficha de tu nivel de riesgo o por la herramienta de riesgo de incendio, y escríbenos con tu actividad, metros y aforo. Te decimos qué revisar primero.',
  },
  {
    question: '¿Ustedes tramitan el Programa Interno?',
    answer: 'No lo elaboramos ni lo firmamos. Preparamos el inmueble y el expediente de equipo —extintores, detección, señalización, capacitación y documentación— para que el tercero acreditado o consultor registrado lo pueda firmar.',
  },
  {
    question: '¿Cada cuándo actualizan la información?',
    answer: 'Cada ficha lleva la fecha en que se verificó. Cuando una ley o norma cambia —como el cambio de clave de la NOM-003 en 2024 o la reforma de vigencias del Programa Interno en la CDMX— corregimos el contenido y lo fechamos.',
  },
];
