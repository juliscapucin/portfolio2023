import { useRouter } from 'next/navigation';

import { navLinks } from '@/constants';

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
 const { previousPage, isShallowPage, setIsShallowPage } = usePageContext();

 const buttonAction = (link: NavLink, mobileMenuRef?: HTMLDivElement) => {
  // Toggle mobile menu
  if (mobileMenuRef) {
   animateMobileMenu(mobileMenuRef);
  }

  console.log('header', isShallowPage);

  const previousPageLink = previousPage.includes('project')
   ? previousPage.includes('home')
     ? navLinks.find((el) => el.label.toLowerCase() === 'home')
     : navLinks.find((el) => el.label.toLowerCase() === 'work')
   : navLinks.find((el) => el.label.toLowerCase() === previousPage);

  if (!previousPageLink) return;

  ///// TRANSITION TO LEFT
  if (link._key > previousPageLink._key) {
   // Close shallow-page if open
   if (isShallowPage) {
    setIsShallowPage(false);

    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-clip'))
     document.documentElement.classList.remove('overflow-clip');

    // Animate shallow page to left
    animateHorizontal('shallow-page', 0, -200);
   }

   // If regular page
   animateToLeftTransition('page', () => {
    router.push(`/${link.slug}`, { scroll: true });
   });
  } else {
   ///// TRANSITION TO RIGHT

   // Close shallow-page if open
   if (isShallowPage) {
    setIsShallowPage(false);

    //  Restore scroll on html div
    if (document.documentElement.classList.contains('overflow-clip'))
     document.documentElement.classList.remove('overflow-clip');

    // If coming from project page which was preceded by home page
    if (previousPage.includes('home') || previousPage.includes('project')) {
     animateToRightTransition('shallow-page', () => {
      router.push(`/${link.slug}`, { scroll: false });
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
   animateToRightTransition('page', () => {
    router.push(`/${link.slug}`, { scroll: true });
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
