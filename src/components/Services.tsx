'use client';

import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type ServicesProps = { services: string[] };

export default function Services({ services }: ServicesProps) {
 const servicesRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger); // register gsap plugin here to avoid bugs

  // Force a page reload when the window is resized
  const handleResize = () => {
   window.location.reload();
  };

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  // Remove event listener when the component unmounts
  return () => {
   window.removeEventListener('resize', handleResize);
  };
 }, []);

 //  Animate component on scroll
 useEffect(() => {
  if (!servicesRef || !servicesRef.current) return;

  const xDisplace =
   servicesRef.current.clientWidth > window.innerWidth
    ? servicesRef.current.clientWidth - window.innerWidth
    : 0;

  console.log('xDisplace', xDisplace);

  const tl = gsap.timeline({
   scrollTrigger: {
    trigger: servicesRef.current,
    start: 'bottom 90%', // when the bottom of the trigger hits 90% of the viewport
    end: 'bottom 30%',
    scrub: 0.3, // smooth scrubbing, takes .3 second to "catch up" to the scrollbar
   },
  });

  tl.to(servicesRef.current, {
   x: -xDisplace,
  });
 }, [servicesRef]);

 return (
  <section className='w-full py-96 flex flex-nowrap gap-8 justify-start items-center'>
   <div ref={servicesRef}>
    {services &&
     services.map((discipline, index) => {
      return (
       <span
        className='text-displaySmall lg:text-displayMedium whitespace-nowrap'
        key={index}
       >
        {index !== 0 && ' | '}
        {discipline}
       </span>
      );
     })}
   </div>
  </section>
 );
}
