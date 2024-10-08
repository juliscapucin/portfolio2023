const workPageSchema = {
   name: 'workPage',
   title: 'Work Page',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string',
      },
      {
         name: 'description',
         title: 'Description',
         type: 'text',
      },
      { name: 'slug', title: 'Slug', type: 'slug' },
   ],
};

export default workPageSchema;
