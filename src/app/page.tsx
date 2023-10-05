'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { breakpoints } from '@/constants';
import { usePageContext } from '@/context';
import { useMediaQuery } from '@/hooks';

import {
 GridDiv,
 ProjectsMenu,
 HeroDesktop,
 HeroMobile,
 Footer,
 Services,
} from '@/components';
import { animateToRight } from '@/animations';

type ServicesData = { services: string[] };

export default function Home() {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 const [servicesData, setServicesData] = useState<ServicesData | null>(null);

 //  Fetch data from api Route Handler (api/services)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/api/services');
   const data = await response.json();
   setServicesData(data);
  };

  fetchData();
 }, []);

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
   <GridDiv divClass='overflow-hidden min-h-screen' bottom={true}>
    {breakpoint === 'mobile' && <HeroMobile />}
    {breakpoint === 'desktop' && <HeroDesktop />}
   </GridDiv>

   {servicesData && <Services services={servicesData.services} />}

   <ProjectsMenu activeBreakpoint={breakpoint} />

   <Footer />
  </div>
 );
}
