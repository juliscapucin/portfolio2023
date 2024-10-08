const servicesSchema = {
   name: 'services',
   title: 'Services',
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
      },
   },
};

export default servicesSchema;
