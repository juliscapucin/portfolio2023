import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import { CustomCursorProvider } from '@/context';

interface CustomCursorProps {
 isHovering: boolean;
}

export default function CustomCursor() {
 const refCursor = useRef(null);
 const refFollower = useRef(null);

 //  useCustomCursor(refCursor.current, refFollower.current);

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
  <CustomCursorProvider>
   <div
    className='fixed top-0 left-0 w-32 h-32 bg-colorWhite rounded-full flex items-center justify-center z-50 pointer-events-none'
    ref={refCursor}
   >
    <div className='customcursor__follower' ref={refFollower}>
     <div
      className={`customcursor__follower__inner`}
      //   className={`customcursor__follower__inner ${isHovering ? 'active' : ''}`}
     >
      <span className='text-labelLarge text-colorWhite dark:text-colorBlack'>
       OPEN
      </span>
     </div>
    </div>
   </div>
  </CustomCursorProvider>
 );
}
