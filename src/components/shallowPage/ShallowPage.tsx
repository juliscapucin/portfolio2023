'use client';

import { useCallback, useRef, MouseEventHandler, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { animateToRightTransition } from '@/animations/pageTransitions';
import { Footer, GridDiv } from '@/components';

export default function ShallowPage({
 children,
}: {
 children: React.ReactNode;
}) {
 const overlay = useRef(null);
 const wrapper = useRef(null);
 const router = useRouter();

 const onDismiss = useCallback(() => {
  //  Toggle scroll on html div
  document.documentElement.classList.remove('overflow-hidden');

  animateToRightTransition('shallow-page', () => {
   router.back();
  });
 }, [router]);

 const onClick: MouseEventHandler = useCallback(
  (e) => {
   if (e.target === overlay.current || e.target === wrapper.current) {
    if (onDismiss) onDismiss();
   }
  },
  [onDismiss, overlay, wrapper]
 );

 const onKeyDown = useCallback(
  (e: KeyboardEvent) => {
   if (e.key === 'Escape') onDismiss();
  },
  [onDismiss]
 );

 return (
  <div
   className='shallow-page scroll-trigger fixed top-0 left-0 bottom-0 right-0 mx-auto lg:px-8 bg-primary max-w-desktop overflow-y-scroll overflow-x-hidden z-10'
   ref={overlay}
   onClick={onClick}
  >
   <div
    className='wrapper max-w-desktop overflow-hidden m-auto pt-32'
    ref={wrapper}
   >
    {/* Back button */}
    <button onClick={onDismiss}>
     <GridDiv divClass='flex items-center justify-center'>
      <span className='min-w-[4rem]'>&#5193;</span>
     </GridDiv>
    </button>
    {children}
   </div>
   <Footer />
  </div>
 );
}
