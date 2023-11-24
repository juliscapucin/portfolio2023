import { MutableRefObject, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

import gsap from 'gsap';

import { animateToLeft, animateToRight } from '@/animations';

import { navLinks } from '@/constants';
import { usePageContext } from '@/context';

export function useEnterTransitionDirection(
 enterElement: MutableRefObject<null>
) {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();

 //  Define the page transition direction based on the previous page + navLinks order
 useLayoutEffect(() => {
  if (!enterElement || !enterElement.current) return;

  const actualPage = navLinks.find(
   (element) => element.slug === pathname.slice(1)
  );

  let ctx = gsap.context(() => {});

  const previousPageLink = previousPage.includes('project')
   ? previousPage.includes('home')
     ? navLinks.find((el) => el.label.toLowerCase() === 'home')
     : navLinks.find((el) => el.label.toLowerCase() === 'work')
   : navLinks.find((el) => el.label.toLowerCase() === previousPage);

  // if actual page id is greater than previous page id, animate to left
  if (
   actualPage &&
   previousPageLink &&
   actualPage?._key > previousPageLink?._key
  ) {
   ctx.add(() => animateToLeft(enterElement.current));
   // if actual page id is smaller than previous page id, animate to right
  } else {
   ctx.add(() => animateToRight(enterElement.current));
  }

  updatePreviousPage(pathname.slice(1));

  return () => {
   ctx.revert();
  };
 }, [enterElement]);
}
