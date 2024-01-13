import { useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { animateSplitText } from '@/animations';

export function useTextReveal(
   textRef: React.MutableRefObject<HTMLHeadingElement | HTMLSpanElement | null>,
   variant?: string,
   modalOpen?: boolean
) {
   // Default variant (footer)
   useLayoutEffect(() => {
      if (!textRef || !textRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      // Create timeline + start scrollTrigger
      let ctx = gsap.context(() => {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: textRef.current,
               start: `top ${variant === 'modal' ? '100%' : '90%'}}`,
               //onEnter, onLeave, onEnterBack, onLeaveBack
               onEnter: () => {
                  gsap.set(textRef.current!, { yPercent: 0 });
                  animateSplitText(textRef.current!, 200, 0);
               },
               onLeaveBack: () => {
                  gsap.to(textRef.current!, {
                     yPercent: 100,
                     duration: 0.3,
                     ease: 'back.in(1)',
                  });
               },
            },
         });
      });

      return () => {
         ctx.revert();
      };
   }, [textRef]);

   // Modal variant
   useLayoutEffect(() => {
      if (!textRef || !textRef.current || !modalOpen) return;

      let ctx = gsap.context(() => {
         animateSplitText(textRef.current!, 200, 0);
      });

      return () => {
         ctx.revert();
      };
   }, [modalOpen, textRef]);
}
