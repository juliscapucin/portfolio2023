'use client';

import { navLinks } from '@/constants';
import { GridDiv, HeaderLink } from '@/components';
import { usePathname, useRouter } from 'next/navigation';

import { useModalContext } from '@/context';
import {
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';

interface HeaderProps {
 label: string;
 slug: string;
}

export default function Header() {
 const { modalOpen, updateModalOpen } = useModalContext();
 const pathname = usePathname();
 const router = useRouter();

 return (
  <header className='w-full fixed top-0 px-8 flex h-16 z-50 max-w-[2000px] overflow-hidden'>
   {/* Desktop Header */}
   <GridDiv
    divClass={
     'flex h-full items-center justify-between relative overflow-hidden'
    }
    top={false}
    right={true}
    bottom={false}
    left={true}
   >
    {/* Back button */}
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
     {pathname !== '/' && (
      <GridDiv
       top={false}
       right={true}
       bottom={false}
       left={false}
       divClass='flex items-center justify-center'
      >
       <span className='min-w-[4rem]'>&#5193;</span>
      </GridDiv>
     )}
    </button>

    {/* Navbar */}
    <nav className='w-full h-full hidden md:flex justify-end items-center gap-8 mr-8'>
     {navLinks.map((link) => {
      return (
       <HeaderLink
        label={link.label}
        key={link.label}
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

   {/* Mobile header */}
   <nav className='md:hidden max-w-[1440px] mx-auto sm:px-16 px-8 py-8'>
    Mobile
   </nav>
  </header>
 );
}
