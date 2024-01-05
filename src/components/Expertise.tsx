'use client';

import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type ServicesProps = { services?: string[] };

const services = [
 {
  title: 'Branding & Design',
  items: [
   'UI & UX Design',
   'Art Direction',
   'Visual & Motion identity',
   'Photo Direction',
  ],
 },

 {
  title: 'Creative Tech',
  items: [
   'Front-End Development',
   'Prototyping',
   '3D & Motion',
   'Web Accessitility',
   'CMS integration',
  ],
 },
];

export default function Expertise() {
 const servicesRef = useRef<HTMLDivElement | null>(null);

 return (
  <section className='w-full col-span-12 md:grid grid-cols-12 mt-64'>
   <h2 className='col-span-6 text-displaySmall md:text-right mb-16'>
    Expertise
   </h2>
   <div className='col-start-8 col-span-4'>
    {services &&
     services.map((service) => (
      <div key={service.title} className='mb-16'>
       <h3 className='text-titleLarge mb-4'>{service.title}</h3>
       <ul>
        {service.items.map((item) => (
         <li key={item} className='text-bodyLarge font-light'>
          {item}
         </li>
        ))}
       </ul>
      </div>
     ))}
   </div>
  </section>
 );
}
