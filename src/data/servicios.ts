// ============================================================================
// src/data/servicios.ts — Datos de la L2 /servicios/.
// ----------------------------------------------------------------------------
// Sigue el PATRÓN L2 fijado en `src/data/productos.ts`: la página .astro queda
// fina (solo composición) y todo el contenido vive aquí.
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
  ctaMsg: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
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
    title: 'Instalación de sistemas contra incendio',
    titleAccent: 'dimensionada a tu riesgo',
    description:
      'Hacemos el diseño e instalamos sistemas de principio a fin: sistemas de detección y alarma contra incendios, red de hidrantes, rociadores automáticos, extintores y señalización, con cálculo hidráulico, planos y memoria técnica según el riesgo y la superficie del inmueble, no a partir de un paquete genérico.',
    features: [
      { label: 'Detección y alarma', desc: 'Detectores, panel y sirenas dimensionados a la superficie real.' },
      { label: 'Red hidráulica', desc: 'Gabinetes, mangueras y válvulas con cálculo conforme a la NFPA 14.' },
      { label: 'Extintores y señalización', desc: 'Ubicación y capacidad según la NOM-002-STPS y la NOM-003-SSPC.' },
      { label: 'Planos y memoria', desc: 'Documentación técnica lista para presentar a Protección Civil.' },
    ],
    ctaLabel: 'Cotizar instalación',
    ctaMsg: 'Hola, quiero cotizar la instalación de un sistema contra incendio para mi inmueble.',
    ctaSecondaryLabel: 'Instalación de sistemas',
    ctaSecondaryHref: '/servicios/instalacion/',
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
      'Un extintor sirve solo si está vigente. La revisión es mensual y el mantenimiento anual, y de ambos tiene que quedar evidencia. Damos mantenimiento preventivo y correctivo —este último cuando el equipo falla— conforme a norma, con etiqueta y collarín, y avisamos antes de que venza.',
    features: [
      { label: 'Recarga conforme a norma', desc: 'Con etiqueta y collarín de servicio que acreditan el mantenimiento.' },
      { label: 'Revisión mensual guiada', desc: 'Te dejamos la bitácora y el criterio para la verificación del personal.' },
      { label: 'Programa de vigencia', desc: 'Avisamos cuándo toca el servicio para que no pierdas la vigencia.' },
      { label: 'Refacciones al momento', desc: 'Válvula, manómetro o manguera de descarga cambiados en el servicio.' },
    ],
    ctaLabel: 'Cotizar mantenimiento',
    ctaMsg: 'Hola, quiero cotizar el mantenimiento y recarga de mis extintores conforme a la NOM-154.',
    ctaSecondaryLabel: 'Recarga de extintores',
    ctaSecondaryHref: '/servicios/mantenimiento/',
    imgMain: { src: '/images/servicios/inspeccion-recarga-extintores.avif', alt: 'Recarga de extintores en taller de servicio' },
    imgA: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Colocación de etiqueta y collarín de servicio' },
    imgB: { src: '/images/showcase/refacciones-equipo-contra-incendio.avif', alt: 'Refacciones de extintor para el mantenimiento' },
  },
  {
    id: 'inspeccion',
    eyebrow: 'Inspección · Dictamen · Reporte claro',
    title: 'Inspección y dictamen',
    titleAccent: 'antes de que llegue la visita',
    description:
      'Revisamos el equipo y el sistema completo, identificamos faltantes, vencimientos e incumplimientos, y entregamos un dictamen con prioridades: qué corregir primero para pasar la verificación y qué puede esperar.',
    features: [
      { label: 'Revisión integral', desc: 'Extintores, detección, hidrantes y señalización en un solo recorrido.' },
      { label: 'Faltantes y vencimientos', desc: 'Qué falta, qué venció y qué no cumple, con foto y ubicación.' },
      { label: 'Dictamen por escrito', desc: 'Reporte con prioridades, sin tecnicismos ni letras chiquitas.' },
      { label: 'Base del expediente', desc: 'El punto de partida para armar tu carpeta ante Protección Civil.' },
    ],
    ctaLabel: 'Cotizar inspección',
    ctaMsg: 'Hola, quiero cotizar una inspección y dictamen de mi equipo contra incendio.',
    ctaSecondaryLabel: 'Inspección y dictamen',
    ctaSecondaryHref: '/servicios/inspeccion/',
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
      'El cilindro se fatiga aunque el extintor nunca se use. La NOM-154-SCFI-2005 pide una prueba de presión cada cinco años, y antes si el equipo sufrió un golpe, corrosión o exposición al fuego. Sin ella, el extintor no acredita.',
    features: [
      { label: 'Prueba a los 5 años', desc: 'Periodicidad que fija la NOM-154-SCFI-2005 en su apartado 5.6.' },
      { label: 'Marcado del cilindro', desc: 'Queda estampada la fecha de la prueba sobre el propio cilindro.' },
      { label: 'Dictamen del resultado', desc: 'Si el cilindro no pasa, se da de baja y se documenta el retiro.' },
      { label: 'Equipo de préstamo', desc: 'Se coordina para que el inmueble no quede sin protección durante la prueba.' },
    ],
    ctaLabel: 'Cotizar prueba hidrostática',
    ctaMsg: 'Hola, quiero cotizar la prueba hidrostática de mis extintores conforme a la NOM-154.',
    ctaSecondaryLabel: 'Prueba hidrostática',
    ctaSecondaryHref: '/servicios/prueba-hidrostatica/',
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
      'Antes de cotizar equipo conviene saber en qué nivel de riesgo de incendio cae el inmueble, porque de ahí salen la densidad de extintores, la distancia de recorrido y si hace falta brigada. Se clasifica conforme a la Tabla 1 de la NOM-002-STPS.',
    features: [
      { label: 'Clasificación del riesgo', desc: 'Ordinario o alto, según superficie y cantidad de material combustible.' },
      { label: 'Densidad y recorrido', desc: 'Un extintor por cada 300 m², o por cada 200 m² si el riesgo es alto.' },
      { label: 'Qué te obliga y qué no', desc: 'La brigada, por ejemplo, solo es obligatoria en riesgo alto.' },
      { label: 'Levantamiento en sitio', desc: 'Recorrido del inmueble con plano y ubicación propuesta del equipo.' },
    ],
    ctaLabel: 'Cotizar diagnóstico',
    ctaMsg: 'Hola, quiero un diagnóstico para saber en qué nivel de riesgo cae mi inmueble.',
    ctaSecondaryLabel: 'Diagnóstico de riesgo',
    ctaSecondaryHref: '/servicios/diagnostico-de-riesgo/',
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
      'Tener extintores no basta si nadie sabe usarlos en caso de incendio. Capacitamos a tu personal en uso y manejo, conato de incendio y evacuación, con práctica real de fuego, y emitimos la constancia DC-3 que acredita la capacitación ante la STPS.',
    features: [
      { label: 'Uso y manejo de extintor', desc: 'Práctica con fuego real y con el agente que hay en tu inmueble.' },
      { label: 'Brigada y evacuación', desc: 'Roles, rutas, punto de reunión y coordinación del simulacro.' },
      { label: 'Constancia DC-3', desc: 'Formato oficial de la STPS a nombre de cada trabajador capacitado.' },
      { label: 'En tu sitio o en aula', desc: 'Se agenda por turnos para no parar la operación del inmueble.' },
    ],
    ctaLabel: 'Cotizar capacitación',
    ctaMsg: 'Hola, quiero cotizar capacitación de brigada y constancias DC-3 para mi personal.',
    ctaSecondaryLabel: 'Capacitación de brigada',
    ctaSecondaryHref: '/servicios/capacitacion-dc3/',
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
    ctaLabel: 'Cotizar gestión documental',
    ctaMsg: 'Hola, quiero ayuda para ordenar mi expediente de Protección Civil y STPS.',
    ctaSecondaryLabel: 'Gestión documental',
    ctaSecondaryHref: '/servicios/gestion-documental/',
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
      'Atendemos oficinas, comercios, escuelas, restaurantes, bodegas y naves industriales en CDMX y Estado de México, con el mismo criterio para tres extintores que para una red hidráulica completa.',
    ],
  },
  como: {
    title: 'Cómo se agenda',
    pillars: [
      { title: 'Primero el levantamiento', desc: 'Sin saber qué equipo tienes y cuándo vence, cualquier cotización es un número al aire.' },
      { title: 'Sin parar tu operación', desc: 'Se agenda por turnos o por etapas para cuidar la continuidad de las operaciones sin dejar el inmueble sin protección.' },
      { title: 'Con evidencia siempre', desc: 'Cada servicio deja etiqueta, reporte y constancia para tu expediente.' },
    ],
  },
};

// ── Enlaces relacionados ─────────────────────────────────────────────────────
export const serviciosRelated = [
  { label: 'Equipos contra incendios', href: '/productos/', desc: 'Extintores, detección, hidrantes y señalización.' },
  { label: 'Verifica tu extintor', href: '/herramientas/verifica-tu-extintor/', desc: 'Doce puntos para saber si tu equipo está vigente.' },
  { label: 'Qué exige Protección Civil', href: '/proteccion-civil/', desc: 'Requisitos del trámite en CDMX y Estado de México.' },
  { label: 'Formatos descargables', href: '/plantillas/', desc: 'Bitácora de revisión, acta de simulacro y censo de brigada.' },
];
