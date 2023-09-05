'use client';

import { useEffect } from 'react';
import { animateToLeft, animateToRight } from '@/animations/pageTransitions';
import { archive, navLinks } from '@/constants';
import { usePageContext } from '@/context';
import { usePathname } from 'next/navigation';

export default function Page() {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();
 const { title, paragraph1, slug } = archive;

 useEffect(() => {
  const actualPage = navLinks.filter(
   (element) => element.slug === pathname.slice(1)
  );

  const previousPageId = navLinks.filter(
   (element) => element.slug === previousPage
  );

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
  <section className={`${slug}-page`}>
   <h1 className='text-9xl'>{title}</h1>
   <p>{paragraph1}</p>
  </section>
 );
}
