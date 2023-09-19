'use client';

import Image from 'next/image';
import { createRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { CustomImage, ShallowPage } from '@/components';
import { work, playground, archive } from '@/constants';

export default function Page({ params }: { params: { slug: string } }) {
 const title = createRef<HTMLHeadingElement>();
 const left = createRef<HTMLDivElement>();
 const right = createRef<HTMLDivElement>();
 const left2 = createRef<HTMLDivElement>();
 const right2 = createRef<HTMLDivElement>();

 useEffect(() => {
  ScrollTrigger.create({
   scroller: '.scroll-trigger',
   trigger: left.current,
   start: 'top top',
   end: 'bottom bottom',
   scrub: true,
   pin: right.current,
  });
 }, [left, right]);

 useEffect(() => {
  ScrollTrigger.create({
   scroller: '.scroll-trigger',
   trigger: right2.current,
   start: 'top top',
   end: 'bottom bottom',
   scrub: true,
   pin: left2.current,
  });
 }, [left2, right2]);

 const allProjects = [...work.links, ...playground.links, ...archive.links];
 const slug = params.slug;

 const project = allProjects.find((project) => project.slug.includes(slug));

 if (!project) return <div>404</div>;

 return (
  <ShallowPage>
   {/* Project header */}
   <section className='relative w-full mb-1'>
    <h1 className='text-displayLarge'>{project?.title ? project.title : ''}</h1>
    <div className='grid grid-cols-12 mb-16'>
     <p className='text-headlineSmall col-span-6'>{project.subtitle}</p>
    </div>
    <div className={`relative block h-screen w-full overflow-hidden`}>
     <Image
      src={project.coverImage}
      alt='photo'
      className='h-full w-full object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
      priority
     />
    </div>
   </section>
   {/* Split screen */}
   <section className='grid grid-cols-12 gap-1 w-full'>
    {/* Left */}
    <div ref={left} className='col-span-7 relative grid gap-1'>
     <p className='h-[500px] pr-32 flex items-center'>{project.content}</p>
     <div className='h-[600px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage}
       alt='photo'
       className='w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
     <div className='h-[600px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage}
       alt='photo'
       className='h-32 w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
     <div className='h-[600px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage}
       alt='photo'
       className='h-32 w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
    </div>

    {/* Right */}
    <div ref={right} className='col-span-5 h-[500px]'>
     <Image
      src={project.coverImage}
      alt='photo'
      className='w-full object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     />
    </div>
   </section>

   {/* Disciplines */}
   <section className='w-full p-32 flex gap-8 justify-center items-center'>
    {project.disciplines.map((discipline, index) => {
     return (
      <span className='text-displaySmall'>
       {index !== 0 && ' | '}
       {discipline}
      </span>
     );
    })}
   </section>

   <section className='grid grid-cols-12 w-full relative gap-1'>
    {/* Left 2 */}
    <div ref={left2} className='col-span-5 h-[500px]'>
     <Image
      src={project.coverImage}
      alt='photo'
      className='w-full object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     />
    </div>

    {/* Right 2 */}
    <div ref={right2} className='col-span-7 relative grid gap-1'>
     <div className='h-[600px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage}
       alt='photo'
       className='w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
     <div className='h-[600px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage}
       alt='photo'
       className='h-32 w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
     <div className='h-[600px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage}
       alt='photo'
       className='h-32 w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
    </div>
   </section>
  </ShallowPage>
 );
}
