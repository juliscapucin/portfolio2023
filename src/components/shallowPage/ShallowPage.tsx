'use client';

import { useCallback, useRef, MouseEventHandler, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { animateToLeftTransition } from '@/animations/pageTransitions';
import { Footer } from '@/components';
import ButtonBack from '../buttons/ButtonBack';

export default function ShallowPage({
 children,
}: {
 children: React.ReactNode;
}) {
 const overlay = useRef<HTMLDivElement | null>(null);
 const wrapper = useRef<HTMLDivElement | null>(null);

 const router = useRouter();
 const pathname = usePathname();

 // this is used as a workaround to prevent the intercepted route of showing in all pages
 // Next 13 bug
 const shouldShowShallowPage = pathname.includes('/work/');

 const onDismiss = useCallback(() => {
  //  Remove scroll from wrapper div
  if (overlay.current) {
   overlay.current.classList.remove('overflow-y-scroll');
   overlay.current.classList.add('overflow-hidden');
  }

  //  Add scroll on html div
  document.documentElement.classList.remove('overflow-hidden');

  animateToLeftTransition('shallow-page', () => {
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
  shouldShowShallowPage && (
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
     <ButtonBack action={onDismiss} />

     {children}
    </div>
    <Footer />
   </div>
  )
 );
}
