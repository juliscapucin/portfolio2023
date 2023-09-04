'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { projects, playground, navLinks } from '@/constants';
import { usePageContext } from '@/context';
import { GridElement, ProjectCard, SectionTitle } from '@/components';
import { animateToRight, animateToLeft } from '@/animations';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

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
   <Hero />

   {/* Latest Work */}

   <section className='grid'>
    {/* <div className='flex h-64'>
     <GridElement
      top={false}
      right={true}
      bottom={true}
      left={true}
      hoverClass='bg-green-700'
     />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement
      textClass={'text-huge font-bold uppercase'}
      text='hello'
      top={false}
      right={true}
      bottom={true}
      left={false}
     />
    </div>
    <div className='flex h-32'>
     <GridElement top={false} right={true} bottom={true} left={true} />
     <GridElement top={false} right={true} bottom={true} left={false} />
    </div>
    <div className='flex h-32'>
     <GridElement top={false} right={true} bottom={true} left={true} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
    </div>
    <div className='flex h-64'>
     <GridElement top={false} right={true} bottom={true} left={true} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
    </div> */}
    <div className='h-64'>
     <SectionTitle title='Latest Work' />
    </div>
    {projects.links.map((link, index) => {
     return (
      <div key={index}>
       <ProjectCard
        title={link.label}
        slug={link.slug}
        id={link.id}
        coverImage={link.coverImage}
       />
      </div>
     );
    })}
   </section>

   {/* Playground */}

   <section>
    <div className='h-64'>
     <SectionTitle title={playground.title} />
    </div>
    {playground.links.map((link, index) => {
     return (
      <div key={index}>
       <ProjectCard
        title={link.label}
        slug={link.slug}
        id={link.id}
        coverImage={link.coverImage}
       />
      </div>
     );
    })}

    <div className='h-32 flex'>
     <GridElement
      top={false}
      right={true}
      bottom={true}
      left={true}
      divClass='basis-3/4'
     />
     <GridElement
      top={false}
      right={true}
      bottom={true}
      left={false}
      buttonLabel='View all'
      width='basis-1/4'
      divClass='flex justify-center items-center'
     />
    </div>
   </section>

   <Footer />
  </div>
 );
}
