'use client';

import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { animateProjectsMenu } from '@/animations';
import { work, playground, archive } from '@/constants';

import ProjectCard from './ProjectCard';
import GridDiv from './GridDiv';

interface ProjectItems {
 label: string;
 slug: string;
 id: string;
 coverImage: string;
}

interface ProjectsMenu {
 links: ProjectItems[];
}

interface ProjectsMenuProps {
 activeBreakpoint: string | undefined;
}

export default function ProjectsMenu({ activeBreakpoint }: ProjectsMenuProps) {
 const [projectItems, setProjectItems] = useState<ProjectItems[]>([
  ...work.links,
  ...playground.links,
  ...archive.links,
 ]);

 const projectsImgsRef = useRef(null);
 const projectsLinksRef = useRef(null);
 const allProjects = [...work.links, ...playground.links, ...archive.links];

 const filterProjects = (filter: ProjectItems[]) => {
  setProjectItems(filter);
 };

 useLayoutEffect(() => {
  if (projectsImgsRef.current && projectsLinksRef.current)
   animateProjectsMenu(projectsImgsRef.current, projectsLinksRef.current);
 }, [projectsImgsRef.current, projectsLinksRef.current]);

 return (
  <>
   <div className='flex justify-end gap-8 mt-16 mr-4 mb-4'>
    <button
     onClick={() => {
      filterProjects(allProjects);
     }}
    >
     All
    </button>
    <span>/</span>
    <button
     onClick={() => {
      filterProjects(work.links);
     }}
    >
     Recent
    </button>
    <span>/</span>
    <button
     onClick={() => {
      filterProjects(playground.links);
     }}
    >
     Playground
    </button>
    <span>/</span>
    <button
     onClick={() => {
      filterProjects(archive.links);
     }}
    >
     Archive
    </button>
   </div>
   <GridDiv
    divClass='grid grid-cols-12 grid-rows-6 w-full transition-all duration-500 ease-in-out'
    top={true}
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
         className='object-cover ml-1 bg-red-500'
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
  </>
 );
}
