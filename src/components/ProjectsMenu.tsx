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
 const [variant, setVariant] = useState<string>('image');
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

 const toggleVariant = () => {
  variant === 'list' ? setVariant('image') : setVariant('list');
 };

 useLayoutEffect(() => {
  if (projectsImgsRef.current && projectsLinksRef.current)
   animateProjectsMenu(projectsImgsRef.current, projectsLinksRef.current);
 }, [projectsImgsRef.current, projectsLinksRef.current]);

 return (
  <>
   {/* Filter Menu */}
   <div className='flex justify-between mt-16 mr-4 mb-4'>
    {/* View buttons */}
    <div className='flex gap-8'>
     <button
      onClick={() => {
       toggleVariant();
      }}
     >
      List View
     </button>
     <span>/</span>
     <button
      onClick={() => {
       toggleVariant();
      }}
     >
      Image View
     </button>
    </div>
    {/* Filter buttons */}
    <div className='flex gap-8'>
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
   </div>

   {/* Projects */}
   {/* List View */}
   {variant === 'list' ? (
    <GridDiv
     divClass='grid grid-cols-12 grid-rows-6 w-full'
     top={true}
     bottom={true}
     left={true}
    >
     {/* Render images only on desktop */}
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
          variant={variant}
         />
        </div>
       );
      })}
     </div>
    </GridDiv>
   ) : (
    // Image View
    <GridDiv divClass='flex no-wrap' top={true} bottom={true} left={true}>
     {projectItems.map((link, index) => {
      return (
       <div key={index}>
        <ProjectCard
         title={link.label}
         slug={link.slug}
         id={link.id}
         coverImage={link.coverImage}
         variant={variant}
        />
       </div>
      );
     })}
    </GridDiv>
   )}
  </>
 );
}
