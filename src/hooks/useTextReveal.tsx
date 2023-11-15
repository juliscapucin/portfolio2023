import { useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { animateSplitText } from '@/animations';

export function useTextReveal(
 textRef: React.MutableRefObject<HTMLHeadingElement | HTMLSpanElement | null>
) {
 useLayoutEffect(() => {
  if (!textRef || !textRef.current) return;

  gsap.registerPlugin(ScrollTrigger);

  // Create timeline + start scrollTrigger
  let ctx = gsap.context(() => {
   const tl = gsap.timeline({
    scrollTrigger: {
     trigger: textRef.current,
     start: 'top 80%',
     //onEnter, onLeave, onEnterBack, onLeaveBack
     onEnter: () => {
      animateSplitText(textRef.current!, 200, 0);
     },
     onLeaveBack: () => {
      gsap.set(textRef.current, { opacity: 0 });
     },
    },
   });
  });

  return () => {
   ctx.revert();
  };
 }, [textRef]);
}
