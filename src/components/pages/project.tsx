'use client';

import { useRef, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { ProjectInfo, ProjectNext, ShallowPage } from '@/components';
import { breakpoints } from '@/constants';
import { useMediaQuery } from '@/hooks';
import { Project } from '@/types';

type Props = {
 project: Project;
};

export default function ProjectPage({ project }: Props) {
 const headerRef = useRef<HTMLHeadingElement | null>(null);
 const titleRef = useRef<HTMLHeadingElement | null>(null);
 const left = useRef<HTMLDivElement | null>(null);
 const right = useRef<HTMLDivElement | null>(null);

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 // Animate header on mount
 useEffect(() => {
  if (!project || !headerRef.current) return;

  gsap.set(headerRef.current, { opacity: 0 });

  gsap.to(headerRef.current, {
   opacity: 1,
   duration: 2,
  });
 }, [headerRef, project]);

 // Create ScrollTrigger for first section
 useEffect(() => {
  if (breakpoint !== 'desktop') return;
  gsap.registerPlugin(ScrollTrigger);

  const featuredImageHeight = right.current?.clientHeight;

  if (!project) return;

  ScrollTrigger.create({
   scroller: '.scroll-trigger',
   trigger: left.current,
   start: 'top top',
   end: `bottom ${featuredImageHeight}`,
   scrub: true,
   pin: right.current,
  });
 }, [left, right, project]);

 return project ? (
  <ShallowPage>
   {/* Project header */}
   <section className='relative w-full mt-32'>
    <h1
     ref={titleRef}
     className='text-displaySmall md:text-displayMedium lg:text-displayLarge mb-16'
    >
     {project?.title ? project.title : ''}
    </h1>
    <div ref={headerRef} className='md:grid grid-cols-12 opacity-0'>
     {/* Cover Image */}
     <div className={`col-span-6 relative block overflow-hidden aspect-square`}>
      <CldImage
       src={`portfolio2023/work/${project.slug}/${project.coverImage.fileName}`}
       alt={project.coverImage.alt}
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
       priority
      />
     </div>
     {/* Blank space */}
     <div className='col-span-1'></div>
     <div className='md:col-span-5'>
      {/* Description */}
      <div className='mb-16'>
       <p className='text-titleLarge md:text-headlineSmall mt-16 md:mt-0'>
        {project.description}
       </p>
      </div>
      {/* Project Info */}
      <ProjectInfo info={project.info} />
     </div>
    </div>
   </section>

   {/* Split screen 1 */}
   <section className='grid grid-cols-12 w-full gap-1 mb-32'>
    {/* Left */}
    <div
     ref={left}
     className='grid col-span-12 lg:col-span-7 relative gap-8 lg:gap-1 overflow-hidden'
    >
     <div className='w-full lg:aspect-square lg:pr-32'>
      {project.textContent.map((text) => {
       return <p key={text.children._key}>{text.children.text}</p>;
      })}
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
     ref={right}
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

   <section>
    {project.textContent.map((text) => {
     return <p key={text.children._key}>{text.children.text}</p>;
    })}
   </section>
   {/* Next Project */}
   {/* {allProjects && <ProjectNext projects={allProjects} project={project} />} */}
  </ShallowPage>
 ) : (
  <span>Loading...</span>
 );
}
