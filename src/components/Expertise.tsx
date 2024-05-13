'use client';

import { Fragment } from 'react';

import { SectionTitle, ExpertiseItem } from '@/components';

const expertises = [
 {
  title: 'Branding & Design',
  items: ['UI & UX Design', 'Art Direction', 'Photo Direction'],
 },

 {
  title: 'Creative Tech',
  items: [
   'Front-End Development',
   'Motion',
   'Web Accessibility',
   'CMS integration',
  ],
 },
];

export default function Expertise() {
 return (
  <section className='w-full col-span-12 md:grid grid-cols-12'>
   <div className='col-span-12 overflow-clip'>
    <SectionTitle title='What I do' />
   </div>
   {expertises &&
    expertises.map((expertise) => (
     <Fragment key={expertise.title}>
      <h3 className='col-start-6 col-span-7 text-headlineLarge sm:text-displaySmall mt-64'>
       {expertise.title}
      </h3>
      <ul className='col-start-6 col-span-7 mt-16 sm:mt-8'>
       {expertise.items.map((item) => (
        <ExpertiseItem key={item} expertise={item} />
       ))}
      </ul>
     </Fragment>
    ))}
  </section>
 );
}
