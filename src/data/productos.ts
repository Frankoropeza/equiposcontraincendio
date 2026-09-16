// ============================================================================
// src/data/productos.ts — Datos de la L2 /productos/.
// ----------------------------------------------------------------------------
// PATRÓN L2 (homologado con L1 el 2026-09-10): la página .astro queda fina —
// solo composición de componentes— y TODO el contenido vive aquí, igual que
// `src/data/home.ts` para el index. Al añadir una L2 nueva, se crea su
// `src/data/<seccion>.ts` y se repite el esqueleto:
//
//   Hero → SectionMenu → vitrina de tarjetas → módulos
//   CategoryFeature → listado propio → RiskGuide → NormsTable → ProcessSteps
//   → CompanyAbout → Reseñas → RelatedLinks → FAQ + Contacto
//
// REGLA DE COPY: el contenido de una L2 NUNCA se copia del index. Los mismos
// componentes, el mismo diseño, pero con el ángulo de esa sección. El index
// responde «¿con quién me equipo?»; esta L2 responde «¿cuál compro, de qué
// capacidad y cuántos?». Duplicar el copy canibalizaría las dos páginas.
// ============================================================================

export type RiskRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export type NormRow = { norma: string; alcance: string; aplica: string };
export type Step = { num: string; title: string; desc: string };
export type Pillar = { title: string; desc: string };
export type ProductosCategoryFeature = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  features: { label: string; desc: string }[];
  brands: { name: string }[];
  ctaLabel: string;
  ctaHref: string;
  ctaSecondaryMsg: string;
  imgMain: { src: string; alt: string };
  imgA: { src: string; alt: string };
  imgB: { src: string; alt: string };
};

// ── Orden del catálogo ──────────────────────────────────────────────────────
// Fija la secuencia de fichas destacadas dentro de la colección de productos.
export const productosOrden = [
  'extintor-pqs',
  'extintor-co2',
  'extintor-clase-k',
  'extintor-agua',
  'extintor-agente-limpio',
  'detector-humo-fotoelectrico',
  'detector-de-gas',
  'gabinete-manguera-contra-incendio',
  'senalizacion-fotoluminiscente',
  'senalamientos-de-seguridad',
  'lamparas-de-emergencia',
  'rociadores-contra-incendio',
  'botiquin-primeros-auxilios',
  'soportes-accesorios-extintor',
];

// ── Etiquetas de fichas ─────────────────────────────────────────────────────
// Asigna la familia visible a cada ficha de producto del catálogo.
export const productosBadge: Record<string, string> = {
  'extintor-pqs': 'Extintores',
  'extintor-co2': 'Extintores',
  'extintor-clase-k': 'Extintores',
  'extintor-agua': 'Extintores',
  'extintor-agente-limpio': 'Extintores',
  'detector-humo-fotoelectrico': 'Detección',
  'detector-de-gas': 'Detección',
  'gabinete-manguera-contra-incendio': 'Hidrantes',
  'senalizacion-fotoluminiscente': 'Señalización',
  'senalamientos-de-seguridad': 'Señalización',
  'lamparas-de-emergencia': 'Emergencia',
  'rociadores-contra-incendio': 'Sistemas fijos',
  'botiquin-primeros-auxilios': 'Primeros auxilios',
  'soportes-accesorios-extintor': 'Accesorios',
};

// ── Reseñas del catálogo ────────────────────────────────────────────────────
// Selecciona las reseñas y el encabezado que se muestran en esta L2.
export const productosTestimoniosNombres = [
  'Javier O.',
  'Jackelin A.',
  'Fernando A.',
  'Verónica C.',
  'Sofía G.',
  'Pedro A.',
  'Casares O.',
];
export const productosTestimoniosHead = {
  title: 'Clientes que ya',
  titleAccent: 'eligieron su equipo',
  desc: 'Opiniones de clientes que compraron su equipo contra incendio con nuestra asesoría, publicadas con su autorización.',
  body: [
    'Lo que más repiten es lo mismo que cuidamos en cada cotización: que sepas qué equipo te toca antes de comprarlo.',
    'Cada reseña se publica tal como nos la enviaron.',
  ],
};

// ── Módulos por familia ─────────────────────────────────────────────────────
// Alimentan cada CategoryFeature con copy, marcas, CTA e imágenes del catálogo.
export const productosCategoryFeatures: ProductosCategoryFeature[] = [
  {
    eyebrow: 'Extintores · NOM-154-SCFI · Clases A B C K',
    title: 'Extintores portátiles para',
    titleAccent: 'lo que puede arder',
    description:
      'No todos los fuegos se apagan igual y el agente equivocado puede empeorarlo. Te ayudamos a elegir el agente extintor —PQS, CO₂, agua, agente K o agente limpio— según el riesgo real de tu inmueble, con la capacidad adecuada y el servicio de recarga conforme a norma.',
    features: [
      {
        label: 'PQS ABC multipropósito',
        desc: 'El más versátil: oficinas, comercios, bodegas y casa. Clases A, B y C.',
      },
      {
        label: 'CO₂ para tableros y sites',
        desc: 'No conduce ni deja residuo en cuartos eléctricos. Clases B y C.',
      },
      {
        label: 'Agente K para cocina',
        desc: 'Para aceites y grasas de cocción; complementa la supresión de campana.',
      },
      {
        label: 'Recarga y mantenimiento',
        desc: 'Servicio anual con etiqueta y collarín; prueba de presión cada 5 años.',
      },
    ],
    brands: [
      { name: 'Amerex' },
      { name: 'Kidde' },
      { name: 'Badger' },
      { name: 'Buckeye' },
      { name: 'Ansul' },
    ],
    ctaLabel: 'Venta de extintores',
    ctaHref: '/productos/extintores/',
    ctaSecondaryMsg:
      'Hola, quiero cotizar extintores (PQS, CO₂ o clase K). ¿Me ayudan a elegir la capacidad según mi riesgo?',
    imgMain: {
      src: '/images/showcase/extintores-catalogo-profesional.avif',
      alt: 'Extintores PQS, CO₂ y agente K de distintas capacidades',
    },
    imgA: {
      src: '/images/showcase/extintores-variedad-colores-catalogo.avif',
      alt: 'Extintores de PQS, CO₂, agua y agente K comparados por agente',
    },
    imgB: {
      src: '/images/servicios/prueba-hidrostatica-extintor.avif',
      alt: 'Prueba hidrostática de extintor en el taller de servicio',
    },
  },
  {
    eyebrow: 'Detección y alarma · NFPA 72',
    title: 'Alarmas de incendio que avisan en',
    titleAccent: 'los primeros segundos',
    description:
      'Un incendio detectado a tiempo todavía es controlable. Integramos detectores de humo y calor, detectores de gas para gases inflamables como el LP y el natural, paneles direccionables, estaciones manuales y sirenas para que tu inmueble alerte y se evacúe antes de que el fuego crezca.',
    features: [
      {
        label: 'Detectores fotoeléctricos',
        desc: 'Reaccionan al humo lento de pasillos, oficinas y almacenes.',
      },
      {
        label: 'Detectores térmicos',
        desc: 'Para cocinas y zonas con vapor o polvo, donde el humo daría falsas alarmas.',
      },
      {
        label: 'Paneles y estaciones',
        desc: 'Control centralizado y activación humana desde cualquier punto.',
      },
      {
        label: 'Sirenas y estrobos',
        desc: 'Alerta audible y visual para guiar una evacuación ordenada.',
      },
    ],
    brands: [
      { name: 'System Sensor' },
      { name: 'Honeywell' },
      { name: 'Notifier' },
      { name: 'Bosch' },
    ],
    ctaLabel: 'Detección y alarmas',
    ctaHref: '/productos/deteccion-alarmas/',
    ctaSecondaryMsg:
      'Hola, quiero cotizar un sistema de detección y alarma (detectores, panel y sirenas) para mi inmueble.',
    imgMain: {
      src: '/images/servicios/instalacion-deteccion-alarma.avif',
      alt: 'Instalación de detectores de humo en pasillo de oficinas',
    },
    imgA: {
      src: '/images/productos/dispositivos-deteccion-alarma.avif',
      alt: 'Detectores, estación manual y sirena estroboscópica sobre banco de trabajo',
    },
    imgB: {
      src: '/images/productos/panel-alarma-contra-incendio.avif',
      alt: 'Panel direccionable de alarma contra incendio abierto para servicio',
    },
  },
  {
    eyebrow: 'Red hidráulica · NFPA 14',
    title: 'Mangueras contra incendios',
    titleAccent: 'e hidrantes para conatos mayores',
    description:
      'Cuando el fuego supera a un extintor, la red hidráulica es tu segunda línea de defensa. Suministramos e instalamos gabinetes, mangueras, válvulas, hidrantes y siamesas dimensionados al caudal y la presión que pide tu inmueble.',
    features: [
      {
        label: 'Gabinetes tipo I y II',
        desc: 'Con válvula angular, manguera y pitón, para brigada o para bomberos.',
      },
      {
        label: 'Hidrantes y siamesas',
        desc: 'Toma para el camión de bomberos; obligatorio en inmuebles grandes.',
      },
      {
        label: 'Válvulas de control y check',
        desc: 'OS&Y, mariposa y retención para sectorizar y proteger la red.',
      },
      {
        label: 'Proyecto e instalación',
        desc: 'Cálculo hidráulico, planos y memoria de diseño incluidos.',
      },
    ],
    brands: [{ name: 'Potter' }, { name: 'Victaulic' }, { name: 'Nibco' }, { name: 'Dixon' }],
    ctaLabel: 'Hidrantes y mangueras',
    ctaHref: '/productos/hidrantes-mangueras/',
    ctaSecondaryMsg:
      'Hola, quiero cotizar gabinetes, mangueras o una red hidráulica contra incendio (NFPA 14).',
    imgMain: {
      src: '/images/showcase/gabinete-manguera-hidrante.avif',
      alt: 'Gabinete con manguera contra incendio e hidrante de muro',
    },
    imgA: {
      src: '/images/productos/extintor-oficina-gabinete.avif',
      alt: 'Gabinete tipo I con manguera, pitón y extintor',
    },
    imgB: {
      src: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif',
      alt: 'Inspección de gabinete y manguera contra incendio en sitio',
    },
  },
  {
    eyebrow: 'Señalización · NOM-003-SSPC · Fotoluminiscente',
    title: 'Señalización que guía',
    titleAccent: 'aunque se vaya la luz',
    description:
      'La señalización fotoluminiscente funciona sin electricidad y ordena la evacuación cuando más importa. Surtimos señales de ruta y salidas de emergencia, lámparas de emergencia y planos conforme a la NOM-003-SSPC-2011. En la Ciudad de México, la señalización de rutas se pide aun en bajo riesgo.',
    features: [
      {
        label: 'Señales fotoluminiscentes',
        desc: 'Salida, ruta, punto de reunión, extintor e hidrante; brillan sin corriente.',
      },
      {
        label: 'Lámparas de emergencia',
        desc: 'Iluminación autónoma con batería; 90 minutos según la NFPA 101 (ref.).',
      },
      {
        label: 'Planos de evacuación',
        desc: 'Elaborados para tu inmueble real; requisito de Protección Civil.',
      },
      {
        label: 'Punto de reunión',
        desc: 'Señalización del área de concentración tras evacuar el inmueble.',
      },
    ],
    brands: [{ name: 'Brady' }, { name: 'Seton' }, { name: 'Luminart' }, { name: 'Indexx' }],
    ctaLabel: 'Señalización',
    ctaHref: '/productos/senalizacion/',
    ctaSecondaryMsg:
      'Hola, quiero cotizar señalización fotoluminiscente, lámparas de emergencia y plano de evacuación.',
    imgMain: {
      src: '/images/servicios/integracion-sistemas-contra-incendio.avif',
      alt: 'Pasillo con gabinete de manguera y señalética de emergencia',
    },
    imgA: {
      src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
      alt: 'Ruta de evacuación señalizada junto a extintor en nave industrial',
    },
    imgB: {
      src: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif',
      alt: 'Señalética de emergencia y estación manual en muro de planta',
    },
  },
  {
    eyebrow: 'Supresión automática · NFPA 13',
    title: 'Sistemas contra incendios',
    titleAccent: 'que actúan sin intervención',
    description:
      'Los sistemas de extinción automáticos atacan el fuego en segundos, antes de que alguien reaccione. Diseñamos e instalamos sistemas de rociadores, supresión clase K en campana y agente limpio para sites, con cálculo hidráulico del suministro de agua en los rociadores y memoria de diseño para tu expediente.',
    features: [
      {
        label: 'Rociadores NFPA 13',
        desc: 'Se activa solo el rociador expuesto al calor, no toda la red.',
      },
      {
        label: 'Supresión de cocina clase K',
        desc: 'Apaga grasas en campana y corta el suministro de gas automáticamente.',
      },
      {
        label: 'Agente limpio FM-200',
        desc: 'Sin residuo ni daño a electrónicos; para servidores y tableros.',
      },
      {
        label: 'Cálculo y puesta en marcha',
        desc: 'Hidráulica, planos, memoria técnica y certificado de arranque.',
      },
    ],
    brands: [{ name: 'Tyco' }, { name: 'Viking' }, { name: 'Ansul' }, { name: 'Amerex' }],
    ctaLabel: 'Rociadores automáticos',
    ctaHref: '/productos/rociadores-contra-incendio/',
    ctaSecondaryMsg:
      'Hola, quiero cotizar un sistema fijo de supresión (rociadores, clase K o agente limpio).',
    imgMain: {
      src: '/images/showcase/sistema-rociadores-industrial.avif',
      alt: 'Red de rociadores automáticos contra incendio en techo industrial',
    },
    imgA: {
      src: '/images/servicios/supresion-cocina-comercial.avif',
      alt: 'Supresión clase K instalada en campana de cocina comercial',
    },
    imgB: {
      src: '/images/servicios/supresion-agente-limpio-data-center.avif',
      alt: 'Cilindros de agente limpio protegiendo un data center',
    },
  },
  {
    eyebrow: 'Brigada · Primeros auxilios',
    title: 'Primeros auxilios para',
    titleAccent: 'responder a tiempo',
    description:
      'Mientras llega la ayuda profesional, tu brigada necesita con qué actuar. Equipamos botiquines de primeros auxilios, mantas ignífugas y material de respuesta inicial para los primeros minutos de una emergencia.',
    features: [
      {
        label: 'Botiquines de primeros auxilios',
        desc: 'Apósitos, torniquete, férulas y guía de primeros auxilios.',
      },
      {
        label: 'Mantas ignífugas',
        desc: 'Sofocan fuego en ropa o un conato pequeño sin necesidad de extintor.',
      },
      {
        label: 'Equipo de brigada',
        desc: 'Chalecos, linternas y megáfono para coordinar la evacuación.',
      },
      {
        label: 'Camillas y rescate',
        desc: 'Traslado del lesionado hasta el punto de reunión o la ambulancia.',
      },
    ],
    brands: [{ name: '3M' }, { name: 'Cruz Roja' }, { name: 'Acme' }, { name: 'Duracell' }],
    ctaLabel: 'Botiquín para empresa',
    ctaHref: '/productos/botiquin-primeros-auxilios/',
    ctaSecondaryMsg:
      'Hola, quiero cotizar botiquines y equipo de primeros auxilios para mi brigada.',
    imgMain: {
      src: '/images/servicios/capacitacion-brigada-extintores.avif',
      alt: 'Brigada practicando con extintores durante la capacitación',
    },
    imgA: {
      src: '/images/casos/entrega-servicio-equipo-contra-incendio.avif',
      alt: 'Entrega de equipo contra incendio y material de brigada en sitio',
    },
    imgB: {
      src: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
      alt: 'Revisión de gabinete y extintor con el coordinador de brigada',
    },
  },
  {
    eyebrow: 'EPP · NOM-115-STPS',
    title: 'Protección personal para',
    titleAccent: 'tu brigada de respuesta',
    description:
      'Quien interviene en una emergencia no debe exponerse de más. Surtimos cascos, guantes térmicos, trajes de aproximación y protección respiratoria conforme a la NOM-115-STPS, para que tu brigada interna actúe con seguridad.',
    features: [
      {
        label: 'Cascos y caretas',
        desc: 'Protección de cabeza y rostro frente a calor radiante e impactos.',
      },
      {
        label: 'Guantes térmicos',
        desc: 'Manipular extintores y equipo caliente sin riesgo de quemaduras.',
      },
      {
        label: 'Trajes de aproximación',
        desc: 'Protección frente a calor radiante a una distancia de seguridad.',
      },
      {
        label: 'Protección respiratoria',
        desc: 'Mascarillas y filtros para humo; no sustituyen al SCBA de bomberos.',
      },
    ],
    brands: [{ name: '3M' }, { name: 'MSA Safety' }, { name: 'Lakeland' }, { name: 'DuPont' }],
    ctaLabel: 'Diagnóstico de riesgo',
    ctaHref: '/servicios/diagnostico-de-riesgo/',
    ctaSecondaryMsg:
      'Hola, quiero cotizar equipo de protección personal (cascos, guantes, trajes) para mi brigada.',
    imgMain: {
      src: '/images/showcase/equipo-proteccion-bomberos-epp.avif',
      alt: 'Casco, guantes, chaquetón y botas de protección contra incendio',
    },
    imgA: {
      src: '/images/general/hero-proveedor-equipo-contra-incendio.avif',
      alt: 'Técnico uniformado revisando equipo contra incendio en almacén',
    },
    imgB: {
      src: '/images/general/inventario-proveedor-equipo-contra-incendio.avif',
      alt: 'Inventario de equipo de protección y extintores en bodega',
    },
  },
  {
    eyebrow: 'Mantenimiento · NOM-154-SCFI',
    title: 'Refacciones para mantener',
    titleAccent: 'tu equipo en regla',
    description:
      'Un extintor sin servicio de mantenimiento no responde cuando se necesita. Tenemos las refacciones y accesorios para mantener tu equipo vigente: válvulas, manómetros, mangueras, collarines, soportes y herramienta conforme a la NOM-154-SCFI.',
    features: [
      {
        label: 'Refacciones de extintor',
        desc: 'Válvulas, manómetros, mangueras y pitones de las marcas principales.',
      },
      {
        label: 'Collarines y etiquetas',
        desc: 'Evidencia física del servicio ante Protección Civil.',
      },
      {
        label: 'Soportes y porta-extintores',
        desc: 'Pared, poste o gabinete; mantienen la altura reglamentaria de 1.50 m.',
      },
      {
        label: 'Herramienta de servicio',
        desc: 'Adaptadores y equipo para recarga y prueba hidrostática.',
      },
    ],
    brands: [{ name: 'Amerex' }, { name: 'Kidde' }, { name: 'Badger' }, { name: 'Buckeye' }],
    ctaLabel: 'Accesorios y refacciones',
    ctaHref: '/productos/accesorios/',
    ctaSecondaryMsg:
      'Hola, quiero cotizar refacciones y accesorios para mantenimiento de extintores (NOM-154).',
    imgMain: {
      src: '/images/showcase/refacciones-equipo-contra-incendio.avif',
      alt: 'Válvulas, manómetros, collarines y refacciones para extintor',
    },
    imgA: {
      src: '/images/servicios/inspeccion-recarga-extintores.avif',
      alt: 'Recarga y mantenimiento de extintores en taller de servicio',
    },
    imgB: {
      src: '/images/servicios/etiquetado-inspeccion-extintor.avif',
      alt: 'Colocación de etiqueta y collarín de servicio en el extintor',
    },
  },
];

// ── Preguntas frecuentes ────────────────────────────────────────────────────
// Resuelven las dudas de compra que cierra el módulo de FAQ de esta página.
export const productosFaqs: { question: string; answer: string }[] = [
  {
    question: '¿Cómo sé qué equipo necesito?',
    answer:
      'Depende del riesgo de tu inmueble y lo que pueda quemarse. Escríbenos con tu giro y superficie y te recomendamos el equipo y las capacidades adecuadas, sin venderte de más.',
  },
  {
    question: '¿Qué materiales se necesitan para apagar incendios?',
    answer:
      'Depende de lo que arde, porque cada agente extintor actúa distinto: agua para sólidos comunes como papel, madera y cartón; polvo químico seco (PQS) como opción versátil para sólidos, líquidos inflamables y riesgo eléctrico; CO₂ para tableros y cuartos eléctricos, porque no deja residuo; agente húmedo clase K para aceites y grasas de cocina; espuma AFFF para líquidos inflamables, y agente limpio para equipo electrónico. Cuando el fuego supera a un extintor, entran las mangueras, los hidrantes y los rociadores.',
  },
  {
    question: '¿Qué equipo contra incendio exige la NOM-002-STPS-2010?',
    answer:
      'Primero obliga a clasificar el riesgo de incendio del centro de trabajo —ordinario o alto— según su superficie y el material combustible que maneja. De esa clasificación dependen el número y el tipo de extintores (al menos uno por cada 300 m² en riesgo ordinario y uno por cada 200 m² en riesgo alto, a no más de 1.50 m del piso), la detección, la red de hidrantes, la brigada y el programa anual de revisión. También pide una revisión mensual del equipo a cargo del propio personal.',
  },
  {
    question: '¿Qué material protege contra el fuego?',
    answer:
      'Hay dos tipos de protección. La pasiva está construida en el inmueble y no necesita activarse: muros y puertas con resistencia al fuego certificada, sellos cortafuego y compartimentación; la define el proyecto arquitectónico. La activa detecta, avisa y combate el fuego: extintores, detectores, alarmas, mangueras, hidrantes y rociadores. Este catálogo cubre la protección activa.',
  },
  {
    question: '¿Los materiales contra incendio cambian según el giro del inmueble?',
    answer:
      'Sí, porque cambia lo que puede arder. Una oficina arranca con PQS ABC de 4.5 a 6 kg y CO₂ junto al rack; una cocina comercial necesita clase K bajo la campana y PQS en el pasillo; un site pide CO₂ o agente limpio para no dañar el equipo, y una bodega o nave suma extintores móviles de 50 kg en los pasillos. La NOM-002-STPS-2010 fija la densidad mínima por superficie; el giro decide el agente y la capacidad.',
  },
  {
    question: '¿Por qué no muestran precios en el catálogo?',
    answer:
      'Cotizamos según cantidades, capacidades y si incluye instalación o mantenimiento. Por eso trabajamos con cotización por WhatsApp en lugar de publicar un precio que podría no aplicar a tu caso real.',
  },
  {
    question: '¿Venden con instalación y mantenimiento incluidos?',
    answer:
      'Sí. Además de la venta, instalamos, damos mantenimiento y recargamos extintores conforme a la NOM-154-SCFI-2005. Puedes cotizar producto y servicio juntos en un solo mensaje.',
  },
  {
    question: '¿Tienen existencia o trabajan bajo pedido?',
    answer:
      'Los productos de mayor rotación, como extintores PQS y CO₂, detectores y señalización básica, suelen estar disponibles para entrega inmediata; los equipos especializados o de gran capacidad pueden requerir tiempo de entrega. La existencia y los tiempos se confirman en cada cotización.',
  },
  {
    question: '¿Me entregan con factura?',
    answer:
      'Sí, facturamos con todos los RFC que nos proporciones. El equipo sale con su ficha técnica y, si incluye servicio, con la constancia correspondiente para Protección Civil y STPS.',
  },
  {
    question: '¿Hacen entregas fuera de CDMX?',
    answer:
      'Atendemos CDMX, Estado de México y zona metropolitana. Para instalación y mantenimiento cubrimos esas mismas zonas. Cuéntanos dónde estás y te confirmamos cobertura y tiempos.',
  },
];

// ── Guía de selección ────────────────────────────────────────────────────────
// Ángulo propio de la L2: el index clasifica el INMUEBLE por nivel de riesgo;
// aquí se elige el AGENTE y la CAPACIDAD según lo que puede arder. Es la duda
// literal del comprador delante del catálogo.
// Datos verificados contra el texto de la NOM-002-STPS-2010: distancia máxima
// de recorrido 23 m para clases A, C y D; 15 m (riesgo ordinario) o 10 m
// (riesgo alto) para clase B; 10 m para clase K. Densidad: un extintor por
// cada 300 m² en riesgo ordinario y por cada 200 m² en riesgo alto, colocado a
// no más de 1.50 m del piso a la parte más alta del equipo.
export const productosRiskRows: RiskRow[] = [
  {
    nivel: 'Oficina y consultorio',
    ejemplos: 'Papel, mobiliario, equipo de cómputo y contactos',
    minimo: 'PQS ABC de 4.5 a 6 kg',
    complementos: 'CO₂ junto al rack o el no-break; recorrido máximo de 23 m',
  },
  {
    nivel: 'Comercio y escuela',
    ejemplos: 'Mercancía, mobiliario, almacén pequeño y tablero',
    minimo: 'PQS ABC de 6 kg',
    complementos: 'Señalización NOM-003 y lámpara de emergencia por salida',
  },
  {
    nivel: 'Cocina comercial',
    ejemplos: 'Aceites y grasas de cocción bajo campana',
    minimo: 'Clase K de químico húmedo, 6 L',
    complementos: 'PQS ABC en el pasillo; el recorrido a la clase K no pasa de 10 m',
  },
  {
    nivel: 'Cuarto eléctrico y site',
    ejemplos: 'Tableros energizados, UPS, servidores y cableado',
    minimo: 'CO₂ de 4.5 a 9 kg',
    complementos: 'Agente limpio si el equipo no tolera residuo ni descarga fría',
  },
  {
    nivel: 'Bodega y nave industrial',
    ejemplos: 'Tarima, cartón, plástico y montacargas',
    minimo: 'PQS ABC de 9 kg y móviles de 50 kg en pasillos',
    complementos: 'En riesgo alto la densidad sube a un extintor por cada 200 m²',
  },
  {
    nivel: 'Taller con líquidos inflamables',
    ejemplos: 'Solventes, pinturas, aceites y combustible',
    minimo: 'PQS BC o espuma, portátil y móvil',
    complementos: 'Clase B: el recorrido baja a 15 m, y a 10 m si el riesgo es alto',
  },
];

// ── Respaldo normativo ───────────────────────────────────────────────────────
// Ángulo propio: el index lista qué normas aplican al CENTRO DE TRABAJO; aquí
// se dice qué norma certifica CADA FAMILIA del catálogo, que es lo que revisa
// el inspector cuando levanta el equipo y busca la contraseña oficial.
// Las NFPA se rotulan como referencia técnica: no son ley federal en México,
// aunque la aseguradora o el corporativo sí puedan exigirlas.
export const productosNormRows: NormRow[] = [
  {
    norma: 'NOM-002-STPS-2010',
    alcance:
      'Obliga la revisión mensual y el mantenimiento anual del extintor (7.18), la densidad por superficie y la altura máxima de 1.50 m',
    aplica: 'Todo el equipo instalado en un centro de trabajo',
  },
  {
    norma: 'NOM-154-SCFI-2005',
    alcance:
      'Procedimiento de servicio, recarga y prueba hidrostática del cilindro cada 5 años (5.6)',
    aplica: 'Extintores portátiles y móviles',
  },
  {
    norma: 'NOM-106-SCFI-2017',
    alcance:
      'Contraseña oficial del producto certificado: es el sello que acredita el extintor ante la autoridad',
    aplica: 'Extintores que se venden en México',
  },
  {
    norma: 'NOM-003-SSPC-2011',
    alcance:
      'Color, forma y símbolo de las señales de protección civil, incluidas las fotoluminiscentes',
    aplica: 'Señalización y rutas de evacuación',
  },
  {
    norma: 'NOM-026-STPS-2008',
    alcance: 'Colores de seguridad e identificación de fluidos en tubería',
    aplica: 'Red hidráulica y tubería de la instalación',
  },
  {
    norma: 'NFPA 72 (ref.)',
    alcance: 'Diseño, instalación y prueba del sistema de detección y alarma',
    aplica: 'Detectores, paneles, estaciones y sirenas',
  },
  {
    norma: 'NFPA 13 (ref.)',
    alcance: 'Cálculo hidráulico y densidad de descarga de rociadores automáticos',
    aplica: 'Sistemas fijos de supresión',
  },
  {
    norma: 'NFPA 14 (ref.)',
    alcance: 'Columnas de agua, gabinetes, hidrantes y conexiones siamesas',
    aplica: 'Red hidráulica contra incendio',
  },
];

// ── Cómo se compra ───────────────────────────────────────────────────────────
// Ángulo propio: el index describe la RELACIÓN con el proveedor de principio a
// fin; aquí se describe la COMPRA concreta, que es la fricción de esta página
// (no hay carrito ni precios públicos, así que hay que explicar el camino).
export const productosSteps: Step[] = [
  {
    num: '01',
    title: 'Dinos qué inmueble proteges',
    desc: 'Giro, superficie y niveles por WhatsApp. Con eso se dimensiona el equipo.',
  },
  {
    num: '02',
    title: 'Revisamos el riesgo',
    desc: 'Identificamos lo que puede arder y el grado de riesgo que corresponde al inmueble.',
  },
  {
    num: '03',
    title: 'Te decimos qué y cuánto',
    desc: 'Lista con agente, capacidad y cantidad mínima que pide la norma para tu caso.',
  },
  {
    num: '04',
    title: 'Cotización por alcance',
    desc: 'Precio por pieza y volumen, con tiempos de entrega; si aplica, se propone por fases.',
  },
  {
    num: '05',
    title: 'Confirmas el equipo',
    desc: 'Aclaramos la propuesta y dejamos definido el producto, la cantidad y el servicio incluido.',
  },
  {
    num: '06',
    title: 'Entrega en sitio',
    desc: 'Entregamos el equipo y, cuando aplica, coordinamos su instalación y señalización.',
  },
  {
    num: '07',
    title: 'Instalación conforme',
    desc: 'Montamos el equipo a la altura y distancia de recorrido que corresponden.',
  },
  {
    num: '08',
    title: 'Documentación y vigencia',
    desc: 'Entregamos ficha técnica y constancia, con aviso de recarga o prueba hidrostática.',
  },
];

// ── Sobre el catálogo ────────────────────────────────────────────────────────
// Ángulo propio: el index dice QUIÉNES SOMOS; aquí se explica CÓMO ES ESTE
// CATÁLOGO y por qué no tiene precios a la vista, que es la objeción número uno.
export const productosCompany = {
  que: {
    title: 'Qué encuentras aquí',
    body: [
      'Las familias de equipo contra incendio que cubren un inmueble completo: extintores portátiles, detección y alarmas, hidrantes y mangueras, señalización de emergencia, sistemas fijos de supresión, botiquines y equipo de brigada, protección personal y las refacciones para mantenerlo todo vigente.',
      'Las fichas publican lo de mayor rotación, pero el surtido es más amplio: se manejan más marcas, capacidades y equipo especializado bajo pedido. Si no ves lo tuyo, se cotiza igual.',
    ],
  },
  como: {
    title: 'Cómo se cotiza',
    pillars: [
      {
        title: 'Sin carrito, con asesoría',
        desc: 'El equipo correcto depende del riesgo del inmueble, así que primero se revisa el caso y luego se cotiza.',
      },
      {
        title: 'El precio depende del volumen',
        desc: 'Cambia por cantidad y por si incluye instalación o servicio; por eso no se publica una lista de precios que no aplicaría a tu caso.',
      },
      {
        title: 'Equipo certificado con su papel',
        desc: 'Cada entrega llega con ficha técnica y la documentación que pide tu expediente ante Protección Civil y STPS.',
      },
    ],
  },
};

// ── Enlaces relacionados (hub-and-spoke) ─────────────────────────────────────
// Cierra la L2 repartiendo autoridad hacia las otras secciones del sitio.
export const productosRelated = [
  {
    label: 'Servicios contra incendio',
    href: '/servicios/',
    desc: 'Instalación, mantenimiento, recarga e inspección del equipo.',
  },
  {
    label: 'Cobertura CDMX y Edomex',
    href: '/cobertura/',
    desc: 'Zonas donde entregamos, instalamos y damos servicio.',
  },
  {
    label: 'Calculadora de extintores',
    href: '/herramientas/cuantos-extintores-necesito/',
    desc: 'Cuántos necesitas según superficie y nivel de riesgo.',
  },
  {
    label: 'Formatos descargables',
    href: '/plantillas/',
    desc: 'Bitácora de revisión, acta de simulacro y censo de brigada.',
  },
];
