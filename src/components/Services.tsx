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
    ? servicesRef.current.clientWidth - window.innerWidth + 100
    : 0;

  const tl = gsap.timeline({
   scrollTrigger: {
    trigger: servicesRef.current,
    start: 'center 100%-=150px', // when the center of the trigger hits 100% - 150px of the viewport
    end: 'center 0%+=150px',
    scrub: 0.3, // smooth scrubbing, takes .3 second to "catch up" to the scrollbar
   },
  });

  tl.to(servicesRef.current, {
   x: -xDisplace,
  });
 }, [servicesRef]);

 return (
  <section className='w-full min-h-screen flex flex-nowrap gap-8 justify-start items-center'>
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
