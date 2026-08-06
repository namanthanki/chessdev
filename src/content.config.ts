import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsSchema } from '@astrojs/starlight/schema';

export const topics = [
  'board-representation',
  'move-generation',
  'search',
  'evaluation',
  'endgames',
  'engines',
] as const;

const topicSchema = z.enum(topics);

const reviewMetadataSchema = z.object({
  pageType: z.literal('article'),
  summary: z.string().max(200),
  topic: topicSchema,
  authors: z.array(z.string()).min(1),
  reviewedBy: z.array(z.string()).min(1),
  verified: z.boolean().default(false),
  references: z.array(z.string()).default([]),
  lastUpdated: z.date(),
});

const sitePageSchema = z.object({
  pageType: z.enum(['page', 'topic']).default('page'),
  summary: z.string().max(200).optional(),
  topic: topicSchema.optional(),
  authors: z.array(z.string()).optional(),
  reviewedBy: z.array(z.string()).optional(),
  verified: z.boolean().optional(),
  references: z.array(z.string()).optional(),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: docsSchema({
    extend: z.union([reviewMetadataSchema, sitePageSchema]),
  }),
});

export const collections = { docs };
