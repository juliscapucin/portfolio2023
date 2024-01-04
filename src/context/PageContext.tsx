'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
 createContext,
 useCallback,
 useContext,
 useEffect,
 useRef,
 useState,
} from 'react';
import { navLinks } from '@/constants';

import {
 animateHorizontal,
 animateHorizontalTransition,
 animateMobileMenu,
} from '@/animations';

import { NavLink } from '@/types';

// TYPE
interface ContextProps {
 previousPage: string;
 updatePreviousPage: (page: string) => void;
 transitionOnClick: (link: NavLink, mobileMenuRef?: HTMLDivElement) => void;
 shallowPageRef: React.MutableRefObject<HTMLDivElement | null>;
 pageRef: React.MutableRefObject<HTMLDivElement | null>;
}

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

 // Page transition on button header click
 const transitionOnClick = () => {
  (link: NavLink, mobileMenuRef?: HTMLDivElement) => {
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
   if (link.order && link.order > previousPageLink.order) {
    // Close shallow-page if open
    if (shallowPageRef.current) {
     //  Restore scroll on html div
     if (document.documentElement.classList.contains('overflow-clip'))
      document.documentElement.classList.remove('overflow-clip');

     scrollWorkaround();

     //  Animate shallow page to left
     animateHorizontal(shallowPageRef.current, 0, -200);
     animateHorizontalTransition(pageRef.current, 0, -100, () => {
      router.push(`/${link.slug}`, { scroll: false });
     });

     return;
    }

    // If regular page
    animateHorizontalTransition(pageRef.current, 0, -100, () => {
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
      animateHorizontalTransition(shallowPageRef.current, 0, 100, () => {
       router.push(`/${link.slug}`, { scroll: false });
      });
     } else {
      animateHorizontal(shallowPageRef.current, 0, 200);
      animateHorizontalTransition(pageRef.current, 0, 100, () => {
       router.push(`/${link.slug}`, { scroll: false });
      });
     }

     return;
    }

    // If regular page
    animateHorizontalTransition(pageRef.current, 0, 100, () => {
     router.push(`/${link.slug}`);
    });
   }
  };
 };

 //  Set previousPage on back button click
 useEffect(() => {
  if (pathname === '/' && previousPage === 'project-home')
   updatePreviousPage('home');
  if (pathname === '/work' && previousPage === 'project-work')
   updatePreviousPage('work');
 }, [pathname]);

 return (
  <PageContext.Provider
   value={{
    previousPage,
    updatePreviousPage,
    transitionOnClick,
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
