'use client';

import { useRef } from 'react';

import { navLinks } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';

import { useModalContext } from '@/context';
import { GridDiv, HeaderLink } from '@/components';
import { useMediaQuery } from '@/hooks';
import {
 animateMobileMenu,
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';

export default function Header() {
 const { modalOpen, updateModalOpen } = useModalContext();
 const pathname = usePathname();
 const router = useRouter();
 const mobileMenuRef = useRef(null);

 return (
  <header className='fixed top-0 left-0 right-0 flex justify-end h-16 z-50 max-w-[2000px] mx-auto'>
   {/* Outline */}
   <GridDiv
    divClass={
     'flex h-full w-full mx-8 items-center justify-between relative overflow-hidden'
    }
    top={false}
    right={true}
    bottom={false}
    left={true}
   >
    {/* Back button */}
    {/* Render if not in home page */}
    {pathname !== '/' && (
     <button
      onClick={() => {
       const shallowPage = document.querySelector('.shallow-page');
       if (shallowPage)
        animateToRightTransition('shallow-page', () => router.back());
       else {
        animateToRightTransition(`${pathname.slice(1)}-page`, () =>
         router.push('/')
        );
       }
      }}
     >
      <GridDiv
       top={false}
       right={true}
       bottom={false}
       left={false}
       divClass='flex items-center justify-center'
      >
       <span className='min-w-[4rem]'>&#5193;</span>
      </GridDiv>
     </button>
    )}

    {/* Navbar Desktop */}
    <nav className='w-full h-full hidden lg:flex justify-end items-center gap-8 mr-8'>
     {navLinks.map((link) => {
      return (
       <HeaderLink
        label={link.label}
        key={link.id}
        activeState={pathname === `/${link.slug}` ? true : false}
        action={() => {
         const filteredPathname = pathname === '/' ? 'home' : pathname.slice(1);

         const actualPage = navLinks.filter(
          (element) => element.slug === pathname.slice(1)
         );

         // Transition to left
         if ((actualPage && link.id > actualPage[0]?.id) || pathname === '/') {
          animateToLeftTransition(`${filteredPathname}-page`, () =>
           router.push(`/${link.slug}`)
          );
         } else {
          // Transition to right
          animateToRightTransition(`${filteredPathname}-page`, () =>
           router.push(`/${link.slug}`)
          );
         }
        }}
       />
      );
     })}
     <HeaderLink label='Contact' action={updateModalOpen} />
    </nav>
   </GridDiv>

   {/* Navbar Mobile */}
   <div className='lg:hidden absolute w-full flex overflow-hidden'>
    <button
     className='bg-green-500'
     onClick={() => {
      if (mobileMenuRef.current) animateMobileMenu(mobileMenuRef.current);
     }}
    >
     X
    </button>
    <nav
     ref={mobileMenuRef}
     className='mobile-menu min-w-full absolute flex flex-col lg:hidden w-full min-h-full mx-auto sm:px-16 px-8 py-8 bg-colorBlack z-10 -translate-y-full'
    >
     {navLinks.map((link) => {
      return (
       <a href={`/${link.slug}`} key={`${link.id}-mobile}`}>
        {link.label}
       </a>
      );
     })}
    </nav>
   </div>
  </header>
 );
}
