const projectSchema = {
   name: 'project',
   title: 'Projects',
   type: 'document',
   fields: [
      {
         title: 'Release Date',
         name: 'releaseDate',
         type: 'date',
      },
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
         type: 'document',
         fields: [
            {
               name: 'fileName',
               type: 'string',
               title: 'File Name',
            },
            {
               name: 'alt',
               type: 'string',
               title: 'Alt text',
            },
         ],
      },
      { name: 'url', title: 'URL', type: 'url' },
      { name: 'gridSize', title: 'Grid Size', type: 'string' },
      { name: 'imageStart', title: 'Image Start', type: 'string' },
      { name: 'imageSize', title: 'Image Size', type: 'string' },
      {
         name: 'images',
         title: 'Images',
         type: 'array',
         of: [{ type: 'string' }],
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
         name: 'info',
         title: 'Info',
         type: 'array',
         of: [
            {
               type: 'document',
               fields: [
                  {
                     name: 'scope',
                     type: 'string',
                     title: 'Scope',
                  },
                  {
                     name: 'tech',
                     type: 'string',
                     title: 'Technology',
                  },
                  {
                     name: 'link',
                     type: 'string',
                     title: 'Link',
                  },
               ],
            },
         ],
      },
   ],
   orderings: [
      {
         title: 'Release Date, New',
         name: 'releaseDateDesc',
         by: [{ field: 'releaseDate', direction: 'desc' }],
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
