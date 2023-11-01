'use client';

import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { GridDiv } from '@/components/ui';
import {
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';
import { Project } from '@/types';

interface ProjectNextProps {
 projects: Project[];
 project: Project;
}

export default function ProjectNext({ projects, project }: ProjectNextProps) {
 const pathname = usePathname();
 const router = useRouter();
 const nextProjectTip = useRef<HTMLSpanElement>(null);
 const previousProjectTip = useRef<HTMLSpanElement>(null);

 const actualProjectIndex = projects.findIndex(
  (item: Project, index: number) => item.slug === project.slug
 );
 const nextProject = projects[actualProjectIndex + 1];
 const previousProject = projects[actualProjectIndex - 1];

 const handleNextButton = () => {
  const editedSlug = nextProject.slug.split('/').pop();
  animateToLeftTransition('shallow-page', () => router.push(nextProject.slug));
 };
 const handlePreviousButton = () => {
  const editedSlug = previousProject.slug.split('/').pop();
  if (!editedSlug) return;
  animateToRightTransition('shallow-page', () => router.push(editedSlug));
 };

 const toggleOpacity = (div: HTMLElement) => {
  div.classList.toggle('opacity-0');
 };

 return (
  <GridDiv
   divClass={'flex justify-center items-center gap-16 lg:gap-32 py-32 w-full'}
   top={true}
  >
   {previousProject && (
    <>
     <button
      className='relative cursor-pointer'
      onClick={handlePreviousButton}
      onMouseEnter={() => {
       if (previousProjectTip.current)
        toggleOpacity(previousProjectTip.current);
      }}
      onMouseLeave={() => {
       if (previousProjectTip.current)
        toggleOpacity(previousProjectTip.current);
      }}
     >
      <span
       ref={previousProjectTip}
       className='absolute left-0 translate-x-full block px-8 bg-secondary text-primary opacity-0 transition-opacity duration-300'
      >
       {previousProject.title}
      </span>
      <span className='text-titleLarge lg:text-displaySmall'>Previous</span>
     </button>
    </>
   )}
   {nextProject && (
    <>
     <button
      className='relative cursor-pointer'
      onClick={handleNextButton}
      onMouseEnter={() => {
       if (nextProjectTip.current) toggleOpacity(nextProjectTip.current);
      }}
      onMouseLeave={() => {
       if (nextProjectTip.current) toggleOpacity(nextProjectTip.current);
      }}
     >
      <span
       ref={nextProjectTip}
       className='absolute right-0 translate-x-full block px-8 bg-secondary text-primary opacity-0 transition-opacity duration-300'
      >
       {nextProject.title}
      </span>
      <span className='text-titleLarge lg:text-displaySmall'>Next</span>
     </button>
    </>
   )}
  </GridDiv>
 );
}
