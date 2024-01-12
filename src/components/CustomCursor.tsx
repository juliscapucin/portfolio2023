import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Props = {
 isHovering: boolean;
 variant: string;
};

export default function CustomCursor({ isHovering, variant }: Props) {
 const refCursor = useRef(null);

 useEffect(() => {
  const cursorDiv = refCursor.current as HTMLDivElement | null;

  if (!cursorDiv) return;

  const moveCursor = (e: MouseEvent) => {
   gsap.to(cursorDiv, {
    x: e.clientX - cursorDiv.clientWidth / 1.5,
    y: e.clientY - cursorDiv.clientHeight / 1.5,
    duration: 0.3,
   });
  };

  window.addEventListener('mousemove', moveCursor);
  return () => {
   window.removeEventListener('mousemove', moveCursor);
  };
 }, [refCursor, variant]);

 return (
  <div
   className={`${!isHovering && 'hidden'} ${
    variant === 'image' ? 'w-96 h-96 bg-primary/30' : 'w-24 h-24 bg-secondary'
   } fixed top-0 left-0 rounded-full flex items-center justify-center z-15 pointer-events-none cursor-pointer border border-secondary`}
   ref={refCursor}
  >
   <div className='customcursor__follower__inner'>
    <span
     className={`${
      variant === 'image'
       ? 'text-headlineLarge font-extralight'
       : 'text-labelLarge text-primary'
     }`}
    >
     OPEN
    </span>
   </div>
  </div>
 );
}
