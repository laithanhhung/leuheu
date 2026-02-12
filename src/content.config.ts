import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const campaigns = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/campaigns" }),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        badge: z.string().optional(),
        description: z.array(z.string()),
        mainStat: z.string().optional(),
        secondaryStat: z.string().optional(),
        posterImage: z.string(),
        galleryImages: z.array(z.string()),
        isDark: z.boolean().default(false),
        order: z.number().default(0),
    }),
});

export const collections = { campaigns };
