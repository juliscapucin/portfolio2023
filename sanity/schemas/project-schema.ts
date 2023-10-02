const projectSchema = {
   name: 'project',
   title: 'Projects',
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
         options: {
            source: 'title',
            maxLength: 96,
         },
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
         name: 'images',
         title: 'Images',
         type: 'array',
         of: [{ type: 'image' }],
         options: {
            hotspot: true,
         },
      },
      {
         name: 'categories',
         title: 'Categories',
         type: 'array',
         of: [{ type: 'string' }],
         options: {
            layout: 'tags',
         },
      },
      {
         name: 'content',
         title: 'Content',
         type: 'array',
         of: [{ type: 'block' }],
      },
   ],
   preview: {
      select: {
         title: 'title',
         media: 'coverImage',
      },
   },
};

export default projectSchema;
