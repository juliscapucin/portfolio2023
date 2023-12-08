'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

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
 const pathname = usePathname();
 const { previousPage, updatePreviousPage, pageRef } = usePageContext();

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 //  Enter page animation
 useLayoutEffect(() => {
  if (!pageRef || !pageRef.current || pathname !== '/') return;
  let ctx = gsap.context(() => {});

  if (!previousPage.includes('project')) {
   ctx.add(() => {
    animateToRight(pageRef.current);
   });
  }
  updatePreviousPage('home');

  return () => {
   ctx.revert();
  };
 }, [pathname]);

 return (
  <div ref={pageRef} className='page home-page main-page overflow-clip'>
   <GridDiv
    divClass='overflow-clip lg:h-screen custom-min-h-screen'
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
