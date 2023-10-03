import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from '../sanity/schemas';

export default defineConfig({
   title: 'Folio 2023',

   projectId: '7lsc74u2',
   dataset: 'production',
   apiVersion: '2022-09-29',
   basePath: '/admin',

   plugins: [deskTool(), visionTool()],

   schema: { types: schemas },
});
