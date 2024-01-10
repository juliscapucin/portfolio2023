import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function useFakeParallax(wrapperDiv: HTMLDivElement | null) {
   // if (wrapperDiv === null) return;

   useLayoutEffect(() => {
      let ctx = gsap.context(() => {});

      if (!wrapperDiv) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx.add(() => {
         let tl = gsap.timeline({
            scrollTrigger: {
               trigger: wrapperDiv,
               toggleActions: 'play complete none none',
               start: 'top 80%',
               scrub: 1,
            },
         });

         tl.fromTo(
            wrapperDiv,
            {
               yPercent: 5,
            },
            { yPercent: 1 }
         ).to(wrapperDiv, { yPercent: 5 });
      }, wrapperDiv);

      return () => {
         ctx.revert();
      };
   }, [wrapperDiv]);
}
