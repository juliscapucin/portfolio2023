import { MutableRefObject, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

import gsap from 'gsap';

import { animateHorizontal } from '@/animations';

import { navLinks } from '@/constants';
import { usePageContext } from '@/context';

export function useEnterTransitionDirection(
   enterElement: MutableRefObject<HTMLDivElement | null>
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
         actualPage?.slug === 'about' ||
         previousPage === 'home' ||
         (actualPage &&
            previousPageLink &&
            actualPage?.order > previousPageLink?.order)
      ) {
         ctx.add(() => animateHorizontal(enterElement.current, 100, 0));
         window.scrollTo(0, 0);
         // if actual page id is smaller than previous page id, animate to right
      } else {
         ctx.add(() => animateHorizontal(enterElement.current, -100, 0));
         window.scrollTo(0, 0);
      }

      // Update previous page for next transition
      updatePreviousPage(actualPage?.label.toLowerCase() || 'home');

      return () => {
         ctx.revert();
      };
   }, [enterElement]);
}
