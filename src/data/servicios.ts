// ============================================================================
// src/data/servicios.ts — Datos de la L2 /servicios/.
// ----------------------------------------------------------------------------
// Estructura real: Hero → SectionMenu → tarjetas de servicio → módulos
// CategoryFeature → Calendario (RiskGuide) → NormsTable → ProcessSteps →
// Sobre el servicio → Reseñas → RelatedLinks → FAQ. CTA como el index:
// primario enlace a la L3, secundario WhatsApp. La página .astro solo compone.
//
// ÁNGULO DE ESTA L2 — el copy no se copia del index ni de /productos/:
//   · el index responde  «¿con quién me equipo?»
//   · /productos/ responde «¿cuál compro y de qué capacidad?»
//   · /servicios/ responde «¿qué servicio me toca, CADA CUÁNDO y qué papel me
//     deja para el expediente?» — periodicidad y cumplimiento.
//
// Contrato de contenido de los módulos: label ≤ 27 caracteres, desc ≤ 78.
// ============================================================================

export type Feature = { label: string; desc: string };
export type GalleryImage = { src: string; alt: string };
export type ServiceFeature = {
  id: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  features: Feature[];
  ctaLabel: string;
  ctaHref: string;
  ctaSecondaryMsg: string;
  imgMain: GalleryImage;
  imgA: GalleryImage;
  imgB: GalleryImage;
};

// ── Módulos de servicio ──────────────────────────────────────────────────────
// Antes eran 3 para 7 servicios: cuatro fichas tenían tarjeta pero ningún
// módulo que las desarrollara. Ahora hay uno por servicio, con `id` para que
// la tarjeta y el menú puedan enlazar al ancla.
export const serviceFeatures: ServiceFeature[] = [
  {
    id: 'instalacion',
    eyebrow: 'Instalación · Proyecto a la medida · NOM-002-STPS',
    title: 'Instalación de sistemas contra incendio:',
    titleAccent: 'detección y alarma, hidrantes y rociadores',
    description:
      'Diseñamos e instalamos sistemas contra incendio de principio a fin: sistemas de detección y alarma contra incendios, red de hidrantes, rociadores automáticos, extintores y señalización, con cálculo hidráulico, planos y memoria técnica según el riesgo y la superficie del inmueble, no a partir de un paquete genérico.',
    features: [
      { label: 'Detección y alarma', desc: 'Detectores, panel, sirenas y luces estroboscópicas según la superficie.' },
      { label: 'Red hidráulica', desc: 'Gabinetes, mangueras y válvulas con cálculo conforme a la NFPA 14.' },
      { label: 'Extintores y señalización', desc: 'Ubicación y capacidad según la NOM-002-STPS y la NOM-003-SSPC.' },
      { label: 'Planos y memoria', desc: 'Documentación técnica lista para presentar a Protección Civil.' },
    ],
    ctaLabel: 'Instalación de sistemas',
    ctaHref: '/servicios/instalacion/',
    ctaSecondaryMsg: 'Hola, quiero cotizar la instalación de un sistema contra incendio para mi inmueble.',
    imgMain: { src: '/images/servicios/integracion-sistemas-contra-incendio.avif', alt: 'Instalación de red contra incendio en un inmueble' },
    imgA: { src: '/images/servicios/instalacion-deteccion-alarma.avif', alt: 'Montaje de detectores de humo y panel de alarma' },
    imgB: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Instalación de extintor y gabinete en almacén' },
  },
  {
    id: 'mantenimiento',
    eyebrow: 'Mantenimiento · Anual · NOM-002 7.18',
    title: 'Mantenimiento y recarga',
    titleAccent: 'de equipos contra incendio',
    description:
      'Un extintor sirve solo si está vigente. La revisión es mensual y el mantenimiento anual, y de ambos tiene que quedar evidencia. Damos mantenimiento preventivo y correctivo con el procedimiento de la NOM-154-SCFI-2005, dejamos etiqueta y collarín en cada equipo y avisamos antes de que venza.',
    features: [
      { label: 'Recarga conforme a norma', desc: 'Con etiqueta y collarín de servicio que acreditan el mantenimiento.' },
      { label: 'Revisión mensual guiada', desc: 'Te dejamos la bitácora y el criterio para la verificación del personal.' },
      { label: 'Programa de vigencia', desc: 'Avisamos cuándo toca el servicio para que no pierdas la vigencia.' },
      { label: 'Refacciones al momento', desc: 'Válvula, manómetro o manguera de descarga cambiados en el servicio.' },
    ],
    ctaLabel: 'Mantenimiento de extintores',
    ctaHref: '/servicios/mantenimiento/',
    ctaSecondaryMsg: 'Hola, quiero cotizar el mantenimiento y recarga de mis extintores conforme a la NOM-154.',
    imgMain: { src: '/images/servicios/inspeccion-recarga-extintores.avif', alt: 'Recarga de extintores en taller de servicio' },
    imgA: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Colocación de etiqueta y collarín de servicio' },
    imgB: { src: '/images/showcase/refacciones-equipo-contra-incendio.avif', alt: 'Refacciones de extintor para el mantenimiento' },
  },
  {
    id: 'inspeccion',
    eyebrow: 'Inspección · Dictamen técnico · Antes de la verificación',
    title: 'Inspección y dictamen',
    titleAccent: 'antes de que llegue la visita',
    description:
      'Revisamos el equipo y el sistema completo, identificamos faltantes, vencimientos e incumplimientos, y entregamos un dictamen técnico con prioridades: qué corregir primero para pasar la verificación y qué puede programarse después.',
    features: [
      { label: 'Revisión integral', desc: 'Extintores, detección, hidrantes y señalización en un solo recorrido.' },
      { label: 'Faltantes y vencimientos', desc: 'Qué falta, qué venció y qué no cumple, con foto y ubicación.' },
      { label: 'Dictamen por escrito', desc: 'Reporte con prioridades, redactado para quien toma la decisión.' },
      { label: 'Base del expediente', desc: 'El punto de partida para armar tu carpeta ante Protección Civil.' },
    ],
    ctaLabel: 'Inspección y dictamen',
    ctaHref: '/servicios/inspeccion/',
    ctaSecondaryMsg: 'Hola, quiero cotizar una inspección y dictamen de mi equipo contra incendio.',
    imgMain: { src: '/images/servicios/inspeccion-tablero-alarma-gabinete-manguera.avif', alt: 'Inspección del tablero de alarma y el gabinete' },
    imgA: { src: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif', alt: 'Revisión de gabinete, hidrante y extintor' },
    imgB: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Recorrido de inspección en nave industrial' },
  },
  {
    id: 'prueba-hidrostatica',
    eyebrow: 'Prueba hidrostática · Cada 5 años · NOM-154 5.6',
    title: 'Prueba hidrostática',
    titleAccent: 'del cilindro a presión',
    description:
      'El cilindro se fatiga aunque el extintor nunca se use. La NOM-154-SCFI-2005 pide una prueba de presión cada cinco años, y antes si el equipo sufrió un golpe, corrosión o exposición al fuego. Sin esa prueba vigente, el extintor no acredita el servicio.',
    features: [
      { label: 'Prueba a los 5 años', desc: 'Periodicidad que fija la NOM-154-SCFI-2005 en su apartado 5.6.' },
      { label: 'Marcado del cilindro', desc: 'Queda estampada la fecha de la prueba sobre el propio cilindro.' },
      { label: 'Dictamen del resultado', desc: 'Si el cilindro no pasa, se da de baja y se documenta el retiro.' },
      { label: 'Aviso de la siguiente prueba', desc: 'Se registra la fecha y se programa el aviso del siguiente quinquenio.' },
    ],
    ctaLabel: 'Prueba hidrostática',
    ctaHref: '/servicios/prueba-hidrostatica/',
    ctaSecondaryMsg: 'Hola, quiero cotizar la prueba hidrostática de mis extintores conforme a la NOM-154.',
    imgMain: { src: '/images/servicios/prueba-hidrostatica-extintor.avif', alt: 'Prueba hidrostática de un extintor en taller' },
    imgA: { src: '/images/showcase/extintores-variedad-colores-catalogo.avif', alt: 'Extintores de distintos agentes listos para servicio' },
    imgB: { src: '/images/general/inventario-proveedor-equipo-contra-incendio.avif', alt: 'Inventario de extintores en el taller de servicio' },
  },
  {
    id: 'diagnostico-de-riesgo',
    eyebrow: 'Diagnóstico · Antes de comprar · NOM-002 Tabla 1',
    title: 'Diagnóstico de riesgo',
    titleAccent: 'para no comprar de más',
    description:
      'Antes de cotizar equipo conviene saber en qué nivel de riesgo de incendio cae el inmueble, porque de ahí salen la densidad de extintores, la distancia de recorrido y si hace falta brigada. Se clasifica conforme a la Tabla 1 de la NOM-002-STPS-2010 y, con esa base, se compra solo el equipo que el inmueble exige.',
    features: [
      { label: 'Clasificación del riesgo', desc: 'Ordinario o alto, según superficie y cantidad de material combustible.' },
      { label: 'Densidad y recorrido', desc: 'Un extintor por cada 300 m² (200 m² en riesgo alto), a 23 m como máximo.' },
      { label: 'Qué te obliga y qué no', desc: 'La brigada, por ejemplo, solo es obligatoria en riesgo alto.' },
      { label: 'Levantamiento en sitio', desc: 'Recorrido del inmueble con plano y ubicación propuesta del equipo.' },
    ],
    ctaLabel: 'Diagnóstico de riesgo',
    ctaHref: '/servicios/diagnostico-de-riesgo/',
    ctaSecondaryMsg: 'Hola, quiero un diagnóstico para saber en qué nivel de riesgo cae mi inmueble.',
    imgMain: { src: '/images/servicios/auditoria-seguridad-contra-incendio.avif', alt: 'Levantamiento de riesgo de incendio en planta' },
    imgA: { src: '/images/servicios/cuarto-bomba-contra-incendio.avif', alt: 'Cuarto de bombas de una red contra incendio' },
    imgB: { src: '/images/servicios/supresion-cocina-comercial.avif', alt: 'Cocina comercial con campana y supresión clase K' },
  },
  {
    id: 'capacitacion-dc3',
    eyebrow: 'Capacitación · Constancia DC-3 · STPS',
    title: 'Capacitación de brigada',
    titleAccent: 'y constancias DC-3',
    description:
      'Tener extintores no basta si nadie sabe usarlos en caso de incendio. Capacitamos a tu personal en uso y manejo, conato de incendio y evacuación, con práctica de fuego controlado, y gestionamos la constancia DC-3 que acredita la capacitación ante la STPS.',
    features: [
      { label: 'Uso y manejo de extintor', desc: 'Práctica con fuego controlado y con el agente que hay en tu inmueble.' },
      { label: 'Brigada y evacuación', desc: 'Roles, rutas, punto de reunión y coordinación del simulacro.' },
      { label: 'Constancia DC-3', desc: 'Formato oficial de la STPS a nombre de cada trabajador capacitado.' },
      { label: 'En tu sitio o en aula', desc: 'Se agenda por turnos para no parar la operación del inmueble.' },
    ],
    ctaLabel: 'Capacitación de brigada',
    ctaHref: '/servicios/capacitacion-dc3/',
    ctaSecondaryMsg: 'Hola, quiero cotizar capacitación de brigada y constancias DC-3 para mi personal.',
    imgMain: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Capacitación de brigada con extintores' },
    imgA: { src: '/images/casos/entrega-servicio-equipo-contra-incendio.avif', alt: 'Entrega de equipo y material a la brigada' },
    imgB: { src: '/images/showcase/equipo-proteccion-bomberos-epp.avif', alt: 'Equipo de protección personal para la brigada' },
  },
  {
    id: 'gestion-documental',
    eyebrow: 'Gestión documental · Protección Civil y STPS',
    title: 'Expediente en regla',
    titleAccent: 'y listo para la verificación',
    description:
      'En una verificación no se revisa solo el equipo: se pide el papel que demuestra que está vigente y que el personal está capacitado. Ordenamos ese expediente y lo mantenemos al día, con lo que ya tienes y lo que falte por generar.',
    features: [
      { label: 'Inventario del equipo', desc: 'Qué hay, dónde está y cuándo vence cada pieza del inmueble.' },
      { label: 'Evidencia de servicio', desc: 'Bitácoras, etiquetas, constancias y reportes reunidos en una carpeta.' },
      { label: 'Constancias del personal', desc: 'DC-3 de brigada y registro de simulacros realizados.' },
      { label: 'Al día todo el año', desc: 'Se actualiza con cada servicio, no la semana antes de la visita.' },
    ],
    ctaLabel: 'Gestión documental',
    ctaHref: '/servicios/gestion-documental/',
    ctaSecondaryMsg: 'Hola, quiero ayuda para ordenar mi expediente de Protección Civil y STPS.',
    imgMain: { src: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif', alt: 'Registro de la inspección de un gabinete de manguera' },
    imgA: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Técnico revisando y registrando el equipo del inmueble' },
    imgB: { src: '/images/servicios/prueba-mangueras-contra-incendio.avif', alt: 'Prueba de mangueras documentada en sitio' },
  },
];

// ── Calendario de servicio ───────────────────────────────────────────────────
// El RiskGuide de esta L2 no clasifica riesgo (eso es /productos/ y el index):
// responde la pregunta propia de servicios, que es CADA CUÁNDO toca cada cosa
// y qué papel deja. Periodicidades verificadas en fuente primaria.
export type ServiceCalendarRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export const serviciosCalendario: ServiceCalendarRow[] = [
  {
    nivel: 'Revisión del extintor',
    ejemplos: 'Mensual',
    minimo: 'NOM-002-STPS-2010, apartado 7.18',
    complementos: 'La hace tu personal; queda en bitácora firmada',
  },
  {
    nivel: 'Mantenimiento del extintor',
    ejemplos: 'Anual',
    minimo: 'NOM-002-STPS 7.18, con el procedimiento de la NOM-154',
    complementos: 'Etiqueta y collarín de servicio sobre el equipo',
  },
  {
    nivel: 'Prueba hidrostática',
    ejemplos: 'Cada 5 años',
    minimo: 'NOM-154-SCFI-2005, apartado 5.6',
    complementos: 'Fecha estampada en el cilindro y dictamen del resultado',
  },
  {
    nivel: 'Inspección del sistema',
    ejemplos: 'Anual o antes de una verificación',
    minimo: 'Buena práctica; NFPA 25 como referencia en redes de agua',
    complementos: 'Dictamen con faltantes, vencimientos y prioridades',
  },
  {
    nivel: 'Capacitación de brigada',
    ejemplos: 'Según el programa del centro de trabajo',
    minimo: 'NOM-002-STPS; la brigada es obligatoria en riesgo alto',
    complementos: 'Constancia DC-3 por trabajador, sin vigencia fijada por norma',
  },
  {
    nivel: 'Simulacro de evacuación',
    ejemplos: 'Según el programa interno de Protección Civil',
    minimo: 'Programa Interno de Protección Civil de tu entidad',
    complementos: 'Acta de simulacro firmada para el expediente',
  },
];

// ── Respaldo normativo ───────────────────────────────────────────────────────
// Ángulo propio: qué le exige la norma AL SERVICIO y qué evidencia debe dejar,
// no qué certifica al producto (eso es /productos/).
export type NormRow = { norma: string; alcance: string; aplica: string };
export const serviciosNormRows: NormRow[] = [
  { norma: 'NOM-002-STPS-2010', alcance: 'Obliga la revisión mensual y el mantenimiento anual del equipo, y el programa de prevención del centro de trabajo', aplica: 'Toda empresa con trabajadores' },
  { norma: 'NOM-154-SCFI-2005', alcance: 'Fija el procedimiento de servicio y recarga, y la prueba hidrostática del cilindro cada 5 años', aplica: 'Mantenimiento de extintores' },
  { norma: 'NOM-106-SCFI-2017', alcance: 'Contraseña oficial del producto certificado: el sello que acredita el equipo entregado', aplica: 'Equipo que se suministra en el servicio' },
  { norma: 'NOM-003-SSPC-2011', alcance: 'Señales de protección civil: color, forma y símbolo de la señalización instalada', aplica: 'Señalización y rutas de evacuación' },
  { norma: 'NOM-026-STPS-2008', alcance: 'Colores de seguridad e identificación de fluidos en la tubería de la red', aplica: 'Instalación de red hidráulica' },
  { norma: 'Formato DC-3 (STPS)', alcance: 'Acredita ante la STPS la capacitación recibida por cada trabajador', aplica: 'Capacitación de brigada' },
  { norma: 'NFPA 10 (ref.)', alcance: 'Inspección, prueba y mantenimiento de extintores portátiles', aplica: 'Referencia técnica del servicio' },
  { norma: 'NFPA 25 (ref.)', alcance: 'Inspección, prueba y mantenimiento de sistemas de protección a base de agua', aplica: 'Redes hidráulicas y rociadores' },
];

// ── Cómo se contrata un servicio ─────────────────────────────────────────────
export type Step = { num: string; title: string; desc: string };
export const serviciosSteps: Step[] = [
  { num: '01', title: 'Levantamiento', desc: 'Recorremos el inmueble o revisamos tu inventario: qué equipo hay, dónde está y cuándo vence cada pieza.' },
  { num: '02', title: 'Revisión del alcance', desc: 'Definimos si corresponde instalación, mantenimiento, prueba, inspección o capacitación.' },
  { num: '03', title: 'Programa y cotización', desc: 'Propuesta con el servicio que toca, cuándo toca y qué cuesta; puede organizarse por etapas.' },
  { num: '04', title: 'Agenda del servicio', desc: 'Coordinamos la atención en sitio y la salida a taller cuando el equipo lo requiere.' },
  { num: '05', title: 'Servicio en sitio', desc: 'Atendemos el equipo y procuramos no dejar áreas sin protección durante el trabajo.' },
  { num: '06', title: 'Revisión en taller', desc: 'Cuando aplica, abrimos, probamos, reparamos o recargamos el equipo según el servicio.' },
  { num: '07', title: 'Evidencia y constancias', desc: 'Dejamos etiqueta, collarín, reporte y las constancias que correspondan.' },
  { num: '08', title: 'Aviso de vigencia', desc: 'Te avisamos cuándo toca la siguiente recarga, prueba hidrostática o capacitación.' },
];

// ── Sobre el servicio ────────────────────────────────────────────────────────
export const serviciosCompany = {
  que: {
    title: 'Qué cubre el servicio',
    body: [
      'Acompañamos la protección contra incendio durante toda su vida útil: instalación, mantenimiento y recarga, prueba hidrostática, inspección con dictamen, diagnóstico de riesgo, capacitación de brigada con DC-3 y gestión del expediente ante Protección Civil y STPS.',
      'Atendemos oficinas, edificios comerciales, escuelas, restaurantes, bodegas y naves industriales en CDMX y Estado de México, con el mismo criterio para tres extintores que para una red hidráulica completa.',
    ],
  },
  como: {
    title: 'Cómo se agenda',
    pillars: [
      { title: 'Primero el levantamiento', desc: 'Sin saber qué equipo tienes y cuándo vence, cualquier cotización sería una estimación sin sustento.' },
      { title: 'Sin parar tu operación', desc: 'Se agenda por turnos o por etapas para cuidar la continuidad de las operaciones sin dejar el inmueble sin protección.' },
      { title: 'Con evidencia siempre', desc: 'Cada servicio deja etiqueta, reporte y constancia para tu expediente.' },
    ],
  },
};

// ── Enlaces relacionados ─────────────────────────────────────────────────────
export const serviciosRelated = [
  { label: 'Equipos contra incendios', href: '/productos/', desc: 'El equipo que instalamos y damos mantenimiento.' },
  { label: 'Verifica tu extintor', href: '/herramientas/verifica-tu-extintor/', desc: 'Revisa si tu extintor necesita servicio.' },
  { label: 'Qué exige Protección Civil', href: '/proteccion-civil/', desc: 'El servicio que respalda tu trámite.' },
  { label: 'Formatos descargables', href: '/plantillas/', desc: 'Registra en bitácora cada servicio recibido.' },
];

// ── Reseñas del servicio ────────────────────────────────────────────────────
export const serviciosTestimoniosNombres = [
  'Carmen L.',
  'Felipe O.',
  'Víctor M.',
];
export const serviciosTestimoniosHead = {
  title: 'La atención que',
  titleAccent: 'valoran nuestros clientes',
  desc: 'Opiniones reales de clientes de CONINC, publicadas con su autorización.',
  body: [
    'En el servicio cuenta lo mismo que describen aquí: resolver dudas, orientar con claridad y acompañar durante todo el proceso.',
    'Cada reseña se publica tal como nos la enviaron.',
  ],
};

// ── Preguntas frecuentes ────────────────────────────────────────────────────
export const serviciosFaqs: { question: string; answer: string }[] = [
  {
    question: '¿Cada cuándo se da mantenimiento o recarga a un extintor?',
    answer: 'El mantenimiento del extintor es anual por mandato de la NOM-002-STPS-2010 (apartado 7.18) y se ejecuta con el procedimiento de la NOM-154-SCFI-2005; la recarga se hace en ese servicio o después de cualquier descarga. Además, la NOM-002 pide una revisión mensual a cargo del propio personal, registrada en bitácora.',
  },
  {
    question: '¿Cada cuándo se hace la prueba hidrostática?',
    answer: 'En México la prueba hidrostática se realiza cada 5 años en extintores de agua, CO₂ y PQS, conforme al apartado 5.6 de la NOM-154-SCFI-2005, y antes si el cilindro sufrió un golpe, corrosión o exposición al fuego. El plazo de 12 años que circula en internet corresponde a la NFPA 10 de Estados Unidos y no aplica en México.',
  },
  {
    question: '¿Cuáles son los tipos de sistemas contra incendios?',
    answer: 'Los más comunes en empresas son: los sistemas de detección de incendio y los sistemas de alarma contra incendios, que detectan y notifican con detectores de humo o calor, estaciones manuales y sirenas; la red de hidrantes con gabinetes y mangueras, más el hidrante o toma siamesa para bomberos; los rociadores automáticos, donde cada rociador descarga agua solo si detecta calor; la supresión clase K en campanas de cocina, y el agente limpio para sites y cuartos eléctricos. Juntos forman la detección y supresión de un sistema contra incendio, y se complementan con extintores portátiles y señalización para cada caso de emergencia.',
  },
  {
    question: '¿Cuánto cuesta un sistema contra incendios?',
    answer: 'No hay un precio de lista, porque el alcance cambia con cada inmueble: la superficie, el grado de riesgo, los niveles y los sistemas que exige la norma. Por eso el servicio arranca con un levantamiento; con él se arma una cotización por etapas que separa equipo, instalación, pruebas y documentación.',
  },
  {
    question: '¿Qué equipos y sistemas de protección contra incendios necesita una empresa?',
    answer: 'Lo define el grado de riesgo de incendio que fija la NOM-002-STPS-2010, base de la prevención de incendios en cualquier centro de trabajo. Todo centro de trabajo necesita extintores con su mantenimiento anual y revisión mensual; la detección, la red de hidrantes y la brigada dependen de si el riesgo es ordinario o alto. En la Ciudad de México, además, la señalización de rutas se pide aun en bajo riesgo.',
  },
  {
    question: '¿Cómo elegir una empresa de sistemas contra incendio?',
    answer: 'Pide que revise tu inmueble antes de cotizar, que la cotización separe equipo, instalación y documentación, y que cada servicio deje evidencia: etiqueta y collarín conforme a la NOM-154-SCFI-2005, reporte por escrito y constancias DC-3 cuando capacita. El equipo que te entregue debe traer la contraseña oficial de su certificación de producto.',
  },
  {
    question: '¿La instalación incluye planos y memoria de diseño?',
    answer: 'Sí. El servicio de instalación incluye cálculo, planos y memoria técnica, para que tengas la documentación que pide Protección Civil y tu aseguradora.',
  },
  {
    question: '¿Me entregan dictamen o constancia para Protección Civil y STPS?',
    answer: 'Sí. Cada servicio se entrega con su reporte o constancia correspondiente, listos para integrar a tu expediente ante Protección Civil y STPS. El equipo que suministramos llega con la contraseña oficial de su certificación de producto y, en sistemas fijos, con certificado de puesta en marcha.',
  },
  {
    question: '¿Puedo cotizar servicio y producto en el mismo mensaje?',
    answer: 'Sí. Puedes pedir, por ejemplo, el suministro de extintores junto con su instalación y mantenimiento en una sola cotización por WhatsApp.',
  },
  {
    question: '¿En qué zonas dan servicio?',
    answer: 'Atendemos la Ciudad de México, el Estado de México y la zona metropolitana. Cuéntanos dónde estás y te confirmamos cobertura y tiempos.',
  },
];

/** Encabezado del bloque FAQ + contacto (C3, 2026-09-16): propio de esta L2,
 *  antes era el genérico de FAQWithContact repetido en seis páginas. */
export const serviciosFaqHead = {
  title: 'Preguntas sobre',
  titleAccent: 'sistemas contra incendios',
  desc: 'Periodicidad, costos, entregables y cómo elegir a quien instala y da mantenimiento.',
  body: [
    'Estas son las preguntas que más recibimos antes de contratar instalación o mantenimiento: cada cuándo se da servicio, qué tipos de sistemas existen y qué documentación se entrega al terminar.',
    'Si necesitas un servicio que no aparece aquí, descríbelo en el formulario y te decimos si lo cubrimos y en qué plazo.',
  ],
}
