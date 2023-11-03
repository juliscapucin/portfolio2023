import { useRef, useEffect } from 'react';
import gsap from 'gsap';

type Props = {
 text: string;
 speed?: number;
};

const Marquee = ({ text, speed = 100 }: Props) => {
 const marqueeRef = useRef(null);

 useEffect(() => {
  if (!marqueeRef.current) return;

  const element = marqueeRef.current as HTMLDivElement;
  if (!element) return;

  const elementWidth = element.offsetWidth;

  // Calculate the duration based on the width of the element and the speed
  const duration = elementWidth / speed;

  const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });

  tl.fromTo(element, { x: 0 }, { x: -elementWidth / 2, duration: duration });

  // Cleanup the GSAP animation on component unmount
  return () => {
   tl.revert();
  };
 }, [marqueeRef]);

 return (
  <div className='overflow-hidden w-[200px] relative'>
   <div ref={marqueeRef} className='flex flex-nowrap w-fit'>
    <span className='block whitespace-nowrap px-1'>{text}</span>
    <span className='block whitespace-nowrap px-1'>{text}</span>
   </div>
  </div>
 );
};

export default Marquee;
