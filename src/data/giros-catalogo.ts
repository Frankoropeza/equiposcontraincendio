// ============================================================================
// src/data/giros-catalogo.ts — Tarjetas de la vitrina de 8 de cada ficha del
// Directorio de Protección Civil por giro (/proteccion-civil/<giro>/).
// ----------------------------------------------------------------------------
// Datos: Claude (2026-09-11), tomados de las vitrinas ya publicadas en las L3
// de producto y servicio (specs e imágenes verificadas en cada una) y de
// src/data/herramientas.ts. Mismo contrato que ServiceCard: descripción ≤ 90
// caracteres, ctaLabel ≤ 24, tres specs cortas.
//
// Productos confirmados por Frank el 2026-09-11 sin ficha propia: botiquín
// (ancla en /productos/), luces de emergencia (ancla en la L3 de señalización)
// y alerta sísmica (tarjeta de WhatsApp: `href` es el TEXTO del mensaje y el
// componente arma el enlace con waUrl()).
// NO se afirma: precios, marcas, tiempos de entrega ni capacidades en stock.
// ============================================================================

export type GiroCatalogCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
  specs: { label: string; value: string }[];
  whatsapp?: boolean;
};

export const GIROS_CATALOGO: Record<string, GiroCatalogCard> = {
  // ── Productos ───────────────────────────────────────────────────────────
  extintores: {
    title: 'Extintores portátiles',
    description: 'PQS, CO₂, clase K, agua y agente limpio para cada área de tu inmueble.',
    href: '/productos/extintores/',
    ctaLabel: 'Extintores',
    image: '/images/showcase/extintores-catalogo-profesional.avif',
    imageAlt: 'Extintores portátiles de distintos agentes y capacidades',
    badge: 'Producto',
    specs: [
      { label: 'Agentes', value: 'Cinco familias' },
      { label: 'Formato', value: 'Portátil y ruedas' },
      { label: 'Entrega', value: 'CDMX y Edomex' },
    ],
  },
  pqs: {
    title: 'Extintor PQS ABC',
    description: 'Polvo químico seco para comedor, pasillos, bodega y áreas generales.',
    href: '/productos/extintor-pqs/',
    ctaLabel: 'Extintor PQS',
    image: '/images/showcase/extintores-catalogo-profesional.avif',
    imageAlt: 'Extintores de polvo químico seco',
    badge: 'Producto',
    specs: [
      { label: 'Fuegos', value: 'Clase A, B y C' },
      { label: 'Ordinario', value: '1 por 300 m²' },
      { label: 'Altura máx.', value: '1.50 m' },
    ],
  },
  co2: {
    title: 'Extintor de CO₂',
    description: 'Bióxido de carbono para tableros y equipo energizado, sin residuo.',
    href: '/productos/extintor-co2/',
    ctaLabel: 'Extintor de CO₂',
    image: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif',
    imageAlt: 'Tablero eléctrico donde se usa extintor de CO₂',
    badge: 'Producto',
    specs: [
      { label: 'Fuegos', value: 'Clase B y C' },
      { label: 'Residuo', value: 'Ninguno' },
      { label: 'Control', value: 'Peso en báscula' },
    ],
  },
  clase_k: {
    title: 'Extintor clase K',
    description: 'Químico húmedo para freidoras, planchas y aceites de cocina.',
    href: '/productos/extintor-clase-k/',
    ctaLabel: 'Extintor clase K',
    image: '/images/servicios/supresion-cocina-comercial.avif',
    imageAlt: 'Cocina comercial con línea de cocción',
    badge: 'Producto',
    specs: [
      { label: 'Agente', value: 'Químico húmedo' },
      { label: 'Recorrido', value: '10 m máximo' },
      { label: 'Para', value: 'Aceites y grasas' },
    ],
  },
  agua_afff: {
    title: 'Extintor de agua y espuma',
    description: 'Agua a presión, nebulizada o espuma AFFF para riesgos compatibles.',
    href: '/productos/extintor-agua/',
    ctaLabel: 'Extintor de agua',
    image: '/images/servicios/instalacion-equipo-almacen.avif',
    imageAlt: 'Equipo contra incendio en almacén',
    badge: 'Producto',
    specs: [
      { label: 'Agente', value: 'Agua o espuma' },
      { label: 'Control', value: 'Manómetro' },
      { label: 'Norma', value: 'NOM-103-STPS' },
    ],
  },
  agente_limpio: {
    title: 'Extintor de agente limpio',
    description: 'Para site, servidores y equipo electrónico: apaga sin dejar residuo.',
    href: '/productos/extintor-agente-limpio/',
    ctaLabel: 'Agente limpio',
    image: '/images/servicios/supresion-agente-limpio-data-center.avif',
    imageAlt: 'Centro de datos protegido con agente limpio',
    badge: 'Producto',
    specs: [
      { label: 'Agente', value: 'Halotron I o FE-36' },
      { label: 'Residuo', value: 'Ninguno' },
      { label: 'Para', value: 'Site y electrónica' },
    ],
  },
  deteccion_alarmas: {
    title: 'Detección y alarmas',
    description: 'Detectores de humo, temperatura y gas, panel, estaciones y sirenas.',
    href: '/productos/deteccion-alarmas/',
    ctaLabel: 'Detección y alarmas',
    image: '/images/productos/dispositivos-deteccion-alarma.avif',
    imageAlt: 'Detectores y dispositivos de alarma contra incendio',
    badge: 'Producto',
    specs: [
      { label: 'Detectores', value: 'Humo, calor, gas' },
      { label: 'Aviso', value: 'Sonoro y visual' },
      { label: 'Norma', value: 'NOM-002, 5.10' },
    ],
  },
  detector_humo: {
    title: 'Detector de humo',
    description: 'Detector fotoeléctrico autónomo o conectado a panel, por área.',
    href: '/productos/detector-humo-fotoelectrico/',
    ctaLabel: 'Detector de humo',
    image: '/images/productos/dispositivos-deteccion-alarma.avif',
    imageAlt: 'Detector fotoeléctrico de humo',
    badge: 'Producto',
    specs: [
      { label: 'Sensor', value: 'Fotoeléctrico' },
      { label: 'Formato', value: 'Autónomo o panel' },
      { label: 'Revisión', value: 'Programa anual' },
    ],
  },
  detector_gas: {
    title: 'Detector de gas',
    description: 'Gas LP o natural, con corte automático, para cocinas y calderas.',
    href: '/productos/detector-de-gas/',
    ctaLabel: 'Detector de gas',
    image: '/images/servicios/supresion-cocina-comercial.avif',
    imageAlt: 'Cocina comercial con equipos de combustión a gas',
    badge: 'Producto',
    specs: [
      { label: 'Gas', value: 'LP o natural' },
      { label: 'Corte', value: 'Electroválvula' },
      { label: 'Norma', value: 'NTC 2024, 4.4.5.2' },
    ],
  },
  hidrantes: {
    title: 'Hidrantes y mangueras',
    description: 'Gabinetes, conexiones, toma siamesa, válvulas y bomba contra incendio.',
    href: '/productos/hidrantes-mangueras/',
    ctaLabel: 'Hidrantes',
    image: '/images/showcase/gabinete-manguera-hidrante.avif',
    imageAlt: 'Gabinete con manguera e hidrante contra incendio',
    badge: 'Producto',
    specs: [
      { label: 'Manguera', value: '1½ pulg' },
      { label: 'Conexión', value: '2½ pulg' },
      { label: 'Revisión', value: 'Anual' },
    ],
  },
  gabinete: {
    title: 'Gabinete con manguera',
    description: 'Gabinete, manguera y chiflón para la red hidráulica del inmueble.',
    href: '/productos/gabinete-manguera-contra-incendio/',
    ctaLabel: 'Gabinetes',
    image: '/images/showcase/gabinetes-estaciones-contra-incendio.avif',
    imageAlt: 'Gabinetes con manguera contra incendio',
    badge: 'Producto',
    specs: [
      { label: 'Manguera', value: '1½ pulg' },
      { label: 'Longitud', value: '15 o 30 m' },
      { label: 'Montaje', value: 'Muro o empotrado' },
    ],
  },
  senalizacion: {
    title: 'Señalización de emergencia',
    description: 'Rutas, salidas, equipo, punto de reunión y croquis de evacuación.',
    href: '/productos/senalizacion/',
    ctaLabel: 'Señalización',
    image: '/images/servicios/integracion-sistemas-contra-incendio.avif',
    imageAlt: 'Señalización de ruta de evacuación y equipo contra incendio',
    badge: 'Producto',
    specs: [
      { label: 'Norma', value: 'NOM-003-SSPC' },
      { label: 'Material', value: 'Fotoluminiscente' },
      { label: 'Tamaño', value: 'Por distancia' },
    ],
  },
  soportes: {
    title: 'Soportes y gabinetes',
    description: 'Soportes de pared y gabinetes para dejar el extintor a la altura correcta.',
    href: '/productos/soportes-accesorios-extintor/',
    ctaLabel: 'Soportes',
    image: '/images/productos/extintor-oficina-gabinete.avif',
    imageAlt: 'Extintor en gabinete de pared',
    badge: 'Producto',
    specs: [
      { label: 'Montaje', value: 'Pared o vehículo' },
      { label: 'Altura máx.', value: '1.50 m' },
      { label: 'Norma', value: 'NOM-002-STPS' },
    ],
  },
  accesorios: {
    title: 'Accesorios y refacciones',
    description: 'Soportes, gabinetes, refacciones de servicio y señal de extintor.',
    href: '/productos/accesorios/',
    ctaLabel: 'Accesorios',
    image: '/images/showcase/refacciones-equipo-contra-incendio.avif',
    imageAlt: 'Refacciones y accesorios para extintor',
    badge: 'Producto',
    specs: [
      { label: 'Soportes', value: 'Pared y vehículo' },
      { label: 'Gabinetes', value: 'Con visor' },
      { label: 'Refacciones', value: 'Mismo modelo' },
    ],
  },
  botiquin: {
    title: 'Botiquín de primeros auxilios',
    description: 'Botiquín abastecido y señalizado para cumplir el mínimo de tu negocio.',
    href: '/productos/botiquin-primeros-auxilios/',
    ctaLabel: 'Botiquines',
    image: '/images/showcase/proteccion-primeros-auxilios.svg',
    imageAlt: 'Botiquín de primeros auxilios',
    badge: 'Producto',
    specs: [
      { label: 'Base', value: 'Ley de GIRPC, 64' },
      { label: 'Ubicación', value: 'Visible y señalada' },
      { label: 'Revisión', value: 'Caducidades' },
    ],
  },
  lamparas: {
    title: 'Luces de emergencia',
    description: 'Encienden al cortarse la luz y mantienen visible la ruta de salida.',
    href: '/productos/lamparas-de-emergencia/',
    ctaLabel: 'Luces de emergencia',
    image: '/images/productos/senalizacion-luces-emergencia.avif',
    imageAlt: 'Luces de emergencia sobre una señal de salida',
    badge: 'Producto',
    specs: [
      { label: 'Enciende', value: 'Al cortar la luz' },
      { label: 'Respaldo', value: 'Batería' },
      { label: 'Ubicación', value: 'Ruta de salida' },
    ],
  },
  alerta_sismica: {
    title: 'Sistema de alerta sísmica',
    description: 'Receptor de la señal oficial para inmuebles que deben tenerlo.',
    href: 'Hola, quiero cotizar un sistema de alerta sísmica para mi negocio.',
    ctaLabel: 'Cotizar alerta sísmica',
    image: '/images/servicios/instalacion-deteccion-alarma.avif',
    imageAlt: 'Instalación de equipo de alarma en un inmueble',
    badge: 'Cotización',
    whatsapp: true,
    specs: [
      { label: 'Edomex', value: 'Obligatoria en varios' },
      { label: 'CDMX', value: 'Uso mixto y guarderías' },
      { label: 'Cotiza', value: 'Por WhatsApp' },
    ],
  },

  // ── Servicios ───────────────────────────────────────────────────────────
  diagnostico: {
    title: 'Diagnóstico de riesgo',
    description: 'Clasificamos tu inmueble y te decimos qué equipo te exige la norma.',
    href: '/servicios/diagnostico-de-riesgo/',
    ctaLabel: 'Diagnóstico de riesgo',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
    imageAlt: 'Diagnóstico de riesgo de incendio en un inmueble',
    badge: 'Servicio',
    specs: [
      { label: 'Clasifica', value: 'Ordinario o alto' },
      { label: 'Norma', value: 'NOM-002, Tabla 1' },
      { label: 'Define', value: 'Cuánto equipo' },
    ],
  },
  instalacion: {
    title: 'Instalación de sistemas',
    description: 'Extintores, detección, red hidráulica y señalización, con planos.',
    href: '/servicios/instalacion/',
    ctaLabel: 'Instalación',
    image: '/images/servicios/integracion-sistemas-contra-incendio.avif',
    imageAlt: 'Instalación de sistemas contra incendio',
    badge: 'Servicio',
    specs: [
      { label: 'Se basa en', value: 'Tu clasificación' },
      { label: 'Entrega', value: 'Planos y memoria' },
      { label: 'Pruebas', value: 'Al entregar' },
    ],
  },
  mantenimiento: {
    title: 'Mantenimiento y recarga',
    description: 'Servicio anual con etiqueta y collarín para mantener vigentes tus extintores.',
    href: '/servicios/mantenimiento/',
    ctaLabel: 'Mantenimiento',
    image: '/images/servicios/inspeccion-recarga-extintores.avif',
    imageAlt: 'Mantenimiento y recarga de extintores',
    badge: 'Servicio',
    specs: [
      { label: 'Periodicidad', value: 'Al menos anual' },
      { label: 'Norma', value: 'NOM-154-SCFI' },
      { label: 'Evidencia', value: 'Etiqueta nueva' },
    ],
  },
  hidrostatica: {
    title: 'Prueba hidrostática',
    description: 'Prueba de presión del cilindro al menos cada cinco años.',
    href: '/servicios/prueba-hidrostatica/',
    ctaLabel: 'Prueba hidrostática',
    image: '/images/servicios/prueba-hidrostatica-extintor.avif',
    imageAlt: 'Prueba hidrostática de un extintor',
    badge: 'Servicio',
    specs: [
      { label: 'Periodicidad', value: 'Máximo 5 años' },
      { label: 'Norma', value: 'NOM-154, 5.6' },
      { label: 'Evidencia', value: 'Marca en cilindro' },
    ],
  },
  inspeccion: {
    title: 'Inspección y dictamen',
    description: 'Revisamos equipo, señalización y papeles antes de la visita.',
    href: '/servicios/inspeccion/',
    ctaLabel: 'Inspección',
    image: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
    imageAlt: 'Inspección de extintor e hidrante en sitio',
    badge: 'Servicio',
    specs: [
      { label: 'Revisa', value: 'Todo el equipo' },
      { label: 'Incluye', value: 'Señalización' },
      { label: 'Entrega', value: 'Reporte priorizado' },
    ],
  },
  capacitacion: {
    title: 'Capacitación y DC-3',
    description: 'Uso de extintores, evacuación y brigada, con constancia DC-3.',
    href: '/servicios/capacitacion-dc3/',
    ctaLabel: 'Capacitación DC-3',
    image: '/images/servicios/capacitacion-brigada-extintores.avif',
    imageAlt: 'Capacitación de brigada con extintores',
    badge: 'Servicio',
    specs: [
      { label: 'Práctica', value: 'Fuego controlado' },
      { label: 'Para', value: 'Todo el personal' },
      { label: 'Evidencia', value: 'Constancia DC-3' },
    ],
  },
  documental: {
    title: 'Gestión documental',
    description: 'Inventario, bitácoras y constancias del equipo en un solo expediente.',
    href: '/servicios/gestion-documental/',
    ctaLabel: 'Gestión documental',
    image: '/images/servicios/etiquetado-inspeccion-extintor.avif',
    imageAlt: 'Etiqueta de servicio en un extintor',
    badge: 'Servicio',
    specs: [
      { label: 'Arma', value: 'Expediente' },
      { label: 'Para', value: 'PC y STPS' },
      { label: 'Al día', value: 'Con cada servicio' },
    ],
  },

  // ── Herramientas gratuitas ──────────────────────────────────────────────
  riesgo: {
    title: 'Riesgo de incendio',
    description: 'Clasifica tu inmueble en ordinario o alto con la Tabla 1 de la NOM-002.',
    href: '/herramientas/riesgo-de-incendio/',
    ctaLabel: 'Riesgo de incendio',
    image: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
    imageAlt: 'Inspección de alarma y extintor en un centro de trabajo',
    badge: 'Herramienta gratuita',
    specs: [
      { label: 'Criterios', value: 'Seis de la Tabla 1' },
      { label: 'Resultado', value: 'Orientativo' },
      { label: 'Costo', value: 'Sin costo' },
    ],
  },
  cuantos: {
    title: 'Cuántos extintores necesito',
    description: 'Mínimo por superficie y el agente que pide cada área de tu negocio.',
    href: '/herramientas/cuantos-extintores-necesito/',
    ctaLabel: 'Cuántos extintores',
    image: '/images/showcase/extintores-variedad-colores-catalogo.avif',
    imageAlt: 'Extintores de distintos agentes y capacidades',
    badge: 'Herramienta gratuita',
    specs: [
      { label: 'Ordinario', value: '1 por 300 m²' },
      { label: 'Riesgo alto', value: '1 por 200 m²' },
      { label: 'Costo', value: 'Sin costo' },
    ],
  },
  verifica: {
    title: 'Verifica tu extintor',
    description: 'Doce puntos para saber si el servicio que te dieron fue real.',
    href: '/herramientas/verifica-tu-extintor/',
    ctaLabel: 'Verifica tu extintor',
    image: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
    imageAlt: 'Revisión de extintor en sitio',
    badge: 'Herramienta gratuita',
    specs: [
      { label: 'Puntos', value: 'Doce' },
      { label: 'Norma', value: 'NOM-154-SCFI' },
      { label: 'Costo', value: 'Sin costo' },
    ],
  },
};
