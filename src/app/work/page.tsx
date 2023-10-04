'use client';

import { useEffect, useState } from 'react';
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

export default function Page() {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();

 const [data, setData] = useState<WorkData | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/api/work');
   const data = await response.json();
   setData(data);
  };

  fetchData();
 }, []);

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
  <>
   {data ? (
    <div className={`work-page`}>
     <h1 className='text-displaySmall lg:text-displayLarge'>{data.title}</h1>
     <p>{data.description}</p>
     <ProjectsMenu activeBreakpoint={breakpoint} />
     <Footer />
    </div>
   ) : (
    <h1>Loading...</h1>
   )}
  </>
 );
}
