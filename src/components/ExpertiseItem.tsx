'use client';

import { useLayoutEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type Props = {
 expertise: string;
};

export default function ExpertiseItem({ expertise }: Props) {
 const [isTriggered, setIsTriggered] = useState(false);
 const expertiseWrapperRef = useRef<HTMLDivElement | null>(null);

 useLayoutEffect(() => {
  if (!expertiseWrapperRef.current) return;

  gsap.registerPlugin(ScrollTrigger);

  let ctx = gsap.context(() => {
   const tl = gsap.timeline({
    scrollTrigger: {
     trigger: expertiseWrapperRef.current,
     start: 'top 100%',
     end: 'bottom 20%',
     // markers: true,
     //  toggleActions: 'play none none reverse',
     onEnter: () => {
      setIsTriggered(true);
      tl.play();
     },
     onLeaveBack: () => {
      setIsTriggered(false);
      tl.reverse();
     },
    },
   });

   tl.fromTo(
    expertiseWrapperRef.current,
    { yPercent: 100 },
    {
     yPercent: -50,
     duration: 0.5,
     ease: 'back.out(1)',
     delay: 0.2,
    }
   );
  });

  return () => ctx.revert();
 }, [expertiseWrapperRef]);

 return (
  <div className='mt-8 h-16 overflow-clip'>
   <div ref={expertiseWrapperRef}>
    <li className='text-titleLarge font-light'>{expertise}</li>
    <li className='text-titleLarge font-light'>{expertise}</li>
    <div
     className={`h-[1px] bg-secondary transition-transform duration-500 delay-500 ${
      isTriggered ? '' : '-translate-x-full'
     }`}
    ></div>
   </div>
  </div>
 );
}
