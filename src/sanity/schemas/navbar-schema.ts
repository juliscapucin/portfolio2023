import { defineField, defineType } from 'sanity';

const navlinkSchema = defineType({
   name: 'navlink',
   title: 'Navigation Link',
   type: 'document',
   fields: [
      defineField({
         name: 'label',
         type: 'string',
         title: 'Label',
      }),
      defineField({
         name: 'url',
         title: 'URL',
         type: 'url',
      }),
      defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
      }),
      defineField({
         name: 'items',
         type: 'array',
         title: 'Navigation items',
         of: [{ type: 'navigation' }],
      }),
   ],
});

const navbarSchema = defineType({
   name: 'navigation',
   title: 'Navigation Links',
   type: 'document',
   fields: [
      defineField({
         name: 'title',
         type: 'string',
         title: 'Title',
      }),
      defineField({
         name: 'label',
         type: 'string',
         title: 'Label',
      }),
      defineField({
         name: 'url',
         title: 'URL',
         type: 'url',
      }),
      defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
      }),
      defineField({ name: 'order', type: 'number', title: 'Order' }),
      defineField({
         name: 'items',
         type: 'array',
         title: 'Navigation items',
         of: [{ type: 'navigation' }],
      }),
   ],
});

export default navbarSchema;
