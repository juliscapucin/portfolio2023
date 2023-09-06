'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { projects, playground, archive } from '@/constants';
import { usePageContext } from '@/context';
import { useMediaQuery } from '@/hooks';

import {
 GridDiv,
 SectionTitle,
 ProjectsMenu,
 HeroDesktop,
 HeroMobile,
 Footer,
} from '@/components';
import { animateToRight } from '@/animations';

export default function Home() {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();

 const breakpoint = useMediaQuery(1200);

 useEffect(() => {
  if (pathname === '/' && previousPage !== 'shallow-page') {
   document.documentElement.classList.remove('overflow-hidden');
   animateToRight(`home-page`);
  }
  if (previousPage === 'shallow-page') {
   document.documentElement.classList.remove('overflow-hidden');
  }
 }, [pathname]);

 // Track previous page for animations
 useEffect(() => {
  updatePreviousPage('home');
 }, []);

 return (
  <div className='home-page main-page overflow-hidden'>
   <GridDiv divClass='overflow-hidden' right={true} bottom={true}>
    {breakpoint === 'mobile' && <HeroMobile />}
    {breakpoint === 'desktop' && <HeroDesktop />}
   </GridDiv>

   <div className='h-64'>
    <SectionTitle title='Work' />
   </div>

   {/* Work */}
   <section className='grid'>
    <ProjectsMenu
     projectItems={[...projects.links, ...playground.links, ...archive.links]}
     activeBreakpoint={breakpoint}
    />
   </section>

   <Footer />
  </div>
 );
}
