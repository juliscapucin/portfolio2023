'use client';

import { useRef, useEffect } from 'react';

import { CldImage } from 'next-cloudinary';
import gsap from 'gsap';

import {
 ProjectInfo,
 ProjectSplitScreen,
 ProjectsMenuThumbs,
} from '@/components';

import { ShallowPage } from '@/components/pages';

import { Project } from '@/types';

type Props = {
 project: Project;
 allProjects: Project[];
 isShallow: boolean;
};

export default function ProjectPage({
 project,
 allProjects,
 isShallow,
}: Props) {
 const headerRef = useRef<HTMLHeadingElement | null>(null);

 // Animate header children on mount
 useEffect(() => {
  if (!headerRef.current) return;
  const children = headerRef.current.children;
  gsap.from(children, {
   opacity: 0,
   yPercent: 30,
   stagger: 0.05,
   ease: 'expo.out',
   duration: 0.2,
   delay: 0.3,
  });
 }, [headerRef]);

 return project ? (
  <ShallowPage isShallow={isShallow}>
   <ProjectsMenuThumbs allProjects={allProjects} />
   {/* Project header */}
   <section className='relative w-full mt-32'>
    {/* Title */}
    <h1 className='text-displaySmall md:text-displayMedium lg:text-displayLarge mb-4'>
     {project.title}
    </h1>

    <div ref={headerRef} className='md:grid grid-cols-12'>
     {/* Cover Image */}
     <div className={`col-span-6 block overflow-hidden aspect-square relative`}>
      <CldImage
       src={`portfolio2023/work/${project.slug}/01`}
       alt={project.coverImage.alt}
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
       priority
      />
     </div>
     <div className='md:col-span-5 md:pl-16 mt-8'>
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
  </ShallowPage>
 ) : (
  <span>Loading...</span>
 );
}
