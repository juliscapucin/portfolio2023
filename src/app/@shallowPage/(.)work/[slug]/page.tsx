'use client';

import Image from 'next/image';
import { createRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { ProjectDisciplines, ProjectNext, ShallowPage } from '@/components';
import { Project } from '@/types';

export default function Page({ params }: { params: { slug: string } }) {
 const [allProjects, setAllProjects] = useState<Project[] | null>(null);
 const [project, setProject] = useState<Project | null>(null);
 const titleRef = createRef<HTMLHeadingElement>();
 const left = createRef<HTMLDivElement>();
 const right = createRef<HTMLDivElement>();
 const left2 = createRef<HTMLDivElement>();
 const right2 = createRef<HTMLDivElement>();

 // Create ScrollTrigger for first section
 useEffect(() => {
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

 // Create ScrollTrigger for second section
 useEffect(() => {
  if (!project) return;

  const featuredImageHeight = left2.current?.clientHeight;

  ScrollTrigger.create({
   scroller: '.scroll-trigger',
   trigger: right2.current,
   start: 'top top',
   end: `bottom ${featuredImageHeight}`,
   scrub: true,
   pin: left2.current,
  });
 }, [left2, right2, project]);

 // Fetch project + all projects data
 useEffect(() => {
  const slug = params.slug;

  const fetchProjectData = async () => {
   const response = await fetch(`/api/work/${slug}`);
   const data = await response.json();
   setProject(data);
  };

  const fetchAllProjectsData = async () => {
   const response = await fetch(`/api/projects`);
   const data = await response.json();
   setAllProjects(data);
  };

  fetchProjectData();
  fetchAllProjectsData();
 }, []);

 return project ? (
  <ShallowPage>
   {/* Project header */}
   <section className='relative w-full mt-32 mb-1'>
    <h1
     ref={titleRef}
     className='text-displaySmall md:text-displayMedium lg:text-displayLarge mb-16'
    >
     {project?.title ? project.title : ''}
    </h1>
    <div className='grid grid-cols-12'>
     {/* Cover Image */}
     <div className={`col-span-5 relative block overflow-hidden aspect-square`}>
      <Image
       src={project.coverImage.asset.url}
       alt='photo'
       className='h-full w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
       priority
      />
     </div>
     {/* Blank space */}
     <div className='col-span-1'></div>
     <div className='md:col-span-8 lg:col-span-6'>
      {/* Description */}
      <div className='mb-16'>
       <p className='text-headlineSmall'>{project.description}</p>
      </div>
      {/* Project Info */}
      <ProjectDisciplines disciplines={project.disciplines} />
     </div>
    </div>
    {/* <div
     className={`relative block h-[100vw] lg:h-screen w-full overflow-hidden`}
    >
     <Image
      src={project.coverImage.asset.url}
      alt='photo'
      className='h-full w-full object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
      priority
     />
    </div> */}
   </section>
   {/* Split screen */}
   <section className='grid grid-cols-12 w-full gap-1'>
    {/* Left */}
    <div
     ref={left}
     className='col-span-6 lg:col-span-7 relative grid gap-1 overflow-hidden'
    >
     <p className='lg:h-[500px] pr-32 flex items-center'>{project.content}</p>
     <div className='h-[50vw] lg:h-[700px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage.asset.url}
       alt='photo'
       className='w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
     <div className='h-[50vw] lg:h-[700px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage.asset.url}
       alt='photo'
       className='w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
     <div className='h-[50vw] lg:h-[700px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage.asset.url}
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
     className='col-span-6 lg:col-span-5 h-[50vw] lg:h-[500px] relative'
    >
     <Image
      src={project.coverImage.asset.url}
      alt='photo'
      className='w-full object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     />
    </div>
   </section>

   <section className='grid grid-cols-12 w-full relative gap-1'>
    {/* Left 2 */}
    <div ref={left2} className='col-span-5 h-[500px]'>
     <Image
      src={project.coverImage.asset.url}
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
       src={project.coverImage.asset.url}
       alt='photo'
       className='w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
     <div className='h-[600px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage.asset.url}
       alt='photo'
       className='h-32 w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
     <div className='h-[600px] w-full overflow-hidden relative'>
      <Image
       src={project.coverImage.asset.url}
       alt='photo'
       className='h-32 w-full object-cover'
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
    </div>
   </section>
   {/* Next Project */}
   {allProjects && <ProjectNext projects={allProjects} project={project} />}
  </ShallowPage>
 ) : (
  <span>Loading...</span>
 );
}
