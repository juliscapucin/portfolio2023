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
  const projectPage = document.querySelector('.project-page');

  const previousPageLink =
   previousPage === 'project'
    ? navLinks.find((element) => element.slug === 'work')
    : navLinks.find((element) => element.title.toLowerCase() === previousPage);

  console.log('previous page', previousPage);
  console.log('previous page object', previousPageLink);

  if (!previousPageLink) return;

  ///// TRANSITION TO LEFT
  if (link._key > previousPageLink._key) {
   // Close shallow-page if open
   if (shallowPage) {
    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-hidden'))
     document.documentElement.classList.remove('overflow-hidden');

    // Animate shallow page to left
    animateHorizontal('shallow-page', 0, -100);
   }

   // Transition regular page to left and push new page
   animateToLeftTransition(`${projectPage ? 'project-page' : 'page'}`, () => {
    router.push(`/${link.slug}`);
   });
  } else {
   ///// TRANSITION TO RIGHT

   // Close shallow-page if open
   if (shallowPage) {
    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-hidden'))
     document.documentElement.classList.remove('overflow-hidden');

    // If coming from project page which was preceded by home page
    if (previousPage === 'project') {
     animateToRightTransition('shallow-page', () => {
      router.back();
     });
    } else {
     animateHorizontal('shallow-page', 0, 100);
     animateToRightTransition('page', () => {
      router.push(`/${link.slug}`);
     });
    }

    return;
   }

   // If regular page
   animateToRightTransition(`${projectPage ? 'project-page' : 'page'}`, () => {
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
