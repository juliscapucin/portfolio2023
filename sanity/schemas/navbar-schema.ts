const navbarSchema = {
   name: 'navigation',
   title: 'Navigation Links',
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
         name: 'slug',
         title: 'Slug',
         type: 'slug',
      },
      {
         name: 'items',
         type: 'array',
         title: 'Navigation items',
         of: [{ type: 'navigation' }],
      },
   ],
};

export default navbarSchema;
