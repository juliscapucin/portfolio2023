import { useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useElementReveal(
   wrapperDiv: HTMLDivElement | null,
   hasParallax: boolean,
   delay: number = 0
) {
   useLayoutEffect(() => {
      let ctx = gsap.context(() => {});

      if (!wrapperDiv) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx.add(() => {
         let tl = gsap.timeline({
            scrollTrigger: {
               trigger: wrapperDiv,
               start: 'top 80%',
               scrub: 1,
            },
         });

         tl.from(wrapperDiv, {
            yPercent: hasParallax ? 50 : 0,
            duration: 0.5,
            ease: 'power1.out',
         });
      }, wrapperDiv);

      ctx.add(() => {
         let tl = gsap.timeline({
            scrollTrigger: {
               trigger: wrapperDiv,
               // as explained here: https://www.youtube.com/watch?v=SVjndrQ6v9I (min 7:20)
               toggleActions: 'play complete none none',
               start: 'top 80%',
            },
         });

         tl.to('.mask', {
            yPercent: 100,
            duration: 0.5,
            ease: 'power1.in',
            delay: delay,
         });
      }, wrapperDiv);

      return () => {
         ctx.revert();
      };
   }, [wrapperDiv]);
}
