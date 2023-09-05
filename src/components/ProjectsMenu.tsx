'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

import ProjectCard from './ProjectCard';
import GridDiv from './GridDiv';

import { animateProjectsMenu } from '@/animations';

interface ProjectItems {
 label: string;
 slug: string;
 id: string;
 coverImage: string;
}

interface ProjectsMenuProps {
 projectItems: ProjectItems[];
}

export default function ProjectsMenu({ projectItems }: ProjectsMenuProps) {
 const projectsImgsRef = useRef(null);
 const projectsLinksRef = useRef(null);

 useLayoutEffect(() => {
  if (projectsImgsRef.current && projectsLinksRef.current)
   animateProjectsMenu(projectsImgsRef.current, projectsLinksRef.current);

  return () => {};
 }, []);

 return (
  <GridDiv divClass='grid grid-cols-12 grid-rows-6' bottom={true} left={true}>
   <div
    className='col-span-4 row-span-4 overflow-hidden relative'
    ref={projectsImgsRef}
   >
    {projectItems.map((img, index) => {
     return (
      <Image
       src={img.coverImage}
       key={index}
       //   placeholder='blur'
       alt='photo'
       className='object-cover ml-1'
       sizes='100vw'
       fill
      />
     );
    })}
   </div>
   <div className='col-span-2 row-span-4'></div>
   <div
    className='col-span-6 row-span-6 overflow-hidden'
    ref={projectsLinksRef}
   >
    {projectItems.map((link, index) => {
     return (
      <div key={index}>
       <ProjectCard
        title={link.label}
        slug={link.slug}
        id={link.id}
        coverImage={link.coverImage}
       />
      </div>
     );
    })}
   </div>
  </GridDiv>
 );
}
