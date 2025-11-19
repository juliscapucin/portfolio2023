import { defineField, defineType } from 'sanity';

const servicesSchema = defineType({
   name: 'services',
   title: 'Services',
   type: 'document',
   fields: [
      defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
      }),
      defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
      }),
      defineField({
         name: 'description',
         title: 'Description',
         type: 'text',
      }),
      defineField({
         name: 'services',
         title: 'Services',
         type: 'array',
         of: [{ type: 'string' }],
         options: {
            layout: 'tags',
         },
      }),
   ],
   preview: {
      select: {
         title: 'title',
      },
   },
});

export default servicesSchema;
