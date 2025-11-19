import { defineField, defineType } from 'sanity';

const connectSchema = defineType({
   name: 'connect',
   title: 'Connect',
   type: 'document',
   fields: [
      defineField({
         name: 'availability',
         title: 'Availability',
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
         media: 'coverImage',
      },
   },
});

export default connectSchema;
