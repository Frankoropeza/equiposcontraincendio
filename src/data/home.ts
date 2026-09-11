// Datos editoriales repetibles de la HOME.
// Los valores se mantienen aquí para que index.astro solo componga componentes.

import { COVERAGE_STATES, SERVICES, SHOWCASE } from "@config/site";

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
  /** Mensaje de WhatsApp del CTA secundario. index.astro lo pasa por waUrl(). */
  ctaSecondaryMsg?: string;
  imgMain: HomeGalleryImage;
  imgA: HomeGalleryImage;
  imgB: HomeGalleryImage;
  surface?: boolean;
  flip?: boolean;
};

export const homeMenuSub: Record<string, string> = {
  Productos: "Equipos contra incendios",
  Servicios: "Instalación y mantenimiento",
  Cobertura: "Zonas que atendemos",
  Blog: "Guías y normatividad",
};

// La trayectoria va PRIMERO: es la credencial institucional de CONINC confirmada
// por el negocio (2026-09-10) y esta barra se repite en home, nosotros, contacto
// y cobertura. «Asesoría honesta» pasa a /nosotros/ (principios).
export const homePillars: HomePillar[] = [
  { icon: "clock", title: "Más de 35 años", desc: "CONINC vende equipo contra incendio en el mercado mexicano desde hace más de 35 años." },
  { icon: "shield", title: "Conforme a norma", desc: "Equipo y servicio alineados a la NOM-154-SCFI, la NOM-002-STPS y la NOM-003-SEGOB." },
  { icon: "doc", title: "Listo para Protección Civil", desc: "Te entregamos ficha técnica y constancias de servicio para tu expediente ante PC y STPS." },
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
  { num: "01", title: "Asesoría inicial", desc: "Nos cuentas tu giro, tamaño y lo que pide la inspección; identificamos el riesgo." },
  { num: "02", title: "Levantamiento", desc: "Revisamos el inmueble, sus áreas, equipos y lo que se guarda en cada zona." },
  { num: "03", title: "Clasificación del riesgo", desc: "Aplicamos la NOM-002 para definir el grado de riesgo y el equipo que corresponde." },
  { num: "04", title: "Cotización clara", desc: "Propuesta con producto, cantidad y precio; si aplica, se plantea por fases." },
  { num: "05", title: "Suministro", desc: "Entregamos extintores, detección, hidrantes, mangueras y señalización según el alcance." },
  { num: "06", title: "Instalación", desc: "Cuando aplica, montamos el equipo y lo ubicamos conforme a las distancias y alturas." },
  { num: "07", title: "Documentación", desc: "Entregamos fichas técnicas, reportes y constancias para integrar a tu expediente." },
  { num: "08", title: "Mantenimiento", desc: "Te recordamos la revisión anual, la recarga y la prueba hidrostática cuando corresponde." },
];

export const homeCompany: HomeCompany = {
  que: {
    title: "Qué hacemos",
    body: [
      "CONINC equipa inmuebles contra incendio de principio a fin: extintores, detección y alarma, hidrantes y mangueras, y señalización de emergencia. Vendemos, instalamos y damos mantenimiento, siempre según el riesgo real del lugar y no según un catálogo genérico.",
      "Llevamos más de 35 años en el mercado mexicano atendiendo a empresas, comercios, escuelas, restaurantes e inmuebles que necesitan estar protegidos y cumplir con la normatividad aplicable, hoy en toda la Ciudad de México y el Estado de México.",
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

// ── Cifras de CONINC para CompanyAbout (tira de confianza) ──────────────────
// Solo cifras REALES: la trayectoria la declaró el negocio (2026-09-10) y las
// otras tres se cuentan en el propio sitio (entidades de COVERAGE_STATES,
// servicios de TAXONOMY.services y familias de SHOWCASE). Si una de esas listas
// cambia, esta cifra se actualiza sola. Siempre 4 (regla de múltiplos de 4).
export const companyStats: { value: string; label: string }[] = [
  { value: "+35", label: "años en el mercado mexicano" },
  { value: String(COVERAGE_STATES.length), label: "entidades: CDMX y Estado de México" },
  { value: String(SERVICES.length), label: "servicios contra incendio" },
  { value: String(SHOWCASE.length), label: "familias de equipo" },
];

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
    description: "El extintor correcto depende de lo que puede arder en tu inmueble. Manejamos polvo químico seco (PQS) para oficinas y comercios, CO₂ para equipo eléctrico y agente K para cocinas, con recarga y mantenimiento conforme a norma.",
    features: [
      { label: "PQS ABC multipropósito", desc: "Oficinas, escuelas, comercios y bodegas. Cubre clases A, B y C." },
      { label: "CO₂ para cuartos eléctricos", desc: "No conduce ni deja residuo sobre tableros y electrónica. Clases B y C." },
      { label: "Agente K para cocinas", desc: "Para aceites y grasas de cocción; complementa la supresión de la campana." },
      { label: "Recarga y mantenimiento", desc: "Servicio anual con etiqueta y collarín; prueba de presión cada 5 años." },
    ],
    brands: [
      { name: "Amerex" },
      { name: "Kidde" },
      { name: "Badger" },
      { name: "Buckeye" },
      { name: "Ansul" },
    ],
    ctaLabel: "Venta de extintores",
    ctaHref: "/productos/extintores/",
    ctaSecondaryMsg: "Hola, quiero cotizar extintores (PQS, CO₂ o clase K). ¿Me ayudan a elegir la capacidad según mi riesgo?",
    imgMain: { src: "/images/showcase/extintores-catalogo-profesional.avif", alt: "Extintores PQS, CO₂ y agente K listos para entrega" },
    imgA: { src: "/images/showcase/extintores-variedad-colores-catalogo.avif", alt: "Extintores de PQS, CO₂, agua y agente K uno junto a otro" },
    imgB: { src: "/images/servicios/prueba-hidrostatica-extintor.avif", alt: "Prueba hidrostática de un extintor portátil en taller" },
  },
  {
    surface: true,
    eyebrow: "Categoría · NFPA 72 · Detección temprana",
    title: "Alarmas contra incendios",
    titleAccent: "que avisan a tiempo",
    description: "Un incendio detectado a tiempo todavía se controla. Integramos detectores de humo y calor, paneles direccionables, estaciones manuales y sirenas dimensionados a tu inmueble, para que alerte y se evacúe antes de que el fuego crezca.",
    features: [
      { label: "Detectores de humo", desc: "Fotoeléctricos, para el humo lento de pasillos, oficinas y almacenes." },
      { label: "Detectores de calor", desc: "Para cocinas y áreas con vapor o polvo, donde el humo daría falsas alarmas." },
      { label: "Paneles y estaciones", desc: "Control centralizado del sistema y activación humana desde cualquier punto." },
      { label: "Sirenas y señales sonoras", desc: "Alerta audible y visual para guiar una evacuación ordenada del inmueble." },
    ],
    brands: [
      { name: "Kidde" },
      { name: "System Sensor" },
      { name: "Honeywell" },
      { name: "Notifier" },
    ],
    ctaLabel: "Alarmas contra incendios",
    ctaHref: "/productos/deteccion-alarmas/",
    ctaSecondaryMsg: "Hola, quiero cotizar un sistema de detección y alarma contra incendio (detectores, panel y sirenas).",
    imgMain: { src: "/images/servicios/instalacion-deteccion-alarma.avif", alt: "Instalación de detectores de humo y alarma en un pasillo de oficinas" },
    imgA: { src: "/images/productos/dispositivos-deteccion-alarma.avif", alt: "Detectores de humo, estación manual y sirena estroboscópica" },
    imgB: { src: "/images/productos/panel-alarma-contra-incendio.avif", alt: "Técnico revisando el panel de alarma contra incendio" },
  },
  {
    eyebrow: "Categoría · NFPA 14 · Red hidráulica",
    title: "Mangueras contra incendio",
    titleAccent: "e hidrantes NFPA 14",
    description: "Cuando el fuego supera a un extintor, la red hidráulica es la segunda línea de defensa. Suministramos e instalamos gabinetes, mangueras, hidrantes, válvulas y siamesas dimensionados al caudal y la presión que exige tu inmueble.",
    features: [
      { label: "Gabinetes tipo I y II", desc: "Con válvula angular, manguera y pitón, para brigada o para bomberos." },
      { label: "Hidrantes y siamesas", desc: "Punto de toma para el camión de bomberos en inmuebles grandes." },
      { label: "Válvulas de control y check", desc: "OS&Y, mariposa y retención para sectorizar y proteger la red." },
      { label: "Proyecto e instalación", desc: "Cálculo hidráulico, planos y memoria de diseño incluidos." },
    ],
    brands: [
      { name: "Potter" },
      { name: "Victaulic" },
      { name: "Nibco" },
      { name: "Dixon" },
      { name: "Ames" },
    ],
    ctaLabel: "Mangueras contra incendio",
    ctaHref: "/productos/hidrantes-mangueras/",
    ctaSecondaryMsg: "Hola, quiero cotizar gabinetes, mangueras o una red hidráulica contra incendio conforme a la NFPA 14.",
    imgMain: { src: "/images/showcase/gabinete-manguera-hidrante.avif", alt: "Gabinete rojo con manguera contra incendio e hidrante en muro" },
    imgA: { src: "/images/showcase/gabinetes-estaciones-contra-incendio.avif", alt: "Gabinete de manguera junto a estación manual y extintor de pared" },
    imgB: { src: "/images/servicios/prueba-mangueras-contra-incendio.avif", alt: "Prueba de presión de mangueras contra incendio en patio de maniobras" },
  },
  {
    surface: true,
    eyebrow: "Categoría · NOM-003-SEGOB · Fotoluminiscente",
    title: "Señalización y equipo",
    titleAccent: "de emergencia",
    description: "La señalización correcta guía una evacuación ordenada incluso sin luz eléctrica. Suministramos señales fotoluminiscentes, lámparas de emergencia y planos de evacuación conforme a la NOM-003-SEGOB, obligatorios donde hay afluencia.",
    features: [
      { label: "Señales fotoluminiscentes", desc: "Salida, ruta, extintor, hidrante y punto de reunión. Sin electricidad." },
      { label: "Lámparas de emergencia", desc: "Iluminación autónoma con batería; mínimo 90 minutos de respaldo." },
      { label: "Planos de evacuación", desc: "Elaborados sobre el inmueble real; los pide Protección Civil." },
      { label: "Punto de reunión", desc: "Señal del área de concentración posterior a la evacuación." },
    ],
    brands: [
      { name: "Brady" },
      { name: "Seton" },
      { name: "Luminart" },
      { name: "Indexx" },
    ],
    ctaLabel: "Señales de emergencia",
    ctaHref: "/productos/#senalizacion",
    ctaSecondaryMsg: "Hola, quiero cotizar señalización fotoluminiscente y lámparas de emergencia para mi inmueble.",
    imgMain: { src: "/images/servicios/prueba-electrica-panel-alarma-incendio.avif", alt: "Muro con señalética de emergencia, extintor y estación manual" },
    imgA: { src: "/images/servicios/inspeccion-sistema-alarma-extintor.avif", alt: "Señalización de ruta de evacuación y extintor señalizado en nave industrial" },
    imgB: { src: "/images/servicios/instalacion-equipo-almacen.avif", alt: "Instalación de gabinete y señalética de emergencia en almacén" },
  },
  {
    eyebrow: "Categoría · NFPA 13 · Supresión automática",
    title: "Sistemas fijos",
    titleAccent: "que actúan solos",
    description: "Los sistemas automáticos actúan en segundos, antes de que el personal intervenga. Proyectamos e instalamos rociadores, supresión de cocina clase K y agente limpio para sites, con cálculo hidráulico y memoria para tu expediente.",
    features: [
      { label: "Rociadores automáticos", desc: "Solo se activa el rociador expuesto al calor, no todo el sistema." },
      { label: "Supresión de cocina clase K", desc: "En campana: apaga aceites y grasas y corta el gas automáticamente." },
      { label: "Agente limpio para sites", desc: "FM-200, Novec 1230 o CO₂: sin residuo ni daño a los servidores." },
      { label: "Proyecto, montaje y pruebas", desc: "Cálculo, planos, memoria técnica y certificado de puesta en marcha." },
    ],
    brands: [
      { name: "Tyco / Johnson Controls" },
      { name: "Viking" },
      { name: "Ansul" },
      { name: "Amerex" },
    ],
    ctaLabel: "Sistemas de supresión",
    ctaHref: "/productos/#sistemas-supresion",
    ctaSecondaryMsg: "Hola, quiero cotizar un sistema fijo contra incendio (rociadores, cocina clase K o agente limpio).",
    imgMain: { src: "/images/showcase/sistema-rociadores-industrial.avif", alt: "Red de rociadores automáticos contra incendio en techo industrial" },
    imgA: { src: "/images/servicios/supresion-cocina-comercial.avif", alt: "Sistema de supresión clase K instalado en campana de cocina comercial" },
    imgB: { src: "/images/servicios/supresion-agente-limpio-data-center.avif", alt: "Cilindros de agente limpio protegiendo un data center" },
  },
  {
    surface: true,
    eyebrow: "Categoría · NOM-020-STPS · Brigadas",
    title: "Protección personal",
    titleAccent: "y primeros auxilios",
    description: "La brigada necesita equipo adecuado para actuar con seguridad mientras llega la ayuda profesional. Suministramos botiquines dotados conforme a la NOM-020-STPS, mantas ignífugas y material de apoyo para el centro de trabajo.",
    features: [
      { label: "Botiquines NOM-020-STPS", desc: "Apósitos, torniquete, férulas y guía de primeros auxilios." },
      { label: "Mantas ignífugas", desc: "Para sofocar fuego en ropa o contener un conato sin extintor." },
      { label: "Equipo de brigada", desc: "Chalecos, linternas y megáfonos para coordinadores de evacuación." },
      { label: "Camillas y rescate", desc: "Traslado del lesionado hasta el punto de reunión o la ambulancia." },
    ],
    brands: [
      { name: "3M" },
      { name: "Acme" },
      { name: "Duracell" },
      { name: "Cruz Roja" },
    ],
    ctaLabel: "Botiquines y brigada",
    ctaHref: "/productos/#proteccion-primeros-auxilios",
    ctaSecondaryMsg: "Hola, quiero cotizar botiquines NOM-020 y equipo de apoyo para la brigada de emergencia.",
    imgMain: { src: "/images/servicios/capacitacion-brigada-extintores.avif", alt: "Brigada de emergencia practicando con extintores en capacitación" },
    imgA: { src: "/images/casos/entrega-servicio-equipo-contra-incendio.avif", alt: "Entrega de equipo contra incendio y material de brigada en sitio" },
    imgB: { src: "/images/servicios/inspeccion-gabinete-hidrante-extintor.avif", alt: "Revisión de gabinete y extintor con el coordinador de brigada" },
  },
  {
    eyebrow: "Categoría · NOM-115-STPS · EPP",
    title: "Equipo de protección",
    titleAccent: "personal para brigadas",
    description: "El personal que interviene en una emergencia requiere protección certificada. Suministramos cascos, guantes térmicos, trajes de aproximación y protección respiratoria conforme a la NOM-115-STPS, para que tu brigada no se exponga.",
    features: [
      { label: "Cascos y caretas", desc: "Protección craneal y facial frente a calor radiante e impactos." },
      { label: "Guantes térmicos", desc: "Permiten manipular extintores y equipo caliente sin quemaduras." },
      { label: "Trajes de aproximación", desc: "Protección frente a calor radiante a la distancia de seguridad." },
      { label: "Protección respiratoria", desc: "Mascarillas y filtros para humo. No sustituyen el SCBA de bomberos." },
    ],
    brands: [
      { name: "3M" },
      { name: "MSA Safety" },
      { name: "Lakeland" },
      { name: "DuPont" },
    ],
    ctaLabel: "Equipo de protección",
    ctaHref: "/productos/#equipo-proteccion-personal",
    ctaSecondaryMsg: "Hola, quiero cotizar equipo de protección personal (cascos, guantes y trajes) para mi brigada.",
    imgMain: { src: "/images/showcase/equipo-proteccion-bomberos-epp.avif", alt: "Casco, guantes, chaquetón y botas de protección contra incendio" },
    imgA: { src: "/images/general/hero-proveedor-equipo-contra-incendio.avif", alt: "Técnico uniformado revisando equipo contra incendio en almacén" },
    imgB: { src: "/images/general/inventario-proveedor-equipo-contra-incendio.avif", alt: "Inventario de equipo de protección y extintores en bodega" },
  },
  {
    surface: true,
    eyebrow: "Categoría · NOM-154 · Mantenimiento",
    title: "Accesorios y refacciones",
    titleAccent: "para tu equipo en regla",
    description: "Un extintor sin mantenimiento no sirve cuando más se necesita. Tenemos las refacciones y accesorios para mantener tu equipo vigente: mangueras de descarga, válvulas, collarines, manómetros y soportes conforme a la NOM-154.",
    features: [
      { label: "Refacciones de extintor", desc: "Válvulas, manómetros, mangueras y pitones de las marcas principales." },
      { label: "Collarines y etiquetas", desc: "Prueba física del mantenimiento ante Protección Civil." },
      { label: "Soportes y porta-extintores", desc: "Pared, poste o gabinete; mantienen la altura reglamentaria de 1.50 m." },
      { label: "Herramienta de servicio", desc: "Adaptadores y llaves para recarga y prueba hidrostática." },
    ],
    brands: [
      { name: "Amerex" },
      { name: "Kidde" },
      { name: "Badger" },
      { name: "Buckeye" },
    ],
    ctaLabel: "Refacciones de extintor",
    ctaHref: "/productos/#accesorios-refacciones",
    ctaSecondaryMsg: "Hola, quiero cotizar refacciones y accesorios para extintores (válvulas, manómetros, soportes).",
    imgMain: { src: "/images/showcase/refacciones-equipo-contra-incendio.avif", alt: "Válvulas, manómetros, collarines y refacciones para extintor" },
    imgA: { src: "/images/servicios/inspeccion-recarga-extintores.avif", alt: "Recarga y mantenimiento de extintores en taller de servicio" },
    imgB: { src: "/images/servicios/etiquetado-inspeccion-extintor.avif", alt: "Colocación de la etiqueta y el collarín de servicio en el extintor" },
  },
];
