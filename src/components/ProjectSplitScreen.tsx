'use client';

import { useRef, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { breakpoints } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { Project } from '@/types';

export default function ProjectSplitScreen({ project }: { project: Project }) {
 const leftColumnRef = useRef<HTMLDivElement | null>(null);
 const rightColumnRef = useRef<HTMLDivElement | null>(null);

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 // Create ScrollTrigger for desktop
 useEffect(() => {
  if (breakpoint !== 'desktop' || !leftColumnRef || !rightColumnRef) return;

  gsap.registerPlugin(ScrollTrigger);

  const featuredImageHeight = rightColumnRef.current?.clientHeight;

  ScrollTrigger.create({
   scroller: '.scroll-trigger',
   trigger: leftColumnRef.current,
   start: 'top top',
   end: `bottom ${featuredImageHeight}`,
   scrub: true,
   pin: rightColumnRef.current,
  });
 }, [leftColumnRef, rightColumnRef, breakpoint]);

 return (
  <section className='grid grid-cols-12 w-full gap-1 mb-32'>
   {/* Left */}
   <div
    ref={leftColumnRef}
    className='grid col-span-12 lg:col-span-7 relative gap-8 lg:gap-1 overflow-hidden'
   >
    {/* Project text */}
    <div className='w-full my-64 lg:pr-32'>
     {project.textContent1?.map((text) => {
      return <p key={text.children._key}>{text.children.text}</p>;
     })}
    </div>
    {/* Left Column Images */}
    <div className='w-full aspect-square overflow-hidden relative'>
     {/* <CldImage
      src={`portfolio2023/work/${project.slug}/02`}
      alt='photo'
      className='absolute w-full object-cover z-50'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     /> */}
     <CldImage
      src={`portfolio2023/work/bg-ipad-landscape`}
      alt='photo'
      className='w-full object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     />
    </div>
    <div className='w-full aspect-square overflow-hidden relative'>
     <CldImage
      src={`portfolio2023/work/bg-ipad-landscape`}
      alt='photo'
      className='w-full object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     />
    </div>
    <div className='w-full aspect-square overflow-hidden relative'>
     <CldImage
      src={`portfolio2023/work/bg-ipad-landscape`}
      alt='photo'
      className='w-full object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     />
    </div>
   </div>

   {/* Right */}
   <div
    ref={rightColumnRef}
    className='hidden lg:block col-span-12 lg:col-span-5 h-[50vw] lg:h-[500px] relative'
   >
    <CldImage
     src={`portfolio2023/work/bg-ipad-landscape`}
     alt='photo'
     className='w-full object-cover'
     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
     fill
    />
   </div>
  </section>
 );
}
