'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { breakpoints } from '@/constants';
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

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 //  Toggle scroll on main page + page animation
 useEffect(() => {
  if (pathname === '/') {
   document.documentElement.classList.remove('overflow-hidden');

   if (previousPage !== 'shallow-page') animateToRight(`home-page`);
  }
 }, [pathname]);

 // Track previous page for animations
 useEffect(() => {
  updatePreviousPage('home');
 }, []);

 return (
  <div className='home-page main-page overflow-hidden'>
   <GridDiv divClass='overflow-hidden min-h-screen' right={true} bottom={true}>
    {breakpoint === 'mobile' && <HeroMobile />}
    {breakpoint === 'desktop' && <HeroDesktop />}
   </GridDiv>

   <SectionTitle title='Work' />

   {/* Work */}
   <section className='grid'>
    <ProjectsMenu activeBreakpoint={breakpoint} />
   </section>

   <Footer />
  </div>
 );
}
