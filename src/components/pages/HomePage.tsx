'use client';

import { useEffect } from 'react';

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
import { animateToRight } from '@/animations';
import { Project } from '@/types';

export default function HomePage({ allProjects }: { allProjects: Project[] }) {
 const { previousPage, updatePreviousPage } = usePageContext();

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 //  Enter page animation
 useEffect(() => {
  if (previousPage.includes('work') || previousPage.includes('about')) {
   animateToRight(`home-page`);
  }
  updatePreviousPage('home');
 }, []);

 return (
  <div className='page home-page main-page overflow-hidden'>
   <GridDiv divClass='overflow-hidden min-h-screen' bottom={true}>
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
