'use client';

import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTextReveal } from '@/hooks';
import SectionTitle from './SectionTitle';

const expertise = [
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
 const expertiseRef = useRef<HTMLDivElement | null>(null);
 const titleRef = useRef<HTMLHeadingElement | null>(null);

 useTextReveal(titleRef);

 useLayoutEffect(() => {
  if (!expertiseRef.current) return;

  const serviceItems: gsap.DOMTarget[] = gsap.utils.toArray('.service-wrapper');

  gsap.registerPlugin(ScrollTrigger);

  let ctx = gsap.context(() => {
   serviceItems.forEach((service) => {
    const tl = gsap.timeline({
     scrollTrigger: {
      trigger: service,
      start: 'top 80%',
      end: 'bottom 20%',
      // markers: true,
     },
    });

    tl.fromTo(
     service,
     { opacity: 0, x: 100 },
     { opacity: 1, x: 0, duration: 1 }
    );
   });
  });

  return () => ctx.revert();
 }, [expertiseRef]);

 return (
  <section
   ref={expertiseRef}
   className='w-full col-span-12 md:grid grid-cols-12'
  >
   <div className='col-span-12 overflow-clip'>
    <SectionTitle title='Expertise' />
   </div>
   {expertise &&
    expertise.map((service) => (
     <>
      <h3 className='col-start-6 col-span-7 text-displaySmall mt-64'>
       {service.title}
      </h3>
      <ul className='col-start-6 col-span-7 mt-8'>
       {service.items.map((item) => (
        <li
         key={item}
         className='service-wrapper mt-8 text-titleLarge font-light'
        >
         {item}
        </li>
       ))}
      </ul>
     </>
    ))}
  </section>
 );
}
