import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { usePageContext } from '@/context';

export default function CustomCursor() {
 const { isHovering } = usePageContext();

 const refCursor = useRef(null);
 const refFollower = useRef(null);

 useEffect(() => {
  const cursorDiv = refCursor.current;
  if (!cursorDiv) return;

  gsap.set(cursorDiv, {
   xPercent: -50,
   yPercent: -50,
  });

  const moveCursor = (e: MouseEvent) => {
   gsap.to(cursorDiv, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
   });
  };

  window.addEventListener('mousemove', moveCursor);
  return () => {
   window.removeEventListener('mousemove', moveCursor);
  };
 }, [refCursor.current]);

 return (
  <div
   className={`${
    isHovering ? '' : 'hidden'
   } fixed top-0 left-0 w-32 h-32 bg-secondary rounded-full flex items-center justify-center z-50 pointer-events-none`}
   ref={refCursor}
  >
   <div className='customcursor__follower' ref={refFollower}>
    <div className={`customcursor__follower__inner`}>
     <span className='text-labelLarge text-primary'>OPEN</span>
    </div>
   </div>
  </div>
 );
}
