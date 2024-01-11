import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function useFakeParallax(
   wrapperDiv: HTMLDivElement | null,
   breakpoint: string | undefined
) {
   useLayoutEffect(() => {
      // Only run this effect on desktop
      if (breakpoint !== 'desktop') return;

      let ctx = gsap.context(() => {});
      const parentDiv = wrapperDiv?.parentElement;

      if (!wrapperDiv || !parentDiv) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx.add(() => {
         let tl = gsap.timeline({
            scrollTrigger: {
               trigger: wrapperDiv,
               toggleActions: 'play complete none none',
               start: 'top 80%',
               scrub: 1.5,
            },
         });

         tl.to(wrapperDiv, {
            y: -200,
         });
      }, wrapperDiv);

      return () => {
         ctx.revert();
      };
   }, [wrapperDiv, breakpoint]);
}
