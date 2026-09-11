// ============================================================================
// src/data/fichas-heads.ts — Columna derecha de los encabezados de las fichas L4.
// ----------------------------------------------------------------------------
// 2026-09-11 · Decisión de Frank: TODOS los títulos de la ficha L4 van a dos
// columnas. IZQ (ya existía): eyebrow + título + acento + bajada. DER (esto):
// dos párrafos con intención SEO y de marketing.
//
// Contrato de copy de cada par:
//   · Párrafo 1 — trabaja la keyword de la sección y el criterio técnico/normativo.
//   · Párrafo 2 — cierra en beneficio comercial y acción (cotizar, medir, agendar).
//   · No repite la bajada de la izquierda ni el cuerpo del módulo.
//   · 2 a 3 renglones por párrafo (~35-55 palabras): la columna debe quedar
//     ópticamente pareja con el bloque de título, no más alta.
//   · Regla de copy del catálogo intacta: nada que no esté en el frontmatter o
//     en la hoja de hechos verificados (bitácora de Obsidian, 2026-09-10).
//
// Lo que no se declara aquí cae a HEADS_DEFAULT de `fichas.ts`.
// ============================================================================
import type { FichaHeads } from './fichas';

export const FICHAS_HEADS: Record<string, Partial<FichaHeads>> = {
  'extintor-pqs': {
    vitrina: [
      'El extintor PQS ABC usa polvo químico seco a base de fosfato monoamónico: interrumpe la reacción en fuegos de sólidos (clase A), líquidos inflamables (clase B) y equipo eléctrico energizado (clase C), bajo la NOM-100-STPS-1994.',
      'Es el equipo de arranque de casi cualquier inmueble en CDMX y Edomex. Dinos giro y superficie y te decimos cuántos y de qué capacidad, con entrega e instalación.',
    ],
    presentaciones: [
      'Las presentaciones de extintor PQS van del compacto de 1 kg para vehículo a la unidad sobre ruedas de 70 kg. La capacidad define el alcance, el tiempo de descarga y quién puede manejarlo sin entrenamiento previo.',
      'En la práctica, la mayoría de oficinas y comercios resuelve con 4.5 y 6 kg, y deja los equipos móviles para bodega y patio de maniobras. Te armamos la mezcla en una sola cotización.',
    ],
    comparativa: [
      'Comparar las ocho presentaciones de PQS de golpe evita el error más común: comprar todo del mismo tamaño. La clasificación UL (2A:10B:C, 4A:60B:C…) dice cuánto fuego apaga realmente cada equipo.',
      'La distancia máxima de recorrido hasta un extintor es de 23 m para clase A y C, y de 15 o 10 m cuando el riesgo dominante es clase B: esa medida, no el metraje, define cuántos necesitas.',
    ],
    guia: [
      'Elegir extintor PQS se reduce a cuatro decisiones: qué clase de fuego domina en cada área, qué capacidad aguanta quien lo va a usar, a qué altura se monta (máximo 1.50 m del piso a la parte superior) y quién le da el mantenimiento anual.',
      'Resuélvelas antes de pedir precio y la cotización sale en minutos, con el equipo listo para pasar una inspección de Protección Civil sin observaciones.',
    ],
    giros: [
      'El PQS aparece en casi todas las fichas de Protección Civil porque cubre las tres clases de fuego que conviven en un negocio promedio: papel y cartón, combustibles líquidos y tableros eléctricos.',
      'Abre la ficha de tu giro y compárala con lo que ya tienes instalado: ahí está el listado completo de equipo, señalización y documentación que revisan.',
    ],
    relacionados: [
      'El extintor PQS rara vez viaja solo: pide su soporte o gabinete, su señalamiento de ubicación y el servicio anual que le imprime etiqueta y collarín conforme a la NOM-154-SCFI-2005.',
      'Cotizarlo todo con el mismo proveedor te deja una sola factura, una visita de instalación y un calendario único de recarga.',
    ],
    faq: [
      'Reunimos las preguntas que más nos llegan al cotizar extintores PQS: para qué sirve cada capacidad, cuántos exige la norma, cada cuándo se recarga y qué hacer si el manómetro cayó fuera del verde.',
      'Si tu caso no está aquí, escríbenos con tu giro y superficie: te orientamos antes de cotizar y sin compromiso.',
    ],
  },
  'extintor-co2': {
    vitrina: [
      'El extintor de CO₂ desplaza el oxígeno y enfría la zona de la flama sin dejar residuo ni conducir electricidad, por eso es el equipo de tableros, sites y laboratorios. Norma de producto: NOM-102-STPS-1994.',
      'No está clasificado para clase A: donde hay papel, cartón o madera se combina con un PQS. Te decimos qué mezcla conviene según lo que tengas en cada cuarto.',
    ],
    presentaciones: [
      'Las presentaciones de CO₂ van de 5 a 20 lb en portátil y de 50 a 100 lb sobre ruedas. El cilindro es de alta presión, así que el peso sube rápido: importa quién lo va a descolgar y usar.',
      'Para un site pequeño suele bastar un portátil junto a la puerta; para subestación o cuarto de máquinas conviene la unidad móvil. Dinos el área y te damos la combinación.',
    ],
    comparativa: [
      'La tabla compara capacidad, formato y clasificación de cada extintor de CO₂ para que elijas por alcance real y no por precio por kilo, que es donde se pierde cobertura.',
      'Con riesgo eléctrico, la referencia práctica es un equipo por tablero o rack crítico, más el recorrido máximo de 15 m que aplica cuando domina la clase B.',
    ],
    guia: [
      'Aquí está el criterio completo del CO₂: dónde conviene frente al agente limpio, qué capacidad elegir por tipo de cuarto, por qué no se instala en espacios confinados sin ventilación y qué servicio pide el cilindro.',
      'También te decimos cuándo NO es el equipo indicado, que es la parte que casi ningún proveedor explica antes de facturar.',
    ],
    giros: [
      'Sites, subestaciones, cocinas con equipo eléctrico, talleres y laboratorios son los giros donde la ficha de Protección Civil termina pidiendo CO₂ junto al extintor de polvo.',
      'Revisa la ficha de tu actividad: ahí viene el equipo mínimo, la señalización y el expediente que te van a solicitar en la visita.',
    ],
    relacionados: [
      'El CO₂ convive con el agente limpio, el PQS y la señalización de riesgo eléctrico; y como todo cilindro de alta presión, entra al calendario de mantenimiento anual y prueba hidrostática.',
      'Arma el paquete completo con nosotros y te queda una sola fecha de servicio para todo el inmueble.',
    ],
    faq: [
      'Resolvemos lo que más se pregunta sobre extintores de CO₂: por qué no sirven para papel, si dañan el equipo electrónico, cuánto pesa cada presentación y cada cuándo se recargan.',
      'Cuéntanos qué vas a proteger y te confirmamos si el CO₂ es el agente correcto antes de que gastes.',
    ],
  },
  'extintor-clase-k': {
    vitrina: [
      'El extintor tipo K usa químico húmedo (acetato de potasio) que saponifica el aceite de cocción y forma una capa que impide la reignición. Es el único agente clasificado para clase K, la de grasas y aceites vegetales.',
      'Restaurantes, hoteles, comedores industriales y cocinas oscuras lo llevan por norma y por seguro. Te decimos cuántos van según el número de freidoras y planchas.',
    ],
    presentaciones: [
      'Las presentaciones de clase K son de 4, 6 y 9.46 L. El volumen se elige por el tamaño del equipo de cocción a cubrir, no por el tamaño de la cocina.',
      'Lo habitual es un equipo a la vista de la línea caliente y otro cerca de la salida. Si tienes campana con sistema fijo, el extintor K es el complemento, no el sustituto.',
    ],
    comparativa: [
      'La tabla pone frente a frente las tres capacidades de extintor tipo K con su clasificación y su uso sugerido, para que la freidora grande no quede protegida con el equipo más chico.',
      'El recorrido máximo hasta un extintor de clase K es de 10 m: en una cocina comercial eso suele significar más de una unidad.',
    ],
    guia: [
      'Aquí va lo que hay que decidir antes de comprar un extintor de cocina: qué litraje por tipo de equipo, dónde montarlo sin que estorbe la operación, cómo se usa (a distancia y en abanico) y qué mantenimiento pide.',
      'También aclaramos la confusión más cara: el PQS no sustituye al clase K sobre aceite caliente, aunque el proveedor lo haya vendido así.',
    ],
    giros: [
      'Restaurantes, cafeterías, panaderías, hoteles, comedores de empresa y cocinas de escuela son los giros donde la ficha de Protección Civil pide clase K junto al extintor de uso general.',
      'Abre la ficha de tu giro y revisa el listado completo antes de la visita de verificación.',
    ],
    relacionados: [
      'Una cocina comercial completa suma extintor tipo K, extintor de uso general para el resto del local, señalización, detección de gas y el servicio anual de todo el equipo.',
      'Lo cotizamos junto y coordinamos la instalación en un solo día, fuera de tu horario de servicio.',
    ],
    faq: [
      'Respondemos las dudas frecuentes del extintor tipo K: por qué el polvo no sirve sobre aceite, cuántos litros necesita tu cocina, si sustituye al sistema de campana y cada cuándo se le da servicio.',
      'Mándanos el número de freidoras, planchas y estufas y te decimos exactamente qué llevas.',
    ],
  },
  'extintor-agua': {
    vitrina: [
      'La familia de agua reúne tres agentes distintos: agua a presión para clase A, agua nebulizada que además cubre clase C sin conducir electricidad, y espuma AFFF que sella vapores en líquidos inflamables (clases A y B).',
      'Elegir mal aquí es caro: el agua a presión sobre un tablero energizado o sobre solvente es exactamente lo que no debe hacerse. Te decimos cuál va en cada área.',
    ],
    presentaciones: [
      'Las presentaciones van de portátiles a unidades sobre ruedas, en agua a presión, agua nebulizada y espuma AFFF. Cada una cambia las clases de fuego cubiertas, no solo la capacidad.',
      'Bodegas de papel, archivo, textil y madera suelen resolver con agua; donde hay solventes o pinturas entra la espuma AFFF.',
    ],
    comparativa: [
      'La tabla compara agente por agente: capacidad, formato y clases de fuego cubiertas, que es el dato que decide si un extintor de agua sirve o sobra en ese punto del inmueble.',
      'Con clase A el recorrido máximo hasta el extintor es de 23 m; con clase B baja a 15 o 10 m. Ese número define cuántos puntos necesitas cubrir.',
    ],
    guia: [
      'Aquí está el criterio de compra: cuándo conviene agua a presión, cuándo nebulizada, cuándo espuma AFFF, qué capacidad elegir y dónde NO se instala ninguna de las tres.',
      'Con eso resuelto, la cotización sale a la primera y sin equipo de más en áreas que no lo necesitan.',
    ],
    giros: [
      'Archivos, bodegas de papel y cartón, carpinterías, textileras y almacenes de sólidos combustibles son los giros donde la ficha de Protección Civil se inclina por agua o espuma.',
      'Revisa la ficha de tu actividad y compárala con lo que hoy tienes montado.',
    ],
    relacionados: [
      'Los extintores de agua y espuma conviven con el PQS del área eléctrica y con hidrantes y gabinetes de manguera cuando la carga de fuego es alta.',
      'Te armamos el esquema completo del inmueble, con su señalización y su calendario de mantenimiento.',
    ],
    faq: [
      'Contestamos lo que más se pregunta: si el extintor de agua sirve para equipo eléctrico, en qué se diferencia la nebulizada, qué hace la espuma AFFF y cada cuándo toca recarga.',
      'Dinos qué almacenas y en qué superficie: te confirmamos el agente antes de cotizar.',
    ],
  },
  'extintor-agente-limpio': {
    vitrina: [
      'El agente limpio (Halotron I y FE-36) es un gas que no conduce electricidad, no deja residuo y se evapora sin dañar tarjetas ni servidores. Desde 4.3 kg también queda clasificado para clase A.',
      'Es el equipo de sites, cuartos de telecom, quirófanos y salas de control, donde el polvo del PQS haría más daño que el propio conato.',
    ],
    presentaciones: [
      'Las presentaciones de agente limpio cubren desde el portátil chico junto al rack hasta unidades de mayor capacidad para sala completa. La clasificación UL de cada una indica el fuego real que apaga.',
      'Si el cuarto tiene papel además de equipo, conviene la capacidad que ya incluye clase A. Te decimos cuál desde la descripción del sitio.',
    ],
    comparativa: [
      'La tabla compara capacidad, formato y clasificación de cada extintor de agente limpio, el dato que justifica su precio frente a un CO₂ del mismo tamaño.',
      'La diferencia práctica está en el residuo y en el riesgo para el equipo: el agente limpio no enfría el metal ni desplaza el aire del cuarto como el CO₂.',
    ],
    guia: [
      'Aquí va cuándo conviene agente limpio frente a CO₂, qué capacidad elegir por tamaño de site, dónde montarlo respecto a la puerta y qué mantenimiento pide el cilindro.',
      'También te decimos cuándo no vale la pena: en áreas sin electrónica crítica, un PQS bien elegido cuesta mucho menos.',
    ],
    giros: [
      'Sites, centros de datos, oficinas con sala de servidores, telecomunicaciones, laboratorios y salas de control son los giros donde la ficha de Protección Civil admite o sugiere agente limpio.',
      'Abre la ficha de tu actividad y revisa qué más te van a pedir además del extintor.',
    ],
    relacionados: [
      'El agente limpio suele ir acompañado de detección temprana de humo, señalización de riesgo eléctrico y un PQS en las áreas comunes del mismo piso.',
      'Cotiza el conjunto y te dejamos un solo expediente con las fichas técnicas de todo el equipo.',
    ],
    faq: [
      'Resolvemos lo típico del agente limpio: si daña los equipos, en qué se diferencia del CO₂, si sirve para papel y cada cuándo se le da servicio.',
      'Cuéntanos qué hay dentro del cuarto y te confirmamos el agente correcto.',
    ],
  },
  'detector-humo-fotoelectrico': {
    vitrina: [
      'El detector de humo fotoeléctrico reacciona a las partículas del humo lento y denso —el de un cable recalentado o un colchón— antes de que haya flama. Es la detección temprana que da tiempo a evacuar.',
      'Hay versión autónoma de batería, interconectada, combinada con monóxido de carbono y para panel de alarma direccionable. Te decimos cuál va según el inmueble.',
    ],
    presentaciones: [
      'Las presentaciones cambian por cómo se alimenta y cómo avisa: autónomo, interconectado entre sí, combinado con CO o cableado al panel de alarma contra incendio.',
      'En casa habitación y oficina chica basta el autónomo; en hotel, escuela o nave con panel, el detector tiene que reportar a la central.',
    ],
    comparativa: [
      'La tabla compara los modelos de detector de humo por alimentación, cobertura y tipo de aviso, que es lo que define si el equipo sirve para tu inmueble o solo para un cuarto.',
      'El criterio de colocación pesa tanto como el modelo: techo, lejos de difusores de aire y de la salida de la cocina, para no vivir con falsas alarmas.',
    ],
    guia: [
      'Aquí está lo que hay que decidir: fotoeléctrico o combinado, autónomo o a panel, cuántos por superficie y dónde NO se montan para evitar disparos por vapor o polvo.',
      'Con eso definido, la instalación se hace en una visita y la memoria técnica queda lista para tu expediente.',
    ],
    giros: [
      'Hoteles, escuelas, guarderías, oficinas, bodegas y edificios de departamentos son los giros donde la ficha de Protección Civil pide sistema de detección además de extintores.',
      'Revisa la ficha de tu actividad para saber si te exigen panel o basta con detección autónoma.',
    ],
    relacionados: [
      'La detección de humo trabaja junto con alarma audible, lámparas de emergencia, señalización de ruta de evacuación y los extintores del piso.',
      'Lo integramos como un solo proyecto, con una sola fecha de instalación y de pruebas.',
    ],
    faq: [
      'Contestamos las dudas frecuentes: diferencia entre fotoeléctrico e iónico, cuántos detectores por superficie, por qué suenan sin motivo y cada cuándo se prueban y se cambia la batería.',
      'Mándanos plano o metros cuadrados por nivel y te proponemos la distribución.',
    ],
  },
  'detector-de-gas': {
    vitrina: [
      'El detector de gas avisa antes de que la mezcla llegue a concentración inflamable. Cambia el sensor y la posición según el gas: el LP es más pesado que el aire y se acumula abajo; el natural sube al techo.',
      'Hay equipos autónomos, con electroválvula que corta el suministro y modelos conectados al panel de alarma. Te decimos cuál pide tu instalación.',
    ],
    presentaciones: [
      'Las presentaciones van del detector de gas autónomo de enchufe al sistema con electroválvula de corte automático y al sensor cableado a panel, con aviso a la central.',
      'Cocinas comerciales, cuartos de calderas, cuartos de máquinas y bodegas con tanque estacionario son los casos donde el corte automático se paga solo.',
    ],
    comparativa: [
      'La tabla compara los detectores de gas por tipo de gas, forma de aviso y si accionan o no la electroválvula, que es la diferencia entre enterarte y evitar el evento.',
      'La altura de montaje no es opcional: sensor bajo para gas LP, alto para gas natural. Un equipo bien elegido mal colocado no detecta nada.',
    ],
    guia: [
      'Aquí va el criterio: qué gas manejas, cuántos puntos de fuga probables hay, si necesitas corte automático y cómo se integra con el panel y con la alarma audible.',
      'Con eso resuelto, la instalación y las pruebas se hacen en la misma visita, con constancia para tu expediente.',
    ],
    giros: [
      'Restaurantes, panaderías, tortillerías, hoteles, lavanderías y naves con caldera son los giros donde la ficha de Protección Civil menciona detección de gas.',
      'Abre la ficha de tu actividad y revisa qué más va junto con el detector.',
    ],
    relacionados: [
      'La detección de gas se cotiza normalmente junto con el extintor tipo K de la cocina, la detección de humo y la señalización de la zona de riesgo.',
      'Te lo dejamos como un solo proyecto, con una visita de instalación y un calendario de pruebas.',
    ],
    faq: [
      'Resolvemos lo que más se pregunta: dónde se coloca según el gas, si conviene el corte automático, cada cuándo se calibra y qué hacer cuando el detector alarma.',
      'Dinos qué gas usas y cuántos equipos de consumo tienes: te proponemos la distribución.',
    ],
  },
  'gabinete-manguera-contra-incendio': {
    vitrina: [
      'El gabinete contra incendio aloja manguera de 1½ pulgadas, válvula angular y chiflón, y en los modelos combinados también el extintor portátil. Es el punto donde el usuario del inmueble ataca un fuego que ya superó al extintor.',
      'Hay de sobreponer, de empotrar y combinados, en distintas medidas. Dinos el tipo de muro y el diámetro de tu toma y te decimos cuál entra.',
    ],
    presentaciones: [
      'Las presentaciones cambian por montaje —sobreponer o empotrar— y por lo que llevan dentro: solo manguera, manguera con extintor, o gabinete para equipo de mayor alcance.',
      'En obra nueva casi siempre conviene empotrar; en inmueble existente, sobreponer evita romper muro y acelera la instalación.',
    ],
    comparativa: [
      'La tabla compara los gabinetes por tipo de montaje, medidas y contenido, que es el dato que necesita el instalador antes de abrir el muro.',
      'Recuerda que el gabinete es el mueble: la manguera, la válvula y el chiflón se cotizan por separado si tu toma ya existe.',
    ],
    guia: [
      'Aquí va lo que hay que definir antes de comprar: dónde se ubica respecto a la ruta de evacuación, a qué altura se monta, si empotras o sobrepones y qué equipo va a alojar realmente.',
      'Con eso claro te cotizamos el gabinete y, si lo necesitas, la manguera y los accesorios para dejarlo operando.',
    ],
    giros: [
      'Naves industriales, bodegas, plazas comerciales, hoteles y edificios con sistema de hidrantes son los giros donde la ficha de Protección Civil pide gabinete con manguera además de extintores.',
      'Abre la ficha de tu actividad para ver el equipo completo que te van a revisar.',
    ],
    relacionados: [
      'El gabinete forma parte del sistema de hidrantes: manguera, válvula, chiflón, señalización de equipo contra incendio y la revisión periódica del conjunto.',
      'Lo cotizamos completo para que no te falte una pieza el día de la instalación.',
    ],
    faq: [
      'Resolvemos lo que más se pregunta: qué medida de gabinete necesitas, si conviene empotrar, qué debe contener y cada cuándo se revisa la manguera.',
      'Mándanos una foto del muro y de la toma existente y te confirmamos el modelo.',
    ],
  },
  'rociadores-contra-incendio': {
    vitrina: [
      'El rociador automático actúa sobre el fuego en su origen: cada cabeza abre por temperatura, de forma individual, y descarga solo donde hace falta. Es el sistema que contiene un incendio sin que nadie esté presente.',
      'Los sistemas se arman por tipo de tubería —húmeda, seca o preacción— según la temperatura del área y lo que se esté protegiendo.',
    ],
    presentaciones: [
      'Las presentaciones cubren los tipos de rociador (colgante, montante, lateral, oculto) y los esquemas de tubería húmeda, seca y preacción, cada uno para un escenario distinto de nave, bodega u oficina.',
      'En áreas que se congelan o en cuartos con electrónica crítica, el sistema no es el mismo que en una oficina: ahí es donde se define el proyecto.',
    ],
    comparativa: [
      'La tabla compara los tipos de rociador y de sistema por área de aplicación y condición de operación, que es la base del cálculo hidráulico posterior.',
      'Ningún sistema de rociadores se cotiza en serio sin plano y uso del inmueble: la tabla te sirve para llegar a esa conversación con criterio.',
    ],
    guia: [
      'Aquí está lo que conviene entender antes de invertir: cuándo son obligatorios, qué tipo de sistema pide tu inmueble, cómo se dimensiona la reserva de agua y qué mantenimiento exige después.',
      'Si tu proyecto ya está en marcha, mándanos planos y uso por área y lo revisamos contigo.',
    ],
    giros: [
      'Naves, bodegas de alto apilamiento, plazas comerciales, hoteles, hospitales y estacionamientos son los giros donde Protección Civil y las aseguradoras empujan hacia rociadores.',
      'Revisa la ficha de tu actividad para ver qué se pide en tu caso además del sistema fijo.',
    ],
    relacionados: [
      'Un sistema de rociadores convive con hidrantes y gabinetes, detección y alarma, señalización y los extintores portátiles que siguen siendo obligatorios.',
      'Te ayudamos a ordenar todo el proyecto en una sola ruta, por etapas si el presupuesto lo pide.',
    ],
    faq: [
      'Contestamos lo esencial: cuándo son obligatorios, cuánto cuesta aproximarse al proyecto, si se activan todos a la vez (no) y qué mantenimiento pide el sistema.',
      'Cuéntanos superficie, altura y giro y te decimos por dónde empezar.',
    ],
  },
  'senalamientos-de-seguridad': {
    vitrina: [
      'Los señalamientos de seguridad comunican sin texto: color y forma geométrica definen si la señal prohíbe, obliga, previene, informa o ubica equipo contra incendio, conforme a la NOM-026-STPS-2008.',
      'Es el elemento más barato del expediente y el que más observaciones genera en una visita, casi siempre por medida o ubicación incorrecta.',
    ],
    presentaciones: [
      'Las presentaciones cubren las cinco familias de señal —prohibición, obligación, precaución, información y equipo contra incendio— en los materiales y medidas que se usan en centro de trabajo.',
      'La medida se elige por distancia máxima de observación, no por lo que se ve bien de cerca. Dinos las distancias y te armamos el juego.',
    ],
    comparativa: [
      'La tabla ordena las señales por tipo, color, forma y uso, para que el juego que compres corresponda a los riesgos reales de tu inmueble y no a un paquete genérico.',
      'Un señalamiento correcto mal ubicado cuenta como faltante: por eso incluimos el criterio de colocación junto a cada familia.',
    ],
    guia: [
      'Aquí va lo que hay que decidir: qué señales te aplican por actividad, qué medida según la distancia de observación, dónde se montan y cómo se combinan con la señalización de ruta de evacuación.',
      'Con eso resuelto te entregamos el juego completo y, si lo necesitas, lo instalamos.',
    ],
    giros: [
      'Todo centro de trabajo señaliza, pero el juego cambia por giro: la ficha de Protección Civil de tu actividad dice qué señales esperan encontrar en la visita.',
      'Compárala con lo que tienes puesto hoy: ahí suelen aparecer los faltantes.',
    ],
    relacionados: [
      'La señalización acompaña a extintores, gabinetes, salidas de emergencia, lámparas de emergencia y punto de reunión: es lo que hace visible el equipo que ya compraste.',
      'Cotiza el juego junto con el equipo y te queda todo en la misma entrega.',
    ],
    faq: [
      'Resolvemos las dudas frecuentes: qué señales son obligatorias, qué medida corresponde a cada distancia, si deben ser fotoluminiscentes y cada cuándo se reponen.',
      'Mándanos el listado de áreas y te proponemos el juego completo.',
    ],
  },
  'senalizacion-fotoluminiscente': {
    vitrina: [
      'La señalización fotoluminiscente carga luz durante el día y sigue visible cuando se corta la energía, que es justo el momento en que la gente tiene que encontrar la salida.',
      'Cubre rutas de evacuación, salidas, equipo contra incendio, punto de reunión y primeros auxilios, con el diseño que corresponde a cada función.',
    ],
    presentaciones: [
      'Las presentaciones se organizan por función: ruta y sentido de evacuación, salida de emergencia, ubicación de extintor e hidrante, punto de reunión y botiquín.',
      'El material y la altura de montaje cambian si la señal va a muro, a bandera o a nivel de piso en un pasillo largo.',
    ],
    comparativa: [
      'La tabla compara las señales fotoluminiscentes por función, forma y ubicación típica, para armar una ruta continua en lugar de señales sueltas.',
      'Una ruta se evalúa completa: si un tramo queda sin señal de sentido, la evacuación se rompe ahí.',
    ],
    guia: [
      'Aquí está el criterio: cómo trazar la ruta de evacuación, qué señal va en cada punto, a qué altura se coloca y cómo se combina con lámparas de emergencia.',
      'Te ayudamos a levantar el recorrido y a dejar el juego instalado y documentado.',
    ],
    giros: [
      'Escuelas, hoteles, oficinas, plazas, hospitales y naves son los giros donde la ficha de Protección Civil revisa la ruta de evacuación señalizada de principio a fin.',
      'Abre la ficha de tu actividad y checa qué más va junto con la señalización.',
    ],
    relacionados: [
      'La señalización fotoluminiscente trabaja con las lámparas de emergencia, la señalización de seguridad NOM-026 y la ubicación visible de extintores e hidrantes.',
      'Cotízalo como conjunto y la ruta queda coherente en una sola visita.',
    ],
    faq: [
      'Contestamos lo típico: diferencia entre fotoluminiscente y reflejante, cuánto tiempo permanece visible, qué señales son obligatorias y cada cuándo se reponen.',
      'Dinos cuántos niveles y salidas tiene el inmueble y te armamos la propuesta.',
    ],
  },
  'lamparas-de-emergencia': {
    vitrina: [
      'La lámpara de emergencia enciende sola cuando se va la luz y mantiene iluminada la ruta de evacuación con batería de respaldo, conforme al criterio de iluminación de la NOM-025-STPS-2008.',
      'Escaleras, pasillos sin ventanas, salidas y cuartos de máquinas son los puntos donde un apagón deja de ser molestia y se vuelve riesgo.',
    ],
    presentaciones: [
      'Las presentaciones cambian por tipo de luminaria, autonomía de batería y montaje: de muro, de sobreponer, con faros direccionables o combinadas con señal de salida.',
      'La autonomía se elige por el tiempo real que toma evacuar tu inmueble, no por el número más grande de la caja.',
    ],
    comparativa: [
      'La tabla compara las lámparas de emergencia por autonomía, tipo de montaje y cobertura, para colocar el equipo adecuado en cada tramo de la ruta.',
      'Un pasillo largo pide más de una luminaria: lo que importa es que no queden tramos oscuros entre una y otra.',
    ],
    guia: [
      'Aquí va lo que hay que definir: cuántas lámparas por tramo, qué autonomía, dónde se montan respecto a escaleras y salidas, y cada cuándo se prueban las baterías.',
      'Con eso resuelto, la instalación se hace en una visita y queda registro para tu expediente.',
    ],
    giros: [
      'Escuelas, hoteles, oficinas, hospitales, plazas y naves son los giros donde la ficha de Protección Civil revisa iluminación de emergencia junto con la señalización.',
      'Revisa la ficha de tu actividad para ver el conjunto que te van a pedir.',
    ],
    relacionados: [
      'Las lámparas de emergencia se cotizan normalmente junto con señalización fotoluminiscente de ruta y salida, y con la detección y alarma del inmueble.',
      'Te lo dejamos como un solo proyecto de evacuación, instalado y probado.',
    ],
    faq: [
      'Resolvemos lo frecuente: cuántas lámparas necesitas, cuánta autonomía pide la norma, si deben probarse cada mes y cuándo se cambian las baterías.',
      'Mándanos plano o metros por nivel y te proponemos la distribución.',
    ],
  },
  'botiquin-primeros-auxilios': {
    vitrina: [
      'El botiquín de primeros auxilios es equipo obligatorio de centro de trabajo: la Ley Federal del Trabajo lo exige y Protección Civil lo revisa junto con la brigada y el expediente.',
      'Hay de pared y portátiles, con contenido distinto según si atiende una oficina, una nave o una brigada que sale a campo.',
    ],
    presentaciones: [
      'Las presentaciones se eligen por número de personas y por tipo de riesgo: gabinete de pared para punto fijo, maletín portátil para brigada y versiones reforzadas para nave o taller.',
      'Dinos cuántos trabajadores hay por turno y qué riesgos existen y te decimos qué botiquín y cuántos puntos.',
    ],
    comparativa: [
      'La tabla compara los botiquines por capacidad, montaje y uso previsto, para que el contenido corresponda al riesgo de tu actividad y no a un kit genérico de farmacia.',
      'El contenido es tan revisable como el mueble: material caducado cuenta como faltante en una inspección.',
    ],
    guia: [
      'Aquí va lo que conviene resolver: qué debe contener según tu giro, dónde se coloca para que sea accesible, quién lo administra y cada cuándo se revisa y repone.',
      'Te entregamos el botiquín surtido y, si lo necesitas, el formato de control para el expediente.',
    ],
    giros: [
      'Oficinas, comercios, naves, restaurantes, escuelas y obras son giros donde la ficha de Protección Civil pide botiquín, brigada de primeros auxilios y su registro.',
      'Abre la ficha de tu actividad y revisa qué se te exige además del equipo.',
    ],
    relacionados: [
      'El botiquín forma parte del paquete de emergencia junto con señalización de primeros auxilios, lámparas de emergencia y la capacitación de la brigada.',
      'Cotízalo con el resto del equipo y te queda una sola entrega y un solo expediente.',
    ],
    faq: [
      'Contestamos lo que más se pregunta: qué debe contener, cuántos botiquines necesitas, si puede incluir medicamentos y cada cuándo se revisa el material.',
      'Dinos giro y número de trabajadores y te armamos el contenido.',
    ],
  },
  'soportes-accesorios-extintor': {
    vitrina: [
      'El soporte para extintor no es un accesorio opcional: la norma pide el equipo montado, visible y señalizado, con la parte superior a no más de 1.50 m del piso. Un extintor en el suelo es observación segura.',
      'Aquí están los soportes de pared, abrazaderas, bases vehiculares y gabinetes para proteger el equipo en exterior o en zona de tránsito.',
    ],
    presentaciones: [
      'Las presentaciones cubren soporte de pared, abrazadera, base de piso, montaje vehicular y gabinete de sobreponer o empotrar, cada uno para un tipo de extintor y de ubicación.',
      'El soporte se elige por el peso y el diámetro del cilindro: el de 4.5 kg y el de 9 kg no usan la misma pieza.',
    ],
    comparativa: [
      'La tabla compara los accesorios por tipo de montaje, extintor compatible y ubicación recomendada, para que el pedido salga completo a la primera.',
      'En exterior, patio o pasillo de montacargas, conviene gabinete en vez de soporte descubierto: el equipo dura y sigue siendo visible.',
    ],
    guia: [
      'Aquí va lo que hay que decidir: qué soporte por capacidad de extintor, a qué altura se monta, cuándo conviene gabinete y qué señalamiento lo acompaña.',
      'Con eso resuelto, tu extintor queda montado como pide la norma y localizable a distancia.',
    ],
    giros: [
      'Todo inmueble con extintores necesita montarlos bien; la ficha de Protección Civil de tu giro indica dónde deben estar y cómo se señalizan.',
      'Revisa tu actividad y compárala con lo que hoy tienes instalado.',
    ],
    relacionados: [
      'Los soportes y gabinetes se cotizan junto con el extintor, su señalamiento de ubicación y el servicio anual de recarga y mantenimiento.',
      'Un solo pedido y una sola visita de instalación para todo el inmueble.',
    ],
    faq: [
      'Resolvemos lo frecuente: a qué altura va el extintor, qué soporte corresponde a cada capacidad, cuándo se necesita gabinete y cómo se monta en vehículo.',
      'Dinos qué extintores tienes y dónde van y te decimos qué accesorios llevas.',
    ],
  },
};
