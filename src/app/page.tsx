'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { projects, playground, archive } from '@/constants';
import { usePageContext } from '@/context';
import {
 GridDiv,
 SectionTitle,
 ProjectsMenu,
 Hero,
 Footer,
} from '@/components';
import { animateToRight } from '@/animations';

export default function Home() {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();

 useEffect(() => {
  if (pathname === '/' && previousPage !== 'shallow-page') {
   document.documentElement.classList.remove('overflow-hidden');
   animateToRight(`home-page`);
  }
  if (previousPage === 'shallow-page') {
   document.documentElement.classList.remove('overflow-hidden');
  }
 }, [pathname]);

 useEffect(() => {
  updatePreviousPage('home');
 }, []);

 return (
  <div className='home-page main-page overflow-hidden'>
   <GridDiv divClass='overflow-hidden' right={true} bottom={true}>
    <Hero />
   </GridDiv>

   <div className='h-64'>
    <SectionTitle title='Work' />
   </div>

   {/* Work */}
   <section className='grid'>
    <ProjectsMenu
     projectItems={[...projects.links, ...playground.links, ...archive.links]}
    />
   </section>

   <Footer />
  </div>
 );
}
