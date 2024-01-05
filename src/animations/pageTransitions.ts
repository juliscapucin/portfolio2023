import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

export const animateToFullScreen = (
   transitionStart: string,
   routerFunction: () => void
) => {
   const animationStart = document.querySelector(transitionStart);
   const animationStartParent = animationStart?.parentNode;
   const animationEnd = document.querySelector(
      '.transition-fullscreen'
   ) as HTMLDivElement;

   if (!animationStart || !animationEnd || !animationStartParent) return;

   // reset animationEnd div
   animationEnd.innerHTML = '';
   animationEnd.style.opacity = '1';

   // clone animationStart div so that original remains in place
   const animationStartClone = animationStart.cloneNode(true) as HTMLDivElement;

   // append clone to animationStart parent div
   animationStartParent.appendChild(animationStartClone);

   const translateXAnimation = () => {
      return gsap.to(animationStartClone, {
         translateX: 0,
         duration: 0.3,
         ease: 'expo.in',
         onComplete: () => {
            flipAnimation();
         },
      });
   };

   const flipAnimation = () => {
      const state = Flip.getState(animationStartClone);

      animationEnd.classList.remove('hidden');
      animationEnd.appendChild(animationStartClone);

      return Flip.from(state, {
         duration: 0.3,
         absolute: true,
         ease: 'expo.out',
         onComplete: () => {
            // Remove scrollbar from html div
            if (!document.documentElement.classList.contains('overflow-clip'))
               document.documentElement.classList.add('overflow-clip');
            // Change route
            routerFunction();
            // Change z-index of animationEnd div so to avoid flashing of the page underneath
            gsap.set(animationEnd, { zIndex: 10, delay: 0.5 });
            // Fade out + empty animationEnd div
            gsap.to(animationEnd, {
               opacity: 0,
               duration: 1,
               delay: 2,
               zIndex: 9,
               onComplete: () => {
                  animationEnd.innerHTML = '';
                  animationEnd.classList.add('hidden');
                  // Change z-index of animationEnd div back to original
                  animationEnd.style.zIndex = '50';
               },
            });
         },
      });
   };

   const tl = gsap.timeline();

   tl.add(translateXAnimation());
};

// animate horizontal
// used to start pages after transitions
export const animateHorizontal = (
   elementRef: HTMLDivElement | null,
   startPos: number,
   endPos: number,
   delay?: number
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
      }
   );
};

// animate horizontal + router
export const animateHorizontalTransition = (
   element: HTMLDivElement | null,
   startPos: number,
   endPos: number,
   routerFunction: () => void
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
