import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['photo', 'illustration', 'video', 'design', 'other']),
    date: z.date(),
    cover: z.string(),
    images: z.array(z.string()),
    excerpt: z.string().optional(),
    featured: z.boolean(),
    draft: z.boolean(),
  }),
});

export const collections = { projects };
