import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import {
   mainDocuments,
   locations,
} from './src/sanity/lib/presentation/resolve';
import schemas from './src/sanity/schemas';

export default defineConfig({
   title: 'Folio 2023',
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
   basePath: '/admin',
   schema: {
      types: schemas,
   },
   plugins: [
      structureTool(),
      presentationTool({
         resolve: { locations, mainDocuments },
         previewUrl: {
            initial: '/',
            previewMode: {
               enable: '/api/draft-mode/enable',
            },
         },
      }),
   ],
});
