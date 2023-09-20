'use client';

import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { GridDiv } from '.';
import {
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';

interface Project {
 title?: string;
 slug: string;
 coverImage?: string;
}

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
   divClass={'flex justify-center items-center gap-32 py-32'}
   right={true}
   left={true}
   bottom={true}
  >
   {previousProject && (
    <>
     <button
      className='text-displaySmall cursor-pointer'
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
      Previous
     </button>
     <span ref={previousProjectTip} className='opacity-0'>
      {previousProject.title}
     </span>
    </>
   )}
   {nextProject && (
    <>
     <button
      className='text-displaySmall cursor-pointer'
      onClick={handleNextButton}
      onMouseEnter={() => {
       if (nextProjectTip.current) toggleOpacity(nextProjectTip.current);
      }}
      onMouseLeave={() => {
       if (nextProjectTip.current) toggleOpacity(nextProjectTip.current);
      }}
     >
      Next
     </button>
     <span ref={nextProjectTip} className='opacity-0'>
      {nextProject.title}
     </span>
    </>
   )}
  </GridDiv>
 );
}
