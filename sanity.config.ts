import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
import { deskStructure } from './sanity/lib/deskStructure';

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
  ],
  schema: {
    types: schemaTypes,
  },
});
