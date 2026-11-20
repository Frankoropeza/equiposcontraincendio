// Datos editoriales repetibles de la HOME.
// Los valores se mantienen aquí para que index.astro solo componga componentes.

import { COVERAGE_STATES, SERVICES, SHOWCASE } from "@config/site";

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


export const homeMenuSub: Record<string, string> = {
  Productos: "Equipos contra incendios",
  Servicios: "Instalación y mantenimiento",
  Cobertura: "Zonas que atendemos",
  Blog: "Guías y normatividad",
};

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
  { norma: "NOM-003-SSPC-2011", alcance: "Señales y avisos para protección civil: colores, formas y símbolos", aplica: "Inmuebles con afluencia de personas" },
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
    question: "¿Cuánto cuesta un sistema anti incendio?",
    answer:
      "Depende de la superficie, el grado de riesgo y el tipo de sistema: no cuesta lo mismo equipar una oficina con extintores y detectores de humo que instalar un sistema contra incendio con red de hidrantes o rociadores, que requiere cálculo hidráulico, tubería y bomba. Por eso no publicamos una tarifa única: con el giro, la superficie y, si los tienes, los planos, te enviamos una cotización desglosada por equipo, instalación y documentación.",
  },
  {
    question: "¿Cuáles son los dispositivos de protección contra incendios?",
    answer:
      "Los que actúan solos y los que opera una persona. Automáticos: detectores de humo y calor, paneles de alarma, rociadores y sistemas de supresión de cocina o de agente limpio. Manuales: extintores portátiles, estaciones manuales de alarma, gabinetes con manguera e hidrantes. Un inmueble bien protegido combina ambos según su grado de riesgo.",
  },
  {
    question: "¿Qué equipos contra incendio exige Protección Civil para una empresa en CDMX?",
    answer:
      "El mínimo lo marca la NOM-002-STPS-2010 según el grado de riesgo, y a eso se suman los reglamentos locales: el Reglamento de Construcciones de la Ciudad de México y los términos de referencia de Protección Civil pueden pedir requisitos adicionales por uso y superficie. En la práctica se revisan extintores vigentes y bien distribuidos, señalización de rutas conforme a la NOM-003-SSPC-2011, detección cuando aplica, y el expediente documental. El levantamiento en sitio es lo que lo define.",
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


export const homeHero = {
  badge: "Venta e instalación · CDMX y Estado de México",
  title: "Equipo contra incendio en",
  accent: "CDMX y Estado de México",
  subtitle: "Venta de equipos contra incendios, instalación y mantenimiento: extintores, detección, hidrantes y señalización — con respaldo de norma, para empresas que necesitan estar protegidas y en regla.",
  descRight: [
    "En CONINC somos tu proveedor de equipos contra incendios desde hace más de 35 años: extintores portátiles, detección y alarmas contra incendios, hidrantes y mangueras contra incendio, señalización y herrajes. Vendemos, instalamos y damos mantenimiento — todo dimensionado al riesgo real de tu inmueble, no a un catálogo genérico.",
    "Trabajamos conforme a la normatividad mexicana —NOM-002-STPS-2010 y NOM-154-SCFI-2005— con equipo certificado y la documentación lista para tu expediente de Protección Civil. Cotiza por WhatsApp y recibe una recomendación honesta.",
  ],
};
