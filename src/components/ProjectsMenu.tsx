'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

import { gsap } from 'gsap';

import { animateProjectsMenu } from '@/animations';
import { ProjectCard, GridDiv, ProjectsFilter } from '@/components';
import { Project } from '@/types';

interface ProjectsMenuProps {
 activeBreakpoint: string | undefined;
}

export default function ProjectsMenu({ activeBreakpoint }: ProjectsMenuProps) {
 const pathname = usePathname();

 const [allProjects, setAllProjects] = useState<Project[] | null>(null);
 const [projectItems, setProjectItems] = useState<Project[] | null>(null);

 // Fetch data
 useEffect(() => {
  const fetchAllProjects = async () => {
   const response = await fetch('/api/projects');
   const data = await response.json();
   setAllProjects(data);
   setProjectItems(data);
  };

  fetchAllProjects();
 }, []);

 // View options
 const [variant, setVariant] = useState<string>(
  pathname === '/' && activeBreakpoint === 'desktop' ? 'list' : 'image'
 );

 // List View Refs
 const projectsImgsRef = useRef(null);
 const projectsLinksRef = useRef(null);

 //  Filter Projects + Transitions
 const filterProjects = (filterString: string) => {
  if (!allProjects) return;

  const filteredProjects =
   filterString === 'all'
    ? allProjects
    : allProjects.filter((project: Project) => {
       return project.category.includes(filterString);
      });

  gsap.to('.filter-projects', {
   opacity: 0,
   duration: 0.5,
   onComplete: () => {
    setProjectItems(filteredProjects);
   },
  });
 };

 useEffect(() => {
  gsap.to('.filter-projects', {
   opacity: 1,
   duration: 0.5,
  });
 }, [projectItems]);

 //  Change view
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
 }, [projectsImgsRef.current, projectsLinksRef.current, variant, projectItems]);

 return (
  <section className='min-h-screen mb-32'>
   <ProjectsFilter
    {...{
     filterProjects,
     editVariant,
     variant,
    }}
   />

   {/* Projects */}
   {/* List View */}
   {variant === 'list' ? (
    <GridDiv
     divClass='list-view filter-projects grid grid-cols-12 w-full h-full overflow-hidden'
     top={true}
    >
     {/* Render left side images only on desktop */}
     {activeBreakpoint === 'desktop' && (
      <div
       className='col-span-4 aspect-square relative overflow-hidden'
       ref={projectsImgsRef}
      >
       {projectItems &&
        projectItems.map((img, index) => {
         if (!img.coverImage) return;
         return (
          <CldImage
           src={`portfolio2023/${img.coverImage.fileName}`}
           key={index}
           alt={img.coverImage.alt}
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
           scope={link.info.scope}
           slug={link.slug}
           id={link._id}
           coverImage={link.coverImage.fileName}
           alt={link.coverImage.alt}
           variant={variant}
          />
         </div>
        );
       })}
     </div>
    </GridDiv>
   ) : (
    // Image View
    <GridDiv divClass='image-view filter-projects grid lg:grid-cols-12 gap-32 w-full'>
     {projectItems &&
      projectItems.map((link, index) => {
       return (
        <div
         className={`w-3/4 lg:w-full ${
          index % 2 === 0 ? 'ml-auto mr-0' : 'ml-0 mr-auto'
         } lg:ml-auto lg:mr-auto ${
          activeBreakpoint === 'desktop'
           ? `col-span-${link.gridSize} grid grid-cols-${link.gridSize}`
           : ''
         }`}
         key={link._id}
        >
         {link.coverImage && link.title && link.slug && link.thumbnailSize && (
          <ProjectCard
           title={link.title}
           scope={link.info.scope}
           slug={link.slug}
           id={link._id}
           coverImage={link.coverImage.fileName}
           alt={link.coverImage.alt}
           variant={variant}
           thumbnailSize={link.thumbnailSize}
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
