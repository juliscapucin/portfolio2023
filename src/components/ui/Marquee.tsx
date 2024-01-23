'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useWindowResize } from '@/hooks';

type Props = {
 speed?: number;
 children: React.ReactNode;
};

const Marquee = ({ children, speed = 50 }: Props) => {
 const marqueeRef = useRef<HTMLDivElement | null>(null);

 const { width } = useWindowResize();

 // Animate the marquee + add event listener to window resize
 useEffect(() => {
  if (!marqueeRef.current) return;
  const element = marqueeRef.current;

  // Calculate the duration based on the width of the element and the speed
  const duration = width / speed;

  const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });

  tl.fromTo(element, { xPercent: 0 }, { xPercent: -50, duration: duration });

  // Cleanup the GSAP animation on component unmount
  // Remove event listener on component unmount
  return () => {
   tl.revert();
  };
 }, [width, marqueeRef]);

 return (
  <div className='overflow-clip flex-1 relative'>
   <div ref={marqueeRef} className='flex flex-nowrap w-fit'>
    {children}
   </div>
  </div>
 );
};

export default Marquee;
