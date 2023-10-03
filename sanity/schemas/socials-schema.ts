const socialsSchema = {
   name: 'navigation',
   title: 'Navigation',
   type: 'document',
   fields: [
      {
         name: 'title',
         type: 'string',
         title: 'Title',
      },
      {
         name: 'url',
         title: 'URL',
         type: 'url',
      },
      {
         name: 'items',
         type: 'array',
         title: 'Navigation items',
         of: [{ type: 'navigation' }],
      },
   ],
};

export default socialsSchema;
