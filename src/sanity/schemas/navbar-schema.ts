const navlinkSchema = {
   name: 'navlink',
   title: 'Navigation Link',
   type: 'document',
   fields: [
      {
         name: 'label',
         type: 'string',
         title: 'Label',
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
         name: 'label',
         type: 'string',
         title: 'Label',
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
      { name: 'order', type: 'number', title: 'Order' },
      {
         name: 'items',
         type: 'array',
         title: 'Navigation items',
         of: [{ type: 'navigation' }],
      },
   ],
};

export default navbarSchema;
