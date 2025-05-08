import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './src/sanity/schemas';

export default defineConfig({
   title: 'Folio 2023',

   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
   basePath: '/admin',

   schema: { types: schemas },
   releases: {
      enabled: false,
   },
   plugins: [structureTool()],
});
