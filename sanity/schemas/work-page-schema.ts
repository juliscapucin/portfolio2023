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
   ],
};

export default workPageSchema;
