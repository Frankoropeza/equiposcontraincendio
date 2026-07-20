# Expedientes de variantes de producto

**Investigación:** 2026-07-20
**Criterio:** una presentación se publica solo cuando existe en documentación oficial, catálogo de fabricante o mercado mexicano verificable. Una norma de servicio o diseño no se convierte en certificación de un SKU genérico.

## Fuentes transversales

- [NOM-002-STPS-2010 en DOF](https://www.dof.gob.mx/normasOficiales/4228/stps/stps.htm): prevención y protección contra incendios en centros de trabajo; revisión mensual, mantenimiento y criterios generales de extintores.
- [NOM-154-SCFI-2005 en la Secretaría de Economía](https://platiica.economia.gob.mx/normalizacion/nom-154-scfi-2005/): norma vigente para el servicio de mantenimiento y recarga; no certifica por sí misma un producto nuevo.
- [Cargas recomendadas para extintores en DOF](https://www.dof.gob.mx/normasOficiales/7174/seeco2a14_C/seeco2a14_C.html): polvo 0.75, 1, 2, 3, 4, 4.5, 6, 9, 12 y 13 kg; CO₂ 2.27, 4.54, 6.81 y 9.08 kg.
- [NFPA 10](https://link.nfpa.org/all-publications/1917/2016): referencia técnica para extintores portátiles; no se presenta como ley federal mexicana ni como certificación de los equipos ofertados.

## `extintor-pqs`

| Campo | Expediente |
|---|---|
| Familia | `extintor-pqs` |
| Eje de variación | Capacidad y formato portátil/móvil |
| Presentaciones verificadas | 1, 2, 4.5, 6 y 9 kg portátiles; 50 kg móvil |
| Evidencia | El DOF enumera las cargas recomendadas de polvo; la NOM-002 distingue portátiles y móviles y exige ruedas por encima de 20 kg. Una disposición oficial para plantas de distribución exige 50 kg de PQS en uno o más equipos móviles. El [catálogo Amerex](https://www.amerex-fire.com/upl/downloads/content-blocks/portable-fire-extinguisher-catalog-english.pdf) confirma una gama amplia portátil y móvil de ABC. |
| Normas aplicables | NOM-002-STPS-2010 para selección/revisión en centros de trabajo; NOM-154-SCFI-2005 para mantenimiento y recarga. |
| Vocabulario | polvo químico seco, ABC, fosfato monoamónico, presión contenida, portátil, móvil sobre ruedas |
| Riesgos | No afirmar marca, rating UL, alcance, tiempo de descarga, inventario ni certificación de un SKU sin ficha del equipo cotizado. |

## `extintor-co2`

| Campo | Expediente |
|---|---|
| Familia | `extintor-co2` |
| Eje de variación | Capacidad y formato portátil/móvil |
| Presentaciones verificadas | 2.27 kg (5 lb), 4.54 kg (10 lb), 6.81 kg (15 lb), 9.08 kg (20 lb) y 22.7 kg (50 lb) móvil |
| Evidencia | Las cuatro cargas portátiles aparecen en el DOF. [Amerex CO₂ portátil](https://amerex-fire.com/products/fire-extinguishers/portable-fire-extinguishers/co2/) documenta el agente limpio y no conductor; [Amerex CO₂ móvil](https://www.amerex-fire.com/products/fire-extinguishers/wheeled-fire-extinguishers/co2/) documenta equipos de 50 y 100 lb. |
| Normas aplicables | NOM-002-STPS-2010; NOM-154-SCFI-2005 para servicio. NFPA 10 solo como referencia técnica. |
| Vocabulario | dióxido de carbono, B/C, corneta difusora, sin residuo, cilindro de alta presión, móvil |
| Riesgos | No recomendar en espacios confinados sin evaluación; no tocar la corneta no aislada; no atribuir certificaciones del fabricante al producto genérico. |

## `extintor-clase-k`

| Campo | Expediente |
|---|---|
| Familia | `extintor-clase-k` |
| Eje de variación | Capacidad |
| Presentaciones verificadas | 4 L, 6 L y 9.46/9.5 L |
| Evidencia | [Equipo Industrial Miya, CDMX](https://www.equipoindustrialmiya.com.mx/clasek) lista 4 y 9.46 L. [Amerex Clase K](https://www.amerex-fire.com/upl/downloads/library/class-k-commercial-kitchen-fire-extinguisher.pdf) y [Badger Clase K](https://www.badgerfire.com/products/fire-extinguishers/extra/class-k-wet-chemical-wc-250-2) documentan 6 y 9.46 L. |
| Normas aplicables | NOM-002-STPS-2010 reconoce agente químico húmedo para fuego K; NOM-154-SCFI-2005 rige el servicio. |
| Vocabulario | químico húmedo, acetato de potasio, saponificación, niebla de baja velocidad, aceites y grasas de cocción |
| Riesgos | No decir que sustituye un sistema fijo de campana; no trasladar UL de Amerex/Badger a una unidad genérica. |

### Excepción: `extintor-clase-k`

Se agotó el eje de capacidad verificable en el mercado mexicano con **3 variantes**. Se revisaron fabricantes internacionales que ofrecen 1, 2 o 3 L, pero no se encontró evidencia suficiente de comercialización o disponibilidad en México. Repetir 6 y 9.46 L por fabricante no sería una diferencia de producto útil, y convertir “acero inoxidable” o “montaje de pared” en variantes separadas duplicaría la misma presentación. Se publica 4, 6 y 9.46 L y se mantiene abierta la deuda de investigación.

## `detector-humo-fotoelectrico`

| Campo | Expediente |
|---|---|
| Familia | `detector-humo-fotoelectrico` |
| Eje de variación | Alimentación, interconexión y tecnología de integración |
| Presentaciones verificadas | batería AA; batería sellada de 10 años; 120 V con respaldo; interconexión inalámbrica; combinado humo/CO; detector fotoeléctrico de 2 hilos para panel |
| Evidencia | [Catálogo Kidde de detección](https://www.kidde.com/products/detection-products) documenta las primeras cinco configuraciones; el [folleto Honeywell System Sensor i3](https://buildings.honeywell.com/content/dam/hbtbt/en/documents/document-lists/system-sensor/brochure/i3-Series-Brochure-SPBR256-Spot.pdf) documenta detectores de 2 y 4 hilos, con opciones térmicas y relé. |
| Normas aplicables | NOM-002-STPS-2010 exige programa de revisión/pruebas cuando existan medios de detección; NFPA 72 es referencia técnica de diseño, instalación y prueba. |
| Vocabulario | fotoeléctrico, autónomo, respaldo, interconectable, dos hilos, panel compatible, humo/CO |
| Riesgos | No mezclar un detector doméstico autónomo con uno de panel; verificar compatibilidad eléctrica y del panel antes de cotizar. No afirmar UL en el genérico. |

## `gabinete-manguera-contra-incendio`

| Campo | Expediente |
|---|---|
| Familia | `gabinete-manguera-contra-incendio` |
| Eje de variación | Longitud, montaje y combinación de equipo |
| Presentaciones verificadas | 1½″ × 15 m sobreponer; 1½″ × 30 m sobreponer; 1½″ × 15 m empotrar; 1½″ × 30 m empotrar; combinado manguera + extintor de 30 m |
| Evidencia | [Potter Roemer 1300](https://www.potterroemer.com/products/mechanical-fire-cabinets/fire-hose-rack-extinguisher-cabinet-1300) documenta montaje empotrado, semiempotrado y sobrepuesto, manguera de 1½″ y gabinete combinado. [Potter Roemer 1500](https://www.potterroemer.com/products/mechanical-fire-cabinets/hose-rack-valve-extinguisher-cabinet-1500) documenta 50 y 100 pies, equivalentes comerciales aproximados de 15 y 30 m. |
| Normas aplicables | NFPA 14 como referencia de ingeniería de redes de columna y manguera; el proyecto final depende de memoria hidráulica y autoridad competente. |
| Vocabulario | sobreponer, empotrar, rack, válvula angular, chiflón/boquilla, 1½ pulgadas, red hidráulica |
| Riesgos | No afirmar que una longitud o gabinete sirve para cualquier inmueble; presión, caudal, conexión y gabinete se especifican como sistema. |

## `senalizacion-fotoluminiscente`

| Campo | Expediente |
|---|---|
| Familia | `senalizacion-fotoluminiscente` |
| Eje de variación | Función del mensaje y color de seguridad |
| Presentaciones verificadas | ruta de evacuación; salida de emergencia; ubicación de extintor; ubicación de hidrante; punto de reunión; primeros auxilios |
| Evidencia | La [NOM-003-SEGOB-2011 en SIDOF](https://sidof.segob.gob.mx/notas/docFuente/5226545) clasifica señales, permite fotoluminiscencia y establece rojo para equipo contra incendio y verde para condición segura/primeros auxilios. Un [procedimiento oficial de Protección Civil CDMX](https://poderjudicialcdmx.gob.mx/proteccion_civil/ruta-de-evacuacion/) muestra rutas, salidas, reunión y ubicación de extintor. |
| Normas aplicables | NOM-003-SEGOB-2011 y NOM-026-STPS-2008. |
| Vocabulario | fotoluminiscente, distancia de observación, pictograma, contraste, condición segura, equipo contra incendio |
| Riesgos | No fijar tamaño sin distancia de observación; no usar verde para identificar extintor o hidrante; no decir que todo vinil genérico cumple. |

## `soportes-accesorios-extintor`

| Campo | Expediente |
|---|---|
| Familia | `soportes-accesorios-extintor` |
| Eje de variación | Montaje y entorno |
| Presentaciones verificadas | gancho de pared; abrazadera de pared; soporte vehicular/marino; soporte vehicular de caja reforzada; gabinete sobrepuesto; gabinete empotrado |
| Evidencia | [Amerex brackets](https://www.amerex-fire.com/products/fire-extinguishers/fire-extinguisher-brackets/) y su [catálogo](https://amerex-fire.com/upl/downloads/content-blocks/product-catalog-5.pdf) distinguen wall-hanger, wall strap, vehicle/marine/aviation, caja reforzada y correa de hule. [Potter Roemer 1700](https://www.potterroemer.com/products/mechanical-fire-cabinets/fire-extinguisher-cabinet-1700-series) documenta gabinetes empotrados, semiempotrados y sobrepuestos. |
| Normas aplicables | NOM-002-STPS-2010 para ubicación visible, acceso y protección ambiental; compatibilidad según fabricante del extintor. |
| Vocabulario | gancho, abrazadera, correa, caja reforzada, gabinete, empotrado, sobrepuesto, diámetro del cilindro |
| Riesgos | No vender soporte universal sin comprobar cilindro, masa y patrón de montaje; un soporte vehicular requiere retención frente a vibración. |

## Deuda de imágenes

Todas las variantes heredan por ahora el SVG de su familia. Faltan fotografías propias o autorizadas, sin marca ajena, para 37 presentaciones publicadas. Prioridad: una toma por capacidad de extintor, una por modalidad de detector, montajes realistas de gabinete y señalización instalada a distancia legible.

## Backlog fuera de alcance

- Landings `/productos/<categoria>` con texto y enlaces canónicos por categoría.
- `ProductGroup/hasVariant` cuando cada variante tenga identificador, URL, marca/modelo y disponibilidad verificables.
- Sustitución progresiva de SVG por fotografía real AVIF.
- Revisión de nuevas capacidades Clase K disponibles en México; la excepción se elimina únicamente con evidencia comercial verificable.

## Resumen final del contenido

| Familia | Variantes | Estado |
|---|---:|---|
| PQS ABC | 6 | Cumple |
| CO₂ | 5 | Cumple |
| Clase K | 3 | Excepción documentada |
| Detección | 6 | Cumple |
| Gabinetes y mangueras | 5 | Cumple |
| Señalización | 6 | Cumple |
| Soportes y gabinetes de extintor | 6 | Cumple |

**Total:** 37 variantes verificadas en 7 familias; 5/5 categorías con producto.
