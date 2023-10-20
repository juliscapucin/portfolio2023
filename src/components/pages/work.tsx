'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { navLinks, breakpoints } from '@/constants';

import { usePageContext } from '@/context';
import { useMediaQuery } from '@/hooks';
import { Footer, ProjectsMenu } from '@/components';
import { animateToLeft, animateToRight } from '@/animations';

type WorkData = {
 title: string;
 description: string;
};

export default function WorkPage({ data }: { data: WorkData }) {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();

 console.log(data);

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 // Define page transition direction
 useEffect(() => {
  if (!data) return;

  const actualPage = navLinks.filter(
   (element) => element.slug === pathname.slice(1)
  );

  const previousPageId = navLinks.filter(
   (element) => element.slug === previousPage
  ) || [{ id: 0 }];

  // if actual page id is greater than previous page id, animate to left
  if (
   (actualPage &&
    previousPageId &&
    actualPage[0]?.id > previousPageId[0]?.id) ||
   previousPage === 'home'
  ) {
   animateToLeft(`work-page`);
  } else {
   animateToRight(`work-page`);
  }

  updatePreviousPage(pathname.slice(1));
 }, [data]);

 return (
  <>
   {data ? (
    <div className='page work-page'>
     <h1 className='text-displaySmall md:text-displayMedium lg:text-displayLarge mt-32'>
      {data.title}
     </h1>
     <p className='text-titleLarge md:text-headlineSmall mt-4 lg:mt-0 lg:w-4/6'>
      {data.description}
     </p>
     <ProjectsMenu activeBreakpoint={breakpoint} />
     <Footer />
    </div>
   ) : (
    <h1>Loading...</h1>
   )}
  </>
 );
}
