import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { animateToLeft, animateToRight } from '@/animations';

import { navLinks } from '@/constants';
import { usePageContext } from '@/context';

export function useEnterTransitionDirection() {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();

 //  Define the page transition direction based on the previous page + navLinks order
 useEffect(() => {
  const actualPage = navLinks.find(
   (element) => element.slug === pathname.slice(1)
  );

  const previousPageLink = previousPage.includes('project')
   ? previousPage.includes('home')
     ? navLinks.find((el) => el.label.toLowerCase() === 'home')
     : navLinks.find((el) => el.label.toLowerCase() === 'work')
   : navLinks.find((el) => el.label.toLowerCase() === previousPage);

  // console.log('actual page link', actualPage);
  // console.log('previous page link', previousPageLink);

  // if actual page id is greater than previous page id, animate to left
  if (
   actualPage &&
   previousPageLink &&
   actualPage?._key > previousPageLink?._key
  ) {
   animateToLeft('page');
  } else {
   animateToRight('page');
  }

  updatePreviousPage(pathname.slice(1));

  return () => {};
 }, []);
}
