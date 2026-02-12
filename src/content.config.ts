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

const sections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/sections" }),
    schema: z.object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        badge: z.string().optional(),
        stats: z.array(z.object({
            label: z.string(),
            value: z.string()
        })).optional(),
        // Allow flexible fields for different section types
        extraData: z.record(z.any()).optional(),
        // Footer specific
        contacts: z.array(z.object({
            type: z.string(),
            value: z.string(),
            icon: z.string().optional() // Make icon optional string to map in component
        })).optional()
    })
});

const services = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
    schema: z.object({
        title: z.string(),
        image: z.string(),
        order: z.number().default(0),
    })
});

const partners = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/partners" }),
    schema: z.object({
        name: z.string(),
        logo: z.string(),
        order: z.number().default(0),
    })
});

export const collections = { campaigns, sections, services, partners };
