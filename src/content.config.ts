import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Un projet = un fichier Markdown par langue : src/content/projets/<fr|en>/<slug>.md
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    kind: z.string(),
    stack: z.array(z.string()),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    link: z.url().optional(),
    repo: z.url().optional(),
    // Le projet phare affiche ses étapes à côté d'une maquette de téléphone
    steps: z.array(z.object({ title: z.string(), text: z.string(), chips: z.array(z.string()) })).optional(),
    mockup: z.enum(['svenskacore']).optional(),
  }),
});

// Une ligne du parcours, dans les deux langues. draft: visible seulement en dev.
const parcours = defineCollection({
  loader: file('src/content/parcours.json'),
  schema: z.object({
    period: z.string(),
    title: z.object({ fr: z.string(), en: z.string() }),
    text: z.object({ fr: z.string(), en: z.string() }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projets, parcours };
