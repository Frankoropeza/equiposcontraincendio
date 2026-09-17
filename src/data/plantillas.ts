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
// CTA como el index: primario a la página del formato, secundario WhatsApp.
// ============================================================================

export type Feature = { label: string; desc: string };
export type GalleryImage = { src: string; alt: string };

// ── Módulos por formato ──────────────────────────────────────────────────────
export type PlantillaFeature = {
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

export const plantillasFeatures: PlantillaFeature[] = [
  {
    id: 'bitacora-revision-extintores',
    eyebrow: 'Bitácora · Mensual · NOM-002-STPS 7.18',
    title: 'Bitácora de revisión',
    titleAccent: 'y check list de extintores',
    description:
      'La revisión mensual la realiza tu propio personal, pero sin registro no hay evidencia ante la autoridad. Una fila por extintor, una casilla por mes y el check list de qué revisar cada vez, para que la bitácora refleje el recorrido real y no se llene el mismo día de la visita.',
    features: [
      { label: 'Una fila por extintor', desc: 'Ubicación, tipo, capacidad y número de serie de cada equipo del inmueble.' },
      { label: 'Una casilla por mes', desc: 'El año completo a la vista: un mes sin registro se identifica de inmediato.' },
      { label: 'Qué revisar cada vez', desc: 'Presión, seguro, manguera, acceso libre y señalización, punto por punto.' },
      { label: 'Firma de quien revisó', desc: 'La evidencia vale por el nombre que la respalda, no por la casilla marcada.' },
    ],
    ctaLabel: 'Descargar bitácora',
    ctaHref: '/plantillas/bitacora-revision-extintores/',
    ctaSecondaryMsg: 'Hola, descargué la bitácora de extintores y quiero ayuda con la revisión mensual.',
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
      'Sin acta, un simulacro no deja evidencia. El formato funciona como cédula de evaluación del ejercicio: recoge la hipótesis, los tiempos medidos, lo que se observó y las acciones correctivas, que es lo que convierte el simulacro en una mejora verificable.',
    features: [
      { label: 'Hipótesis del ejercicio', desc: 'Qué se simuló, en qué área y con cuánta gente dentro del inmueble.' },
      { label: 'Tiempos medidos', desc: 'De la alarma a la salida y al pase de lista en el punto de reunión.' },
      { label: 'Qué se observó', desc: 'Rutas bloqueadas, señales que no se ven, personal que no supo qué hacer.' },
      { label: 'Acciones correctivas', desc: 'Con responsable y fecha: es lo que se revisa en el siguiente simulacro.' },
    ],
    ctaLabel: 'Descargar acta',
    ctaHref: '/plantillas/acta-simulacro-evacuacion/',
    ctaSecondaryMsg: 'Hola, necesito apoyo para organizar y documentar un simulacro de evacuación.',
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
      'Un censo desactualizado deja a la brigada sin responsables reales. Reúne integrantes, brigada asignada, rol, contacto y la constancia que acredita su capacitación, en una sola hoja que se actualiza cuando rota el personal.',
    features: [
      { label: 'Integrantes por brigada', desc: 'Evacuación, primeros auxilios, combate de incendio y comunicación.' },
      { label: 'Rol y suplente', desc: 'Quién cubre cuando el titular está de vacaciones o en otro turno.' },
      { label: 'Contacto interno', desc: 'Extensión, celular y área, para localizarlos de inmediato.' },
      { label: 'Constancia DC-3', desc: 'Fecha y folio de la capacitación que respalda a cada integrante.' },
    ],
    ctaLabel: 'Descargar censo',
    ctaHref: '/plantillas/censo-brigada-emergencia/',
    ctaSecondaryMsg: 'Hola, quiero capacitar a mi brigada y tener sus constancias DC-3 al día.',
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
  { num: '01', title: 'Descarga el formato', desc: 'Elige la bitácora, el acta o el censo según la obligación que vas a registrar.' },
  { num: '02', title: 'Revisa sus campos', desc: 'Identifica los datos del inmueble, equipos, personas, fechas y firmas que solicita.' },
  { num: '03', title: 'Llénalo con el hecho', desc: 'Registra el recorrido, simulacro o capacitación mientras ocurre, no de memoria.' },
  { num: '04', title: 'Anota hallazgos', desc: 'Deja por escrito lo observado y las áreas de oportunidad que requieran seguimiento.' },
  { num: '05', title: 'Define responsables', desc: 'Asigna responsable y fecha compromiso a cada acción correctiva del registro.' },
  { num: '06', title: 'Recaba las firmas', desc: 'Firman el responsable, el jefe de brigada o el testigo que pida el formato.' },
  { num: '07', title: 'Archívalo con evidencia', desc: 'Guárdalo junto con etiquetas, constancias, actas y comprobantes del expediente.' },
  { num: '08', title: 'Actualízalo al cambiar', desc: 'Corrige el documento cuando cambie un equipo, una persona o se haga otro ejercicio.' },
];

export const plantillasCompany = {
  que: {
    title: 'Por qué los publicamos',
    body: [
      'Los registros que respaldan la revisión del equipo, los simulacros y la brigada, preparados para llenarse en el momento en que ocurre cada actividad.',
      'Están en formato editable y en PDF para imprimir. Son de apoyo: no sustituyen el programa interno de protección civil ni la documentación que exija la autoridad competente en cada caso.',
    ],
  },
  como: {
    title: 'Cómo sacarles provecho',
    pillars: [
      { title: 'El papel sigue al hecho', desc: 'Primero se revisa el extintor y luego se registra; registrar sin revisar no genera evidencia válida.' },
      { title: 'Una firma, un responsable', desc: 'Lo que da valor a la evidencia es que alguien con nombre la respalde.' },
      { title: 'Gestión documental', desc: 'Si prefieres delegar el expediente, lo integramos y lo mantenemos al día.' },
    ],
  },
};

// ── Consulta de formatos ────────────────────────────────────────────────────
export const plantillasConsultaMsg =
  'Hola, descargué sus formatos y quiero ayuda para integrar mi expediente.';

export const plantillasCardCta: Record<string, string> = {
  'bitacora-revision-extintores': 'Bitácora de extintores',
  'acta-simulacro-evacuacion': 'Acta de simulacro',
  'censo-brigada-emergencia': 'Censo de brigada',
};

export const plantillasRelated = [
  { label: 'Gestión documental', href: '/servicios/gestion-documental/', desc: 'Nosotros llevamos el expediente todo el año.' },
  { label: 'Qué exige Protección Civil', href: '/proteccion-civil/', desc: 'Dónde se presentan los formatos llenos.' },
  { label: 'Capacitación de brigada', href: '/servicios/capacitacion-dc3/', desc: 'Constancias DC-3 para respaldar tu censo.' },
  { label: 'Verifica tu extintor', href: '/herramientas/verifica-tu-extintor/', desc: 'Revisión guiada antes de llenar la bitácora.' },
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
    question: '¿Qué es un check list de extintores?',
    answer: 'Es la lista de verificación que se usa en la revisión mensual de cada extintor: presión, seguro, manguera, acceso libre y señalización. Nuestra bitácora integra ese check list con una fila por extintor y una casilla por mes, como pide la NOM-002-STPS-2010 en su apartado 7.18.',
  },
  {
    question: '¿Qué formatos de protección civil necesita una empresa?',
    answer: 'Depende de la entidad y del programa interno de cada inmueble. Los expedientes suelen incluir, entre otros, la revisión periódica del equipo contra incendio, el acta de cada simulacro y la integración de las brigadas de emergencia, que son los registros que publicamos aquí.',
  },
  {
    question: '¿Sirven también para la STPS?',
    answer: 'Sí, como evidencia de apoyo. La NOM-002-STPS-2010 pide la revisión mensual de los extintores, la realización de simulacros y, en riesgo alto, la integración de la brigada contra incendio; estos formatos sirven para dejarlo por escrito. Si tu entidad o tu auditor usan un formato oficial propio, ese es el que prevalece.',
  },
  {
    question: '¿Qué debe llevar un formato de simulacro de evacuación?',
    answer: 'Como mínimo: datos del inmueble, fecha y hipótesis del ejercicio, participantes, hora de la alarma y tiempos de evacuación, puntos observados, acciones correctivas y las firmas de quien coordinó. Nuestra acta de simulacro ya trae esos campos.',
  },
  {
    question: '¿Qué es una cédula de evaluación de simulacro?',
    answer: 'Es el registro con el que se evalúa un simulacro: hipótesis, tiempos, participación y observaciones. Nuestra acta de simulacro reúne esos datos junto con las acciones correctivas; si tu entidad o tu programa interno usan una cédula oficial, esa es la que prevalece.',
  },
  {
    question: '¿Quién debe firmar el acta de simulacro?',
    answer: 'Quien coordinó el ejercicio y el responsable de la unidad interna de protección civil del inmueble. Lo importante es que haya una persona identificada que responda por el contenido del acta.',
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

/** Encabezado del bloque FAQ + contacto (C3, 2026-09-16): propio de esta L2,
 *  antes era el genérico de FAQWithContact repetido en seis páginas. */
export const plantillasFaqHead = {
  title: 'Preguntas sobre',
  titleAccent: 'formatos de Protección Civil',
  desc: 'Cuándo se llena cada formato, quién lo firma y qué autoridad lo revisa.',
  body: [
    'Resolvemos las dudas al usar los formatos descargables: cada cuándo se llena la bitácora, qué lleva un acta de simulacro y si sirven para la STPS además de Protección Civil.',
    'Si necesitas un formato que no está aquí, pídelo en el formulario y te decimos si lo tenemos.',
  ],
}
