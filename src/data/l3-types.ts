// ============================================================================
// src/data/l3-types.ts — Contrato de datos de una L3 de SERVICIO.
// ----------------------------------------------------------------------------
// PATRÓN L3 canónico (aprobado 2026-09-10, referencia /servicios/mantenimiento/).
// Toda L3 de servicio exporta UN objeto `ServiceL3Data` desde su
// src/data/<id>.ts y su página solo hace <ServiceL3 data={...} />. Así el orden
// de bloques, los fondos y el diseño de las fichas no se pueden desviar por
// copiar y pegar: hay una sola implementación (src/components/ServiceL3.astro).
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

export type Spec = { label: string; value: string };

export type Tarjeta = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  badge: string;
  description: string;
  specs: Spec[];
  ctaLabel: string;
};

/** Encabezado de sección (SectionHeading layout="duo" y equivalentes). */
export type Heading = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  desc: string;
  body: string[];
};

export type TableBlock = Heading & {
  id: string;
  columns: readonly string[];
  rows: string[][];
  note?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type RiskRow = { nivel: string; ejemplos: string; minimo: string; complementos: string };
export type NormRow = { norma: string; alcance: string; aplica: string };
export type Step = { num: string; title: string; desc: string };
export type GalleryImage = { src: string; alt: string };
export type Pillar = { icon: 'shield' | 'doc' | 'chat' | 'pin' | 'check' | 'clock'; title: string; desc: string };

export type Modulo = {
  id: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  features: { label: string; desc: string }[];
  /** CTA primario: cotizar por WhatsApp con este mensaje. */
  ctaLabel: string;
  ctaMsg: string;
  /** CTA secundario: página relacionada (anchor = keyword del destino). */
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  imgMain: GalleryImage;
  imgA: GalleryImage;
  imgB: GalleryImage;
};

export type ServiceL3Data = {
  /** id de la colección `servicios` (debe estar en L3_PROPIAS de [...slug]). */
  id: string;
  path: string;
  seo: {
    title: string;
    description: string;
    serviceName: string;
    serviceType: string;
    image: string;
  };
  /** Etiqueta de la L3 en las migas: Servicios › <breadcrumb>. */
  breadcrumb: string;
  /** Mensaje de WhatsApp de la página (Hero, SectionMenu y CompanyAbout). */
  wa: string;
  menuCtaSub: string;
  hero: {
    badge: string;
    title: string;
    accent: string;
    subtitle: string;
    descRight: string[];
    /** CTA outline del Hero: ancla a la vitrina. */
    outlineText: string;
  };
  pillars: Pillar[];
  vitrina: Heading & { id: string; tarjetas: Tarjeta[] };
  tablaPrincipal: TableBlock;
  guia: Heading & {
    columns: [string, string, string, string];
    rows: RiskRow[];
    note?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  tabla2: TableBlock;
  modulos: Modulo[];
  decision: TableBlock;
  proceso: Heading & { steps: Step[] };
  normas: Heading & { columns: [string, string, string]; rows: NormRow[]; note?: string };
  empresa: Heading & {
    que: { title: string; body: string[] };
    como: { title: string; pillars: { title: string; desc: string }[] };
  };
  related: { title: string; desc: string; links: { label: string; href: string; desc: string }[] };
  faq: Omit<Heading, 'title'> & { items: { question: string; answer: string }[] };
};
