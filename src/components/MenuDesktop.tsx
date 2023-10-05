'use client';

import { usePathname, useRouter } from 'next/navigation';

import { GridDiv, MenuLink } from '@/components';
import { useModalContext, usePageContext } from '@/context';

import {
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';

type NavLink = { title: string; slug: string; _key: string };

type NavLinksProps = {
 navLinks: NavLink[];
};

export default function MenuDesktop({ navLinks }: NavLinksProps) {
 const { modalOpen, updateModalOpen } = useModalContext();
 const { previousPage } = usePageContext();

 const pathname = usePathname();
 const router = useRouter();

 const buttonAction = (link: NavLink) => {
  const filteredPathname =
   pathname === '/' ? 'home' : pathname.match(/\/([^/]+)$/)?.[1];

  console.log(filteredPathname);

  const actualPage = navLinks.filter(
   (element) => element.slug === pathname.slice(1)
  );

  const shallowPage = document.querySelector('.shallow-page');

  if (shallowPage) {
   animateToRightTransition('shallow-page', () => router.push(`/${link.slug}`));
   return;
  }

  // Transition to left
  if ((actualPage && link._key > actualPage[0]?._key) || pathname === '/') {
   animateToLeftTransition(`${filteredPathname}-page`, () => {
    router.push(`/${link.slug}`);
   });
  } else {
   // Transition to right
   animateToRightTransition(`${filteredPathname}-page`, () => {
    router.push(`/${link.slug}`);
   });
  }
 };

 return (
  <>
   {navLinks ? (
    <GridDiv
     divClass={'h-16 max-w-full mx-8 px-8 hidden lg:flex'}
     bottom={true}
    >
     {/* Back button */}
     {/* Only render if not in home page */}
     {pathname !== '/' && (
      <button
       onClick={() => {
        const shallowPage = document.querySelector('.shallow-page');

        if (shallowPage && previousPage === 'home')
         animateToRightTransition('shallow-page', () => router.back());
        else if (shallowPage && previousPage !== 'home')
         animateToRightTransition('shallow-page', () => router.push('/'));
        else
         animateToRightTransition(`${pathname.slice(1)}-page`, () =>
          router.push('/')
         );
       }}
      >
       <GridDiv divClass='flex items-center justify-center'>
        <span className='min-w-[4rem]'>&#5193;</span>
       </GridDiv>
      </button>
     )}

     {/* Menu links */}
     <nav className='w-full h-full hidden lg:flex justify-end items-center gap-8 mr-8'>
      {navLinks.map((link) => {
       // Render all links if not in home page
       return pathname !== '/' ? (
        <MenuLink
         label={link.title}
         key={link._key}
         activeState={pathname.includes(`/${link.slug}`) ? true : false}
         action={() => {
          buttonAction(link);
         }}
        />
       ) : (
        // If in home page, render all links except home link
        link.slug !== '/' && (
         <MenuLink
          label={link.title}
          key={link._key}
          activeState={pathname.includes(`/${link.slug}`) ? true : false}
          action={() => {
           buttonAction(link);
          }}
         />
        )
       );
      })}

      {/* Contact button */}
      <MenuLink label='Connect' action={updateModalOpen} />
     </nav>
    </GridDiv>
   ) : (
    <span>Loading...</span>
   )}
  </>
 );
}
