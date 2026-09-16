// ============================================================================
// src/data/herramientas.ts — Datos de la L2 /herramientas/.
// ----------------------------------------------------------------------------
// Sigue el PATRÓN L2: la página .astro queda fina (solo composición) y todo el
// contenido vive aquí, como productos.ts, servicios.ts y cobertura.ts.
//
// ÁNGULO DE ESTA L2 — cada sección responde una pregunta distinta:
//   · index         «¿con quién me equipo?»
//   · /productos/   «¿cuál compro y de qué capacidad?»
//   · /servicios/   «¿qué me toca y cada cuándo?»
//   · /cobertura/   «¿me atienden en mi zona?»
//   · /herramientas/ «¿CÓMO LO CALCULO YO MISMO antes de pedir cotización?»
//
// REGLA DE LA SECCIÓN: orientan, no dictaminan. Cada herramienta cita la norma
// de la que sale su criterio y deja claro que el dictamen lo firma quien está
// facultado. Esa frase no es un descargo legal decorativo: es la diferencia
// entre una herramienta útil y una que mete al usuario en un problema.
// CTA como el index: primario a la herramienta, secundario WhatsApp (Consultar por WhatsApp).
// ============================================================================

export const herramientasCards = [
  {
    label: 'Riesgo de incendio: ordinario o alto',
    href: '/herramientas/riesgo-de-incendio/',
    image: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
    imageAlt: 'Inspección de sistema de alarma y extintor en un centro de trabajo',
    badge: 'NOM-002-STPS-2010',
    blurb: 'Criterios de la Tabla 1 de la NOM-002: basta uno para pasar a riesgo alto.',
    ctaLabel: 'Clasificar mi riesgo',
    subcategories: [
      { label: 'La Tabla 1 explicada', href: '/blog/riesgo-de-incendio-tabla-1-nom-002/' },
      { label: 'Quién debe firmarlo', href: '/blog/quien-clasifica-riesgo-de-incendio-empresa/' },
      { label: 'Bodegas y naves', href: '/blog/riesgo-de-incendio-bodegas-naves-industriales/' },
    ],
  },
  {
    label: 'Cuántos extintores necesito',
    href: '/herramientas/cuantos-extintores-necesito/',
    image: '/images/showcase/extintores-variedad-colores-catalogo.avif',
    imageAlt: 'Extintores de distintos agentes y capacidades en catálogo',
    badge: 'NOM-002-STPS-2010',
    blurb: 'Mínimo por superficie y por nivel, más el agente que pide cada área de riesgo.',
    ctaLabel: 'Calcular mis extintores',
    subcategories: [
      { label: 'Extintores por m²', href: '/blog/cuantos-extintores-por-metro-cuadrado/' },
      { label: 'Por área de riesgo', href: '/blog/extintores-por-area-riesgo-cocina-cuarto-electrico/' },
      { label: 'Naves de varios niveles', href: '/blog/cuantos-extintores-nave-industrial-varios-niveles/' },
    ],
  },
  {
    label: 'Verifica tu extintor',
    href: '/herramientas/verifica-tu-extintor/',
    image: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
    imageAlt: 'Revisión de gabinete de hidrante y extintor en sitio',
    badge: 'NOM-154-SCFI-2005',
    blurb: 'Puntos observables para comprobar si el último servicio fue conforme a norma.',
    ctaLabel: 'Verificar mi extintor',
    subcategories: [
      { label: 'Señales de servicio real', href: '/blog/como-saber-si-mantenimiento-extintor-es-real/' },
      { label: 'Verificar al proveedor', href: '/blog/mantenimiento-recarga-extintores-nom/' },
      { label: 'Leer el manómetro', href: '/blog/manometro-extintor-zonas-que-significan/' },
    ],
  },
  {
    label: 'Formatos descargables',
    href: '/plantillas/',
    image: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif',
    imageAlt: 'Revisión de gabinete y manguera contra incendio en sitio',
    badge: 'Excel y PDF',
    blurb: 'Bitácora de revisión, acta de simulacro y censo de brigada, listos para llenar hoy.',
    ctaLabel: 'Formatos descargables',
    subcategories: [
      { label: 'Bitácora de revisión', href: '/plantillas/bitacora-revision-extintores/' },
      { label: 'Acta de simulacro', href: '/plantillas/acta-simulacro-evacuacion/' },
      { label: 'Censo de brigada', href: '/plantillas/censo-brigada-emergencia/' },
    ],
  },
]

// ── Módulos de detalle por herramienta (CategoryFeature, 2 columnas) ──
// Mismo patrón que /servicios (CategoryFeature uniforme: sin flip ni surface):
// izquierda info + bullets, derecha galería 1 grande + 2 chicas. Uno por
// tarjeta, en el mismo orden que el grid de arriba.
export type HerramientaFeature = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  features: { label: string; desc: string }[];
  ctaLabel: string;
  ctaHref: string;
  ctaSecondaryMsg: string;
  imgMain: { src: string; alt: string };
  imgA: { src: string; alt: string };
  imgB: { src: string; alt: string };
};

export const herramientasFeatures: HerramientaFeature[] = [
  {
    eyebrow: 'Herramienta gratuita · NOM-002-STPS-2010',
    title: 'Riesgo de incendio:',
    titleAccent: 'ordinario o alto, en minutos',
    description:
      'Captura los datos de tu inmueble y aplica los criterios de la Tabla 1 de la NOM-002-STPS-2010: superficie construida e inventario de gases inflamables, líquidos inflamables, líquidos combustibles, sólidos combustibles y materiales pirofóricos o explosivos. Con que uno solo alcance su umbral, todo el centro de trabajo pasa a riesgo alto.',
    features: [
      { label: 'Criterios de la Tabla 1', desc: 'Superficie e inventario de gases, líquidos, sólidos y pirofóricos.' },
      { label: 'Resultado inmediato', desc: 'Ordinario o alto, con el criterio exacto que definió tu clasificación.' },
      { label: 'De qué depende después', desc: 'Cuántos extintores te pide la norma y si necesitas brigada.' },
      { label: 'Orienta, no dictamina', desc: 'El estudio formal para tu expediente lo firma quien está facultado.' },
    ],
    ctaLabel: 'Clasificar mi riesgo',
    ctaHref: '/herramientas/riesgo-de-incendio/',
    ctaSecondaryMsg: 'Hola, usé la herramienta de riesgo de incendio y quiero revisar mi resultado.',
    imgMain: { src: '/images/servicios/auditoria-seguridad-contra-incendio.avif', alt: 'Diagnóstico de riesgo de incendio en un centro de trabajo' },
    imgA: { src: '/images/servicios/cuarto-bomba-contra-incendio.avif', alt: 'Cuarto de bomba contra incendio en nave industrial' },
    imgB: { src: '/images/servicios/instalacion-deteccion-alarma.avif', alt: 'Instalación de detección y alarma contra incendio' },
  },
  {
    eyebrow: 'Herramienta gratuita · NOM-002-STPS-2010',
    title: 'Cuántos extintores',
    titleAccent: 'necesita tu inmueble',
    description:
      'Te damos dos números por separado: el mínimo por superficie —uno por cada 300 m² en riesgo ordinario, uno por cada 200 m² en riesgo alto— y el agente que corresponde a cada área con riesgo propio, como cocina, cuarto eléctrico o almacén de inflamables.',
    features: [
      { label: 'Mínimo por superficie', desc: 'Aritmética normativa según tu grado de riesgo y tus niveles.' },
      { label: 'Agente por área', desc: 'Clase K, CO₂, clase B o clase D según qué se puede quemar ahí.' },
      { label: 'Uno por nivel, mínimo', desc: 'Un extintor solo sirve si está al alcance en cada piso.' },
      { label: 'Desglose listo para cotizar', desc: 'Cópialo o mándalo por WhatsApp con un clic.' },
    ],
    ctaLabel: 'Calcular mis extintores',
    ctaHref: '/herramientas/cuantos-extintores-necesito/',
    ctaSecondaryMsg: 'Hola, calculé cuántos extintores necesito y quiero cotizarlos.',
    imgMain: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Suministro de equipo contra incendio en almacén' },
    imgA: { src: '/images/showcase/extintores-catalogo-profesional.avif', alt: 'Extintores de distintas capacidades en catálogo' },
    imgB: { src: '/images/servicios/supresion-cocina-comercial.avif', alt: 'Supresión de incendios en cocina comercial' },
  },
  {
    eyebrow: 'Herramienta gratuita · NOM-154-SCFI-2005',
    title: 'Verifica tu extintor',
    titleAccent: 'antes de la verificación',
    description:
      'Una etiqueta de servicio no garantiza que el mantenimiento se haya realizado. Marca lo que se cumple hoy en tu inmueble y sabrás, sin herramientas ni conocimientos técnicos, en qué situación está tu equipo antes de que llegue una verificación.',
    features: [
      { label: 'Puntos observables', desc: 'Etiqueta, collarín, manómetro y contraseña oficial, sin tecnicismos.' },
      { label: 'Servicio comprobable', desc: 'Una etiqueta sin servicio real detrás no garantiza que el equipo funcione.' },
      { label: 'Autoevaluación, no dictamen', desc: 'Sirve para llegar con preguntas concretas a tu proveedor.' },
      { label: 'Agenda revisión con un clic', desc: 'Si algo falla, cotiza la corrección directo por WhatsApp.' },
    ],
    ctaLabel: 'Verificar mi extintor',
    ctaHref: '/herramientas/verifica-tu-extintor/',
    ctaSecondaryMsg: 'Hola, revisé mi extintor con su verificador y quiero corregir lo que falló.',
    imgMain: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Etiquetado e inspección de extintor en sitio' },
    imgA: { src: '/images/servicios/prueba-hidrostatica-extintor.avif', alt: 'Prueba hidrostática de extintor' },
    imgB: { src: '/images/servicios/inspeccion-recarga-extintores.avif', alt: 'Inspección y recarga de extintores' },
  },
  {
    eyebrow: 'Gratis · Excel y PDF',
    title: 'Formatos',
    titleAccent: 'listos para llenar hoy',
    description:
      'Los registros que respaldan tu expediente ante Protección Civil y la STPS, ya armados: bitácora de revisión mensual de extintores, acta de simulacro de evacuación y censo de brigada de emergencia. Descárgalos en Excel o PDF y úsalos desde la próxima revisión.',
    features: [
      { label: 'Bitácora de revisión', desc: 'Una fila por extintor, una casilla por mes, con qué revisar cada vez.' },
      { label: 'Acta de simulacro', desc: 'Hipótesis, tiempos, puntos observados y áreas de oportunidad.' },
      { label: 'Censo de brigada', desc: 'Integrantes, rol, contacto y constancia de capacitación.' },
      { label: 'En Excel y PDF', desc: 'Edítalos en computadora o imprímelos para llenar a mano.' },
    ],
    ctaLabel: 'Formatos descargables',
    ctaHref: '/plantillas/',
    ctaSecondaryMsg: 'Hola, descargué sus formatos y quiero ayuda para integrar mi expediente.',
    imgMain: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Capacitación de brigada en el uso de extintores' },
    imgA: { src: '/images/casos/entrega-servicio-equipo-contra-incendio.avif', alt: 'Entrega de servicio de equipo contra incendio' },
    imgB: { src: '/images/servicios/inspeccion-gabinete-manguera-contra-incendio.avif', alt: 'Revisión de gabinete y manguera contra incendio' },
  },
]

// ── Cómo funcionan (ProcessSteps, fondo oscuro) ──
export const herramientasSteps = [
  { num: '01', title: 'Clasifica el riesgo', desc: 'Captura superficie e inventario; el grado de riesgo condiciona el resto de las obligaciones.' },
  { num: '02', title: 'Calcula el equipo', desc: 'Con el grado de riesgo, obtén el mínimo de extintores por superficie y por nivel.' },
  { num: '03', title: 'Asigna el agente por área', desc: 'Cocina, cuarto eléctrico o almacén de inflamables requieren un agente específico.' },
  { num: '04', title: 'Revisa el recorrido', desc: 'Comprueba que cada punto del inmueble quede dentro de la distancia máxima al extintor.' },
  { num: '05', title: 'Verifica el equipo instalado', desc: 'Revisa etiqueta, collarín, manómetro y contraseña oficial de cada extintor.' },
  { num: '06', title: 'Registra la revisión mensual', desc: 'Anota cada revisión en la bitácora; es la evidencia que pide la NOM-002.' },
  { num: '07', title: 'Documenta simulacros y brigada', desc: 'Usa el acta de simulacro y el censo de brigada para integrar el expediente.' },
  { num: '08', title: 'Atiende lo pendiente', desc: 'Comparte el resultado por WhatsApp si necesitas equipo, servicio o una revisión en sitio.' },
]

// ── FAQ propio de herramientas ──
export const herramientasFaqs = [
  {
    question: '¿Qué es la NOM-002-STPS-2010?',
    answer: 'Es la Norma Oficial Mexicana de la Secretaría del Trabajo y Previsión Social sobre condiciones de seguridad, prevención y protección contra incendios en los centros de trabajo. Obliga a clasificar el riesgo de incendio del inmueble y, según ese grado, a contar con extintores, detectores, plan de atención a emergencias, instrucciones de seguridad y simulacros; en riesgo alto suma la brigada contra incendio y los sistemas fijos de protección.',
  },
  {
    question: '¿Cuál es la norma de extintores en México?',
    answer: 'Son varias, cada una con su alcance. La NOM-002-STPS-2010 fija cuántos extintores debe tener un centro de trabajo, dónde se colocan y cada cuándo se revisan; la NOM-154-SCFI-2005 regula el servicio de mantenimiento, la recarga y la prueba hidrostática, y la NOM-106-SCFI-2017 establece la contraseña oficial que acredita al producto certificado.',
  },
  {
    question: '¿A qué altura debe estar un extintor según la NOM-002?',
    answer: 'La NOM-002-STPS-2010 establece que el extintor se coloque a no más de 1.50 m del piso, medido a la parte más alta del equipo, en un lugar visible, de fácil acceso y libre de obstáculos.',
  },
  {
    question: '¿Qué diferencia hay entre riesgo de incendio ordinario y alto?',
    answer: 'La Tabla 1 de la NOM-002-STPS-2010 clasifica el centro de trabajo con criterios de superficie construida e inventario de gases, líquidos inflamables, líquidos combustibles, sólidos combustibles y materiales pirofóricos o explosivos. Basta con rebasar uno para quedar en riesgo alto, que pide más extintores por metro cuadrado y medidas adicionales. El clasificador de riesgo hace esa comparación por ti.',
  },
  {
    question: '¿Cuántos extintores debe tener una empresa?',
    answer: 'La NOM-002-STPS-2010 pide al menos un extintor por cada 300 m² en riesgo ordinario y uno por cada 200 m² en riesgo alto, nunca menos de uno por nivel, y respetar la distancia máxima de recorrido hasta el equipo. La calculadora de extintores aplica esas reglas a tu superficie y número de niveles.',
  },
  {
    question: '¿La NOM-002-STPS-2010 aplica según el número de trabajadores?',
    answer: 'Aplica a todos los centros de trabajo del país. Lo que cambia las obligaciones es el grado de riesgo de incendio del inmueble, no el tamaño de la plantilla: por eso la primera herramienta que conviene usar es el clasificador de riesgo.',
  },
  {
    question: '¿Estas herramientas sustituyen un dictamen o estudio oficial?',
    answer: 'No. Orientan y te dan un punto de partida con el mismo criterio que aplica la autoridad, pero el estudio o dictamen formal para tu expediente ante Protección Civil o STPS lo debe elaborar y firmar quien está facultado para ello. Si necesitas apoyo, revisamos contigo el resultado y las correcciones en el inmueble.',
  },
  {
    question: '¿Necesito registrarme o dar mi correo para usarlas?',
    answer: 'No. Todas son gratuitas, sin registro y sin necesidad de correo: capturas tus datos o descargas el formato, y decides si quieres compartirlo con nosotros por WhatsApp.',
  },
  {
    question: '¿Mis datos se guardan o los ve alguien más?',
    answer: 'No. El cálculo se hace en tu navegador; no guardamos ni enviamos tus datos a ningún lado, salvo que tú decidas compartirlos al escribirnos.',
  },
  {
    question: '¿Qué pasa si mi resultado da riesgo alto o mi extintor no pasa la verificación?',
    answer: 'Son la señal de que conviene revisar tu caso con más detalle. Escríbenos con tu resultado y te decimos qué corregir primero, sin compromiso.',
  },
  {
    question: '¿Tengo que ser cliente suyo para usarlas?',
    answer: 'No. Funcionan igual si eres cliente nuestro o no: son de utilidad pública, pensadas para cualquier empresa que necesite resolver estas preguntas.',
  },
  {
    question: '¿En qué normas se basan?',
    answer: 'La clasificación de riesgo y el mínimo de extintores salen de la NOM-002-STPS-2010; la verificación del servicio, de la NOM-154-SCFI-2005. Cada herramienta cita el artículo o tabla exacta de la que sale su número.',
  },
]

// ── Comparativa de herramientas ──────────────────────────────────────────────
// El bloque de tabla de esta L2. En /productos/ compara agentes y en
// /servicios/ periodicidades; aquí compara LAS HERRAMIENTAS entre sí, para que
// el visitante sepa cuál abrir sin tener que probarlas todas.
export type ToolRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export const herramientasComparativa: ToolRow[] = [
  {
    nivel: 'Riesgo de incendio',
    ejemplos: '¿Mi centro de trabajo es de riesgo ordinario o alto?',
    minimo: 'Superficie e inventario de gases, líquidos y sólidos combustibles',
    complementos: 'Tu grado de riesgo y el criterio exacto que lo determinó',
  },
  {
    nivel: 'Cuántos extintores',
    ejemplos: '¿Cuántos necesito y de qué agente?',
    minimo: 'Superficie por nivel y tu grado de riesgo',
    complementos: 'Mínimo por superficie más el agente que pide cada área',
  },
  {
    nivel: 'Verifica tu extintor',
    ejemplos: '¿El servicio del año pasado fue real?',
    minimo: 'El extintor a la vista, con su etiqueta y su collarín',
    complementos: 'Los puntos que fallan y qué exigirle a tu proveedor',
  },
  {
    nivel: 'Formatos descargables',
    ejemplos: '¿Con qué documento registro lo que ya hago?',
    minimo: 'Nada: se descargan y se llenan',
    complementos: 'Bitácora de revisión, acta de simulacro y censo de brigada',
  },
];

// ── De qué norma sale cada número ────────────────────────────────────────────
// Ángulo propio: no qué certifica el producto ni qué exige el servicio, sino
// EL SUSTENTO DE CADA CÁLCULO. Es lo que separa a estas herramientas de una
// calculadora inventada, y lo que permite discutir el resultado con datos.
export type NormRow = { norma: string; alcance: string; aplica: string };
export const herramientasNormRows: NormRow[] = [
  { norma: 'NOM-002-STPS-2010, Tabla 1', alcance: 'Los criterios que clasifican el riesgo: superficie, gases, líquidos inflamables, líquidos combustibles, sólidos combustibles y materiales pirofóricos o explosivos', aplica: 'Clasificador de riesgo' },
  { norma: 'NOM-002-STPS-2010, 5.1 y 7.17', alcance: 'Un extintor por cada 300 m² en riesgo ordinario y por cada 200 m² en alto, nunca menos de uno por nivel', aplica: 'Calculadora de extintores' },
  { norma: 'NOM-002-STPS-2010, Tabla 1', alcance: 'Distancia máxima de recorrido: 23 m para clases A, C y D; 15 m clase B (10 m en riesgo alto); 10 m clase K', aplica: 'Calculadora de extintores' },
  { norma: 'NOM-002-STPS-2010, 7.18', alcance: 'Revisión mensual del extintor y mantenimiento al menos una vez al año', aplica: 'Verificador de extintor' },
  { norma: 'NOM-154-SCFI-2005, 5.6', alcance: 'Prueba hidrostática del cilindro cada cinco años y marcado de la fecha sobre el equipo', aplica: 'Verificador de extintor' },
  { norma: 'NOM-106-SCFI-2017', alcance: 'Contraseña oficial del producto certificado: el sello que debe llevar el extintor', aplica: 'Verificador de extintor' },
  { norma: 'Programa Interno de Protección Civil', alcance: 'Evidencia documental que se presenta en una verificación', aplica: 'Formatos descargables' },
];

// ── Sobre las herramientas ───────────────────────────────────────────────────
export const herramientasCompany = {
  que: {
    title: 'Por qué publicamos las cuentas',
    body: [
      'Publicamos los criterios de cálculo para que cualquier empresa pueda comprobar cuánto equipo le corresponde antes de cotizar. Un cliente que entiende el origen de su número toma mejores decisiones de compra.',
      'Las herramientas son gratuitas, sin registro y sin correo. El cálculo ocurre en tu navegador: no guardamos ni enviamos tus datos a ningún lado, salvo que decidas compartirlos al escribirnos.',
    ],
  },
  como: {
    title: 'Cómo usarlas bien',
    pillars: [
      { title: 'Empieza por el riesgo', desc: 'Casi todo lo demás —cuántos extintores, si necesitas brigada— depende de ese primer resultado.' },
      { title: 'Llega con el número, no con la duda', desc: 'Cotizar con un cálculo en mano cambia por completo la conversación con cualquier proveedor.' },
      { title: 'Orientan, no dictaminan', desc: 'El estudio o dictamen formal para tu expediente lo elabora y lo firma quien está facultado.' },
    ],
  },
};

// ── Consulta de resultado ───────────────────────────────────────────────────
export const herramientasConsultaMsg =
  'Hola, usé sus herramientas y quiero revisar mi resultado.';

// ── Enlaces relacionados ─────────────────────────────────────────────────────
// Sustituyen al SectionMenu de cierre que tenía la página: mismo destino, pero
// con el componente que usan las otras tres L2, para que todas cierren igual.
export const herramientasRelated = [
  { label: 'Formatos descargables', href: '/plantillas/', desc: 'Bitácora de revisión, acta de simulacro y censo de brigada.' },
  { label: 'Qué exige Protección Civil', href: '/proteccion-civil/', desc: 'Requisitos del trámite en CDMX y Estado de México.' },
  { label: 'Equipos contra incendios', href: '/productos/', desc: 'Extintores, detección, hidrantes y señalización.' },
  { label: 'Servicios contra incendio', href: '/servicios/', desc: 'Instalación, mantenimiento, inspección y capacitación.' },
];
