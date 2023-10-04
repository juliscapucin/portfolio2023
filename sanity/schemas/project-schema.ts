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
      { name: 'gridSize', title: 'Grid Size', type: 'number' },
      { name: 'thumbnailSize', title: 'Thumbnail Size', type: 'number' },
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
         name: 'category',
         title: 'Category',
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

export default projectSchema;
