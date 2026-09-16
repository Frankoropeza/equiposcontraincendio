// ============================================================================
// src/data/l3-types.ts — Contrato de datos de una L3 de servicio o producto.
// ----------------------------------------------------------------------------
// PATRÓN L3 canónico (aprobado 2026-09-10, referencia /servicios/mantenimiento/).
// Toda L3 de servicio o producto guarda UN objeto `ServiceL3Data` como frontmatter
// de src/content/l3/<seccion>/<id>.md (colección `l3`, validada por
// l3-schema.ts; Fase 2, 2026-09-17) —o, mientras no se migre, en src/data/<id>.ts—
// y su página solo hace <ServiceL3 data={...} />. Así el orden
// de bloques, los fondos y el diseño de las fichas no se pueden desviar por
// copiar y pegar: hay una sola implementación (src/components/ServiceL3.astro).
// Las L3 de producto usan el mismo tipo con `seccion` y `categoriaProductos`.
//
// Secuencia que pinta el componente (no se reordena por página):
//   Hero → SectionMenu → TrustBar → vitrina (8 fichas con 3 specs) →
//   tabla principal (surface) → guía RiskGuide → tabla 2 (surface) →
//   módulos CategoryFeature → tabla de decisión (surface) → ProcessSteps →
//   NormsTable → «por qué con nosotros» + CompanyAbout → RelatedLinks (8) →
//   FAQWithContact
//
// Contratos de longitud (medir en navegador, el conteo no basta):
//   ficha: title ≤ 40 · description ≤ ~85 · spec.label ≤ 14 · spec.value ≤ 18 ·
//   ctaLabel ≤ 24 (keyword del destino) · exactamente 3 specs · total múltiplo de 4
//   módulo: 4 features, label ≤ 27, desc ≤ 78
// ============================================================================

import type { z } from 'astro/zod';
import { galleryImageSchema, headingSchema, moduloSchema, normRowSchema, riskRowSchema, serviceL3Schema, specSchema, stepSchema, tableBlockSchema, tarjetaSchema } from './l3-schema';

export type Spec = z.infer<typeof specSchema>;
export type Tarjeta = z.infer<typeof tarjetaSchema>;
export type Heading = z.infer<typeof headingSchema>;
export type TableBlock = z.infer<typeof tableBlockSchema>;
export type RiskRow = z.infer<typeof riskRowSchema>;
export type NormRow = z.infer<typeof normRowSchema>;
export type Step = z.infer<typeof stepSchema>;
export type GalleryImage = z.infer<typeof galleryImageSchema>;
export type Modulo = z.infer<typeof moduloSchema>;
export type ServiceL3Data = z.infer<typeof serviceL3Schema>;
