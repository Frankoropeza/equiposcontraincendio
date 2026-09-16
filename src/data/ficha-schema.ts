import { z } from 'astro:content';
import type { z as Zod } from 'astro/zod';

const headBodySchema = z.tuple([z.string(), z.string()]);
const pillarSchema = z.object({ icon: z.enum(['shield', 'doc', 'chat', 'pin', 'check', 'clock']), title: z.string(), desc: z.string() }).strict();

export const fichaSchema = z.object({
  heroBadge: z.string(), heroTitle: z.string(), heroAccent: z.string().optional(), descRight: headBodySchema,
  pillars: z.array(pillarSchema), norma: z.string(), claves: z.array(z.object({ label: z.string(), value: z.string() }).strict()),
  guia: z.object({ title: z.string(), titleAccent: z.string(), desc: z.string() }).strict(),
  showcaseTitle: z.string(), showcaseAccent: z.string().optional(), showcaseDesc: z.string().optional(), faqAccent: z.string(),
}).strict();

export const fichaHeadsSchema = z.object({
  vitrina: headBodySchema, presentaciones: headBodySchema, comparativa: headBodySchema, guia: headBodySchema,
  giros: headBodySchema, relacionados: headBodySchema, faq: headBodySchema,
}).partial().strict();

export type HeadBody = Zod.infer<typeof headBodySchema>;
export type FichaHeads = Zod.infer<typeof fichaHeadsSchema>;
export type Pillar = Zod.infer<typeof pillarSchema>;
export type FichaData = Zod.infer<typeof fichaSchema>;
