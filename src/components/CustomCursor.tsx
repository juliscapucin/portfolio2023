import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { useCursorFollowerContext } from '@/context';

export default function CustomCursor() {
 const { isHovering } = useCursorFollowerContext();

 const refCursor = useRef(null);
 const refFollower = useRef(null);

 useEffect(() => {
  const cursorDiv = refCursor.current as HTMLDivElement | null;
  if (!cursorDiv) return;

  const moveCursor = (e: MouseEvent) => {
   gsap.to(cursorDiv, {
    x: e.clientX + window.scrollX - cursorDiv.clientWidth / 2,
    y: e.clientY + window.scrollY - cursorDiv.clientHeight / 2,
    duration: 0.3,
   });
  };

  window.addEventListener('mousemove', moveCursor);
  return () => {
   window.removeEventListener('mousemove', moveCursor);
  };
 }, [refCursor]);

 return (
  <div
   className={`${
    !isHovering && 'hidden'
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
