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
 activeBreakpoint: string | undefined;
}

export default function ProjectsMenu({
 projectItems,
 activeBreakpoint,
}: ProjectsMenuProps) {
 const projectsImgsRef = useRef(null);
 const projectsLinksRef = useRef(null);

 useLayoutEffect(() => {
  if (projectsImgsRef.current && projectsLinksRef.current)
   animateProjectsMenu(projectsImgsRef.current, projectsLinksRef.current);

  return () => {};
 }, []);

 return (
  <GridDiv
   divClass='grid grid-cols-12 grid-rows-6 w-full'
   bottom={true}
   left={true}
  >
   {activeBreakpoint === 'desktop' && (
    <div className='col-span-4 row-span-4 relative' ref={projectsImgsRef}>
     {projectItems.map((img, index) => {
      return (
       <Image
        src={img.coverImage}
        key={index}
        //   placeholder='blur'
        alt='photo'
        className='object-cover ml-1'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
        fill
       />
      );
     })}
    </div>
   )}
   <div
    className={`col-span-${activeBreakpoint === 'mobile' ? 3 : 2} row-span-6`}
   ></div>
   <div
    className={`col-span-${activeBreakpoint === 'mobile' ? 9 : 6} row-span-6`}
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
