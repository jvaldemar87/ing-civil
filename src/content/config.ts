import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        client: z.string(),
        period: z.string(),
        location: z.string(),
        role: z.string(),
        category: z.enum(['hydraulic', 'railroad', 'roads', 'buildings', 'advisory']),
        metrics: z.object({
            budget: z.string().optional(),
            length: z.string().optional(),
            volume: z.string().optional(),
            workers: z.number().optional(),
            concrete: z.string().optional(),
        }).optional(),
        featured: z.boolean().default(false),
        image: z.string().optional(),
        order: z.number().default(0),
    }),
});

export const collections = {
    projects: projectsCollection,
};
