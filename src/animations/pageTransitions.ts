import { gsap } from 'gsap';

// animate horizontal
// used to start pages after transitions
export const animateHorizontal = (
   elementRef: HTMLDivElement | null,
   startPos: number,
   endPos: number,
   delay?: number,
) => {
   if (!elementRef) return;

   const tl = gsap.timeline();

   tl.set(elementRef, {
      overflow: 'hidden',
   }).fromTo(
      elementRef,
      { xPercent: startPos },
      {
         duration: 1,
         delay: delay || 0,
         xPercent: endPos,
         ease: 'expo.inOut',
         onComplete: () => {
            // reset transform to avoid issues with scrolltrigger
            tl.revert();
         },
      },
   );
};

// animate horizontal + router
export const animateHorizontalTransition = (
   element: HTMLDivElement | null,
   startPos: number,
   endPos: number,
   routerFunction: () => void,
) => {
   if (!element) return;

   const timeline = gsap.timeline({
      onComplete: routerFunction,
   });

   timeline.set(element, {
      xPercent: startPos,
   });

   timeline.to(element, {
      duration: 0.3,
      xPercent: endPos,
      ease: 'power1.in',
   });
};
