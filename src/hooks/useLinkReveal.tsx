import { useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { animateStaggerText } from '@/animations';

export function useLinkReveal(
 linkRef: React.MutableRefObject<HTMLHeadingElement | HTMLSpanElement | null>
) {
 useLayoutEffect(() => {
  if (!linkRef.current) return;

  gsap.registerPlugin(ScrollTrigger);

  // Create timeline + start scrollTrigger
  let ctx = gsap.context(() => {
   const tl = gsap.timeline({
    scrollTrigger: {
     trigger: linkRef.current,
     start: 'top 98%',
     //onEnter, onLeave, onEnterBack, onLeaveBack
     onEnter: () => {
      console.log('enter');
      animateStaggerText(linkRef.current!, 0, 0.8);
     },
     onLeaveBack: () => {
      console.log('leave back');
     },
    },
   });
  });

  return () => {
   ctx.revert();
  };
 }, [linkRef.current]);
}
