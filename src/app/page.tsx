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
 SectionTitle,
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

 //  Enter page animation
 useEffect(() => {
  if (pathname === '/') {
   if (previousPage == 'work' || previousPage == 'about')
    animateToRight(`home-page`);
  }
 }, [pathname]);

 // Track previous page for animations
 useEffect(() => {
  updatePreviousPage('home');
 }, []);

 return (
  <div className='page home-page main-page overflow-hidden'>
   <GridDiv divClass='overflow-hidden min-h-screen' bottom={true}>
    {breakpoint === 'mobile' && <HeroMobile />}
    {breakpoint === 'desktop' && <HeroDesktop />}
   </GridDiv>

   <p className='mt-16 mx-4 text-headlineMedium'>
    I’m a Front-End Developer with a broad background in Graphic and Digital
    Design. Since 2000 I've been designing meaningful, memorable, and
    communicative work for companies and professionals worldwide. Commitment to
    visual excellence and engineering performance is part of my DNA.
   </p>

   {servicesData && <Services services={servicesData.services} />}

   <SectionTitle title='Work' />
   <ProjectsMenu activeBreakpoint={breakpoint} />

   <Footer />
  </div>
 );
}
