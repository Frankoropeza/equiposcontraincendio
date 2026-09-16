// ============================================================================
// src/data/proteccion-civil.ts — Datos de la L2 /proteccion-civil/.
// ----------------------------------------------------------------------------
// PATRÓN L2: la página .astro solo compone; el contenido vive aquí.
//
// ÁNGULO DE ESTA L2:
//   «Me pidieron el programa de protección civil. ¿QUÉ EXIGE MI ENTIDAD y por
//    dónde empiezo?»
//
// REGLA DE LA SECCIÓN, heredada de la colección `tramites`: aquí SOLO se
// publica lo confirmado en la fuente oficial, y lo que no, se marca como
// pendiente con el enlace para consultarlo. Ningún dato de este archivo se
// escribe de memoria: todo sale del frontmatter verificado de
// src/content/tramites/*.md (verificado el 2026-09-09), y por eso las celdas
// de CDMX que la cédula no publica dicen exactamente eso.
// ============================================================================

export type Feature = { label: string; desc: string };
export type GalleryImage = { src: string; alt: string };

// ── Módulos por entidad ──────────────────────────────────────────────────────
export const pcFeatures = [
  {
    id: 'cdmx',
    eyebrow: 'Ciudad de México · SGIRPC · Plataforma digital',
    title: 'En la Ciudad de México',
    titleAccent: 'es un trámite en línea',
    description:
      'La CDMX concentra el Programa Interno en una plataforma digital de la SGIRPC con dos puertas: una para público en general, donde se valida con Llave CDMX si tu establecimiento está obligado, y otra reservada a responsables oficiales registrados, que es por donde se ingresa el programa.',
    features: [
      { label: 'Valida si estás obligado', desc: 'Primer paso lógico: confirmarlo en la plataforma antes de cotizar nada.' },
      { label: 'Lo ingresa un ROPC o ROPCI', desc: 'Presentar el programa está reservado a responsables registrados.' },
      { label: 'Padrón público de ROPC', desc: 'La SGIRPC lo publica: sirve para comprobar a quién le estás pagando.' },
      { label: 'Requisitos, en la cédula', desc: 'No los publicamos de memoria; se consultan en el trámite oficial enlazado.' },
    ],
    ctaLabel: 'Requisitos en CDMX',
    ctaHref: '/proteccion-civil/cdmx/',
    ctaSecondaryLabel: 'Cobertura en CDMX',
    ctaSecondaryHref: '/cobertura/cdmx/',
    imgMain: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Inmueble equipado con protección contra incendio en la Ciudad de México' },
    imgA: { src: '/images/servicios/instalacion-deteccion-alarma.avif', alt: 'Instalación de detección y alarma en un edificio de oficinas' },
    imgB: { src: '/images/servicios/inspeccion-tablero-alarma-gabinete-manguera.avif', alt: 'Revisión del tablero de alarma y el gabinete del inmueble' },
  },
  {
    id: 'edomex',
    eyebrow: 'Estado de México · Homoclave 1254 · Presencial',
    title: 'En el Estado de México',
    titleAccent: 'el trámite es presencial',
    description:
      'En materia de protección civil, el Estado de México evalúa Programas Específicos por la homoclave 1254 del RETyS. Aplica a giros comerciales, industriales y de servicios clasificados como de mediano y alto riesgo, se presenta de forma presencial y la cédula señala un plazo máximo de 15 días hábiles.',
    features: [
      { label: 'Mediano y alto riesgo', desc: 'Esa clasificación es la que decide si tienes que inscribir el programa.' },
      { label: 'Siete requisitos', desc: 'Solicitud, programa, carta, acta, calendario, croquis y pago de derechos.' },
      { label: '15 días hábiles', desc: 'Plazo máximo de respuesta que señala la cédula oficial del trámite.' },
      { label: 'Fundamento publicado', desc: 'Libro Sexto del Código Administrativo, artículo 6.26, fracción I.' },
    ],
    ctaLabel: 'Requisitos en Edomex',
    ctaHref: '/proteccion-civil/edomex/',
    ctaSecondaryLabel: 'Cobertura en Edomex',
    ctaSecondaryHref: '/cobertura/edomex/',
    imgMain: { src: '/images/general/inventario-proveedor-equipo-contra-incendio.avif', alt: 'Inventario de equipo contra incendio listo para entrega en el Estado de México' },
    imgA: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Inspección de equipo contra incendio en una nave industrial' },
    imgB: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Instalación de equipo contra incendio en un almacén' },
  },
];

// ── Comparativa entidad por entidad ──────────────────────────────────────────
// La tabla de esta L2. Todos los valores salen del frontmatter verificado de
// src/content/tramites/*.md. Donde la fuente oficial no publica el dato, la
// celda lo dice — no se rellena con una suposición razonable.
export type PcRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export const pcComparativa: PcRow[] = [
  {
    nivel: 'Autoridad',
    ejemplos: 'Secretaría de Gestión Integral de Riesgos y Protección Civil (SGIRPC)',
    minimo: 'Coordinación General de Protección Civil y Gestión Integral del Riesgo',
    complementos: 'Cada alcaldía o ayuntamiento puede pedir además su visto bueno',
  },
  {
    nivel: 'A quién aplica',
    ejemplos: 'Establecimientos que la propia plataforma marque como obligados',
    minimo: 'Giros comerciales, industriales y de servicios de mediano y alto riesgo',
    complementos: 'La clasificación de riesgo es la que decide en ambos casos',
  },
  {
    nivel: 'Cómo se presenta',
    ejemplos: 'En línea, por la plataforma digital de la SGIRPC',
    minimo: 'Presencial, ante la Coordinación General',
    complementos: 'En CDMX el ingreso está reservado a ROPC y ROPCI registrados',
  },
  {
    nivel: 'Plazo de respuesta',
    ejemplos: 'No publicado en la cédula: se consulta en el trámite oficial',
    minimo: '15 días hábiles',
    complementos: 'El plazo corre desde que el expediente queda completo',
  },
  {
    nivel: 'Qué obtienes',
    ejemplos: 'Autorización del Programa Interno de Protección Civil',
    minimo: 'Oficio de inscripción o revalidación en el Registro Estatal',
    complementos: 'En Edomex, con la vigencia que señale el propio documento',
  },
];

// ── Qué se apoya en qué ──────────────────────────────────────────────────────
export type NormRow = { norma: string; alcance: string; aplica: string };
export const pcNormRows: NormRow[] = [
  { norma: 'NOM-002-STPS-2010', alcance: 'Prevención y protección contra incendios en centros de trabajo: equipo, revisión, brigadas y simulacros', aplica: 'Federal · aplica igual en las dos entidades' },
  { norma: 'Programa Interno de PC · CDMX', alcance: 'Se ingresa en la plataforma digital de la SGIRPC; la validación de obligatoriedad se hace con Llave CDMX', aplica: 'Ciudad de México' },
  { norma: 'Código Administrativo del Edomex, Libro Sexto, art. 6.26 fr. I', alcance: 'Obliga a contar con Programa Específico de Protección Civil', aplica: 'Estado de México' },
  { norma: 'Reglamento del Libro Sexto, arts. 63 y 65', alcance: 'Procedimiento de inscripción y revalidación del programa ante el Registro Estatal', aplica: 'Estado de México' },
  { norma: 'Padrón de ROPC / terceros acreditados', alcance: 'Permite comprobar que quien firma tu programa está realmente registrado', aplica: 'Ciudad de México' },
  { norma: 'Código Financiero del Estado de México', alcance: 'Pago de derechos previo al inicio del trámite', aplica: 'Estado de México' },
];

// ── Qué hacer cuando llega el requerimiento ─────────────────────────────────
export type Step = { num: string; title: string; desc: string };
export const pcSteps: Step[] = [
  { num: '01', title: 'Confirma si estás obligado', desc: 'En CDMX se valida en la plataforma con Llave CDMX; en Edomex depende del giro y su riesgo.' },
  { num: '02', title: 'Clasifica el riesgo', desc: 'De ahí sale cuánto equipo pide la norma y si necesitas brigada.' },
  { num: '03', title: 'Pon el equipo al día', desc: 'Verifica equipo vigente, señalización, rutas de evacuación y brigada capacitada antes de la inspección.' },
  { num: '04', title: 'Corrige las condiciones', desc: 'Resuelve faltantes y medidas de seguridad del inmueble; el programa describe la realidad, no la reemplaza.' },
  { num: '05', title: 'Reúne la evidencia', desc: 'Junta bitácoras, etiquetas, actas de simulacro y constancias DC-3 del personal.' },
  { num: '06', title: 'Separa lo local', desc: 'Identifica los requisitos propios de CDMX o Estado de México para tu inmueble.' },
  { num: '07', title: 'El programa lo firma', desc: 'En CDMX, un ROPC o ROPCI registrado; en Edomex, con carta de corresponsabilidad.' },
  { num: '08', title: 'Integra el expediente', desc: 'Ordena el programa y la evidencia para presentar el trámite ante la autoridad.' },
];

export const pcCompany = {
  que: {
    title: 'Qué hacemos y qué no',
    body: [
      'Te damos asesoría y preparamos el inmueble y el expediente técnico: diagnóstico de riesgo, equipo contra incendio conforme a la norma, señalización, capacitación de brigada con constancia y la documentación del equipo, ordenada como se presenta.',
      'Lo que no hacemos es firmar el programa. Esa firma corresponde a quien está registrado para ello, y decirlo claro nos parece más útil que prometerlo y subcontratarlo sin avisar.',
    ],
  },
  como: {
    title: 'Cómo publicamos esta información',
    pillars: [
      { title: 'Solo lo confirmado', desc: 'Cada dato sale de la cédula del trámite o del portal de la autoridad, con su enlace.' },
      { title: 'Con fecha de verificación', desc: 'Estos trámites cambian; sin la fecha, un dato correcto envejece sin avisar.' },
      { title: 'Lo pendiente, marcado', desc: 'Lo que no pudimos confirmar aparece como pendiente, nunca como requisito.' },
    ],
  },
};

export const pcRelated = [
  { label: 'Gestión documental', href: '/servicios/gestion-documental/', desc: 'Ordenamos y mantenemos al día el expediente del inmueble.' },
  { label: 'Diagnóstico de riesgo', href: '/servicios/diagnostico-de-riesgo/', desc: 'Clasificación conforme a la Tabla 1 de la NOM-002.' },
  { label: 'Formatos descargables', href: '/plantillas/', desc: 'Bitácora, acta de simulacro y censo de brigada.' },
  { label: 'Cobertura CDMX y Edomex', href: '/cobertura/', desc: 'Dónde damos servicio en sitio y cómo se agenda.' },
];

export const pcFaqs = [
  {
    question: '¿Ustedes elaboran y firman el Programa Interno de Protección Civil?',
    answer: 'No lo firmamos. Preparamos el inmueble y el expediente técnico —diagnóstico de riesgo, equipo conforme a la norma, señalización, capacitación de brigada y la documentación del equipo— pero la firma del programa corresponde a quien está registrado para ello: en la CDMX, un responsable oficial de protección civil del padrón de la SGIRPC.',
  },
  {
    question: '¿Cómo sé si mi establecimiento está obligado?',
    answer: 'En la Ciudad de México, la plataforma de la SGIRPC tiene un acceso para público en general donde, iniciando sesión con Llave CDMX, se valida si el establecimiento lo requiere. En el Estado de México depende de que tu giro se clasifique como de mediano o alto riesgo. En ambos casos conviene confirmarlo antes de contratar a nadie.',
  },
  {
    question: '¿Cómo sacar un permiso de Protección Civil?',
    answer: 'Depende de la entidad. En la Ciudad de México es un trámite en línea: primero se valida con Llave CDMX, en la plataforma digital de la SGIRPC, si el establecimiento está obligado, y el Programa Interno lo ingresa un responsable oficial registrado. En el Estado de México, los Programas Específicos de mediano y alto riesgo se presentan de forma presencial (homoclave 1254 del RETyS). En los dos casos conviene llegar con el inmueble al día: equipo, señalización, rutas de evacuación y brigada.',
  },
  {
    question: '¿Qué te pide Protección Civil para un negocio?',
    answer: 'Depende del giro y del grado de riesgo. En la visita de inspección se revisan sobre todo las medidas de seguridad: extintores vigentes y bien ubicados, señalización y rutas de evacuación, detección cuando aplica, brigada capacitada y, si el establecimiento está obligado, el Programa Interno con su evidencia. Cada ficha por giro de esta sección detalla lo que le aplica.',
  },
  {
    question: '¿Qué es un dictamen o visto bueno de Protección Civil?',
    answer: 'Es el documento con el que la autoridad en materia de protección civil —la del municipio, la alcaldía o el estado, según el lugar— hace constar que un establecimiento cumple las medidas de seguridad que le revisó. El nombre, los requisitos y el costo cambian de un municipio a otro (visto bueno, dictamen o constancia de medidas preventivas), por eso aquí solo publicamos lo que confirmamos en la fuente oficial de la CDMX y del Estado de México.',
  },
  {
    question: '¿Por qué hay datos que no publican?',
    answer: 'Porque no los pudimos confirmar en la fuente oficial. Preferimos marcarlos como pendientes y dejar el enlace a la cédula del trámite, a publicar un requisito de memoria que después te cueste tiempo o dinero. Cada ficha lleva la fecha en que se verificó.',
  },
  {
    question: '¿Cuánto tarda el trámite en el Estado de México?',
    answer: 'La cédula del trámite (homoclave 1254 del RETyS) señala un plazo máximo de respuesta de 15 días hábiles, y el pago de derechos se hace antes de iniciar, conforme al Código Financiero del Estado de México. El plazo corre desde que el expediente está completo.',
  },
  {
    question: 'Ya tengo el requerimiento encima, ¿por dónde empiezo?',
    answer: 'Por el inmueble, no por el papel. Un programa bien redactado no pasa una visita si los extintores están vencidos o las rutas bloqueadas. Escríbenos con lo que te pidieron y revisamos primero qué hay que corregir en sitio.',
  },
];
