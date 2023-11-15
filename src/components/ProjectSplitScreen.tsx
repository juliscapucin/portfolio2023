'use client';

import { useRef, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { breakpoints } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { Project } from '@/types';
import ProjectImage from './ProjectImage';
import { ProjectSlideshow } from '.';

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
  <section className='lg:grid grid-cols-12 w-full gap-1'>
   {/* Left */}
   <div
    ref={leftColumnRef}
    className='lg:col-span-7 relative gap-8 lg:gap-1 overflow-hidden'
   >
    {/* Text content 1 */}
    <div className='grid grid-cols-7'>
     <div className='lg:col-start-2 col-span-6 lg:col-span-5 aspect-square flex flex-col justify-center'>
      {project.textContent1?.map((text) => {
       return <p key={text.children._key}>{text.children.text}</p>;
      })}
     </div>
    </div>

    {/* Left Column Images */}
    {project.images?.map((image, index) => {
     return (
      <ProjectImage
       key={`${project.slug}-${index}}`}
       projectSlug={project.slug}
       image={image}
      />
     );
    })}
   </div>

   {/* Right Column Image */}
   <div
    ref={rightColumnRef}
    className='hidden lg:block col-span-12 lg:col-span-5 aspect-square relative'
   >
    <ProjectSlideshow
     projectImages={project.images}
     projectSlug={project.slug}
    />
   </div>
  </section>
 );
}
