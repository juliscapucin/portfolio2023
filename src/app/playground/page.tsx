'use client';

import { use, useEffect } from 'react';
import { animateToLeft, animateToRight } from '@/animations';
import { playground, navLinks } from '@/constants';
import { usePageContext } from '@/context';
import { usePathname } from 'next/navigation';

export default function Page() {
 const pathname = usePathname();
 const { previousPage, updatePreviousPage } = usePageContext();
 const { title, paragraph1, slug } = playground;

 useEffect(() => {
  console.log(pathname.slice(1));
  console.log(previousPage);

  const actualPage = navLinks.filter(
   (element) => element.slug === pathname.slice(1)
  );

  const previousPageId = navLinks.filter(
   (element) => element.slug === previousPage
  );

  console.log(actualPage);
  console.log(previousPageId);

  if (actualPage && previousPageId && actualPage[0].id > previousPageId[0].id) {
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
