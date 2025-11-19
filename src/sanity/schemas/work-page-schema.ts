import { defineField, defineType } from 'sanity';

const workPageSchema = defineType({
   name: 'workPage',
   title: 'Work Page',
   type: 'document',
   fields: [
      defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
      }),
      defineField({
         name: 'description',
         title: 'Description',
         type: 'text',
      }),
      defineField({ name: 'slug', title: 'Slug', type: 'slug' }),
   ],
});

export default workPageSchema;
