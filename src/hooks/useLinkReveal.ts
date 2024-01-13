import { useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { animateStaggerText } from '@/animations';

export function useLinkReveal(
   linkRef: React.MutableRefObject<HTMLHeadingElement | HTMLSpanElement | null>,
   variant: string,
   modalOpen?: boolean
) {
   // Default variant (footer)
   useLayoutEffect(() => {
      if (!linkRef.current && variant === 'modal') return;

      gsap.registerPlugin(ScrollTrigger);

      // Create timeline + start scrollTrigger
      let ctx = gsap.context(() => {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: linkRef.current,
               start: 'top 100%',
               //onEnter, onLeave, onEnterBack, onLeaveBack
               onEnter: () => {
                  if (!linkRef.current) return;
                  animateStaggerText(linkRef.current, 0, 0.8);
               },
            },
         });
      });

      return () => {
         ctx.revert();
      };
   }, [linkRef]);

   // Modal variant
   useLayoutEffect(() => {
      if (!linkRef.current || !modalOpen || !variant || variant !== 'modal')
         return;

      let ctx = gsap.context(() => {
         animateStaggerText(linkRef.current!, 0, 0.8);
      });

      return () => {
         ctx.revert();
      };
   }, [modalOpen, linkRef.current]);
}
