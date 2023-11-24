import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ctx } from '@/animations';

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

// animate to left
// used to start pages after transitions
export const animateToLeft = (enterElement: HTMLDivElement | null) => {
   if (!enterElement) return;

   const tl = gsap.timeline();
   tl.set(enterElement, { autoAlpha: 1 });
   tl.from(enterElement, {
      xPercent: 100,
      duration: 1,
      ease: 'expo.inOut',
      onComplete: () => {
         // reset transform to avoid issues with scrolltrigger
         tl.revert();
      },
   });
};

// animate to right
// used to start pages after transitions
export const animateToRight = (enterElement: HTMLDivElement | null) => {
   if (!enterElement) return;
   const tl = gsap.timeline();
   tl.set(enterElement, { autoAlpha: 1 }).from(enterElement, {
      xPercent: -100,
      duration: 1,
      ease: 'expo.inOut',
      onComplete: () => {
         // reset transform to avoid issues with scrolltrigger
         tl.revert();
      },
   });
};

// animate horizontal
// used to start pages after transitions
export const animateHorizontal = (
   enterElement: string,
   startPos: number,
   endPos: number
) => {
   const animateHorizontalEnter = document.querySelector(
      `.${enterElement}`
   ) as HTMLDivElement;

   if (!animateHorizontalEnter) return;

   const tl = gsap.timeline();

   tl.set(animateHorizontalEnter, {
      xPercent: startPos,
   });

   tl.to(animateHorizontalEnter, {
      duration: 1,
      xPercent: endPos,
      ease: 'expo.inOut',
      onComplete: () => {
         // reset transform to avoid issues with scrolltrigger
         tl.revert();
      },
   });
};

// animate to left + router
export const animateToLeftTransition = (
   leaveElement: string,
   routerFunction: () => void
) => {
   const animateToLeftLeave = document.querySelector(`.${leaveElement}`);

   if (!animateToLeftLeave) return;

   const timeline = gsap.timeline({
      onComplete: routerFunction,
   });

   timeline.set(animateToLeftLeave, {
      x: '0%',
   });

   timeline.to(animateToLeftLeave, {
      duration: 0.3,
      x: '-100%',
      ease: 'power1.in',
   });
};

// animate to right + router
export const animateToRightTransition = (
   leaveElement: string,
   routerFunction: () => void
) => {
   const animateToRightLeave =
      leaveElement === 'shallow-page'
         ? document.querySelector('.shallow-page')
         : document.querySelector(`.${leaveElement}`);

   if (!animateToRightLeave) return;

   const timeline = gsap.timeline({
      onComplete: routerFunction,
   });

   timeline.set(animateToRightLeave, {
      x: '0%',
   });

   timeline.to(animateToRightLeave, {
      duration: 0.3,
      x: '100%',
      ease: 'power1.in',
   });
};
