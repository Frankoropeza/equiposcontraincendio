// ============================================================================
// src/data/diagnostico-de-riesgo.ts — L3 /servicios/diagnostico-de-riesgo/.
// ----------------------------------------------------------------------------
// PATRÓN L3 canónico de servicio (contrato src/data/l3-types.ts, lo pinta
// src/components/ServiceL3.astro). Cuarta L3 de servicios, 2026-09-10.
//
// ÁNGULO — «¿mi inmueble es de riesgo ordinario o alto, qué me obliga eso y
// qué equipo me toca, ANTES de comprar?». La vitrina va por lo que se evalúa
// y se entrega (inmueble, materiales, clasificación, equipo, distribución) y
// el diferenciador es la Tabla 1 completa + los errores de clasificación.
//
// FUENTES (verificadas en el sitio): src/content/servicios/diagnostico-de-riesgo.md;
// /blog/riesgo-de-incendio-tabla-1-nom-002/ (los 6 umbrales; basta UN criterio;
// pirofóricos en cualquier cantidad; caso de la oficina con 1,500 L de
// solvente); /blog/obligaciones-riesgo-alto-incendio/ (1 por 200 m² vs 300 m²);
// /blog/quien-clasifica-riesgo-de-incendio-empresa/ (la clasificación debe
// quedar documentada; se revisa cuando cambian las condiciones); hoja de
// umbrales NOM-002 (23 m A, 10 m K, 1.50 m, brigada obligatoria solo en
// riesgo alto).
// NO se afirma: que firmemos como tercero facultado, frecuencias de simulacro
// por grado de riesgo, ni requisitos de detección o hidrantes por norma.
// ============================================================================
import type { ServiceL3Data, Tarjeta } from './l3-types';

export const diagTarjetas: Tarjeta[] = [
  {
    title: 'Superficie e inmueble',
    href: '#diag-inmueble',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
    imageAlt: 'Levantamiento de riesgo de incendio en una planta',
    badge: 'Tabla 1 · Superficie',
    description: 'Superficie construida, niveles y usos de cada área, con plano si lo tienes.',
    specs: [
      { label: 'Umbral alto', value: '3,000 m²' },
      { label: 'Se mide', value: 'Construida' },
      { label: 'Incluye', value: 'Niveles y usos' },
    ],
    ctaLabel: 'Superficie',
  },
  {
    title: 'Materiales combustibles',
    href: '#diag-materiales',
    image: '/images/general/inventario-proveedor-equipo-contra-incendio.avif',
    imageAlt: 'Inventario almacenado en bodega',
    badge: 'Tabla 1 · Inventario',
    description: 'Gases, líquidos y sólidos que se guardan: el criterio que más se pasa por alto.',
    specs: [
      { label: 'Gases', value: '3,000 L' },
      { label: 'Inflamables', value: '1,400 L' },
      { label: 'Sólidos', value: '15,000 kg' },
    ],
    ctaLabel: 'Materiales',
  },
  {
    title: 'Clasificación del riesgo',
    href: '#diag-clasificacion',
    image: '/images/servicios/cuarto-bomba-contra-incendio.avif',
    imageAlt: 'Cuarto de bombas de una red contra incendio',
    badge: 'Ordinario o alto',
    description: 'Basta con que un solo concepto alcance su umbral para ser riesgo alto.',
    specs: [
      { label: 'Resultado', value: 'Ordinario o alto' },
      { label: 'Norma', value: 'NOM-002, Tabla 1' },
      { label: 'Basta', value: 'Un solo criterio' },
    ],
    ctaLabel: 'Clasificación',
  },
  {
    title: 'Equipo que te exige',
    href: '#diag-equipo',
    image: '/images/showcase/extintores-catalogo-profesional.avif',
    imageAlt: 'Extintores de distintas capacidades',
    badge: 'Mínimos de norma',
    description: 'El mínimo de extintores y la brigada cambian según el grado de riesgo.',
    specs: [
      { label: 'Ordinario', value: '1 por 300 m²' },
      { label: 'Riesgo alto', value: '1 por 200 m²' },
      { label: 'Brigada', value: 'Solo riesgo alto' },
    ],
    ctaLabel: 'Equipo exigible',
  },
  {
    title: 'Distribución por área',
    href: '#diag-distribucion',
    image: '/images/servicios/supresion-cocina-comercial.avif',
    imageAlt: 'Cocina comercial, un área con riesgo propio',
    badge: 'Agente y ubicación',
    description: 'Qué agente va en cada zona, de qué capacidad y dónde se coloca.',
    specs: [
      { label: 'Recorrido', value: '23 m, clase A' },
      { label: 'Cocina', value: '10 m, clase K' },
      { label: 'Altura máx.', value: '1.50 m' },
    ],
    ctaLabel: 'Distribución',
  },
  {
    title: 'Calcula tu riesgo',
    href: '/herramientas/riesgo-de-incendio/',
    image: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
    imageAlt: 'Ruta de evacuación señalizada en nave industrial',
    badge: 'Herramienta gratis',
    description: 'Oriéntate tú mismo con los seis criterios de la Tabla 1 antes de cotizar.',
    specs: [
      { label: 'Criterios', value: 'Seis de la Tabla 1' },
      { label: 'Resultado', value: 'Orientativo' },
      { label: 'Costo', value: 'Sin costo' },
    ],
    ctaLabel: 'Riesgo de incendio',
  },
  {
    title: 'Instalación de sistemas',
    href: '/servicios/instalacion/',
    image: '/images/servicios/integracion-sistemas-contra-incendio.avif',
    imageAlt: 'Instalación de red contra incendio en un inmueble',
    badge: 'Siguiente paso',
    description: 'Con la clasificación hecha, instalamos lo que te toca y nada más.',
    specs: [
      { label: 'Se basa en', value: 'Tu clasificación' },
      { label: 'Incluye', value: 'Planos y memoria' },
      { label: 'Norma', value: 'NOM-002-STPS' },
    ],
    ctaLabel: 'Instalación',
  },
  {
    title: 'Inspección y dictamen',
    href: '/servicios/inspeccion/',
    image: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif',
    imageAlt: 'Revisión de extintor, gabinete e hidrante',
    badge: 'Si ya tienes equipo',
    description: 'Comparamos lo que ya está instalado contra lo que tu riesgo exige.',
    specs: [
      { label: 'Revisa', value: 'Lo instalado' },
      { label: 'Contra', value: 'Tu clasificación' },
      { label: 'Entrega', value: 'Reporte priorizado' },
    ],
    ctaLabel: 'Inspección y dictamen',
  },
];

export const diagnosticoL3: ServiceL3Data = {
  id: 'diagnostico-de-riesgo',
  path: '/servicios/diagnostico-de-riesgo/',
  seo: {
    title: 'Diagnóstico de riesgo de incendio | NOM-002-STPS Tabla 1',
    description:
      'Diagnóstico de riesgo de incendio en CDMX y Edomex: clasificamos tu inmueble en ordinario o alto con la Tabla 1 de la NOM-002 y te decimos qué equipo te toca.',
    serviceName: 'Diagnóstico de riesgo de incendio',
    serviceType: 'Clasificación del riesgo de incendio conforme a la NOM-002-STPS-2010',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
  },
  breadcrumb: 'Diagnóstico de riesgo',
  wa: 'Hola, quiero un diagnóstico de riesgo de incendio. Mi inmueble es (giro, superficie y lo que se almacena):',
  menuCtaSub: 'Giro y superficie',
  hero: {
    badge: 'Diagnóstico NOM-002-STPS · CDMX y Estado de México',
    title: 'Diagnóstico de riesgo',
    accent: 'de incendio',
    subtitle:
      'Clasificamos tu inmueble en riesgo ordinario o alto con la Tabla 1 de la NOM-002-STPS-2010 y te decimos, con fundamento, qué equipo te toca, cuánto y dónde colocarlo.',
    descRight: [
      'Antes de comprar el primer extintor hay una pregunta que decide todo lo demás: ¿qué grado de riesgo tiene este inmueble? De esa respuesta salen el mínimo de extintores, si la brigada es obligatoria y qué tan grande debe ser el expediente.',
      'El error más común es clasificar por el giro del negocio y no por lo que realmente hay dentro. Aquí están los seis criterios de la norma, lo que cambia según el resultado y lo que recibes al final.',
    ],
    outlineText: 'Qué evaluamos',
  },
  pillars: [
    { icon: 'check', title: 'Por inventario, no por giro', desc: 'Contamos lo que realmente se guarda, no lo que suele tener tu tipo de negocio.' },
    { icon: 'doc', title: 'Documento de respaldo', desc: 'La clasificación queda por escrito, con el criterio y la norma aplicados.' },
    { icon: 'shield', title: 'Ni corto ni de más', desc: 'Equipo exigible por norma, sin sistemas que tu riesgo no pide.' },
    { icon: 'pin', title: 'Distribución por área', desc: 'Agente, capacidad y ubicación de cada extintor sobre tu plano.' },
  ],
  vitrina: {
    id: 'que-evaluamos',
    eyebrow: 'Qué evaluamos',
    title: 'Del inventario',
    titleAccent: 'a la distribución del equipo',
    desc: 'El diagnóstico recorre los criterios de la norma y termina en una propuesta concreta de equipo.',
    body: [
      'La NOM-002 clasifica con dos tipos de datos: el tamaño del inmueble y lo que se almacena en él. Con eso se decide el grado de riesgo, y del grado de riesgo sale el equipo que te exige.',
      'Las cinco primeras fichas son lo que evaluamos y entregamos. Las tres últimas: la herramienta para orientarte tú mismo, la instalación y la inspección si ya tienes equipo.',
    ],
    tarjetas: diagTarjetas,
  },
  tablaPrincipal: {
    id: 'tabla-1',
    eyebrow: 'NOM-002-STPS-2010, Tabla 1',
    title: 'Los seis criterios',
    titleAccent: 'que deciden tu grado de riesgo',
    desc: 'La tabla no promedia ni pondera: basta con que un solo concepto alcance su umbral.',
    body: [
      'Una oficina de 300 m² con mobiliario común parece de riesgo ordinario. Si en su sótano se guardan 1,500 litros de solvente para mantenimiento, ya es de riesgo alto, sin que la superficie tenga nada que ver.',
      'Los materiales pirofóricos o explosivos no tienen umbral: cualquier cantidad basta para que todo el centro de trabajo sea de riesgo alto.',
    ],
    columns: ['Concepto', 'Riesgo ordinario', 'Riesgo alto'],
    rows: [
      ['Superficie construida', 'Menor de 3,000 m²', 'Igual o mayor de 3,000 m²'],
      ['Gases inflamables en inventario', 'Menor de 3,000 L', 'Igual o mayor de 3,000 L'],
      ['Líquidos inflamables', 'Menor de 1,400 L', 'Igual o mayor de 1,400 L'],
      ['Líquidos combustibles', 'Menor de 2,000 L', 'Igual o mayor de 2,000 L'],
      ['Sólidos combustibles', 'Menor de 15,000 kg', 'Igual o mayor de 15,000 kg'],
      ['Materiales pirofóricos o explosivos', 'No se manejan', 'Cualquier cantidad'],
    ],
    ctaLabel: 'Riesgo de incendio',
    ctaHref: '/herramientas/riesgo-de-incendio/',
  },
  guia: {
    eyebrow: 'Según el resultado',
    title: 'Qué cambia',
    titleAccent: 'si eres riesgo alto',
    desc: 'La clasificación no es un membrete para el expediente: cambia cuánto equipo y qué obligaciones tienes.',
    body: [
      'El cambio que más pesa en el presupuesto es el mínimo de extintores: en un inmueble de 2,400 m² son 8 equipos en riesgo ordinario y 12 en riesgo alto, antes de sumar el equipo de cualquier área con riesgo propio.',
      'Otras reglas no cambian con el grado de riesgo, y conviene saberlo para no pagar de más: la distancia de recorrido y la altura del extintor son las mismas.',
    ],
    columns: ['Aspecto', 'Riesgo ordinario', 'Riesgo alto', 'Evidencia que se pide'],
    rows: [
      { nivel: 'Mínimo de extintores', ejemplos: '1 por cada 300 m² o fracción', minimo: '1 por cada 200 m² o fracción', complementos: 'Inventario con ubicación de cada equipo' },
      { nivel: 'Brigada contra incendio', ejemplos: 'No obligatoria por la NOM-002', minimo: 'Obligatoria', complementos: 'Integración de la brigada y constancias de capacitación' },
      { nivel: 'Distancia de recorrido', ejemplos: '23 m en clase A; 10 m en clase K', minimo: 'La misma', complementos: 'Plano con la ubicación de cada extintor' },
      { nivel: 'Altura del extintor', ejemplos: 'Máximo 1.50 m', minimo: 'La misma', complementos: 'Revisión en el recorrido' },
      { nivel: 'Revisión y mantenimiento', ejemplos: 'Revisión mensual y mantenimiento anual', minimo: 'Los mismos', complementos: 'Bitácora, etiqueta y collarín' },
    ],
    note: 'La clasificación debe quedar documentada en el centro de trabajo y revisarse cuando cambian las condiciones que la determinan: superficie, giro, procesos o inventario de materiales.',
    ctaLabel: 'Cuántos extintores',
    ctaHref: '/herramientas/cuantos-extintores-necesito/',
  },
  tabla2: {
    id: 'errores',
    eyebrow: 'Lo que vemos en campo',
    title: 'Los errores de clasificación',
    titleAccent: 'que más cuestan',
    desc: 'Casi ninguno es de cálculo: son de lo que se deja de contar.',
    body: [
      'Clasificar mal cuesta de dos maneras: quedarse corto, con riesgo real y observaciones en la verificación, o equipar de más con sistemas que tu riesgo no exige.',
      'Todos se evitan con lo mismo: recorrer el inmueble completo e inventariar lo que de verdad se guarda.',
    ],
    columns: ['Error', 'Qué pasa', 'Cómo se evita'],
    rows: [
      ['Clasificar por el giro del negocio', 'Una oficina con 1,500 L de solvente es riesgo alto aunque parezca ordinaria', 'Inventario real de materiales por área'],
      ['Contar solo el área visible', 'El almacén, el sótano o la bodega cambian el resultado', 'Recorrer todo el inmueble, no solo el piso de venta'],
      ['Usar una clasificación vieja', 'Una remodelación, un cambio de giro o un proceso nuevo la dejan sin validez', 'Rehacerla cuando cambia lo que la determina'],
      ['Comprar antes de clasificar', 'Equipo de menos o sistemas que no hacen falta', 'Diagnóstico antes de cotizar equipo'],
      ['No dejarla por escrito', 'No se puede justificar por qué se compró esa cantidad y ese tipo', 'Documento con criterio y norma aplicados'],
    ],
  },
  modulos: [
    {
      id: 'diag-inmueble',
      eyebrow: 'Superficie e inmueble · Tabla 1',
      title: 'Superficie',
      titleAccent: 'y distribución del inmueble',
      description:
        'La superficie construida es el primer criterio de la Tabla 1: desde 3,000 m² el inmueble es de riesgo alto sin importar nada más. Pero no es el único dato que sale del recorrido: los niveles, el uso de cada área y dónde se concentra el material combustible definen después dónde va cada extintor.',
      features: [
        { label: 'Superficie construida', desc: 'Desde 3,000 m² el inmueble ya es de riesgo alto.' },
        { label: 'Niveles y áreas', desc: 'Cada nivel y cada uso se evalúa y se equipa por separado.' },
        { label: 'Plano del inmueble', desc: 'Si lo tienes, trabajamos sobre él; si no, lo levantamos.' },
        { label: 'Áreas con riesgo propio', desc: 'Cocina, cuarto eléctrico o site piden su propio agente.' },
      ],
      ctaLabel: 'Cotizar diagnóstico',
      ctaMsg: 'Hola, quiero cotizar un diagnóstico de riesgo de incendio para mi inmueble.',
      ctaSecondaryLabel: 'Riesgo de incendio',
      ctaSecondaryHref: '/herramientas/riesgo-de-incendio/',
      imgMain: { src: '/images/servicios/auditoria-seguridad-contra-incendio.avif', alt: 'Levantamiento de riesgo de incendio en planta' },
      imgA: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Recorrido de una nave industrial' },
      imgB: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Almacén con extintor y gabinete' },
    },
    {
      id: 'diag-materiales',
      eyebrow: 'Inventario · Gases, líquidos y sólidos',
      title: 'Materiales inflamables',
      titleAccent: 'y combustibles',
      description:
        'Es el criterio que más se pasa por alto, porque no se ve desde la entrada. Inventariamos los gases, los líquidos inflamables y combustibles y los sólidos combustibles que se guardan en el inmueble, incluidos el almacén, el sótano y el cuarto de mantenimiento, y los comparamos contra los umbrales de la Tabla 1.',
      features: [
        { label: 'Gases inflamables', desc: 'Riesgo alto desde 3,000 L en inventario.' },
        { label: 'Líquidos inflamables', desc: 'Riesgo alto desde 1,400 L; combustibles desde 2,000 L.' },
        { label: 'Sólidos combustibles', desc: 'Riesgo alto desde 15,000 kg: cartón, papel, madera.' },
        { label: 'Pirofóricos o explosivos', desc: 'Cualquier cantidad basta para ser riesgo alto.' },
      ],
      ctaLabel: 'Cotizar diagnóstico',
      ctaMsg: 'Hola, en mi inmueble se almacenan materiales inflamables y quiero saber mi grado de riesgo.',
      ctaSecondaryLabel: 'Tabla 1 de la NOM-002',
      ctaSecondaryHref: '/blog/riesgo-de-incendio-tabla-1-nom-002/',
      imgMain: { src: '/images/general/inventario-proveedor-equipo-contra-incendio.avif', alt: 'Inventario almacenado en bodega' },
      imgA: { src: '/images/servicios/cuarto-bomba-contra-incendio.avif', alt: 'Cuarto de máquinas de un inmueble' },
      imgB: { src: '/images/servicios/supresion-cocina-comercial.avif', alt: 'Cocina comercial con aceites de cocción' },
    },
    {
      id: 'diag-clasificacion',
      eyebrow: 'Clasificación · NOM-002-STPS-2010',
      title: 'Clasificación',
      titleAccent: 'ordinario o alto',
      description:
        'Con el inmueble y el inventario levantados, la clasificación es directa: si un solo concepto alcanza su umbral, todo el centro de trabajo es de riesgo alto. Lo que la hace valer es dejarla por escrito, con el criterio aplicado y la norma que lo sustenta, porque esa es la evidencia que justifica el equipo que se instala.',
      features: [
        { label: 'Un solo criterio basta', desc: 'La Tabla 1 no promedia: con uno ya eres riesgo alto.' },
        { label: 'Criterio por escrito', desc: 'Qué dato se tomó, contra qué umbral y el resultado.' },
        { label: 'Norma que lo sustenta', desc: 'La NOM-002-STPS-2010 citada en cada decisión.' },
        { label: 'Cuándo rehacerla', desc: 'Si cambia la superficie, el giro, un proceso o el inventario.' },
      ],
      ctaLabel: 'Cotizar diagnóstico',
      ctaMsg: 'Hola, necesito clasificar el riesgo de incendio de mi centro de trabajo.',
      ctaSecondaryLabel: 'Quién clasifica el riesgo',
      ctaSecondaryHref: '/blog/quien-clasifica-riesgo-de-incendio-empresa/',
      imgMain: { src: '/images/servicios/cuarto-bomba-contra-incendio.avif', alt: 'Cuarto de bombas de una red contra incendio' },
      imgA: { src: '/images/servicios/auditoria-seguridad-contra-incendio.avif', alt: 'Levantamiento en sitio' },
      imgB: { src: '/images/general/hero-proveedor-equipo-contra-incendio.avif', alt: 'Técnico registrando datos del inmueble' },
    },
    {
      id: 'diag-equipo',
      eyebrow: 'Equipo exigible · Mínimos de la NOM-002',
      title: 'Qué equipo te exige',
      titleAccent: 'tu grado de riesgo',
      description:
        'Del grado de riesgo sale el mínimo de extintores: uno por cada 300 m² en riesgo ordinario y uno por cada 200 m² en riesgo alto, más el equipo propio de las áreas especiales. En riesgo alto la brigada contra incendio pasa a ser obligatoria. El diagnóstico te dice qué te toca por norma y qué no, para que no compres sistemas que tu riesgo no pide.',
      features: [
        { label: 'Riesgo ordinario', desc: 'Al menos 1 extintor por cada 300 m² o fracción.' },
        { label: 'Riesgo alto', desc: 'Al menos 1 extintor por cada 200 m² o fracción.' },
        { label: 'Brigada', desc: 'Obligatoria solo en centros de trabajo de riesgo alto.' },
        { label: 'Sin sobre-equipar', desc: 'Separamos lo que exige la norma de lo recomendable.' },
      ],
      ctaLabel: 'Cotizar diagnóstico',
      ctaMsg: 'Hola, quiero saber qué equipo contra incendio me exige la norma para mi inmueble.',
      ctaSecondaryLabel: 'Cuántos extintores',
      ctaSecondaryHref: '/herramientas/cuantos-extintores-necesito/',
      imgMain: { src: '/images/showcase/extintores-catalogo-profesional.avif', alt: 'Extintores de distintas capacidades' },
      imgA: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Capacitación de brigada con extintores' },
      imgB: { src: '/images/showcase/extintores-variedad-colores-catalogo.avif', alt: 'Extintores de distintos agentes' },
    },
    {
      id: 'diag-distribucion',
      eyebrow: 'Distribución · Agente, capacidad y ubicación',
      title: 'Distribución del equipo',
      titleAccent: 'área por área',
      description:
        'El número de extintores es solo la mitad: la otra es dónde van. Proponemos qué agente corresponde a lo que puede arder en cada zona, de qué capacidad y en qué punto, respetando la distancia máxima de recorrido y la altura que fija la NOM-002. Con esa propuesta puedes cotizar con nosotros o con quien prefieras.',
      features: [
        { label: 'Agente por zona', desc: 'Clase de fuego de cada área: sólidos, líquidos, eléctrico, cocina.' },
        { label: 'Distancia de recorrido', desc: 'Máximo 23 m en clase A y 10 m en clase K.' },
        { label: 'Altura correcta', desc: 'La parte más alta del extintor a no más de 1.50 m.' },
        { label: 'Propuesta sobre plano', desc: 'Ubicación de cada equipo, lista para cotizar.' },
      ],
      ctaLabel: 'Cotizar diagnóstico',
      ctaMsg: 'Hola, quiero una propuesta de distribución de extintores para mi inmueble.',
      ctaSecondaryLabel: 'Dónde colocar extintores',
      ctaSecondaryHref: '/blog/donde-colocar-extintores/',
      imgMain: { src: '/images/servicios/supresion-cocina-comercial.avif', alt: 'Cocina comercial con protección clase K' },
      imgA: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Extintor y gabinete en almacén' },
      imgB: { src: '/images/productos/extintor-oficina-gabinete.avif', alt: 'Extintor en gabinete de oficina' },
    },
  ],
  decision: {
    id: 'que-sigue',
    eyebrow: 'Después del diagnóstico',
    title: 'Qué sigue',
    titleAccent: 'según tu resultado',
    desc: 'El diagnóstico termina en una decisión concreta, no en un documento que se archiva.',
    body: [
      'La propuesta de equipo es tuya y sirve de cualquier forma: puedes cotizarla con nosotros o con quien prefieras.',
      'Si tu inmueble ya tiene equipo, el siguiente paso casi siempre es comparar lo instalado contra lo que tu riesgo exige.',
    ],
    columns: ['Si el resultado es…', 'Lo que corresponde', 'Servicio que sigue'],
    rows: [
      ['Riesgo ordinario, sin equipo', 'Extintores por área según la propuesta', 'Venta e instalación de extintores'],
      ['Riesgo ordinario, con equipo', 'Comparar lo instalado contra lo exigible', 'Inspección y dictamen'],
      ['Riesgo alto', 'Mínimo de 1 por 200 m², equipo de áreas especiales y brigada', 'Instalación y capacitación de brigada con DC-3'],
      ['Cambió el inmueble', 'Rehacer la clasificación con los datos nuevos', 'Diagnóstico actualizado'],
    ],
    ctaLabel: 'Instalación de sistemas',
    ctaHref: '/servicios/instalacion/',
  },
  proceso: {
    eyebrow: 'Cómo es el diagnóstico',
    title: 'Del recorrido',
    titleAccent: 'a la propuesta de equipo',
    desc: 'La misma secuencia para un local que para una nave; lo que cambia es el inventario.',
    body: [
      'El paso que más cambia el resultado es el segundo: inventariar lo que se guarda en todo el inmueble, no solo en el área que se ve desde la entrada.',
      'Al final no recibes solo una etiqueta de «ordinario» o «alto»: recibes qué equipo corresponde, cuánto y dónde, con la norma que lo sustenta.',
    ],
    steps: [
      { num: '01', title: 'Datos y planos', desc: 'Giro, superficie, niveles, procesos y planos del inmueble si los tienes.' },
      { num: '02', title: 'Recorrido e inventario', desc: 'Todas las áreas, con el volumen de gases, líquidos y sólidos que se guardan.' },
      { num: '03', title: 'Clasificación', desc: 'Cada concepto contra su umbral de la Tabla 1 de la NOM-002-STPS-2010.' },
      { num: '04', title: 'Equipo y distribución', desc: 'Mínimo exigible, agente por área, capacidad y ubicación sobre plano.' },
      { num: '05', title: 'Documento de respaldo', desc: 'Criterio aplicado, resultado y la norma que sustenta cada decisión.' },
    ],
  },
  normas: {
    eyebrow: 'Normatividad',
    title: 'La norma detrás',
    titleAccent: 'de cada decisión',
    desc: 'Todo el diagnóstico descansa en una norma: la NOM-002-STPS-2010.',
    body: [
      'La Tabla 1 decide el grado de riesgo; el resto de la NOM-002 dice qué equipo corresponde, dónde se coloca y cómo se mantiene.',
      'La NFPA 10 aparece como referencia técnica para la selección y ubicación, no como obligación.',
    ],
    columns: ['Norma', 'Qué exige', 'Para qué la usamos'],
    rows: [
      { norma: 'NOM-002-STPS-2010, Tabla 1', alcance: 'Seis umbrales para clasificar el riesgo en ordinario o alto', aplica: 'La clasificación del inmueble' },
      { norma: 'NOM-002-STPS-2010 · extintores', alcance: 'Al menos 1 por cada 300 m² (ordinario) o 200 m² (alto)', aplica: 'El mínimo de equipo' },
      { norma: 'NOM-002-STPS-2010 · ubicación', alcance: 'Distancia máxima de recorrido (23 m clase A, 10 m clase K) y altura de 1.50 m', aplica: 'La distribución por área' },
      { norma: 'NOM-002-STPS-2010 · brigada', alcance: 'Brigada contra incendio obligatoria en riesgo alto', aplica: 'Lo que cambia si eres riesgo alto' },
      { norma: 'NOM-002-STPS-2010, 7.18', alcance: 'Revisión mensual y mantenimiento anual de los extintores', aplica: 'El programa después de instalar' },
      { norma: 'NOM-003-SEGOB-2011', alcance: 'Señales de protección civil', aplica: 'Señalización del equipo propuesto' },
      { norma: 'Programa Interno de PC', alcance: 'Incluye un análisis de riesgos del inmueble', aplica: 'El diagnóstico es un insumo, no lo sustituye' },
      { norma: 'NFPA 10 (ref.)', alcance: 'Criterios de selección y ubicación de extintores', aplica: 'Referencia técnica' },
    ],
    note: 'La clasificación debe quedar documentada en el centro de trabajo. Puedes orientarte tú mismo con la Tabla 1, pero el documento que se presenta en una verificación describe el inmueble y aplica los criterios con el detalle que exige la norma.',
  },
  empresa: {
    eyebrow: 'Por qué con nosotros',
    title: 'Un diagnóstico que te dice',
    titleAccent: 'qué sí y qué no te toca',
    desc: 'Clasificamos con el inventario real, aunque el resultado sea que necesitas menos equipo.',
    body: [
      'Hacer el diagnóstico antes de cotizar evita los dos errores caros: quedarse corto y equipar de más. El documento es tuyo y te sirve con cualquier proveedor.',
      'Escríbenos por WhatsApp con el giro, la superficie y lo que se almacena, y agendamos el recorrido.',
    ],
    que: {
      title: 'Qué incluye el diagnóstico',
      body: [
        'Recorrido del inmueble con registro de superficie, niveles, usos y distribución, e inventario de los materiales inflamables y combustibles que se guardan en cada área.',
        'Clasificación del grado de riesgo con los seis criterios de la Tabla 1 de la NOM-002-STPS-2010 y determinación del equipo exigible según el resultado.',
        'Propuesta de distribución —agente, capacidad y ubicación por área— y un documento de respaldo con el criterio aplicado y la norma que lo sustenta.',
      ],
    },
    como: {
      title: 'Cómo lo hacemos',
      pillars: [
        { title: 'Todo el inmueble', desc: 'Almacén, sótano y cuarto de mantenimiento incluidos: ahí cambia el resultado.' },
        { title: 'Con la norma en la mano', desc: 'Cada decisión dice qué criterio de la NOM-002 la sustenta.' },
        { title: 'Sin venderte de más', desc: 'Si tu riesgo no exige un sistema, la propuesta no lo incluye.' },
      ],
    },
  },
  related: {
    title: 'Servicios y guías relacionados',
    desc: 'Lo que suele venir antes y después de clasificar el riesgo.',
    links: [
      { label: 'Riesgo de incendio', href: '/herramientas/riesgo-de-incendio/', desc: 'Oriéntate con la Tabla 1.' },
      { label: 'Cuántos extintores', href: '/herramientas/cuantos-extintores-necesito/', desc: 'El mínimo por superficie.' },
      { label: 'Instalación de sistemas', href: '/servicios/instalacion/', desc: 'Lo que te toca, instalado.' },
      { label: 'Inspección y dictamen', href: '/servicios/inspeccion/', desc: 'Lo instalado contra tu riesgo.' },
      { label: 'Tabla 1 de la NOM-002', href: '/blog/riesgo-de-incendio-tabla-1-nom-002/', desc: 'Los seis umbrales, explicados.' },
      { label: 'Obligaciones de riesgo alto', href: '/blog/obligaciones-riesgo-alto-incendio/', desc: 'Qué cambia si te toca alto.' },
      { label: 'Quién clasifica el riesgo', href: '/blog/quien-clasifica-riesgo-de-incendio-empresa/', desc: 'Orientarte vs. el documento.' },
      { label: 'Capacitación de brigada', href: '/servicios/capacitacion-dc3/', desc: 'Obligatoria en riesgo alto.' },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    titleAccent: 'sobre el diagnóstico de riesgo',
    desc: 'Lo que más nos preguntan antes de clasificar: qué lo determina, si se puede hacer uno mismo y qué cambia si el resultado es riesgo alto.',
    body: [
      'Si tu caso no aparece aquí, escríbenos con el giro, la superficie y lo que se guarda en el inmueble.',
      'Las respuestas citan la NOM-002-STPS-2010; el resultado de tu inmueble sale del recorrido.',
    ],
    items: [
      { question: '¿Qué determina el grado de riesgo de mi inmueble?', answer: 'La Tabla 1 de la NOM-002-STPS-2010, a partir de la superficie construida y de la cantidad de gases, líquidos y sólidos inflamables o combustibles que se manejan y almacenan, además de los materiales pirofóricos o explosivos. El resultado es «ordinario» o «alto».' },
      { question: '¿Con que un solo criterio se cumpla ya soy riesgo alto?', answer: 'Sí. La Tabla 1 no promedia ni pondera: basta con que un solo concepto alcance su umbral para que todo el centro de trabajo se clasifique como riesgo alto.' },
      { question: '¿Un inmueble pequeño puede ser riesgo alto?', answer: 'Sí. Si maneja materiales pirofóricos o explosivos, cualquier cantidad basta. Y también puede serlo por inventario: una oficina de 300 m² que guarda 1,500 litros de solvente ya es de riesgo alto, sin que la superficie tenga nada que ver.' },
      { question: '¿Puedo comprar el equipo sin hacer el diagnóstico?', answer: 'Puedes, pero es la forma más común de gastar mal: te quedas corto, con riesgo real y observaciones en la verificación, o compras sistemas que tu grado de riesgo no exige. El diagnóstico cuesta menos que cualquiera de los dos errores.' },
      { question: '¿Puedo clasificar yo mismo el riesgo?', answer: 'Puedes orientarte con los criterios públicos de la Tabla 1, y para eso está nuestra herramienta. Pero la NOM-002-STPS-2010 pide que la clasificación quede documentada en el centro de trabajo, con el detalle que exige la norma.' },
      { question: '¿Qué cambia si mi inmueble es de riesgo alto?', answer: 'El mínimo de extintores pasa de uno por cada 300 m² a uno por cada 200 m², y la brigada contra incendio se vuelve obligatoria. La distancia de recorrido y la altura del extintor, en cambio, son las mismas.' },
      { question: '¿El diagnóstico incluye la propuesta de equipo?', answer: 'Sí. No entregamos solo una clasificación: entregamos qué equipo corresponde, en qué cantidad y en qué ubicación, con la norma que sustenta cada decisión. Puedes cotizarlo con nosotros o con quien prefieras.' },
      { question: '¿Cada cuánto hay que rehacerlo?', answer: 'Cuando cambia lo que lo determina: una remodelación que altere la superficie o la distribución, un cambio de giro, un proceso nuevo o el almacenamiento de materiales distintos. Una clasificación sobre un inmueble que ya no es el mismo no acredita nada.' },
      { question: '¿Sirve para el Programa Interno de Protección Civil?', answer: 'Es un insumo del análisis de riesgos, que es una de las partes del programa interno. No lo sustituye: el programa incluye además brigadas, capacitación, simulacros y directorio de emergencia.' },
      { question: '¿Cuánto cuesta el diagnóstico?', answer: 'Depende de la superficie, los niveles y la complejidad del inventario: no es lo mismo un local comercial que una nave con varias bodegas. Escríbenos con el giro y la superficie y te cotizamos.' },
    ],
  },
};
