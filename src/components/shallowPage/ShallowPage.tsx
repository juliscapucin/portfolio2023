'use client';

import { useCallback, useRef, MouseEventHandler, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { animateToLeft, animateToRightTransition } from '@/utils';

export default function ShallowPage({
 children,
}: {
 children: React.ReactNode;
}) {
 const overlay = useRef(null);
 const wrapper = useRef(null);
 const router = useRouter();

 const onDismiss = useCallback(() => {
  animateToRightTransition('shallowPage', () => {
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
  animateToLeft('shallow-page');
  document.documentElement.classList.add('overflow-hidden');
 }, []);

 return (
  <div
   className='shallow-page scroll-trigger fixed top-0 left-0 right-0 bottom-0 overflow-auto z-10'
   ref={overlay}
   onClick={onClick}
  >
   <div className='wrapper' ref={wrapper}>
    {children}
   </div>
  </div>
 );
}
