import { navLinks } from '@/constants';
import { useRouter } from 'next/navigation';

import { MenuDesktop, MenuMobile } from '@/components';
import { usePageContext } from '@/context';
import {
 animateHorizontal,
 animateMobileMenu,
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';

type NavLink = { label: string; slug: string; _key: number };

export default function Header() {
 const router = useRouter();
 const { previousPage } = usePageContext();

 const buttonAction = (link: NavLink, mobileMenuRef?: HTMLDivElement) => {
  // Toggle mobile menu
  if (mobileMenuRef) {
   animateMobileMenu(mobileMenuRef);
  }

  const shallowPage = document.querySelector('.shallow-page');
  const projectPage = document.querySelector('.project-page');
  const homePage = document.querySelector('.home-page');

  const previousPageLink = previousPage.includes('project')
   ? previousPage.includes('home')
     ? navLinks.find((el) => el.label.toLowerCase() === 'home')
     : navLinks.find((el) => el.label.toLowerCase() === 'work')
   : navLinks.find((el) => el.label.toLowerCase() === previousPage);

  if (!previousPageLink) return;

  ///// TRANSITION TO LEFT
  if (link._key > previousPageLink._key) {
   // Close shallow-page if open
   if (shallowPage) {
    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-hidden'))
     document.documentElement.classList.remove('overflow-hidden');

    // Animate shallow page to left
    animateHorizontal('shallow-page', 0, -200);
   }

   // If regular page
   animateToLeftTransition(`${projectPage ? 'project-page' : 'page'}`, () => {
    router.push(`/${link.slug}`, { scroll: true });
   });
  } else {
   ///// TRANSITION TO RIGHT

   // Close shallow-page if open
   if (shallowPage) {
    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-hidden'))
     document.documentElement.classList.remove('overflow-hidden');

    // If coming from project page which was preceded by home page
    if (homePage) {
     animateToRightTransition('shallow-page', () => {
      router.push(`/${link.slug}`, { scroll: false });
     });
    } else if (projectPage) {
     animateHorizontal('shallow-page', 0, 200);
     animateToRightTransition('project-page', () => {
      router.push(`/${link.slug}`);
     });
    } else {
     animateHorizontal('shallow-page', 0, 200);
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
   <header className='fixed top-0 z-100 w-full max-w-desktop'>
    <MenuDesktop navLinks={navLinks} buttonAction={buttonAction} />
    <MenuMobile navLinks={navLinks} buttonAction={buttonAction} />
   </header>
  )
 );
}
