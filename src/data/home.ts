// Datos editoriales repetibles de la HOME.
// Los valores se mantienen aquí para que index.astro solo componga componentes.

export type HomePillar = {
  icon: string;
  title: string;
  desc: string;
};

export type HomeRiskRow = {
  nivel: string;
  ejemplos: string;
  minimo: string;
  complementos: string;
};

export type HomeNormRow = {
  norma: string;
  alcance: string;
  aplica: string;
};

export type HomeStep = {
  num: string;
  title: string;
  desc: string;
};

export type HomeCompany = {
  que: {
    title: string;
    body: string[];
  };
  como: {
    title: string;
    pillars: { title: string; desc: string }[];
  };
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export type HomeFeature = {
  label: string;
  desc: string;
};

export type HomeBrand = {
  name: string;
  note?: string;
};

export type HomeGalleryImage = {
  src: string;
  alt: string;
};

export type HomeCategoryFeature = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  features: HomeFeature[];
  brands?: HomeBrand[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  imgMain: HomeGalleryImage;
  imgA: HomeGalleryImage;
  imgB: HomeGalleryImage;
  surface?: boolean;
  flip?: boolean;
};

export const homeMenuSub: Record<string, string> = {
  Productos: "Catálogo de equipo",
  Servicios: "Instalación y mantenimiento",
  Cobertura: "Zonas que atendemos",
  Blog: "Guías y normatividad",
};

export const homePillars: HomePillar[] = [
  { icon: "shield", title: "Conforme a norma", desc: "Equipo y servicio alineados a la NOM-154-SCFI, la NOM-002-STPS y la NOM-003-SEGOB." },
  { icon: "doc", title: "Listo para Protección Civil", desc: "Te entregamos ficha técnica y constancias de servicio para tu expediente ante PC y STPS." },
  { icon: "chat", title: "Asesoría honesta", desc: "Te recomendamos el equipo que pide tu riesgo real, sin venderte de más." },
  { icon: "pin", title: "CDMX y Estado de México", desc: "Atención y entrega en la Ciudad de México, el Estado de México y la zona metropolitana." },
];

export const homeRiskRows: HomeRiskRow[] = [
  {
    nivel: "Ordinario",
    ejemplos: "Oficinas, escuelas, consultorios, comercios pequeños",
    minimo: "Extintores PQS ABC, detección de humo, señalización NOM-003",
    complementos: "Botiquín, lámparas de emergencia, capacitación de uso",
  },
  {
    nivel: "Moderado",
    ejemplos: "Restaurantes, talleres, hoteles, comercios medianos",
    minimo: "Agente por clase de fuego, gabinetes con manguera, extintor clase K en cocina",
    complementos: "Sistema de detección, EPP de brigada, constancias DC-3",
  },
  {
    nivel: "Alto",
    ejemplos: "Bodegas, naves industriales, gasolineras, laboratorios",
    minimo: "Red hidráulica, rociadores, extintores móviles, tablero de detección",
    complementos: "Monitores, agente limpio en áreas críticas, brigadas y simulacros",
  },
];

export const homeNormRows: HomeNormRow[] = [
  { norma: "NOM-002-STPS-2010", alcance: "Prevención y protección contra incendios en centros de trabajo", aplica: "Toda empresa con trabajadores" },
  { norma: "NOM-154-SCFI-2005", alcance: "Mantenimiento, recarga y prueba hidrostática de extintores", aplica: "Extintores y su servicio" },
  { norma: "NOM-003-SEGOB-2011", alcance: "Señales y avisos para protección civil: colores, formas y símbolos", aplica: "Inmuebles con afluencia de personas" },
  { norma: "NOM-026-STPS-2008", alcance: "Colores y señales de seguridad; identificación de fluidos en tubería", aplica: "Centros de trabajo" },
  { norma: "NFPA 72 (ref.)", alcance: "Detección y alarma de incendio", aplica: "Sistemas de detectores y alarma" },
  { norma: "NFPA 13 (ref.)", alcance: "Rociadores automáticos", aplica: "Supresión automática en edificios" },
  { norma: "NFPA 20 (ref.)", alcance: "Bombas estacionarias contra incendio", aplica: "Redes hidráulicas con bomba" },
  { norma: "NFPA 1970 (ref.)", alcance: "Equipo de protección para combate de incendios", aplica: "Trajes y equipo de brigada" },
];

export const homeSteps: HomeStep[] = [
  { num: "01", title: "Asesoría y diagnóstico", desc: "Nos cuentas tu giro, tamaño y lo que pide la inspección; identificamos el riesgo y lo que necesitas." },
  { num: "02", title: "Cotización clara", desc: "Propuesta con producto, cantidad y precio. Si el presupuesto es acotado, proponemos por fases." },
  { num: "03", title: "Suministro e instalación", desc: "Entregamos el equipo y, cuando aplica, lo instalamos: detección, hidrantes, extintores y señalización." },
  { num: "04", title: "Documentación", desc: "Ficha técnica, constancias de servicio y, si lo necesitas, constancias DC-3 para tu expediente." },
  { num: "05", title: "Mantenimiento y avisos", desc: "Te recordamos la revisión anual, la recarga y la prueba hidrostática (cada 5 años) para que no caduque tu protección." },
];

export const homeCompany: HomeCompany = {
  que: {
    title: "Qué hacemos",
    body: [
      "Equipamos inmuebles contra incendio de principio a fin: extintores, detección y alarma, hidrantes y mangueras, y señalización de emergencia. Vendemos, instalamos y damos mantenimiento, siempre según el riesgo real del lugar y no según un catálogo genérico.",
      "Atendemos a empresas, comercios, escuelas, restaurantes e inmuebles que necesitan estar protegidos y cumplir con la normatividad aplicable.",
    ],
  },
  como: {
    title: "Cómo trabajamos",
    pillars: [
      { title: "Asesoría real", desc: "Te recomendamos el equipo correcto en lenguaje claro, sin venderte de más." },
      { title: "Conforme a norma", desc: "Trabajamos alineados a la NOM-002-STPS-2010 y la NOM-154-SCFI-2005." },
      { title: "Respuesta por WhatsApp", desc: "Cotizas y resuelves dudas directo por WhatsApp, con atención personal." },
    ],
  },
};

export const homeFaqs: HomeFaq[] = [
  // Las cuatro primeras son las «People Also Ask» LITERALES de Google para
  // «equipos contra incendios» (NeuronWriter, 2026-09-09). Responderlas con la
  // pregunta tal cual es lo que las hace elegibles para el fragmento destacado.
  {
    question: "¿Cuáles son los equipos contra incendios?",
    answer:
      "Son cinco familias que trabajan juntas: extintores portátiles para el combate inicial, detección y alarmas contra incendios para avisar a tiempo, hidrantes y mangueras contra incendio para conatos mayores, señalización y luces de emergencia para evacuar, y equipo de protección personal para quien responde. A ellas se suman los sistemas fijos —rociadores y supresión de cocina— cuando el riesgo lo exige.",
  },
  {
    question: "¿Cómo se clasifican los equipos contra incendios?",
    answer:
      "Por su función dentro del ciclo de la emergencia: prevención (señalización, mantenimiento), detección (detectores de humo y calor, paneles), combate (extintores, hidrantes, rociadores) y evacuación (rutas, luces, puntos de reunión). Los extintores se clasifican además por clase de fuego: A para sólidos, B para líquidos inflamables, C para equipo eléctrico energizado, D para metales y K para aceites y grasas de cocción.",
  },
  {
    question: "¿Qué nos dice la NOM-002-STPS?",
    answer:
      "La NOM-002-STPS-2010 obliga a todo centro de trabajo a clasificar su grado de riesgo de incendio —ordinario o alto— según la superficie y el material combustible que maneja. De esa clasificación dependen el número y tipo de extintores, la necesidad de detección y de red de hidrantes, la brigada y el programa anual de revisión. También fija la revisión mensual a cargo del propio personal.",
  },
  {
    question: "¿Cuáles son los dispositivos de protección contra incendios?",
    answer:
      "Los que actúan solos y los que opera una persona. Automáticos: detectores de humo y calor, paneles de alarma, rociadores y sistemas de supresión de cocina o de agente limpio. Manuales: extintores portátiles, estaciones manuales de alarma, gabinetes con manguera e hidrantes. Un inmueble bien protegido combina ambos según su grado de riesgo.",
  },
  {
    question: "¿Qué equipos contra incendio exige Protección Civil para una empresa en CDMX?",
    answer:
      "El mínimo lo marca la NOM-002-STPS-2010 según el grado de riesgo, y a eso se suman los reglamentos locales: el Reglamento de Construcciones de la Ciudad de México y los términos de referencia de Protección Civil pueden pedir requisitos adicionales por uso y superficie. En la práctica se revisan extintores vigentes y bien distribuidos, señalización de rutas conforme a la NOM-003-SEGOB-2011, detección cuando aplica, y el expediente documental. El levantamiento en sitio es lo que lo define.",
  },
  {
    question: "¿Cuál es la diferencia entre un extintor de PQS y uno de CO₂?",
    answer:
      "El de polvo químico seco (PQS) cubre fuegos A, B y C y es el más versátil, pero deja un residuo que puede dañar electrónica. El de CO₂ cubre B y C, no deja residuo y por eso se usa en tableros, laboratorios y cuartos eléctricos; a cambio ofrece menos tiempo de descarga y no conviene en recintos pequeños mal ventilados, porque desplaza el oxígeno.",
  },
  {
    question: "¿El equipo viene con certificados y documentación para auditoría?",
    answer:
      "Sí. Entregamos equipo certificado con su ficha técnica, y en los servicios la constancia correspondiente: etiqueta y collarín conforme a la NOM-154-SCFI-2005 en la recarga de extintores, y reporte de lo realizado en instalación e inspección. Es la evidencia que revisa un verificador y la que integra tu expediente ante Protección Civil y la STPS.",
  },
  {
    question: "¿Qué extintor necesito para mi negocio?",
    answer:
      "Depende de lo que pueda quemarse. Para la mayoría de oficinas y comercios, un extintor PQS ABC es la opción versátil; las cocinas requieren además un extintor clase K, y los cuartos eléctricos uno de CO₂. Escríbenos y te asesoramos según tu riesgo.",
  },
  {
    question: "¿Cada cuándo se da mantenimiento o recarga a un extintor?",
    answer:
      "El servicio de mantenimiento y recarga se realiza conforme a la NOM-154-SCFI-2005 (de forma anual como práctica habitual). Además, en centros de trabajo la NOM-002-STPS-2010 pide una revisión mensual a cargo del personal.",
  },
  {
    question: "¿Cada cuándo se hace la prueba hidrostática de un extintor?",
    answer:
      "En México la prueba hidrostática se realiza cada 5 años para extintores de agua, CO₂ y PQS, conforme a la NOM-154-SCFI-2005 (o antes si el cilindro se golpea o pierde su contraseña). Ojo con el dato de “12 años”: ese es de la NFPA 10 de Estados Unidos, no es norma mexicana.",
  },
  {
    question: "¿Solo venden equipo o también instalan?",
    answer:
      "Ambas cosas. Vendemos el equipo y también lo instalamos, damos mantenimiento, recargamos extintores y hacemos inspección y dictamen del sistema completo.",
  },
  {
    question: "¿Me entregan la documentación para Protección Civil y STPS?",
    answer:
      "Sí. Cada equipo se entrega con su ficha técnica y, en los servicios, con la constancia correspondiente. Si lo necesitas, también gestionamos constancias DC-3 de capacitación — listo para integrar a tu expediente ante Protección Civil y STPS.",
  },
  {
    question: "¿En qué zonas dan servicio?",
    answer:
      "Atendemos la Ciudad de México, el Estado de México y la zona metropolitana. Cuéntanos dónde estás y te confirmamos cobertura y tiempos.",
  },
  {
    question: "¿Cómo cotizo?",
    answer:
      "Por WhatsApp es lo más rápido: nos dices qué necesitas y te respondemos con opciones, disponibilidad y el proceso de cotización y facturación.",
  },
];

export const homeCategoryFeatures: HomeCategoryFeature[] = [
  {
    eyebrow: "Categoría · NOM-154 · A · B · C · K",
    title: "Extintores portátiles para",
    titleAccent: "cada clase de fuego",
    description: "El extintor correcto depende de lo que puede quemarse en tu inmueble. Contamos con extintores de polvo químico seco (PQS) multipropósito para oficinas y comercios, CO₂ para equipos eléctricos y agente K para cocinas industriales — todos con recarga y mantenimiento conforme a la NOM-154-SCFI-2005 y la NOM-002-STPS-2010.",
    features: [
      { label: "PQS ABC multipropósito", desc: "Ideal para oficinas, escuelas y comercios. Clase A, B y C." },
      { label: "CO₂ para cuartos eléctricos", desc: "No daña equipos ni deja residuo. Clase B y C." },
      { label: "Agente K para cocinas", desc: "Supresión de grasas y aceites calientes. Clase K, obligatorio en campana." },
      { label: "Mantenimiento y recarga NOM-154", desc: "Anual con etiqueta y collarín; prueba hidrostática cada 5 años." },
    ],
    brands: [
      { name: "Kidde" },
      { name: "Amerex" },
      { name: "Stelfire" },
      { name: "Buckeye" },
      { name: "Suprema" },
    ],
    ctaLabel: "Ver catálogo de extintores",
    ctaHref: "/productos/",
    imgMain: { src: "/images/showcase/extintores-catalogo-profesional.avif", alt: "Extintores PQS, CO₂ y agente K contra incendio" },
    imgA: { src: "/images/productos/extintor-pqs-6kg.svg", alt: "Extintor PQS 6 kg multipropósito ABC" },
    imgB: { src: "/images/productos/extintor-co2-45kg.svg", alt: "Extintor CO₂ 4.5 kg para equipos eléctricos" },
  },
  {
    surface: true,
    eyebrow: "Categoría · NFPA 72 · Detección temprana",
    title: "Detección y alarmas contra",
    titleAccent: "incendios que avisan a tiempo",
    description: "Detectores de humo y calor, paneles de control, estaciones manuales y sirenas. Sistemas dimensionados a tu inmueble que alertan en los primeros segundos — cuando todavía hay tiempo de actuar y evacuar sin daños mayores.",
    features: [
      { label: "Detectores de humo fotoeléctricos", desc: "Respuesta rápida a humo visible. Para pasillos, cuartos y áreas de almacenamiento." },
      { label: "Detectores de calor", desc: "Para cocinas y áreas donde el humo generaría falsas alarmas." },
      { label: "Paneles de alarma y estaciones manuales", desc: "Control centralizado y activación manual desde cualquier punto del inmueble." },
      { label: "Sirenas y señales de evacuación", desc: "Alerta audible y visual conforme a la NOM-003-SEGOB para guiar la evacuación." },
    ],
    brands: [
      { name: "Kidde" },
      { name: "System Sensor" },
      { name: "Honeywell" },
      { name: "Notifier" },
    ],
    ctaLabel: "Ver catálogo de detección",
    ctaHref: "/productos/",
    imgMain: { src: "/images/servicios/instalacion-deteccion-alarma.avif", alt: "Sistema de detección de humo y panel de alarma contra incendio" },
    imgA: { src: "/images/productos/dispositivos-deteccion-alarma.avif", alt: "Detector de humo fotoeléctrico de techo" },
    imgB: { src: "/images/showcase/sistema-rociadores-industrial.avif", alt: "Panel de control de alarma contra incendio" },
  },
  {
    eyebrow: "Categoría · NFPA 14 · Red hidráulica",
    title: "Hidrantes y mangueras contra",
    titleAccent: "incendio para riesgos mayores",
    description: "Cuando un extintor no es suficiente, la red hidráulica es la segunda línea de defensa. Suministramos e instalamos gabinetes, mangueras, hidrantes, válvulas y conexiones siamesas dimensionados al caudal y presión que exige tu inmueble según la NFPA 14.",
    features: [
      { label: "Gabinetes con manguera tipo I y II", desc: "Para uso por personal capacitado o por bomberos. Con válvula angular, manguera y pitón." },
      { label: "Hidrantes y conexiones siamesas", desc: "Punto de toma para camión de bomberos. Obligatorio en inmuebles de más de 3 niveles o 1,000 m²." },
      { label: "Válvulas de control y check", desc: "OS&Y, mariposa y retención para sectorizar y proteger la red hidráulica." },
      { label: "Proyecto e instalación NFPA 14", desc: "Cálculo hidráulico, planos y memoria de diseño incluidos en el servicio de instalación." },
    ],
    brands: [
      { name: "Potter" },
      { name: "Victaulic" },
      { name: "Nibco" },
      { name: "Dixon" },
      { name: "Ames" },
    ],
    ctaLabel: "Ver catálogo de hidrantes",
    ctaHref: "/productos/",
    imgMain: { src: "/images/showcase/gabinete-manguera-hidrante.avif", alt: "Gabinete con manguera contra incendio e hidrante" },
    imgA: { src: "/images/productos/extintor-oficina-gabinete.avif", alt: "Gabinete tipo I con manguera y pitón" },
    imgB: { src: "/images/showcase/sistema-rociadores-industrial.avif", alt: "Válvulas y conexiones para red hidráulica" },
  },
  {
    surface: true,
    eyebrow: "Categoría · NOM-003-SEGOB · Fotoluminiscente",
    title: "Señalización y equipo",
    titleAccent: "de emergencia",
    description: "La señalización correcta guía una evacuación ordenada incluso sin luz eléctrica. Suministramos señales fotoluminiscentes, lámparas de emergencia, rutas de evacuación y botiquines conforme a la NOM-003-SEGOB-2011, obligatorias en todos los inmuebles con afluencia de personas.",
    features: [
      { label: "Señales fotoluminiscentes NOM-003", desc: "Salida de emergencia, punto de reunión, extintor, hidrante y ruta de evacuación. Sin electricidad." },
      { label: "Lámparas de emergencia", desc: "Iluminación autónoma con batería de respaldo. Mínimo 90 minutos de autonomía." },
      { label: "Planos de evacuación", desc: "Elaborados conforme al inmueble real. Requisito de Protección Civil en centros de trabajo." },
      { label: "Botiquines NOM-020-STPS", desc: "Dotación básica certificada para primeros auxilios en centros de trabajo." },
    ],
    brands: [
      { name: "Brady" },
      { name: "Seton" },
      { name: "Luminart" },
      { name: "Indexx" },
    ],
    ctaLabel: "Ver catálogo de señalización",
    ctaHref: "/productos/",
    imgMain: { src: "/images/showcase/senalizacion-rutas-evacuacion.svg", alt: "Señalización fotoluminiscente de ruta de evacuación" },
    imgA: { src: "/images/productos/senalizacion-luces-emergencia.avif", alt: "Señal fotoluminiscente de salida de emergencia" },
    imgB: { src: "/images/showcase/proteccion-primeros-auxilios.svg", alt: "Lámparas de emergencia y botiquín de primeros auxilios" },
  },
  {
    eyebrow: "Categoría · NFPA 13 · Supresión automática",
    title: "Sistemas fijos",
    titleAccent: "que actúan solos",
    description: "Los sistemas automáticos de supresión actúan en segundos, antes de que el personal intervenga. Proyectamos e instalamos rociadores, supresión de cocina clase K y agente limpio para sites y cuartos eléctricos — todo con cálculo hidráulico y memoria de diseño para tu expediente.",
    features: [
      { label: "Rociadores automáticos NFPA 13", desc: "Respuesta térmica individual. Solo se activa el rociador expuesto al calor, no todo el sistema." },
      { label: "Supresión de cocina clase K", desc: "Sistema en campana para aceites y grasas. Apaga el fuego y corta el gas automáticamente." },
      { label: "Agente limpio para cuartos eléctricos", desc: "FM-200, Novec 1230 o CO₂. Sin residuo, sin daño a equipos electrónicos ni servidores." },
      { label: "Proyecto, instalación y pruebas", desc: "Cálculo hidráulico, planos, memoria técnica y certificado de puesta en marcha incluidos." },
    ],
    brands: [
      { name: "Tyco / Johnson Controls" },
      { name: "Viking" },
      { name: "Ansul" },
      { name: "Amerex" },
    ],
    ctaLabel: "Ver sistemas de supresión",
    ctaHref: "/productos/",
    imgMain: { src: "/images/showcase/sistema-rociadores-industrial.avif", alt: "Sistema de rociadores automáticos contra incendio" },
    imgA: { src: "/images/productos/extintor-clase-k-6l.svg", alt: "Sistema de supresión clase K para cocina industrial" },
    imgB: { src: "/images/servicios/instalacion-deteccion-alarma.avif", alt: "Sistema de agente limpio para cuarto eléctrico" },
  },
  {
    surface: true,
    eyebrow: "Categoría · NOM-020-STPS · Brigadas",
    title: "Protección personal",
    titleAccent: "y primeros auxilios",
    description: "La brigada de emergencia necesita el equipo adecuado para actuar con seguridad mientras llega la ayuda profesional. Suministramos botiquines dotados conforme a la NOM-020-STPS, mantas ignífugas, equipo de rescate y materiales para los primeros auxilios en centros de trabajo.",
    features: [
      { label: "Botiquines NOM-020-STPS", desc: "Dotación básica certificada: apósitos, torniquete, férulas y guías de primeros auxilios." },
      { label: "Mantas ignífugas", desc: "Para sofocar fuego en ropa o contener un conato pequeño sin extintor." },
      { label: "Equipo de brigada de emergencia", desc: "Chalecos, linternas, megáfonos y accesorios para coordinadores de evacuación." },
      { label: "Señalización de punto de reunión", desc: "Indicación visual del área de concentración posterior a la evacuación." },
    ],
    brands: [
      { name: "3M" },
      { name: "Acme" },
      { name: "Duracell" },
      { name: "Cruz Roja" },
    ],
    ctaLabel: "Ver equipo de brigada",
    ctaHref: "/productos/",
    imgMain: { src: "/images/showcase/proteccion-primeros-auxilios.svg", alt: "Botiquín y equipo de primeros auxilios para brigada" },
    imgA: { src: "/images/showcase/senalizacion-rutas-evacuacion.svg", alt: "Equipo de protección para brigada de emergencia" },
    imgB: { src: "/images/showcase/equipo-proteccion-bomberos-epp.avif", alt: "Manta ignífuga y equipo de respuesta inicial" },
  },
  {
    eyebrow: "Categoría · NOM-115-STPS · EPP",
    title: "Equipo de protección",
    titleAccent: "personal para brigadas",
    description: "El personal de brigada que interviene en una emergencia requiere protección certificada. Suministramos cascos, guantes térmicos, trajes de aproximación y equipo respiratorio conforme a la NOM-115-STPS, para que tu equipo actúe sin exponerse innecesariamente.",
    features: [
      { label: "Cascos y caretas de protección", desc: "Protección craneal y facial contra calor radiante e impactos durante la intervención." },
      { label: "Guantes térmicos resistentes al calor", desc: "Permiten manipular extintores y equipo caliente sin riesgo de quemaduras." },
      { label: "Trajes de aproximación al fuego", desc: "Para brigadas internas. Protección frente a calor radiante en la distancia de seguridad." },
      { label: "Equipos de protección respiratoria", desc: "Mascarillas y filtros para ambientes con humo. No sustituyen al SCBA de bomberos." },
    ],
    brands: [
      { name: "3M" },
      { name: "MSA Safety" },
      { name: "Lakeland" },
      { name: "DuPont" },
    ],
    ctaLabel: "Ver equipo de protección",
    ctaHref: "/productos/",
    imgMain: { src: "/images/showcase/equipo-proteccion-bomberos-epp.avif", alt: "Equipo de protección personal para brigadas contra incendio" },
    imgA: { src: "/images/showcase/proteccion-primeros-auxilios.svg", alt: "Cascos y guantes de protección térmica" },
    imgB: { src: "/images/showcase/gabinete-manguera-hidrante.avif", alt: "Traje de aproximación para brigada de emergencia" },
  },
  {
    surface: true,
    eyebrow: "Categoría · NOM-154 · Mantenimiento",
    title: "Herrajes, accesorios y refacciones",
    titleAccent: "para tu equipo en regla",
    description: "Un extintor sin mantenimiento no sirve cuando más se necesita. Contamos con todas las refacciones y accesorios para mantener tu equipo vigente: mangueras de descarga, válvulas, collarines, manómetros y soportes — con el respaldo de la NOM-154-SCFI-2005.",
    features: [
      { label: "Refacciones certificadas para extintor", desc: "Válvulas, manómetros, mangueras y pitones de reemplazo compatibles con las principales marcas." },
      { label: "Collarines y etiquetas de servicio", desc: "Documentación física del mantenimiento. Requisito para acreditar el servicio ante Protección Civil." },
      { label: "Soportes y porta-extintores", desc: "Para pared, poste o gabinete. Mantienen el extintor a la altura reglamentaria (máx. 1.5 m)." },
      { label: "Herramienta de servicio técnico", desc: "Adaptadores, llaves y equipo para recarga y prueba hidrostática conforme a norma." },
    ],
    brands: [
      { name: "Kidde" },
      { name: "Amerex" },
      { name: "Stelfire" },
      { name: "Suprema" },
    ],
    ctaLabel: "Ver accesorios y refacciones",
    ctaHref: "/productos/",
    imgMain: { src: "/images/showcase/refacciones-equipo-contra-incendio.avif", alt: "Accesorios y refacciones para extintores y sistemas contra incendio" },
    imgA: { src: "/images/productos/extintor-pqs-6kg.svg", alt: "Válvulas y refacciones para extintor PQS" },
    imgB: { src: "/images/productos/extintor-co2-45kg.svg", alt: "Soportes y porta-extintores certificados" },
  },
];
