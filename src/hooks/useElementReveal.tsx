import { MutableRefObject, useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useElementReveal(
 wrapperRef: MutableRefObject<null>,
 delay: number = 0
) {
 useLayoutEffect(() => {
  let ctx = gsap.context(() => {});

  if (!wrapperRef || !wrapperRef.current) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx.add(() => {
   let tl = gsap.timeline({
    scrollTrigger: {
     trigger: wrapperRef.current,
     // as explained here: https://www.youtube.com/watch?v=SVjndrQ6v9I (min 7:20)
     toggleActions: 'play complete none reset',
     start: 'top 80%',
    },
   });

   tl.to('.mask', {
    yPercent: 100,
    duration: 0.5,
    ease: 'power1.in',
    delay: delay,
   });
  }, wrapperRef);

  return () => {
   ctx.revert();
  };
 }, [wrapperRef]);
}
