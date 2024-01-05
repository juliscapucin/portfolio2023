'use client';

import { useCallback, useRef, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { usePageContext } from '@/context';

import { animateHorizontalTransition } from '@/animations/pageTransitions';
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

 const { previousPage, updatePreviousPage, shallowPageRef } = usePageContext();

 // this is used as a workaround to prevent the intercepted route of showing in all pages
 // Next 13 bug
 const shouldShowShallowPage = pathname.includes('/work/');

 // update previous page + define if back button should be shown
 useEffect(() => {
  if (!shouldShowShallowPage) {
   return;
  }

  if (isShallow) {
   if (previousPage === 'home') {
    updatePreviousPage('project-home');
   } else if (previousPage === 'work') {
    updatePreviousPage('project-work');
   } else if (previousPage.includes('project')) {
    setShowBackButton(false);
   }
  } else {
   updatePreviousPage('project');
  }
 }, []);

 const onDismiss = useCallback(() => {
  //  Remove scroll from wrapper div
  if (shallowPageRef.current) {
   shallowPageRef.current.classList.remove('overflow-y-scroll');
   shallowPageRef.current.classList.add('overflow-clip');
  }

  //  Restore scroll on html div
  if (document.documentElement.classList.contains('overflow-clip'))
   document.documentElement.classList.remove('overflow-clip');

  animateHorizontalTransition(shallowPageRef.current, 0, -100, () => {
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
    ref={shallowPageRef}
    className={`${
     isShallow && 'shallow-page'
    } page scroll-trigger fixed top-0 left-0 bottom-0 right-0 mx-auto pl-8 pr-16 lg:pr-8 bg-primary max-w-desktop overflow-y-scroll overflow-x-clip z-10`}
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
