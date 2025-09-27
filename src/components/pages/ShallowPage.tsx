'use client';

import { useCallback, useRef, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { usePageContext } from '@/context';

import { animateHorizontalTransition } from '@/animations/pageTransitions';
import { Availability } from '@/components';
import { ButtonBack } from '@buttons/.';

type Props = { children: React.ReactNode; isShallow: boolean };

export default function ShallowPage({ children, isShallow }: Props) {
 const wrapper = useRef<HTMLDivElement | null>(null);
 const [showBackButton, setShowBackButton] = useState<boolean>(
  isShallow ? true : false,
 );

 const router = useRouter();
 const pathname = usePathname();

 const { previousPage, updatePreviousPage, shallowPageRef, pageRef } =
  usePageContext();

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

 const handleDismiss = useCallback(() => {
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
   if (e.key === 'Escape') handleDismiss();
  },
  [handleDismiss],
 );

 useEffect(() => {
  if (!isShallow) return;
  document.addEventListener('keydown', onKeyDown);
  return () => document.removeEventListener('keydown', onKeyDown);
 }, [onKeyDown, isShallow]);

 return (
  // this is used as a workaround to prevent the intercepted route of showing in all pages
  shouldShowShallowPage && (
   <div
    ref={isShallow ? shallowPageRef : pageRef}
    className={`${
     isShallow && 'shallow-page bg-primary'
    } page scroll-trigger fixed top-0 left-0 bottom-0 right-0 mx-auto pl-8 pr-16 lg:pr-8 max-w-desktop overflow-y-scroll overflow-x-clip z-10`}
   >
    <div
     className='wrapper max-w-desktop overflow-clip m-auto mt-0 py-32 bg-primary'
     ref={wrapper}
    >
     {/* Back button */}
     {showBackButton && <ButtonBack action={handleDismiss} />}

     {children}
    </div>
    {/* <Footer /> */}
    <div className='mb-32'>
     <div className='h-[1px] bg-secondary mb-32'></div>
     <Availability />
    </div>
   </div>
  )
 );
}
