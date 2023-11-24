'use client';

import { useCallback, useRef, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { usePageContext } from '@/context';

import { animateToLeftTransition } from '@/animations/pageTransitions';
import { Footer } from '@/components';
import { ButtonBack } from '@buttons/.';

type Props = { children: React.ReactNode; isShallow: boolean };

export default function ShallowPage({ children, isShallow }: Props) {
 const overlay = useRef<HTMLDivElement | null>(null);
 const wrapper = useRef<HTMLDivElement | null>(null);
 const [showBackButton, setShowBackButton] = useState<boolean>(
  isShallow ? true : false
 );

 const router = useRouter();
 const pathname = usePathname();

 const { previousPage, updatePreviousPage } = usePageContext();

 // update previous page + define if back button should be shown
 useEffect(() => {
  if (previousPage === 'home' && isShallow) {
   updatePreviousPage('project-home');
  } else if (previousPage === 'work' && isShallow) {
   updatePreviousPage('project-work');
  } else if (!isShallow) {
   setShowBackButton(false);
   updatePreviousPage('project');
  } else if (previousPage.includes('project')) {
   setShowBackButton(false);
   updatePreviousPage('project');
  } else {
   updatePreviousPage('work');
   setShowBackButton(false);
  }
 }, []);

 // this is used as a workaround to prevent the intercepted route of showing in all pages
 // Next 13 bug
 const shouldShowShallowPage = pathname.includes('/work/');

 const onDismiss = useCallback(() => {
  //  Remove scroll from wrapper div
  if (overlay.current) {
   overlay.current.classList.remove('overflow-y-scroll');
   overlay.current.classList.add('overflow-clip');
  }

  //  Add scroll on html div
  document.documentElement.classList.remove('overflow-clip');

  animateToLeftTransition('shallow-page', () => {
   router.back();
  });
 }, [router]);

 const onKeyDown = useCallback(
  (e: KeyboardEvent) => {
   if (e.key === 'Escape') onDismiss();
  },
  [onDismiss]
 );

 useEffect(() => {
  if (!isShallow) return;
  document.addEventListener('keydown', onKeyDown);
  return () => document.removeEventListener('keydown', onKeyDown);
 }, [onKeyDown]);

 return (
  shouldShowShallowPage && (
   <div
    className={`${
     isShallow && 'shallow-page'
    } project-page scroll-trigger fixed top-0 left-0 bottom-0 right-0 mx-auto pl-8 pr-16 lg:pr-8 bg-primary max-w-desktop overflow-y-scroll overflow-x-clip z-10`}
    ref={overlay}
   >
    <div
     className='wrapper max-w-desktop overflow-clip m-auto mt-0 py-32 bg-primary'
     ref={wrapper}
    >
     {/* Back button */}
     {showBackButton && <ButtonBack action={onDismiss} />}

     {children}
    </div>
    <Footer />
   </div>
  )
 );
}
