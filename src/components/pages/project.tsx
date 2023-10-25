'use client';

import { useRef, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';

import gsap from 'gsap';

import {
 ProjectInfo,
 ProjectNext,
 ProjectSplitScreen,
 ShallowPage,
} from '@/components';

import { Project } from '@/types';

type Props = {
 project: Project;
 allProjects: Project[];
};

export default function ProjectPage({ project, allProjects }: Props) {
 const headerRef = useRef<HTMLHeadingElement | null>(null);
 const titleRef = useRef<HTMLHeadingElement | null>(null);

 // Animate header on mount
 useEffect(() => {
  if (!project || !headerRef.current) return;

  gsap.set(headerRef.current, { opacity: 0 });

  gsap.to(headerRef.current, {
   opacity: 1,
   duration: 2,
  });
 }, [headerRef]);

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

   {/* Split Screen */}
   <ProjectSplitScreen project={project} />

   {/* Text Content */}
   <section className='grid grid-cols-12 my-64'>
    <div className='col-start-7 col-span-6'>
     {project.textContent2?.map((text) => {
      return <p key={text.children._key}>{text.children.text}</p>;
     })}
    </div>
   </section>
   {/* Next Project */}
   {allProjects && <ProjectNext projects={allProjects} project={project} />}
  </ShallowPage>
 ) : (
  <span>Loading...</span>
 );
}
