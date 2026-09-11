// ============================================================================
// src/data/senalizacion.ts — L3 /productos/senalizacion/.
// ----------------------------------------------------------------------------
// PATRÓN L3 canónico (contrato src/data/l3-types.ts, lo pinta
// src/components/ServiceL3.astro). Tercera L3 de producto, 2026-09-11. Con
// `seccion` y `categoriaProductos` el componente pone la miga «Productos» y
// emite CollectionPage + ItemList con las fichas de la categoría.
//
// ÁNGULO — «¿qué señal va en cada punto, de qué color y tamaño, y qué la hace
// visible cuando se va la luz?». El blog explica la norma; esta L3 elige
// SEÑALES y aterriza el tamaño con la fórmula de la NOM-026.
//
// FUENTES (verificadas en el sitio y en el vault del proyecto):
//   · src/content/productos/senalizacion-fotoluminiscente.md (6 variantes:
//     ruta, salida, extintor, hidrante, punto de reunión y primeros auxilios;
//     verde = condición segura, rojo = equipo contra incendio).
//   · Investigación «Cumplimiento por giro (Fase 1)»: NOM-026-STPS-2008 (señales
//     de seguridad e higiene en centros de trabajo) y NOM-003-SSPC-2011 (señales
//     y avisos de protección civil, remite a la NOM-026 en lo que no cubre); Ley
//     de GIRPC CDMX art. 64 (piso mínimo de bajo riesgo: extintores señalizados y
//     señalización de rutas de evacuación); Ley de Establecimientos Mercantiles
//     CDMX art. 10 fracc. XII (911 visible y señalización de acciones ante sismo
//     e incendio, aun sin Programa Interno).
//   · Investigación «Mapa por giro (Fase 2)»: luces de emergencia = criterio
//     técnico (R), no obligación con numeral.
//   · src/content/tramites/cdmx.md (lo que se revisa físicamente: señalización
//     de rutas, salidas y equipo) y edomex.md (croquis de distribución con
//     señalamientos como requisito del trámite).
//   · NOM-026-STPS-2008: significado de los colores de seguridad y relación
//     S ≥ L²/2000 entre superficie de la señal y distancia de observación (de 5
//     a 50 m; mínimo 125 cm² por debajo de 5 m y 12,500 cm² por encima de 50 m).
//   · src/data/home.ts y /productos/: lámparas de emergencia y planos de
//     evacuación como parte de la oferta. NFPA 101 (referencia, no ley en
//     México): 90 minutos de iluminación de emergencia.
// NO se afirma: marcas, que un término de referencia exija material
// fotoluminiscente, tiempos de luminancia de un producto concreto, precios ni
// que el croquis sustituya al Programa Interno (lo firma un tercero acreditado).
// ============================================================================
import type { ServiceL3Data, Tarjeta } from './l3-types';

const WA_SENALIZACION =
  'Hola, quiero cotizar señalización de protección civil y emergencia. Mi inmueble es (giro, superficie y niveles):';

export const senTarjetas: Tarjeta[] = [
  {
    title: 'Rutas y salidas de emergencia',
    href: '/productos/senalizacion-fotoluminiscente/',
    image: '/images/servicios/integracion-sistemas-contra-incendio.avif',
    imageAlt: 'Pasillo con gabinetes contra incendio y circulación libre',
    badge: 'Condición segura',
    description: 'Ruta de evacuación y salida de emergencia en verde, visibles aunque se vaya la luz.',
    specs: [
      { label: 'Color', value: 'Verde' },
      { label: 'Indica', value: 'Hacia la salida' },
      { label: 'Material', value: 'Fotoluminiscente' },
    ],
    ctaLabel: 'Señales de evacuación',
  },
  {
    title: 'Equipo contra incendio',
    href: '#equipo-contra-incendio',
    image: '/images/servicios/etiquetado-inspeccion-extintor.avif',
    imageAlt: 'Señales rojas de extintor y de manguera sobre su equipo en una nave',
    badge: 'Fondo rojo',
    description: 'Extintor, hidrante y alarma ubicables desde la circulación, en rojo.',
    specs: [
      { label: 'Color', value: 'Rojo' },
      { label: 'Señala', value: 'Extintor, hidrante' },
      { label: 'Va', value: 'Sobre el equipo' },
    ],
    ctaLabel: 'Señal de extintor',
  },
  {
    title: 'Punto de reunión y auxilios',
    href: '#punto-de-reunion',
    image: '/images/servicios/capacitacion-brigada-extintores.avif',
    imageAlt: 'Brigada reunida en un área exterior despejada del inmueble',
    badge: 'Después de evacuar',
    description: 'El sitio seguro para contar a las personas y el botiquín, cada uno con su señal.',
    specs: [
      { label: 'Color', value: 'Verde' },
      { label: 'Reunión', value: 'Área exterior' },
      { label: 'Enlaza', value: 'Programa interno' },
    ],
    ctaLabel: 'Punto de reunión',
  },
  {
    title: 'Luces de emergencia',
    href: '#luces-emergencia',
    image: '/images/productos/senalizacion-luces-emergencia.avif',
    imageAlt: 'Señal de salida con dos luces de emergencia sobre el muro de un pasillo',
    badge: 'Respaldo de energía',
    description: 'Encienden solas al cortarse la luz y mantienen visible la ruta de evacuación.',
    specs: [
      { label: 'Enciende', value: 'Al cortar la luz' },
      { label: 'Respaldo', value: 'Batería' },
      { label: 'NFPA 101', value: '90 minutos' },
    ],
    ctaLabel: 'Luces de emergencia',
  },
  {
    title: 'Tamaño por distancia',
    href: '#tamano-de-la-senal',
    image: '/images/servicios/inspeccion-sistema-alarma-extintor.avif',
    imageAlt: 'Nave industrial con extintor y gabinete señalizados, vistos desde el pasillo',
    badge: 'NOM-026-STPS-2008',
    description: 'La señal crece con la distancia desde la que tiene que leerse: S ≥ L²/2000.',
    specs: [
      { label: 'Fórmula', value: 'S ≥ L²/2000' },
      { label: 'Rango', value: '5 a 50 m' },
      { label: 'Mínimo', value: '125 cm²' },
    ],
    ctaLabel: 'Tamaño de la señal',
  },
  {
    title: 'Croquis de evacuación',
    href: '#croquis',
    image: '/images/servicios/auditoria-seguridad-contra-incendio.avif',
    imageAlt: 'Levantamiento del inmueble en una planta, base del croquis de evacuación',
    badge: 'Plano del inmueble',
    description: 'Rutas, salidas, equipo y punto de reunión dibujados sobre tu inmueble real.',
    specs: [
      { label: 'Muestra', value: 'Rutas y equipo' },
      { label: 'Edomex', value: 'Lo pide el trámite' },
      { label: 'Base', value: 'Levantamiento' },
    ],
    ctaLabel: 'Croquis de evacuación',
  },
  {
    title: 'Instalación de señalización',
    href: '/servicios/instalacion/',
    image: '/images/servicios/instalacion-equipo-almacen.avif',
    imageAlt: 'Técnico instalando un extintor bajo su señal en un almacén',
    badge: 'Levantamiento',
    description: 'Cada señal en su lugar, a la vista desde la ruta y sin mensajes contradictorios.',
    specs: [
      { label: 'Incluye', value: 'Levantamiento' },
      { label: 'Colocación', value: 'Desde la ruta' },
      { label: 'Entrega', value: 'Croquis' },
    ],
    ctaLabel: 'Instalar sistemas',
  },
  {
    title: 'Revisión de señalización',
    href: '/servicios/inspeccion/',
    image: '/images/servicios/inspeccion-tablero-alarma-gabinete-manguera.avif',
    imageAlt: 'Técnico revisando la señalización de un gabinete y el tablero de alarma',
    badge: 'Antes del trámite',
    description: 'Señales que faltan, descoloridas o mal ubicadas, antes de que llegue la visita.',
    specs: [
      { label: 'Revisa', value: 'Ubicación y color' },
      { label: 'Detecta', value: 'Rutas obstruidas' },
      { label: 'Norma', value: 'NOM-003-SSPC' },
    ],
    ctaLabel: 'Inspección y dictamen',
  },
];

export const senalizacionL3: ServiceL3Data = {
  id: 'senalizacion',
  path: '/productos/senalizacion/',
  seccion: { label: 'Productos', href: '/productos/' },
  categoriaProductos: 'senalizacion',
  seo: {
    // 2026-09-11 — Ahrefs MX: «señales de protección civil» 4.3k (se queda) y el
    // cluster «señalamiento/señalética/señal de extintor» suma ~5k en variantes.
    title: 'Señales de protección civil y señalamientos de extintor',
    description:
      'Señales de protección civil: rutas, salidas, equipo contra incendio y punto de reunión, luces de emergencia y croquis para tu inmueble en CDMX y Edomex.',
    serviceName: 'Señalización de protección civil y emergencia',
    serviceType: 'Suministro e instalación de señalización de protección civil y emergencia',
    image: '/images/productos/senalizacion-luces-emergencia.avif',
  },
  breadcrumb: 'Señalización y emergencia',
  wa: WA_SENALIZACION,
  menuCtaSub: 'Giro y superficie',
  hero: {
    badge: 'Señalización · CDMX y Estado de México',
    title: 'Señales de protección civil',
    accent: 'y de emergencia',
    subtitle:
      'Señales de ruta de evacuación, salida, equipo contra incendio, punto de reunión y primeros auxilios, luces de emergencia y croquis: lo que guía a las personas fuera del inmueble, suministrado e instalado.',
    descRight: [
      'En una evacuación la gente no piensa: sigue señales. Con humo, sin luz y con prisa, una señal del color equivocado, demasiado chica para la distancia o tapada por mercancía es como no tener ninguna.',
      'Aquí está qué señal va en cada punto, qué significa cada color, cómo se calcula el tamaño con la fórmula de la NOM-026 y qué la mantiene visible cuando se corta la energía. Escríbenos con el giro, la superficie y los niveles.',
    ],
    outlineText: 'Qué señales llevas',
  },
  pillars: [
    { icon: 'check', title: 'La señal que toca', desc: 'Color, forma y símbolo de la NOM-003-SSPC y la NOM-026.' },
    { icon: 'doc', title: 'Tamaño calculado', desc: 'Cada señal dimensionada a su distancia de observación.' },
    { icon: 'shield', title: 'Visible sin energía', desc: 'Fotoluminiscente y luces de emergencia en la ruta.' },
    { icon: 'pin', title: 'Sobre tu inmueble real', desc: 'Del levantamiento al croquis, sin rutas contradictorias.' },
  ],
  vitrina: {
    id: 'senales',
    eyebrow: 'Qué señales llevas',
    title: 'Cada señal',
    titleAccent: 'responde a una pregunta',
    desc: '¿Por dónde salgo? ¿Dónde está el extintor? ¿A dónde voy después? Cada una contesta una.',
    body: [
      'Las señales verdes llevan a las personas a un lugar seguro; las rojas les dicen dónde está el equipo para atacar el fuego. Mezclarlas o repetirlas sin orden confunde justo cuando no hay tiempo de pensar.',
      'Las seis primeras fichas son lo que surtimos: señales, luces y croquis, más la regla para dimensionarlas. Las dos últimas son la instalación con levantamiento y la revisión antes del trámite.',
    ],
    tarjetas: senTarjetas,
  },
  tablaPrincipal: {
    id: 'que-senal-va-donde',
    eyebrow: 'Qué señal va dónde',
    title: 'Qué señal lleva',
    titleAccent: 'cada punto del inmueble',
    desc: 'El paquete que casi todo inmueble necesita, punto por punto.',
    body: [
      'La lista sale de recorrer el inmueble: primero se define la ruta de evacuación y después se señaliza. Señalizar sin ruta definida produce flechas que se contradicen o que llevan a una puerta cerrada.',
      'La Ciudad de México pide, aun en el nivel de bajo riesgo, extintores señalizados y señalización de las rutas de evacuación (Ley de Gestión Integral de Riesgos y Protección Civil, art. 64).',
    ],
    columns: ['Punto', 'Señal', 'Color', 'Para qué'],
    rows: [
      ['Pasillos y cambios de dirección', 'Ruta de evacuación con flecha', 'Verde', 'Que nadie dude hacia dónde seguir'],
      ['Puertas que forman parte de la ruta', 'Salida o salida de emergencia', 'Verde', 'Identificar la salida sin buscarla'],
      ['Sobre cada extintor', 'Ubicación de extintor', 'Rojo', 'Encontrarlo aunque el cilindro quede oculto'],
      ['Sobre cada gabinete o hidrante', 'Ubicación de hidrante', 'Rojo', 'Que la brigada reconozca el punto'],
      ['Junto a cada estación manual', 'Ubicación de alarma', 'Rojo', 'Activar la alarma sin buscarla'],
      ['Área exterior segura', 'Punto de reunión', 'Verde', 'Concentrar y contar a las personas'],
      ['Botiquín o área de atención', 'Primeros auxilios', 'Verde', 'Atender sin perder tiempo'],
      ['Accesos del inmueble', 'Croquis de evacuación', 'Plano', 'Ubicar rutas, salidas y equipo antes de necesitarlos'],
    ],
    note: 'En la Ciudad de México, un establecimiento mercantil que no requiere Programa Interno igual debe exhibir el 911 y la señalización de qué hacer ante sismo e incendio (Ley de Establecimientos Mercantiles, art. 10, fracc. XII).',
  },
  guia: {
    eyebrow: 'Qué significa cada color',
    title: 'Los colores de seguridad',
    titleAccent: 'y lo que exige cada uno',
    desc: 'La NOM-026-STPS-2008 fija el significado de cada color; la NOM-003-SSPC-2011 lo aplica a las señales de protección civil.',
    body: [
      'La NOM-026 aplica a los centros de trabajo y la NOM-003-SSPC a las señales y avisos de protección civil en cualquier inmueble; la segunda remite a la primera en lo que no cubre. Por eso en un centro de trabajo suelen pedirse las dos.',
      'El error más común no es de color sino de mezcla: una señal verde de salida junto a una roja de equipo, del mismo tamaño y a la misma altura, obliga a leer cuando nadie tiene tiempo de leer.',
    ],
    columns: ['Color', 'Significado', 'Ejemplos', 'Norma'],
    rows: [
      { nivel: 'Verde', ejemplos: 'Condición segura', minimo: 'Ruta de evacuación, salida de emergencia, punto de reunión y primeros auxilios', complementos: 'NOM-026-STPS-2008 · NOM-003-SSPC-2011' },
      { nivel: 'Rojo', ejemplos: 'Paro, prohibición y equipo contra incendio', minimo: 'Extintor, hidrante, alarma y prohibido fumar', complementos: 'NOM-026-STPS-2008 · NOM-003-SSPC-2011' },
      { nivel: 'Amarillo', ejemplos: 'Advertencia y precaución', minimo: 'Riesgo eléctrico, piso resbaloso o superficie caliente', complementos: 'NOM-026-STPS-2008' },
      { nivel: 'Azul', ejemplos: 'Obligación', minimo: 'Uso obligatorio de equipo de protección personal', complementos: 'NOM-026-STPS-2008' },
    ],
    note: 'Nuestra línea fotoluminiscente cubre las señales de condición segura (verde) y de equipo contra incendio (rojo). Las de precaución y obligación dependen del proceso de cada centro de trabajo y se revisan en el levantamiento.',
    ctaLabel: 'Señalización y rutas',
    ctaHref: '/blog/senalizacion-rutas-evacuacion-nom/',
  },
  tabla2: {
    id: 'tamano-por-distancia',
    eyebrow: 'Tamaño de la señal',
    title: 'Qué tan grande',
    titleAccent: 'según la distancia',
    desc: 'La NOM-026 relaciona la superficie de la señal con la distancia máxima desde la que tiene que leerse: S ≥ L²/2000.',
    body: [
      'S es la superficie de la señal en metros cuadrados y L la distancia de observación en metros. La relación aplica de 5 a 50 m; por debajo de 5 m la señal mide al menos 125 cm² y por encima de 50 m, al menos 12,500 cm².',
      'La tabla da la superficie mínima y un lado aproximado si la señal fuera cuadrada. Una señal rectangular reparte esa superficie entre su base y su altura.',
    ],
    columns: ['Distancia de observación', 'Superficie mínima', 'Lado aprox. si fuera cuadrada'],
    rows: [
      ['Hasta 5 m', '125 cm²', '11.2 cm'],
      ['10 m', '500 cm²', '22.4 cm'],
      ['15 m', '1,125 cm²', '33.5 cm'],
      ['20 m', '2,000 cm²', '44.7 cm'],
      ['30 m', '4,500 cm²', '67.1 cm'],
      ['50 m o más', '12,500 cm²', '111.8 cm'],
    ],
  },
  modulos: [
    {
      id: 'rutas-salidas',
      eyebrow: 'Rutas y salidas · Condición segura',
      title: 'Señales de ruta',
      titleAccent: 'y salida de emergencia',
      description:
        'La ruta de evacuación se señaliza con flecha en cada cambio de dirección y a intervalos en que una señal se vea desde la anterior, hasta la salida. Cada puerta que forma parte de la ruta lleva su señal de salida. Las surtimos en material fotoluminiscente para que sigan viéndose cuando se corta la energía.',
      features: [
        { label: 'Ruta con flecha', desc: 'En cada cambio de dirección hasta la salida.' },
        { label: 'Salida de emergencia', desc: 'Sobre cada puerta que forma parte de la ruta.' },
        { label: 'Fotoluminiscente', desc: 'Se carga con la luz del lugar y brilla a oscuras.' },
        { label: 'Sin contradicciones', desc: 'Ninguna flecha lleva a una puerta cerrada.' },
      ],
      ctaLabel: 'Cotizar señales',
      ctaMsg: 'Hola, quiero cotizar señales fotoluminiscentes de ruta de evacuación y salida de emergencia.',
      ctaSecondaryLabel: 'Señales de evacuación',
      ctaSecondaryHref: '/productos/senalizacion-fotoluminiscente/',
      imgMain: { src: '/images/productos/senalizacion-luces-emergencia.avif', alt: 'Señal de salida con flecha en el muro de un pasillo de oficinas' },
      imgA: { src: '/images/servicios/integracion-sistemas-contra-incendio.avif', alt: 'Pasillo con gabinetes contra incendio y circulación libre' },
      imgB: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Nave industrial con extintor y gabinete señalizados' },
    },
    {
      id: 'equipo-contra-incendio',
      eyebrow: 'Equipo contra incendio · Fondo rojo',
      title: 'Señales de equipo',
      titleAccent: 'contra incendio',
      description:
        'La señal roja dice dónde está el equipo: extintor, hidrante o gabinete, y alarma. Va sobre el equipo, visible desde la circulación, para encontrarlo aunque el cilindro quede tapado por un mueble o una columna. En la Ciudad de México, los extintores señalizados son parte del mínimo que se pide incluso en bajo riesgo.',
      features: [
        { label: 'Ubicación de extintor', desc: 'Sobre cada equipo, visible desde el pasillo.' },
        { label: 'Ubicación de hidrante', desc: 'Sobre cada gabinete o conexión de la red.' },
        { label: 'Alarma y estación', desc: 'Junto a cada estación manual de alarma.' },
        { label: 'Sin confundir', desc: 'Rojo para equipo, verde para la salida.' },
      ],
      ctaLabel: 'Cotizar señales',
      ctaMsg: 'Hola, quiero cotizar señales de ubicación de extintor e hidrante.',
      ctaSecondaryLabel: 'Venta de extintores',
      ctaSecondaryHref: '/productos/extintores/',
      imgMain: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Técnico revisando un extintor bajo sus señales de extintor y manguera' },
      imgA: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Extintor instalado bajo su señal roja en un almacén' },
      imgB: { src: '/images/servicios/inspeccion-tablero-alarma-gabinete-manguera.avif', alt: 'Gabinete señalizado junto al tablero de alarma' },
    },
    {
      id: 'punto-de-reunion',
      eyebrow: 'Punto de reunión y primeros auxilios',
      title: 'Punto de reunión',
      titleAccent: 'y primeros auxilios',
      description:
        'La evacuación termina en el punto de reunión: el sitio seguro donde se concentra y se cuenta a las personas. Su ubicación tiene que coincidir con la del Programa Interno y quedar libre durante la emergencia. La señal de primeros auxilios lleva al botiquín o al área de atención sin perder tiempo.',
      features: [
        { label: 'Punto de reunión', desc: 'En área exterior segura, libre durante la emergencia.' },
        { label: 'Coincide con el programa', desc: 'El mismo punto que marca el Programa Interno.' },
        { label: 'Primeros auxilios', desc: 'Lleva al botiquín o al área de atención.' },
        { label: 'Interior o exterior', desc: 'El formato se define según dónde se coloca.' },
      ],
      ctaLabel: 'Cotizar señales',
      ctaMsg: 'Hola, quiero cotizar señales de punto de reunión y primeros auxilios.',
      ctaSecondaryLabel: 'Programa interno',
      ctaSecondaryHref: '/blog/programa-interno-proteccion-civil/',
      imgMain: { src: '/images/servicios/capacitacion-brigada-extintores.avif', alt: 'Brigada reunida en un área exterior despejada' },
      imgA: { src: '/images/productos/senalizacion-luces-emergencia.avif', alt: 'Señal de punto de reunión y plano de evacuación en un pasillo' },
      imgB: { src: '/images/servicios/auditoria-seguridad-contra-incendio.avif', alt: 'Recorrido del inmueble para ubicar el punto de reunión' },
    },
    {
      id: 'luces-emergencia',
      eyebrow: 'Luces de emergencia · Respaldo de energía',
      title: 'Luces de emergencia',
      titleAccent: 'para cuando se va la luz',
      description:
        'En un incendio es común que se corte la energía. La luz de emergencia enciende sola con su batería y mantiene iluminada la ruta y las salidas. No encontramos un numeral mexicano que fije su duración; la NFPA 101, referencia técnica, pide 90 minutos. Junto con la señal fotoluminiscente, es lo que vuelve utilizable la ruta a oscuras.',
      features: [
        { label: 'Encendido automático', desc: 'Al cortarse la energía, sin que nadie la active.' },
        { label: 'Con batería', desc: 'Respaldo propio, independiente de la red.' },
        { label: 'En la ruta y salidas', desc: 'Donde la gente tiene que ver para salir.' },
        { label: 'Prueba periódica', desc: 'Que encienda al simular el corte de energía.' },
      ],
      ctaLabel: 'Cotizar luces',
      ctaMsg: 'Hola, quiero cotizar luces de emergencia para la ruta de evacuación de mi inmueble.',
      ctaSecondaryLabel: 'Inspección y dictamen',
      ctaSecondaryHref: '/servicios/inspeccion/',
      imgMain: { src: '/images/productos/senalizacion-luces-emergencia.avif', alt: 'Luces de emergencia sobre la señal de salida en un pasillo' },
      imgA: { src: '/images/servicios/instalacion-deteccion-alarma.avif', alt: 'Pasillo de oficinas con equipo de emergencia en el muro' },
      imgB: { src: '/images/servicios/integracion-sistemas-contra-incendio.avif', alt: 'Pasillo con equipo contra incendio a lo largo de la ruta' },
    },
    {
      id: 'tamano-de-la-senal',
      eyebrow: 'Tamaño · NOM-026-STPS-2008',
      title: 'El tamaño de la señal',
      titleAccent: 'no se escoge a ojo',
      description:
        'Una señal demasiado chica para la distancia desde la que se tiene que leer no guía a nadie. La NOM-026 lo resuelve con una relación: la superficie de la señal, en metros cuadrados, debe ser al menos el cuadrado de la distancia de observación, en metros, entre 2,000. En el levantamiento medimos esa distancia en cada punto.',
      features: [
        { label: 'S ≥ L²/2000', desc: 'Superficie en m² contra distancia en metros.' },
        { label: 'De 5 a 50 m', desc: 'Rango en que aplica la relación.' },
        { label: 'Menos de 5 m', desc: 'Al menos 125 cm² de superficie.' },
        { label: 'Más de 50 m', desc: 'Al menos 12,500 cm² de superficie.' },
      ],
      ctaLabel: 'Cotizar señales',
      ctaMsg: 'Hola, quiero cotizar señalización calculada por distancia de observación para mi inmueble.',
      ctaSecondaryLabel: 'Señalización y rutas',
      ctaSecondaryHref: '/blog/senalizacion-rutas-evacuacion-nom/',
      imgMain: { src: '/images/servicios/inspeccion-sistema-alarma-extintor.avif', alt: 'Nave industrial con señales vistas a distancia desde el pasillo' },
      imgA: { src: '/images/servicios/etiquetado-inspeccion-extintor.avif', alt: 'Señales de extintor y manguera sobre su equipo' },
      imgB: { src: '/images/servicios/instalacion-equipo-almacen.avif', alt: 'Señal sobre un extintor en un almacén de pasillos largos' },
    },
    {
      id: 'croquis',
      eyebrow: 'Croquis de evacuación · Plano del inmueble',
      title: 'Croquis de evacuación',
      titleAccent: 'sobre tu inmueble real',
      description:
        'El croquis dibuja las rutas, las salidas, el equipo contra incendio y el punto de reunión sobre la planta del inmueble, para que cualquiera los ubique antes de necesitarlos. Lo hacemos a partir del levantamiento. En el Estado de México, el trámite de Protección Civil pide un croquis de distribución con señalamientos.',
      features: [
        { label: 'Rutas y salidas', desc: 'El mismo recorrido que marcan las señales.' },
        { label: 'Equipo ubicado', desc: 'Extintores, gabinetes y alarmas en su lugar.' },
        { label: 'Punto de reunión', desc: 'Hacia dónde ir al salir del inmueble.' },
        { label: 'Del levantamiento', desc: 'Dibujado sobre el inmueble, no de plantilla.' },
      ],
      ctaLabel: 'Cotizar croquis',
      ctaMsg: 'Hola, quiero cotizar el croquis de evacuación de mi inmueble.',
      ctaSecondaryLabel: 'Gestión documental',
      ctaSecondaryHref: '/servicios/gestion-documental/',
      imgMain: { src: '/images/productos/senalizacion-luces-emergencia.avif', alt: 'Plano de evacuación colocado en el muro de un pasillo' },
      imgA: { src: '/images/servicios/auditoria-seguridad-contra-incendio.avif', alt: 'Levantamiento del inmueble para el croquis' },
      imgB: { src: '/images/servicios/inspeccion-gabinete-hidrante-extintor.avif', alt: 'Registro del equipo contra incendio durante el levantamiento' },
    },
  ],
  decision: {
    id: 'que-necesita-tu-inmueble',
    eyebrow: 'Qué te conviene',
    title: 'Qué suele llevar',
    titleAccent: 'según tu inmueble',
    desc: 'El alcance final sale del levantamiento; esto es el punto de partida más común.',
    body: [
      'Casi todo inmueble necesita el paquete básico de rutas, salidas y equipo señalizado. Lo que cambia es cuántas señales, de qué tamaño y si hacen falta luces de emergencia y croquis.',
      'Si ya tienes señalización, el primer paso es revisarla: muchas veces basta con reponer las descoloridas y quitar las que contradicen la ruta.',
    ],
    columns: ['Tu inmueble', 'Qué suele convenir', 'Siguiente paso'],
    rows: [
      ['Local u oficina pequeña en CDMX', 'Extintor señalizado, ruta y salida; 911 y señales de sismo e incendio visibles', 'Levantamiento rápido'],
      ['Oficina, comercio o escuela', 'Paquete completo, luces de emergencia en la ruta y croquis', 'Levantamiento y propuesta'],
      ['Nave o bodega', 'Señales calculadas para distancias largas y equipo señalizado', 'Levantamiento con medición'],
      ['Trámite de Protección Civil en Edomex', 'Croquis de distribución con señalamientos y señales instaladas', 'Levantamiento y croquis'],
    ],
    ctaLabel: 'Requisitos de Protección Civil',
    ctaHref: '/proteccion-civil/',
  },
  proceso: {
    eyebrow: 'Cómo se señaliza',
    title: 'Del recorrido',
    titleAccent: 'a la señal instalada',
    desc: 'Primero se define la ruta y después se señaliza; al revés salen flechas que se contradicen.',
    body: [
      'La propuesta dice qué señal va en cada punto, de qué tamaño y con qué norma, antes de producir nada.',
      'Al terminar se recorre la ruta completa como lo haría alguien que no conoce el inmueble.',
    ],
    steps: [
      { num: '01', title: 'Recorrido', desc: 'Salidas, pasillos, niveles, equipo existente y punto de reunión.' },
      { num: '02', title: 'Ruta de evacuación', desc: 'Se define el recorrido más corto y seguro hacia cada salida.' },
      { num: '03', title: 'Distancias', desc: 'Se mide desde dónde se lee cada señal para calcular su tamaño.' },
      { num: '04', title: 'Propuesta', desc: 'Señal, color, tamaño y ubicación de cada punto, con su norma.' },
      { num: '05', title: 'Producción', desc: 'Señales fotoluminiscentes, luces de emergencia y croquis.' },
      { num: '06', title: 'Instalación', desc: 'A la vista desde la ruta, sin tapar ni ser tapadas.' },
      { num: '07', title: 'Recorrido de prueba', desc: 'La ruta se sigue de punta a punta, también a oscuras.' },
      { num: '08', title: 'Entrega', desc: 'Croquis, listado de señales y recomendaciones de revisión.' },
    ],
  },
  normas: {
    eyebrow: 'Normatividad',
    title: 'Normas de señalización',
    titleAccent: 'de protección civil y seguridad',
    desc: 'Dos normas federales fijan colores, formas y símbolos; en la Ciudad de México, dos leyes locales fijan el mínimo.',
    body: [
      'La NOM-003-SSPC-2011 (antes NOM-003-SEGOB-2011) regula las señales y avisos de protección civil en cualquier inmueble. La NOM-026-STPS-2008 regula los colores y señales de seguridad en los centros de trabajo, incluida la fórmula del tamaño.',
      'En la Ciudad de México, la Ley de Gestión Integral de Riesgos y Protección Civil y la Ley de Establecimientos Mercantiles fijan lo que se exige aun sin Programa Interno.',
    ],
    columns: ['Norma', 'Qué exige', 'A qué aplica'],
    rows: [
      { norma: 'NOM-003-SSPC-2011', alcance: 'Señales y avisos de protección civil: colores, formas, símbolos y materiales', aplica: 'Cualquier inmueble' },
      { norma: 'NOM-026-STPS-2008', alcance: 'Colores y señales de seguridad e higiene; tamaño por distancia de observación', aplica: 'Centros de trabajo' },
      { norma: 'Ley de GIRPC CDMX, art. 64', alcance: 'Extintores señalizados y señalización de rutas de evacuación, aun en bajo riesgo', aplica: 'Inmuebles en CDMX' },
      { norma: 'Ley de Establecimientos Mercantiles CDMX, art. 10, fracc. XII', alcance: '911 visible y señalización de acciones ante sismo e incendio', aplica: 'Establecimientos en CDMX' },
      { norma: 'Trámite de Protección Civil del Estado de México', alcance: 'Croquis de distribución con señalamientos entre los requisitos', aplica: 'Inmuebles en Edomex' },
      { norma: 'NFPA 101 (ref.)', alcance: 'Iluminación de emergencia durante 90 minutos', aplica: 'Luces de emergencia' },
    ],
    note: 'La NFPA 101 no es ley en México; la citamos como referencia técnica para las luces de emergencia porque no encontramos un numeral mexicano que fije su duración.',
  },
  empresa: {
    eyebrow: 'Por qué con nosotros',
    title: 'Señales, luces y croquis',
    titleAccent: 'con un solo proveedor',
    desc: 'Definimos la ruta, calculamos cada señal, la instalamos y dejamos el croquis que la explica.',
    body: [
      'Señales compradas por catálogo y pegadas donde quedó espacio producen rutas que se contradicen. Nosotros empezamos por el recorrido: definimos la ruta, medimos distancias y solo después producimos las señales.',
      'Escríbenos por WhatsApp con el giro, la superficie y los niveles de tu inmueble, y si ya tienes señalización, qué tiene hoy.',
    ],
    que: {
      title: 'Qué incluye',
      body: [
        'Levantamiento del inmueble, definición de la ruta de evacuación y cálculo del tamaño de cada señal con la relación de la NOM-026-STPS-2008.',
        'Señales fotoluminiscentes de ruta, salida, extintor, hidrante, punto de reunión y primeros auxilios conforme a la NOM-003-SSPC-2011, luces de emergencia en la ruta y su instalación.',
        'Croquis de evacuación sobre el inmueble real y recorrido de prueba de punta a punta, para tu expediente de Protección Civil.',
      ],
    },
    como: {
      title: 'Cómo lo hacemos',
      pillars: [
        { title: 'Primero la ruta', desc: 'Sin ruta definida, cualquier señal es una suposición.' },
        { title: 'Tamaño calculado', desc: 'Cada señal legible desde donde se tiene que leer.' },
        { title: 'Probada a oscuras', desc: 'La ruta se recorre también sin luz.' },
      ],
    },
  },
  related: {
    title: 'Productos, servicios y guías relacionados',
    desc: 'Lo que suele hacer falta junto con la señalización.',
    links: [
      { label: 'Señales de evacuación', href: '/productos/senalizacion-fotoluminiscente/', desc: 'Seis señales fotoluminiscentes.' },
      { label: 'Instalación de sistemas', href: '/servicios/instalacion/', desc: 'Levantamiento e instalación.' },
      { label: 'Inspección y dictamen', href: '/servicios/inspeccion/', desc: 'Antes de la visita.' },
      { label: 'Venta de extintores', href: '/productos/extintores/', desc: 'El equipo que se señaliza.' },
      { label: 'Señalización y rutas', href: '/blog/senalizacion-rutas-evacuacion-nom/', desc: 'La guía de la norma.' },
      { label: 'Programa interno', href: '/blog/programa-interno-proteccion-civil/', desc: 'Donde va el punto de reunión.' },
      { label: 'Protección Civil', href: '/proteccion-civil/', desc: 'Trámites en CDMX y Edomex.' },
      { label: 'Hidrantes y mangueras', href: '/productos/hidrantes-mangueras/', desc: 'La red que también se señala.' },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    titleAccent: 'sobre señalización',
    desc: 'Lo que más nos preguntan antes de comprar señales de protección civil y de emergencia.',
    body: [
      'Si tu caso no aparece aquí, escríbenos con el giro, la superficie, los niveles y qué señalización tienes hoy.',
      'Las respuestas citan la norma cuando aplica; lo que depende de tu inmueble lo revisamos contigo.',
    ],
    items: [
      { question: '¿Qué norma regula las señales de protección civil?', answer: 'La NOM-003-SSPC-2011 regula las señales y avisos de protección civil en cualquier inmueble: colores, formas, símbolos y materiales. En los centros de trabajo aplica además la NOM-026-STPS-2008, de colores y señales de seguridad e higiene; la NOM-003 remite a ella en lo que no cubre, así que en una empresa suelen pedirse las dos.' },
      { question: '¿Qué significa cada color de señal?', answer: 'Verde: condición segura, como rutas de evacuación, salidas, punto de reunión y primeros auxilios. Rojo: paro, prohibición y equipo contra incendio, como extintores, hidrantes y alarmas. Amarillo: advertencia o precaución. Azul: obligación, como el uso de equipo de protección personal.' },
      { question: '¿De qué tamaño debe ser una señal?', answer: 'Según la distancia desde la que se tiene que leer. La NOM-026-STPS-2008 pide que la superficie S, en metros cuadrados, sea al menos L²/2000, donde L es la distancia de observación en metros, entre 5 y 50 m. A 10 m, por ejemplo, la señal debe tener al menos 500 cm². Por debajo de 5 m el mínimo es 125 cm² y por encima de 50 m, 12,500 cm².' },
      { question: '¿La señalización tiene que ser fotoluminiscente?', answer: 'No siempre. La NOM-003-SSPC-2011 permite el material fotoluminiscente y exige que las señales de ruta, salida y zona de resguardo puedan observarse bajo cualquier condición (numeral 6.6). El fotoluminiscente es la forma más directa de lograrlo sin energía: se carga con la luz del lugar y brilla a oscuras. Para que funcione tiene que recibir luz suficiente antes de la emergencia; en el levantamiento revisamos eso en cada punto.' },
      { question: '¿Qué señales pide Protección Civil en la Ciudad de México?', answer: 'Aun en el nivel de bajo riesgo, la Ley de Gestión Integral de Riesgos y Protección Civil (art. 64) pide extintores señalizados y señalización de las rutas de evacuación. Un establecimiento mercantil que no requiere Programa Interno igual debe exhibir el 911 y la señalización de qué hacer ante sismo e incendio (Ley de Establecimientos Mercantiles, art. 10, fracc. XII). En la visita se revisan rutas, salidas y equipo señalizados.' },
      { question: '¿Las luces de emergencia son obligatorias?', answer: 'No encontramos un numeral mexicano que las haga obligatorias con una duración fija. Son criterio técnico: si se corta la energía, la luz de emergencia es lo que mantiene visible la ruta. La NFPA 101, referencia técnica, pide 90 minutos de iluminación de emergencia.' },
      { question: '¿Qué es el croquis de evacuación y quién lo pide?', answer: 'Es el plano del inmueble con las rutas, las salidas, el equipo contra incendio y el punto de reunión. En el Estado de México, el trámite de Protección Civil pide un croquis de distribución con señalamientos. Lo hacemos a partir del levantamiento, pero no sustituye al Programa Interno, que firma un tercero acreditado.' },
      { question: '¿Dónde va la señal de un extintor?', answer: 'Sobre el equipo, visible desde la circulación, para ubicarlo aunque el cilindro quede oculto por un mueble o una columna. Es roja, porque señala equipo contra incendio, y no debe confundirse con una señal de salida. El extintor mismo va a no más de 1.50 m del piso, conforme a la NOM-002-STPS-2010.' },
      { question: '¿Cada cuánto se cambia la señalización?', answer: 'Cuando se decolora, se despega, deja de verse desde la ruta o cambia la distribución del inmueble. Una remodelación, un cambio de puertas o un anaquel nuevo pueden dejar una flecha apuntando a donde ya no hay salida. Conviene revisarla junto con el recorrido de la ruta en cada simulacro.' },
      { question: '¿Cuánto cuesta señalizar un inmueble?', answer: 'Depende del número de señales, su tamaño, si hacen falta luces de emergencia y croquis, y de la superficie y los niveles. Un local pequeño no se compara con una nave de pasillos largos. Después del levantamiento entregamos la propuesta con el listado de señales.' },
      { question: '¿Surten solo las señales o también las instalan?', answer: 'Las dos cosas. Surtimos las señales, las luces de emergencia y el croquis, y también los instalamos en la Ciudad de México y el Estado de México. Si ya tienes quien instale, te entregamos las señales con su ubicación y tamaño definidos.' },
      { question: '¿Venden señales de precaución y obligación?', answer: 'Nuestra línea fotoluminiscente cubre las señales de condición segura y de equipo contra incendio. Las de precaución y obligación dependen del proceso de cada centro de trabajo; si tu inmueble las necesita, lo revisamos en el levantamiento y te decimos cómo resolverlas.' },
    ],
  },
};
