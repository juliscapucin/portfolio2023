'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef, useState } from 'react';

export default function ElementReveal({
 children,
}: {
 children: React.ReactNode;
}) {
 const [isVisible, setIsVisible] = useState(false);
 const wrapperRef = useRef(null);
 const scrollSpeedThreshold = 100; // Adjust this threshold as needed
 let lastScrollTime = Date.now();

 //  useEffect(() => {
 //   if (!wrapperRef.current) return;

 //   const observer = new IntersectionObserver(
 //    (entries) => {
 //     entries.forEach((entry) => {
 //      if (entry.isIntersecting) {
 //       setIsVisible(true);
 //       // Stop observing after it's triggered
 //       observer.unobserve(entry.target);
 //      }
 //     });
 //    },
 //    {
 //     threshold: 0.5, // 50% of the item is visible
 //    }
 //   );

 //   const { current } = wrapperRef;
 //   if (current) {
 //    observer.observe(current);
 //   }

 //   return () => {
 //    if (current) {
 //     observer.unobserve(current);
 //    }
 //   };
 //  }, [wrapperRef]);

 useEffect(() => {
  if (!wrapperRef.current) return;

  let ctx = gsap.context(() => {
   let tl = gsap.timeline({
    scrollTrigger: {
     trigger: wrapperRef.current,
     toggleActions: 'restart none none reset',
    },
   });

   tl.to('.mask', {
    yPercent: 100,
    duration: 2,
    ease: 'power2.inOut',
   });
  }, wrapperRef);

  return () => {
   ctx.revert();
  };
 }, [wrapperRef]);

 return (
  <div ref={wrapperRef} className='relative w-full h-full overflow-hidden z-0'>
   <div className='mask absolute top-0 left-0 w-full h-full bg-secondary z-20'></div>
   {children}
  </div>
 );
}
