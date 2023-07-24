'use client';

import { useCallback, useRef, useEffect, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { animateToLeft } from '@/utils';

export default function ShallowPage({
 children,
}: {
 children: React.ReactNode;
}) {
 const overlay = useRef(null);
 const wrapper = useRef(null);
 const router = useRouter();

 const onDismiss = useCallback(() => {
  animateToLeft(() => {
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

 //  useEffect(() => {
 //   document.addEventListener('keydown', onKeyDown);
 //   return () => document.removeEventListener('keydown', onKeyDown);
 //  }, [onKeyDown]);

 return (
  <div
   className='animate-left fixed top-0 left-0 right-0 bottom-0 overflow-auto z-10 bg-colorBlack'
   ref={overlay}
   onClick={onClick}
  >
   <div className='wrapper' ref={wrapper}>
    {children}
   </div>
  </div>
 );
}
