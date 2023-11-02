'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { navLinks, breakpoints } from '@/constants';

import { usePageContext } from '@/context';
import { useMediaQuery } from '@/hooks';
import { Footer, ProjectsMenu } from '@/components';
import { Title } from '@/components/ui';
import { animateToLeft, animateToRight } from '@/animations';

import { Project } from '@/types';

type Props = {
 data: { title: string; description: string };
 allProjects: Project[];
};

export default function WorkPage({ data, allProjects }: Props) {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();

 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);

 // Define page transition direction
 useEffect(() => {
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
 }, []);

 return (
  <div className='page work-page'>
   <Title title={data.title} margin={true} />
   <p className='text-titleLarge md:text-headlineSmall mt-4 lg:mt-0 lg:w-4/6'>
    {data.description}
   </p>
   <ProjectsMenu
    startVariant='image'
    activeBreakpoint={breakpoint}
    allProjects={allProjects}
    startCategory='all'
   />
   <Footer />
  </div>
 );
}
