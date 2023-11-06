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

  const previousPageId = previousPage.includes('project')
   ? previousPage.includes('home')
     ? navLinks.find((el) => el.label.toLowerCase() === '/')
     : navLinks.find((el) => el.label.toLowerCase() === 'work')
   : navLinks.find((el) => el.slug === previousPage);

  // if actual page id is greater than previous page id, animate to left
  if (
   (actualPage && previousPageId && actualPage?._key > previousPageId?._key) ||
   previousPage === 'home'
  ) {
   animateToLeft(`page`);
  } else {
   animateToRight(`page`);
  }

  updatePreviousPage(pathname.slice(1));
 }, []);
}
