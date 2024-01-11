'use client';

import { Fragment, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTextReveal } from '@/hooks';
import SectionTitle from './SectionTitle';
import { GridDiv } from './ui';

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
      start: 'top 100%',
      end: 'bottom 20%',
      // markers: true,
      toggleActions: 'play none none reverse',
     },
    });

    tl.fromTo(
     service,
     { yPercent: 100 },
     { yPercent: -50, duration: 0.3, ease: 'back.out(1)' }
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
     <Fragment key={service.title}>
      <h3 className='col-start-6 col-span-7 text-displaySmall mt-64'>
       {service.title}
      </h3>
      <ul className='col-start-6 col-span-7 mt-8'>
       {service.items.map((item) => (
        <div key={item} className='mt-8 h-16 overflow-clip'>
         <div className='service-wrapper'>
          <GridDiv bottom={true}>
           <li className='text-titleLarge font-light'>{item}</li>
           <li className='text-titleLarge font-light'>{item}</li>
          </GridDiv>
         </div>
        </div>
       ))}
      </ul>
     </Fragment>
    ))}
  </section>
 );
}
