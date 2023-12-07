'use client';

import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { navLinks } from '@/constants';

import {
 animateHorizontal,
 animateMobileMenu,
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';

// TYPE
interface ContextProps {
 previousPage: string;
 updatePreviousPage: (page: string) => void;
 buttonAction: (link: NavLink, mobileMenuRef?: HTMLDivElement) => void;
 shallowPageRef: React.MutableRefObject<HTMLDivElement | null>;
 pageRef: React.MutableRefObject<HTMLDivElement | null>;
}

type NavLink = { label: string; slug: string; _key: number };

// CREATE CONTEXT
const PageContext = createContext<ContextProps | null>(null);

// CONTEXT PROVIDER
export const PageContextProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
 const [previousPage, setPreviousPage] = useState('home');
 const shallowPageRef = useRef<HTMLDivElement | null>(null);
 const pageRef = useRef<HTMLDivElement | null>(null);
 const pathname = usePathname();
 const router = useRouter();

 const updatePreviousPage = (page: string) => {
  setPreviousPage(page);
 };

 const buttonAction = (link: NavLink, mobileMenuRef?: HTMLDivElement) => {
  // Toggle mobile menu
  if (mobileMenuRef) {
   animateMobileMenu(mobileMenuRef);
  }

  const previousPageLink = previousPage.includes('project')
   ? previousPage.includes('home')
     ? navLinks.find((el) => el.label.toLowerCase() === 'home')
     : navLinks.find((el) => el.label.toLowerCase() === 'work')
   : navLinks.find((el) => el.label.toLowerCase() === previousPage);

  if (!previousPageLink) return;

  const scrollWorkaround = () => {
   if (!shallowPageRef.current) return;

   const scrollTop = `${shallowPageRef.current.scrollTop}px`;
   shallowPageRef.current.classList.remove('overflow-y-scroll');
   shallowPageRef.current.style.top = `-${scrollTop}`;
  };

  ///// TRANSITION TO LEFT
  if (link._key > previousPageLink._key) {
   // Close shallow-page if open
   if (shallowPageRef.current) {
    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-clip'))
     document.documentElement.classList.remove('overflow-clip');

    scrollWorkaround();

    //  Animate shallow page to left
    animateHorizontal(shallowPageRef.current, 0, -200);
    animateToLeftTransition(pageRef.current, () => {
     router.push(`/${link.slug}`, { scroll: false });
    });

    return;
   }

   // If regular page
   animateToLeftTransition(pageRef.current, () => {
    router.push(`/${link.slug}`);
   });
  } else {
   ///// TRANSITION TO RIGHT

   // Close shallow-page if open
   if (shallowPageRef.current) {
    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-clip'))
     document.documentElement.classList.remove('overflow-clip');

    scrollWorkaround();

    // If coming from project page which was preceded by home page
    if (previousPage.includes('home')) {
     animateToRightTransition(shallowPageRef.current, () => {
      router.push(`/${link.slug}`, { scroll: false });
     });
    } else {
     animateHorizontal(shallowPageRef.current, 0, 200);
     animateToRightTransition(pageRef.current, () => {
      router.push(`/${link.slug}`, { scroll: false });
     });
    }

    return;
   }

   // If regular page
   animateToRightTransition(pageRef.current, () => {
    router.push(`/${link.slug}`);
   });
  }
 };

 // Set previousPage && isShallowPage when using shallow page back button
 useEffect(() => {
  if (pathname === '/') setPreviousPage('home');
  if (pathname === '/work') setPreviousPage('work');
  if (pathname === '/about') setPreviousPage('about');
 }, [pathname]);

 return (
  <PageContext.Provider
   value={{
    previousPage,
    updatePreviousPage,
    buttonAction,
    shallowPageRef,
    pageRef,
   }}
  >
   {children}
  </PageContext.Provider>
 );
};

// CONTEXT CUSTOM HOOK
export const usePageContext = () => {
 const context = useContext(PageContext);
 if (!context)
  throw new Error('usePageContext must be used within PageContextProvider');
 return context;
};
