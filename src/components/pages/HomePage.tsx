'use client';

import { useLayoutEffect, useRef } from 'react';

import { breakpoints } from '@/constants';
import { usePageContext } from '@/context';
import { useMediaQuery } from '@/hooks';

import {
 AboutText,
 ProjectsMenu,
 HeroDesktop,
 HeroMobile,
 Footer,
 SectionTitle,
} from '@/components';
import { GridDiv } from '@/components/ui';
import { animateToRight, ctx } from '@/animations';
import { Project } from '@/types';

export default function HomePage({ allProjects }: { allProjects: Project[] }) {
 const { previousPage, updatePreviousPage } = usePageContext();
 const pageRef = useRef(null);

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 //  Enter page animation
 useLayoutEffect(() => {
  if (!pageRef.current) return;

  if (!previousPage.includes('project-home')) {
   animateToRight(pageRef.current);
  }
  updatePreviousPage('home');

  return () => {
   ctx.revert();
  };
 }, [pageRef]);

 return (
  <div ref={pageRef} className='page home-page main-page overflow-hidden'>
   <GridDiv
    divClass='overflow-hidden h-screen min-h-screen'
    bottom={breakpoint === 'desktop' && true}
   >
    {breakpoint === 'mobile' && <HeroMobile />}
    {breakpoint === 'desktop' && <HeroDesktop />}
   </GridDiv>

   <AboutText />

   <SectionTitle title='Work' />
   <ProjectsMenu
    startVariant={breakpoint === 'desktop' ? 'list' : 'image'}
    activeBreakpoint={breakpoint}
    allProjects={allProjects}
    startCategory='recent'
   />

   <Footer />
  </div>
 );
}
