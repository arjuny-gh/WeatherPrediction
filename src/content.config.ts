import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Files whose names start with "_" are ignored (use them as templates).
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Marks a sample post so a "replace me" banner is shown. */
    sample: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tech: z.array(z.string()).default([]),
      image: image().optional(),
      github: z.url().optional(),
      demo: z.url().optional(),
      lessons: z.string().optional(),
      featured: z.boolean().default(false),
      /** Marks placeholder content so a "Sample" badge is shown. */
      placeholder: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Physics', 'Astronomy', 'Computational Science', 'Mathematics', 'Artificial Intelligence']),
    status: z.enum(['Planning', 'In progress', 'Completed']).default('In progress'),
    question: z.string(),
    abstract: z.string().optional(),
    methodology: z.string().optional(),
    results: z.string().optional(),
    future: z.string().optional(),
    github: z.url().optional(),
    paper: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

const achievements = defineCollection({
  loader: file('src/content/data/achievements.yaml'),
  schema: z.object({
    date: z.string(),
    category: z.enum([
      'Academic competitions',
      'Science and engineering',
      'Mathematics',
      'Swimming',
      'Leadership and community',
      'Other activities',
    ]),
    organization: z.string(),
    title: z.string(),
    verification: z.url().optional(),
  }),
});

const swimming = defineCollection({
  loader: file('src/content/data/swimming.yaml'),
  schema: z.object({
    event: z.string(),
    course: z.enum(['SCY', 'SCM', 'LCM']).default('SCY'),
    time: z.string().nullable().default(null),
    date: z.string().nullable().default(null),
  }),
});

const milestones = defineCollection({
  loader: file('src/content/data/milestones.yaml'),
  schema: z.object({
    date: z.string(),
    text: z.string(),
  }),
});

export const collections = { blog, projects, research, achievements, swimming, milestones };
