import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
import { deskStructure } from './sanity/lib/deskStructure';
import { presentationTool } from 'sanity/presentation';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';

export default defineConfig({
  name: 'default',
  title: 'Next.js Sanity Demo',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ac2gfv99',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    internationalizedArray({
      languages: [
        { id: 'en', title: 'English' },
        { id: 'uk', title: 'Ukrainian' },
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'coloredText', 'text'],
    }),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: '/',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
