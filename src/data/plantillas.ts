// ============================================================================
// src/data/plantillas.ts — Datos de la L2 /plantillas/.
// ----------------------------------------------------------------------------
// PATRÓN L2: la página .astro solo compone; el contenido vive aquí.
//
// ÁNGULO DE ESTA L2 — cada sección responde una pregunta distinta:
//   · /productos/    «¿cuál compro y de qué capacidad?»
//   · /servicios/    «¿qué me toca y cada cuándo?»
//   · /cobertura/    «¿me atienden en mi zona?»
//   · /herramientas/ «¿cómo lo calculo yo mismo?»
//   · /plantillas/   «¿QUÉ PAPEL TENGO QUE LLENAR, cada cuándo y quién lo firma?»
//
// Las tarjetas y su listado siguen leyéndose de la colección `plantillas`;
// aquí vive lo que la página no puede sacar del frontmatter.
// ============================================================================

export type Feature = { label: string; desc: string };
export type GalleryImage = { src: string; alt: string };

export const plantillasPillars = [
  { icon: 'check', title: 'Gratis y sin registro', desc: 'Se descargan directo, en editable y en PDF para imprimir. Sin correo ni cuenta.' },
  { icon: 'doc', title: 'Con la norma citada', desc: 'Cada formato dice de qué obligación sale y qué se revisa o registra en él.' },
  { icon: 'shield', title: 'Son de apoyo', desc: 'No sustituyen el programa interno ni la documentación que exija la autoridad en cada caso.' },
  { icon: 'chat', title: 'O lo llevamos nosotros', desc: 'Si prefieres no cargar con el expediente, la gestión documental es un servicio.' },
];

// ── Módulos por formato ──────────────────────────────────────────────────────
export const plantillasFeatures = [
  {
    id: 'bitacora-revision-extintores',
    eyebrow: 'Bitácora · Mensual · NOM-002-STPS 7.18',
    title: 'Bitácora de revisión',
    titleAccent: 'mensual de extintores',
    description:
      'La revisión mensual la hace tu propio personal y no cuesta nada, pero sin registro no existe para la autoridad. Una fila por extintor, una casilla por mes y el detalle de qué mirar cada vez, para que la bitácora refleje el recorrido real y no se firme de golpe el día de la visita.',
    features: [
      { label: 'Una fila por extintor', desc: 'Ubicación, tipo, capacidad y número de serie de cada equipo del inmueble.' },
      { label: 'Una casilla por mes', desc: 'Doce meses a la vista: se nota de inmediato el hueco que falta.' },
      { label: 'Qué revisar cada vez', desc: 'Presión, seguro, manguera, acceso libre y señalización, punto por punto.' },
      { label: 'Firma de quien revisó', desc: 'La evidencia vale por el nombre que la respalda, no por la casilla marcada.' },
    ],
    ctaLabel: 'Descargar bitácora',
    ctaHref: '/plantillas/bitacora-revision-extintores/',
    ctaSecondaryLabel: 'Verifica tu extintor',
    ctaSecondaryHref: '/herramientas/verifica-tu-extintor/',
    imgMain: { src: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif', alt: 'Revisión mensual de un gabinete y su extintor en sitio' },
    imgA: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Etiqueta y collarín de servicio en un extintor' },
    imgB: { src: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif', alt: 'Recorrido de revisión de extintores e hidrante' },
  },
  {
    id: 'acta-simulacro-evacuacion',
    eyebrow: 'Acta · Por simulacro · Programa Interno',
    title: 'Acta de simulacro',
    titleAccent: 'de evacuación',
    description:
      'Un simulacro sin acta es un simulacro que no ocurrió. El formato recoge la hipótesis, los tiempos reales, lo que se observó y las acciones correctivas, que es justo lo que convierte el ejercicio en algo útil y no en una hora perdida de operación.',
    features: [
      { label: 'Hipótesis del ejercicio', desc: 'Qué se simuló, en qué área y con cuánta gente dentro del inmueble.' },
      { label: 'Tiempos medidos', desc: 'De la alarma a la salida y al pase de lista en el punto de reunión.' },
      { label: 'Qué se observó', desc: 'Rutas bloqueadas, señales que no se ven, personal que no supo qué hacer.' },
      { label: 'Acciones correctivas', desc: 'Con responsable y fecha: es lo que se revisa en el siguiente simulacro.' },
    ],
    ctaLabel: 'Descargar acta',
    ctaHref: '/plantillas/acta-simulacro-evacuacion/',
    ctaSecondaryLabel: 'Capacitación de brigada',
    ctaSecondaryHref: '/servicios/capacitacion-dc3/',
    imgMain: { src: '/images/casos/entrega-servicio-equipo-contra-incendio.avif', alt: 'Personal reunido durante un ejercicio de evacuación' },
    imgA: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Ruta de evacuación señalizada en nave industrial' },
    imgB: { src: '/images/servicios/prueba-electrica-panel-alarma-incendio.avif', alt: 'Prueba del panel de alarma antes de un simulacro' },
  },
  {
    id: 'censo-brigada-emergencia',
    eyebrow: 'Censo · Anual o al rotar personal · DC-3',
    title: 'Censo de brigada',
    titleAccent: 'de emergencia',
    description:
      'El censo que más veces vemos desactualizado: gente que ya no trabaja ahí sigue apareciendo como jefe de piso. Integrantes, brigada asignada, rol, contacto y la constancia que acredita su capacitación, en una sola hoja que se actualiza cuando rota el personal.',
    features: [
      { label: 'Integrantes por brigada', desc: 'Evacuación, primeros auxilios, combate de incendio y comunicación.' },
      { label: 'Rol y suplente', desc: 'Quién cubre cuando el titular está de vacaciones o en otro turno.' },
      { label: 'Contacto interno', desc: 'Extensión, celular y área, para localizarlos sin buscar en recursos humanos.' },
      { label: 'Constancia DC-3', desc: 'Fecha y folio de la capacitación que respalda a cada integrante.' },
    ],
    ctaLabel: 'Descargar censo',
    ctaHref: '/plantillas/censo-brigada-emergencia/',
    ctaSecondaryLabel: 'Constancias DC-3',
    ctaSecondaryHref: '/servicios/capacitacion-dc3/',
    imgMain: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Brigada de emergencia durante su capacitación' },
    imgA: { src: '/images/showcase/equipo-proteccion-bomberos-epp.avif', alt: 'Equipo de protección personal de la brigada' },
    imgB: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Personal capacitado revisando el equipo del inmueble' },
  },
];

// ── Cada cuándo se llena y quién lo firma ────────────────────────────────────
// La tabla de esta L2. En /servicios/ el calendario es de SERVICIOS; aquí es de
// PAPELES: la duda real de quien descarga un formato es con qué frecuencia hay
// que llenarlo y de quién tiene que ser la firma.
export type DocRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export const plantillasCalendario: DocRow[] = [
  {
    nivel: 'Bitácora de extintores',
    ejemplos: 'Mensual',
    minimo: 'Personal del propio centro de trabajo',
    complementos: 'Se conserva en el inmueble, a la vista en una verificación',
  },
  {
    nivel: 'Acta de simulacro',
    ejemplos: 'Según el programa interno del inmueble',
    minimo: 'Responsable del ejercicio y jefe de la unidad interna',
    complementos: 'Se integra al expediente con las acciones correctivas',
  },
  {
    nivel: 'Censo de brigada',
    ejemplos: 'Al integrarse la brigada y cada vez que rota el personal',
    minimo: 'Jefe de la unidad interna de protección civil',
    complementos: 'Se acompaña de las constancias DC-3 de cada integrante',
  },
  {
    nivel: 'Etiqueta y collarín',
    ejemplos: 'Anual, con el mantenimiento del extintor',
    minimo: 'El proveedor que presta el servicio',
    complementos: 'Va sobre el equipo; la bitácora solo registra la revisión',
  },
];

// ── De qué obligación sale cada formato ─────────────────────────────────────
export type NormRow = { norma: string; alcance: string; aplica: string };
export const plantillasNormRows: NormRow[] = [
  { norma: 'NOM-002-STPS-2010, 7.18', alcance: 'Obliga la revisión mensual del extintor y su mantenimiento al menos una vez al año', aplica: 'Bitácora de revisión' },
  { norma: 'NOM-002-STPS-2010', alcance: 'Pide programa de prevención, brigadas y simulacros en el centro de trabajo', aplica: 'Acta de simulacro y censo de brigada' },
  { norma: 'Programa Interno de Protección Civil', alcance: 'Define la periodicidad de simulacros y la integración de la unidad interna, según la entidad', aplica: 'Acta de simulacro' },
  { norma: 'Formato DC-3 (STPS)', alcance: 'Acredita ante la STPS la capacitación recibida por cada trabajador', aplica: 'Censo de brigada' },
  { norma: 'NOM-154-SCFI-2005', alcance: 'Procedimiento de servicio del extintor: la evidencia va en la etiqueta y el collarín, no en la bitácora', aplica: 'Qué NO cubre la bitácora' },
];

// ── Cómo se usan ─────────────────────────────────────────────────────────────
export type Step = { num: string; title: string; desc: string };
export const plantillasSteps: Step[] = [
  { num: '01', title: 'Descarga el que te toca', desc: 'Cada formato tiene su página, con el paso a paso de llenado y la obligación de la que sale.' },
  { num: '02', title: 'Llénalo con el recorrido real', desc: 'Un formato llenado de memoria el día de la visita se nota: las fechas son idénticas y nadie recuerda qué se observó.' },
  { num: '03', title: 'Fírmalo quien corresponde', desc: 'La evidencia vale por el nombre que la respalda. Sin firma es una hoja impresa.' },
  { num: '04', title: 'Archívalo donde se pueda mostrar', desc: 'En el inmueble y en el expediente: en una verificación se piden en sitio, no por correo.' },
  { num: '05', title: 'Actualízalo cuando cambie algo', desc: 'Extintor nuevo, simulacro hecho o brigadista que se va: el papel se corrige el mismo día.' },
];

export const plantillasCompany = {
  que: {
    title: 'Por qué los publicamos',
    body: [
      'Tres documentos que la autoridad pide ver y que casi nadie tiene a la mano. Los armamos con lo que encontramos en campo: bitácoras firmadas de golpe el día de la visita, simulacros sin acta y censos de brigada de hace tres años con la mitad de la gente que ya no trabaja ahí.',
      'Están en formato editable y en PDF para imprimir. Son de apoyo: no sustituyen el programa interno de protección civil ni la documentación que exija la autoridad competente en cada caso.',
    ],
  },
  como: {
    title: 'Cómo sacarles provecho',
    pillars: [
      { title: 'El papel sigue al hecho', desc: 'Primero se revisa el extintor y luego se registra; al revés es solo llenar casillas.' },
      { title: 'Una firma, un responsable', desc: 'Lo que da valor a la evidencia es que alguien con nombre la respalde.' },
      { title: 'O lo llevamos nosotros', desc: 'Si prefieres no cargar con el expediente, la gestión documental es un servicio.' },
    ],
  },
};

export const plantillasRelated = [
  { label: 'Gestión documental', href: '/servicios/gestion-documental/', desc: 'Que el expediente lo llevemos nosotros, al día todo el año.' },
  { label: 'Qué exige Protección Civil', href: '/proteccion-civil/', desc: 'Requisitos del trámite en CDMX y Estado de México.' },
  { label: 'Capacitación de brigada', href: '/servicios/capacitacion-dc3/', desc: 'Constancias DC-3 para respaldar tu censo.' },
  { label: 'Verifica tu extintor', href: '/herramientas/verifica-tu-extintor/', desc: 'Doce puntos antes de llenar la bitácora.' },
];

// ── FAQ propio ───────────────────────────────────────────────────────────────
export const plantillasFaqs = [
  {
    question: '¿Estos formatos sustituyen mi programa interno de protección civil?',
    answer: 'No. Son formatos de apoyo para registrar lo que ya haces: la revisión de extintores, los simulacros y la integración de tu brigada. El programa interno es un documento distinto, que en cada entidad tiene su propio procedimiento y su propio responsable registrado.',
  },
  {
    question: '¿Cada cuándo tengo que llenar la bitácora de extintores?',
    answer: 'Cada mes. La NOM-002-STPS-2010 pide en su apartado 7.18 la revisión mensual del extintor, además del mantenimiento anual. La revisión mensual la puede hacer tu propio personal; lo que no puede faltar es el registro con fecha y firma.',
  },
  {
    question: '¿Quién debe firmar el acta de simulacro?',
    answer: 'Quien coordinó el ejercicio y el responsable de la unidad interna de protección civil del inmueble. Lo importante no es la firma en sí, sino que haya alguien con nombre que responda por lo que dice el acta.',
  },
  {
    question: '¿En qué formato se descargan?',
    answer: 'La bitácora y el censo en Excel y en PDF; el acta de simulacro en Word y en PDF. Los editables sirven para llenarlos en computadora y llevar el histórico; los PDF, para imprimir y llenar a mano durante el recorrido.',
  },
  {
    question: '¿Puedo usarlos si no soy cliente suyo?',
    answer: 'Sí. Son gratuitos y sin registro para cualquier empresa. Si después quieres que nosotros llevemos el mantenimiento y el expediente, escríbenos; si no, quédate con los formatos y úsalos.',
  },
];
