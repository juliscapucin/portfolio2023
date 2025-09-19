const projectSchema = {
   name: 'project',
   title: 'Projects',
   type: 'document',
   fields: [
      {
         title: 'Release Date',
         name: 'releaseDate',
         type: 'date',
         validation: (Rule: any) => Rule.required(),
      },
      {
         name: 'title',
         title: 'Title (Required)',
         type: 'string',
         validation: (Rule: any) => Rule.required(),
      },
      {
         name: 'slug',
         title: 'Slug (Required)',
         type: 'slug',
         validation: (Rule: any) => Rule.required(),
      },
      {
         name: 'description',
         title: 'Description (Required)',
         type: 'text',
         validation: (Rule: any) => Rule.required(),
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
      {
         name: 'imageStart',
         title: 'Image Start (Required. Defines image position on projects image view)',
         type: 'string',
         options: {
            list: [
               { title: 'Start', value: '1' },
               { title: 'Center', value: '5' },
               { title: 'End', value: '9' },
            ],
            layout: 'dropdown',
         },
         validation: (Rule: any) => Rule.required(),
      },
      {
         name: 'images',
         title: 'Images',
         type: 'array',
         of: [{ type: 'string' }],
      },
      { name: 'isWeb', title: 'Is Web Project', type: 'boolean' },
      {
         name: 'category',
         title: 'Category (Required)',
         type: 'string',
         options: {
            list: [
               { title: 'Recent', value: 'recent' },
               { title: 'Playground', value: 'playground' },
               { title: 'Archive', value: 'archive' },
            ],
            layout: 'dropdown',
         },
         validation: (Rule: any) => Rule.required(),
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
