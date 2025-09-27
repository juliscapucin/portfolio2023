import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

export const animateToFullScreen = (
   elementToAnimate: string,
   routerFunction: () => void,
) => {
   const animationStart = document.querySelector(elementToAnimate);
   const animationStartParent = animationStart?.parentNode;
   const animationEnd = document.querySelector(
      '.transition-fullscreen',
   ) as HTMLDivElement;

   if (!animationStart || !animationEnd || !animationStartParent) return;

   // reset animationEnd div
   animationEnd.innerHTML = '';
   animationEnd.style.opacity = '1';

   // clone animationStart div so that original remains in place
   const animationStartClone = animationStart.cloneNode(true) as HTMLDivElement;

   animationStartClone.classList.add('clone');

   // append clone to animationStart parent div
   animationStartParent.appendChild(animationStartClone);

   const translateXAnimation = () => {
      return gsap.fromTo(
         animationStartClone,
         { x: '400px' },
         {
            x: '0px',
            duration: 2,
            ease: 'expo.out',
            zIndex: 100,
            onComplete: () => {
               flipAnimation();
            },
         },
      );
   };

   const flipAnimation = () => {
      animationEnd.classList.remove('hidden');
      const state = Flip.getState(animationStartClone);

      animationEnd.appendChild(animationStartClone);

      return Flip.from(state, {
         duration: 1,
         absolute: true,
         ease: 'expo.out',
         onComplete: () => {
            // Remove scrollbar from html div
            if (!document.documentElement.classList.contains('overflow-clip'))
               document.documentElement.classList.add('overflow-clip');
            // Change z-index of animationEnd div so to avoid flashing of the page underneath
            gsap.set(animationEnd, { zIndex: 10, delay: 0.5 });
            // Change route
            routerFunction();
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
