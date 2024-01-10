'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

type Props = {
 speed?: number;
 children: React.ReactNode;
};

const Marquee = ({ children, speed = 100 }: Props) => {
 const marqueeRef = useRef(null);
 const [elementWidth, setElementWidth] = useState(0);

 // Get the width of the element
 useEffect(() => {
  if (!marqueeRef.current) return;
  const element = marqueeRef.current as HTMLDivElement;
  if (!element) return;

  setElementWidth(element.offsetWidth);
 }, [marqueeRef]);

 // Animate the marquee + add event listener to window resize
 useEffect(() => {
  const element = marqueeRef.current;

  function handleResize() {
   setElementWidth(elementWidth);
  }

  window.addEventListener('resize', handleResize);

  // Calculate the duration based on the width of the element and the speed
  const duration = elementWidth / speed;

  const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });

  tl.fromTo(element, { xPercent: 0 }, { xPercent: -50, duration: duration });

  // Cleanup the GSAP animation on component unmount
  // Remove event listener on component unmount
  return () => {
   tl.revert();
   window.removeEventListener('resize', handleResize);
  };
 }, [elementWidth]);

 return (
  <div className='overflow-hidden flex-1 relative'>
   <div ref={marqueeRef} className='flex flex-nowrap w-fit'>
    {children}
   </div>
  </div>
 );
};

export default Marquee;
