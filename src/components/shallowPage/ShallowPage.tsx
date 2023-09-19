'use client';

import { useCallback, useRef, MouseEventHandler, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePageContext } from '@/context';
import {
 animateToLeft,
 animateToRightTransition,
} from '@/animations/pageTransitions';

export default function ShallowPage({
 children,
}: {
 children: React.ReactNode;
}) {
 const overlay = useRef(null);
 const wrapper = useRef(null);
 const router = useRouter();
 const { previousPage, updatePreviousPage } = usePageContext();

 const onDismiss = useCallback(() => {
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

 useEffect(() => {
  updatePreviousPage('shallow-page');
 }, []);

 return (
  <div
   className='shallow-page scroll-trigger fixed top-0 left-0 bottom-0 right-0 ml-8 pr-8 dark:bg-colorBlack max-w-desktop overflow-y-scroll overflow-x-hidden z-10'
   ref={overlay}
   onClick={onClick}
  >
   <div
    className='wrapper max-w-desktop overflow-hidden m-auto p-16 pt-32'
    ref={wrapper}
   >
    {children}
   </div>
  </div>
 );
}
