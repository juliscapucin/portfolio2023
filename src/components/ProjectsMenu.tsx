'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import { animateProjectsMenu } from '@/animations';
import { work, playground, archive } from '@/constants';
import { useWindowDimensions } from '@/hooks';

import ProjectCard from './ProjectCard';
import GridDiv from './GridDiv';
import { SectionTitle } from '.';
import ProjectsFilter from './ProjectsFilter';

interface ProjectItems {
 title?: string;
 slug?: string;
 id: string;
 coverImage?: string;
 thumbnailSize?: string;
}

interface ProjectsMenu {
 links: ProjectItems[];
}

interface ProjectsMenuProps {
 activeBreakpoint: string | undefined;
}

export default function ProjectsMenu({ activeBreakpoint }: ProjectsMenuProps) {
 const pathname = usePathname();
 const { width, height } = useWindowDimensions();
 const [variant, setVariant] = useState<string>(
  pathname === '/' ? 'list' : 'image'
 );
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
 }, [
  projectsImgsRef.current,
  projectsLinksRef.current,
  variant,
  projectItems,
  width,
  height,
 ]);

 return (
  <section className='min-h-screen'>
   {pathname === '/' && <SectionTitle title='Work' />}
   <ProjectsFilter
    work={work}
    playground={playground}
    archive={archive}
    {...{ filterProjects, toggleVariant, allProjects }}
   />

   {/* Projects */}
   {/* List View */}
   {variant === 'list' ? (
    <GridDiv
     divClass='grid grid-cols-12 w-full h-full overflow-hidden'
     top={true}
     right={true}
     bottom={true}
     left={true}
    >
     {/* Render images only on desktop */}
     {activeBreakpoint === 'desktop' && (
      <div className='col-span-4 aspect-square relative' ref={projectsImgsRef}>
       {projectItems.map((img, index) => {
        if (!img.coverImage) return;
        return (
         <Image
          src={img.coverImage}
          key={index}
          //   placeholder='blur'
          alt='photo'
          className='object-cover'
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
       if (!link.coverImage) return;
       return (
        <div key={index}>
         <ProjectCard
          title={link.title}
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
    <GridDiv divClass='grid lg:grid-cols-12 gap-1 w-full'>
     {projectItems.map((link) => {
      return (
       <div className={`col-span-${link.thumbnailSize}`} key={link.id}>
        {link.coverImage && (
         <ProjectCard
          title={link.title}
          slug={link.slug}
          id={link.id}
          coverImage={link.coverImage}
          variant={variant}
         />
        )}
       </div>
      );
     })}
    </GridDiv>
   )}
  </section>
 );
}
