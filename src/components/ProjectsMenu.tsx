'use client';

import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import { gsap } from 'gsap';

import { animateProjectsMenu } from '@/animations';
import { work, playground, archive } from '@/constants';
import { useFetch, useWindowDimensions } from '@/hooks';
import { SectionTitle } from '@/components';

import ProjectCard from './ProjectCard';
import GridDiv from './GridDiv';
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

 const [data, setData] = useState(null);

 const allProjects = [...work.links, ...playground.links, ...archive.links];
 const [projectItems, setProjectItems] = useState<ProjectItems[]>(
  allProjects || []
 );

 // Fetch data
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/api/work');
   const data = await response.json();
   setData(data);
  };

  fetchData();
 }, []);

 // View options
 const [variant, setVariant] = useState<string>(
  pathname === '/' ? 'list' : 'image'
 );

 // List View Refs
 const projectsImgsRef = useRef(null);
 const projectsLinksRef = useRef(null);

 //  Transitions
 const filterProjects = (filter: ProjectItems[]) => {
  gsap.to('.filter-projects', {
   opacity: 0,
   duration: 0.5,
   onComplete: () => {
    setProjectItems(filter);
   },
  });
 };

 useEffect(() => {
  gsap.to('.filter-projects', {
   opacity: 1,
   duration: 0.5,
  });
 }, [projectItems]);

 const editVariant = () => {
  if (variant === 'list') {
   gsap.to('.list-view', {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
     setVariant('image');
    },
   });
  } else {
   gsap.to('.image-view', {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
     setVariant('list');
    },
   });
  }
 };

 useEffect(() => {
  if (variant === 'list') {
   gsap.to('.list-view', {
    opacity: 1,
    duration: 0.5,
   });
  } else {
   gsap.to('.image-view', {
    opacity: 1,
    duration: 0.5,
   });
  }
 }, [variant]);

 // Restart list view animation on resize, filter or variant change
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
    {...{
     filterProjects,
     editVariant,
     allProjects,
     variant,
     work,
     playground,
     archive,
    }}
   />

   {/* Projects */}
   {/* List View */}
   {variant === 'list' ? (
    <GridDiv
     divClass='list-view filter-projects grid grid-cols-12 w-full h-full overflow-hidden'
     top={true}
     bottom={true}
    >
     {/* Render images only on desktop */}
     {activeBreakpoint === 'desktop' && (
      <div
       className='col-span-4 aspect-square relative overflow-hidden'
       ref={projectsImgsRef}
      >
       {projectItems &&
        projectItems.map((img, index) => {
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
      {projectItems &&
       projectItems.map((link, index) => {
        if (!link.coverImage || !link.title || !link.slug) return;
        return (
         <div key={index}>
          <ProjectCard
           title={link.title}
           slug={link.slug}
           id={link.id}
           coverImage={link.coverImage}
           variant={variant}
           // setIsHovering={setIsHovering}
          />
         </div>
        );
       })}
     </div>
    </GridDiv>
   ) : (
    // Image View
    <GridDiv divClass='image-view filter-projects grid lg:grid-cols-12 gap-32 w-full'>
     {projectItems.map((link, index) => {
      return (
       <div
        className={`w-3/4 lg:w-full ${
         index % 2 === 0 ? 'ml-auto mr-0' : 'ml-0 mr-auto'
        } lg:ml-auto lg:mr-auto ${
         activeBreakpoint === 'desktop' ? `col-span-${link.thumbnailSize}` : ''
        }`}
        key={index}
       >
        {link.coverImage && link.title && link.slug && (
         <ProjectCard
          title={link.title}
          slug={link.slug}
          id={link.id}
          coverImage={link.coverImage}
          variant={variant}
          // setIsHovering={setIsHovering}
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
