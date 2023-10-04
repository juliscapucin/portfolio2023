const aboutSchema = {
   name: 'aboutPage',
   title: 'About Page',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string',
      },
      {
         name: 'slug',
         title: 'Slug',
         type: 'slug',
      },
      {
         name: 'description',
         title: 'Description',
         type: 'text',
      },
      {
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
      },
      { name: 'url', title: 'URL', type: 'url' },
      {
         name: 'content1',
         title: 'Content 1',
         type: 'array',
         of: [{ type: 'block' }],
      },
      {
         name: 'content2',
         title: 'Content 2',
         type: 'array',
         of: [{ type: 'block' }],
      },
      {
         name: 'services',
         title: 'Services',
         type: 'array',
         of: [{ type: 'string' }],
         options: {
            layout: 'tags',
         },
      },
   ],
   preview: {
      select: {
         title: 'title',
         media: 'coverImage',
      },
   },
};

export default aboutSchema;
