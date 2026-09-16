import { z } from 'astro:content';

export const specSchema = z.object({ label: z.string(), value: z.string() }).strict();
export const tarjetaSchema = z.object({ title: z.string(), href: z.string(), image: z.string(), imageAlt: z.string(), badge: z.string(), description: z.string(), specs: z.array(specSchema), ctaLabel: z.string() }).strict();
/** Encabezado de sección (SectionHeading layout="duo" y equivalentes). */
export const headingSchema = z.object({ eyebrow: z.string(), title: z.string(), titleAccent: z.string(), desc: z.string(), body: z.array(z.string()) }).strict();
export const tableBlockSchema = headingSchema.extend({ id: z.string(), columns: z.readonly(z.array(z.string())), rows: z.array(z.array(z.string())), note: z.string().optional(), ctaLabel: z.string().optional(), ctaHref: z.string().optional() }).strict();
export const riskRowSchema = z.object({ nivel: z.string(), ejemplos: z.string(), minimo: z.string(), complementos: z.string() }).strict();
export const normRowSchema = z.object({ norma: z.string(), alcance: z.string(), aplica: z.string() }).strict();
export const stepSchema = z.object({ num: z.string(), title: z.string(), desc: z.string() }).strict();
export const galleryImageSchema = z.object({ src: z.string(), alt: z.string() }).strict();
export const pillarSchema = z.object({ icon: z.enum(['shield', 'doc', 'chat', 'pin', 'check', 'clock']), title: z.string(), desc: z.string() }).strict();
export const moduloSchema = z.object({ id: z.string(), eyebrow: z.string(), title: z.string(), titleAccent: z.string(), description: z.string(), features: z.array(z.object({ label: z.string(), desc: z.string() }).strict()), ctaLabel: z.string(), ctaMsg: z.string(), ctaSecondaryLabel: z.string(), ctaSecondaryHref: z.string(), imgMain: galleryImageSchema, imgA: galleryImageSchema, imgB: galleryImageSchema }).strict();
export const serviceL3Schema = z.object({
  kind: z.literal('service').default('service'),
  id: z.string(), path: z.string(), seccion: z.object({ label: z.string(), href: z.string() }).strict().optional(), categoriaProductos: z.string().optional(),
  seo: z.object({ title: z.string(), description: z.string(), serviceName: z.string(), serviceType: z.string(), image: z.string() }).strict(), breadcrumb: z.string(), wa: z.string(), menuCtaSub: z.string(),
  hero: z.object({ badge: z.string(), title: z.string(), accent: z.string(), subtitle: z.string(), descRight: z.array(z.string()), outlineText: z.string() }).strict(), pillars: z.array(pillarSchema),
  vitrina: headingSchema.extend({ id: z.string(), tarjetas: z.array(tarjetaSchema) }).strict(), tablaPrincipal: tableBlockSchema,
  guia: headingSchema.extend({ columns: z.tuple([z.string(), z.string(), z.string(), z.string()]), rows: z.array(riskRowSchema), note: z.string().optional(), ctaLabel: z.string().optional(), ctaHref: z.string().optional() }).strict(),
  tabla2: tableBlockSchema, modulos: z.array(moduloSchema), decision: tableBlockSchema, proceso: headingSchema.extend({ steps: z.array(stepSchema) }).strict(),
  normas: headingSchema.extend({ columns: z.tuple([z.string(), z.string(), z.string()]), rows: z.array(normRowSchema), note: z.string().optional() }).strict(),
  empresa: headingSchema.extend({ que: z.object({ title: z.string(), body: z.array(z.string()) }).strict(), como: z.object({ title: z.string(), pillars: z.array(z.object({ title: z.string(), desc: z.string() }).strict()) }).strict() }).strict(),
  related: z.object({ title: z.string(), desc: z.string(), links: z.array(z.object({ label: z.string(), href: z.string(), desc: z.string() }).strict()) }).strict(),
  faq: z.object({ eyebrow: z.string(), titleAccent: z.string(), desc: z.string(), body: z.array(z.string()), items: z.array(z.object({ question: z.string(), answer: z.string() }).strict()) }).strict(),
}).strict();

const extintoresFichaSchema = z.object({ badge: z.string(), blurb: z.string(), ctaLabel: z.string(), image: z.string().optional(), imageAlt: z.string().optional() }).strict();
const extintoresFeatureSchema = z.object({
  id: z.string(), eyebrow: z.string(), title: z.string(), titleAccent: z.string(), description: z.string(),
  features: z.array(z.object({ label: z.string(), desc: z.string() }).strict()), ctaLabel: z.string(), ctaHref: z.string(),
  ctaSecondaryLabel: z.string(), ctaMsg: z.string(), imgMain: galleryImageSchema, imgA: galleryImageSchema, imgB: galleryImageSchema,
}).strict();
const faqItemSchema = z.object({ question: z.string(), answer: z.string() }).strict();

export const extintoresL3Schema = z.object({
  kind: z.literal('extintores'),
  hero: z.object({ badge: z.string(), subtitle: z.string(), descRight: z.tuple([z.string(), z.string()]) }).strict(),
  pillars: z.array(pillarSchema),
  fichas: z.record(z.string(), extintoresFichaSchema),
  features: z.array(extintoresFeatureSchema), clases: z.array(riskRowSchema), normRows: z.array(normRowSchema), steps: z.array(stepSchema),
  company: z.object({
    que: z.object({ title: z.string(), body: z.array(z.string()) }).strict(),
    como: z.object({ title: z.string(), pillars: z.array(z.object({ title: z.string(), desc: z.string() }).strict()) }).strict(),
  }).strict(),
  related: z.array(z.object({ label: z.string(), href: z.string(), desc: z.string() }).strict()),
  faqs: z.array(faqItemSchema), tarjetas: z.array(tarjetaSchema),
}).strict();
