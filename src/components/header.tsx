import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { MenuDesktop, MenuMobile } from '@/components';
import { usePageContext } from '@/context';
import {
 animateHorizontal,
 animateMobileMenu,
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';

type NavLink = { title: string; slug: string; _key: string };

export default function Header() {
 const router = useRouter();
 const pathname = usePathname();
 const { previousPage } = usePageContext();

 const [navLinks, setNavlinks] = useState<NavLink[] | null>(null);

 //  Fetch data from api Route Handler (api/navbar)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/api/navbar');
   const data = await response.json();
   setNavlinks(data.items);
  };

  fetchData();
 }, []);

 const buttonAction = (link: NavLink, mobileMenuRef?: HTMLDivElement) => {
  if (!navLinks) return;

  // Toggle mobile menu
  if (mobileMenuRef) {
   animateMobileMenu(mobileMenuRef);
  }

  const shallowPage = document.querySelector('.shallow-page');

  const actualPage = shallowPage
   ? navLinks.filter((element) => element.slug === 'work')
   : navLinks.filter((element) => element.slug === pathname.slice(1));

  ///// Transition to left
  if ((actualPage && link._key > actualPage[0]?._key) || pathname === '/') {
   // Close shallow-page if open
   if (shallowPage) {
    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-hidden'))
     document.documentElement.classList.remove('overflow-hidden');

    animateHorizontal('shallow-page', 0, -100);

    animateToLeftTransition('page', () => {
     router.push(`/${link.slug}`);
    });

    return;
   }

   // If regular page
   animateToLeftTransition('page', () => {
    router.push(`/${link.slug}`);
   });
  } else {
   ///// Transition to right

   // Close shallow-page if open
   if (shallowPage) {
    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-hidden'))
     document.documentElement.classList.remove('overflow-hidden');

    animateHorizontal('shallow-page', 0, 100);

    if (previousPage === 'project') {
     animateToLeftTransition('shallow-page', () => {
      router.back();
     });
    } else {
     animateToRightTransition('page', () => {
      router.push(`/${link.slug}`);
     });
    }

    return;
   }

   // If regular page
   animateToRightTransition('page', () => {
    router.push(`/${link.slug}`);
   });
  }
 };

 return (
  navLinks && (
   <header className='fixed top-0 z-50 w-full max-w-desktop'>
    <MenuDesktop navLinks={navLinks} buttonAction={buttonAction} />
    <MenuMobile navLinks={navLinks} buttonAction={buttonAction} />
   </header>
  )
 );
}
