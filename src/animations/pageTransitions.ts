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

   // the Flip animation
   const flipAnimation = () => {
      const state = Flip.getState(animationStartClone);

      animationEnd.classList.remove('hidden');
      animationEnd.appendChild(animationStartClone);

      Flip.from(state, {
         duration: 0.3,
         absolute: true,
         ease: 'expo.out',
         onComplete: () => {
            // Remove scrollbar from html div
            document.documentElement.classList.add('overflow-hidden');
            // Change route
            routerFunction();
            // Fade out + empty animationEnd div
            gsap.to('.transition-fullscreen', {
               opacity: 0,
               duration: 0.5,
               delay: 0.5,
               onComplete: () => {
                  animationEnd.innerHTML = '';
                  animationEnd.classList.add('hidden');
               },
            });
         },
      });
   };

   gsap.to(animationStartClone, {
      translateX: 0,
      duration: 0.3,
      ease: 'expo.in',
      onComplete: () => {
         flipAnimation();
      },
   });
};

// animate to left
// used to start pages after transitions
export const animateToLeft = (enterElement: string) => {
   const animateToLeftEnter = document.querySelector(`.${enterElement}`);

   if (!animateToLeftEnter) return;

   const timeline = gsap.timeline();

   timeline.set(animateToLeftEnter, {
      x: '100%',
   });

   timeline.to(animateToLeftEnter, {
      duration: 1,
      x: '0%',
      ease: 'expo.inOut',
   });
};

// animate horizontal
// used to start pages after transitions
export const animateHorizontal = (
   enterElement: string,
   startPos: number,
   endPos: number
) => {
   const animateHorizontalEnter = document.querySelector(`.${enterElement}`);

   if (!animateHorizontalEnter) return;

   const timeline = gsap.timeline();

   timeline.set(animateHorizontalEnter, {
      xPercent: startPos,
   });

   timeline.to(animateHorizontalEnter, {
      duration: 1,
      xPercent: endPos,
      ease: 'expo.inOut',
   });
};

// animate to right
// used to start pages after transitions
export const animateToRight = (enterElement: string) => {
   const animateToRightEnter = document.querySelector(`.${enterElement}`);

   if (!animateToRightEnter) return;

   const timeline = gsap.timeline();

   timeline.set(animateToRightEnter, {
      x: '-100%',
   });

   timeline.to(animateToRightEnter, {
      duration: 1,
      x: '0%',
      ease: 'expo.inOut',
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
      duration: 1,
      x: '-100%',
      ease: 'expo.out',
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
      duration: 1,
      x: '100%',
      ease: 'expo.out',
   });
};
