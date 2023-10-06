'use client';

import { usePathname, useRouter } from 'next/navigation';

import { GridDiv, MenuLink } from '@/components';
import { useModalContext, usePageContext } from '@/context';

import {
 animateHorizontal,
 animateToLeft,
 animateToLeftTransition,
 animateToRight,
 animateToRightTransition,
} from '@/animations';

type NavLink = { title: string; slug: string; _key: string };

type NavLinksProps = {
 navLinks: NavLink[];
};

export default function MenuDesktop({ navLinks }: NavLinksProps) {
 const { updateModalOpen } = useModalContext();

 const pathname = usePathname();
 const router = useRouter();

 const buttonAction = (link: NavLink) => {
  const shallowPage = document.querySelector('.shallow-page');

  const actualPage = shallowPage
   ? navLinks.filter((element) => element.slug === 'work')
   : navLinks.filter((element) => element.slug === pathname.slice(1));

  // Transition to left
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

   animateToLeftTransition('page', () => {
    router.push(`/${link.slug}`);
   });
  } else {
   // Transition to right

   // Close shallow-page if open
   if (shallowPage) {
    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-hidden'))
     document.documentElement.classList.remove('overflow-hidden');

    animateHorizontal('shallow-page', 0, 100);

    animateToRightTransition('page', () => {
     router.push(`/${link.slug}`);
    });

    return;
   }
   animateToRightTransition('page', () => {
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
