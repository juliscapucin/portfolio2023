const connectSchema = {
   name: 'connect',
   title: 'Connect',
   type: 'document',
   fields: [
      {
         name: 'availability',
         title: 'Availability',
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
         media: 'coverImage',
      },
   },
};

export default connectSchema;
