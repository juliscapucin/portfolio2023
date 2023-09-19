'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import {
 workPage,
 navLinks,
 work,
 playground,
 archive,
 breakpoints,
} from '@/constants';

import { usePageContext } from '@/context';
import { useMediaQuery } from '@/hooks';
import { Footer, ProjectsMenu } from '@/components';
import { animateToLeft, animateToRight } from '@/animations';

export default function Page() {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();
 const { title, paragraph1, slug } = workPage;

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
   animateToLeft(`${slug}-page`);
  } else {
   animateToRight(`${slug}-page`);
  }

  updatePreviousPage(pathname.slice(1));
 }, []);

 return (
  <div className={`${slug}-page opacity-0`}>
   <h1 className='text-displaySmall lg:text-displayLarge'>{title}</h1>
   <p>{paragraph1}</p>
   <ProjectsMenu activeBreakpoint={breakpoint} />
   <Footer />
  </div>
 );
}
