import { defineConfig } from 'sanity';
import schemas from './src/sanity/schemas';

export default defineConfig({
   title: 'Folio 2023',

   projectId: '7lsc74u2',
   dataset: 'production',
   apiVersion: '2022-09-29',
   basePath: '/admin',

   schema: { types: schemas },
});
