import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor({ isHovering }: { isHovering: boolean }) {
 const refCursor = useRef(null);

 useEffect(() => {
  const cursorDiv = refCursor.current as HTMLDivElement | null;

  if (!cursorDiv) return;

  const moveCursor = (e: MouseEvent) => {
   gsap.to(cursorDiv, {
    x: e.clientX + window.scrollX - cursorDiv.clientWidth,
    y: e.clientY + window.scrollY - cursorDiv.clientHeight,
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
   } fixed top-0 left-0 w-24 h-24 bg-secondary rounded-full flex items-center justify-center z-100 pointer-events-none cursor-pointer`}
   ref={refCursor}
  >
   <div className='customcursor__follower__inner'>
    <span className='text-labelLarge text-primary'>OPEN</span>
   </div>
  </div>
 );
}
