'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { breakpoints } from '@/constants';
import { usePageContext } from '@/context';
import { useMediaQuery, useTextResize } from '@/hooks';

import {
 AboutText,
 ProjectsMenu,
 HeroDesktop,
 HeroMobile,
 Footer,
 Services,
 SectionTitle,
} from '@/components';
import { GridDiv } from '@/components/ui';
import { animateToRight } from '@/animations';
import { Project } from '@/types';

type ServicesData = { services: string[] };

export default function HomePage({ allProjects }: { allProjects: Project[] }) {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);
 const [servicesData, setServicesData] = useState<ServicesData | null>(null);

 const numberRef = useRef(null);
 const numberDesktopRef = useRef(null);
 const numberMobileRef = useRef(null);
 useTextResize(numberRef.current);

 //  Fetch data from api Route Handler (api/services)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/api/services');
   const data = await response.json();
   setServicesData(data);
  };

  fetchData();
 }, []);

 //  Enter page animation
 useEffect(() => {
  if (pathname === '/') {
   if (previousPage.includes('work') || previousPage.includes('about')) {
    animateToRight(`home-page`);
   }
   updatePreviousPage('home');
  }
 }, [pathname]);

 return (
  <div className='page home-page main-page overflow-hidden'>
   <GridDiv divClass='overflow-hidden min-h-screen' bottom={true}>
    {breakpoint === 'mobile' && <HeroMobile ref={numberRef} />}
    {breakpoint === 'desktop' && <HeroDesktop ref={numberRef} />}
   </GridDiv>

   <AboutText />

   {/* {servicesData && <Services services={servicesData.services} />} */}

   <SectionTitle title='Work' />
   <ProjectsMenu
    startVariant={breakpoint === 'desktop' ? 'list' : 'image'}
    activeBreakpoint={breakpoint}
    allProjects={allProjects}
   />

   <Footer />
  </div>
 );
}
