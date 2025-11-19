import { defineField, defineType } from 'sanity';

const aboutSchema = defineType({
   name: 'aboutPage',
   title: 'About Page',
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
         name: 'coverImage',
         title: 'Cover Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         fields: [
            {
               name: 'alt',
               type: 'string',
               title: 'Alternative text',
               description: 'Important for SEO and accessiblity.',
            },
         ],
      }),
      defineField({ name: 'url', title: 'URL', type: 'url' }),
      defineField({
         name: 'content1',
         title: 'Content 1',
         type: 'array',
         of: [{ type: 'block' }],
      }),
      defineField({
         name: 'content2',
         title: 'Content 2',
         type: 'array',
         of: [{ type: 'block' }],
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

export default aboutSchema;
