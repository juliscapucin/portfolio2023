import { gsap } from 'gsap';
import { GSDevTools } from 'gsap/GSDevTools';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(GSDevTools, Flip);

export const animateToFullScreen = (
   transitionStart: string,
   routerFunction: () => void
) => {
   const animationStart = document.querySelector(transitionStart);
   const animationStartParent = animationStart?.parentNode;
   const animationEnd = document.querySelector('.transition-fullscreen');

   if (!animationStart || !animationEnd || !animationStartParent) return;

   gsap.set('.transition-fullscreen', {
      opacity: 1,
   });

   animationEnd.innerHTML = '';
   const animationStartClone = animationStart.cloneNode(true) as HTMLDivElement;

   animationStartParent.appendChild(animationStartClone);

   const state = Flip.getState(animationStartClone);

   animationEnd.classList.remove('hidden');
   animationStartClone.classList.remove('opacity-0');
   animationStartClone.classList.add('opacity-100');
   animationStartClone.classList.remove('h-0');
   animationStartClone.classList.add('h-full');
   animationStartClone.classList.remove('-top-32');
   animationStartClone.classList.add('top-0');
   animationEnd.appendChild(animationStartClone);

   document.documentElement.classList.add('overflow-hidden');

   Flip.from(state, {
      duration: 0.6,
      absolute: true,
      ease: 'power4.inOut',
      onComplete: () => {
         routerFunction();
         const timeline = gsap.timeline();
         timeline.to('.transition-fullscreen', {
            duration: 0.5,
            opacity: 0,
            ease: 'power1.inOut',
            delay: 0.5,
            onComplete: () => {
               animationEnd.innerHTML = '';
            },
         });
      },
   });
};

export const animateToLeft = (enterElement: string) => {
   const animateToLeftEnter = document.querySelector(`.${enterElement}`);

   if (!animateToLeftEnter) return;

   const timeline = gsap.timeline();

   timeline.set(animateToLeftEnter, {
      x: '100%',
   });

   timeline.to(animateToLeftEnter, {
      duration: 0.3,
      x: '0%',
      ease: 'power4.out',
   });
};

export const animateToRight = (enterElement: string) => {
   const animateToRightEnter = document.querySelector(`.${enterElement}`);

   if (!animateToRightEnter) return;

   const timeline = gsap.timeline();

   timeline.set(animateToRightEnter, {
      x: '-100%',
   });

   timeline.to(animateToRightEnter, {
      duration: 0.3,
      x: '0%',
      ease: 'power4.out',
   });
};

export const animateToLeftTransition = (
   leaveElement: string,
   routerFunction: () => void
) => {
   const animateToLeftLeave = document.querySelector(`.${leaveElement}`);

   if (!animateToLeftLeave) return;

   const timeline = gsap.timeline({
      onComplete: () => {
         if (routerFunction) {
            routerFunction();
         }
      },
   });

   timeline.set(animateToLeftLeave, {
      x: '0%',
   });

   timeline.to(animateToLeftLeave, {
      duration: 0.3,
      x: '-100%',
      ease: 'power4.in',
   });
};

export const animateToRightTransition = (
   leaveElement: string,
   routerFunction: () => void
) => {
   const animateToRightLeave = document.querySelector(`.${leaveElement}`);

   if (!animateToRightLeave) return;

   const timeline = gsap.timeline({
      onComplete: () => {
         if (routerFunction) routerFunction();
      },
   });

   timeline.set(animateToRightLeave, {
      x: '0%',
   });

   timeline.to(animateToRightLeave, {
      duration: 0.3,
      x: '100%',
      ease: 'power4.inOut',
   });
};

export const animateToShallowPage = (
   element: string,
   routerFunction: () => void
) => {
   const elementToSelect = document.querySelector(`.${element}`);
   const elementToAnimate = elementToSelect?.parentElement;

   const timeline = gsap.timeline();

   if (!elementToAnimate) return;
   timeline
      .to(
         elementToAnimate,
         {
            duration: 1,
            scaleY: 10,
            zIndex: 100,
            ease: 'power4.inOut',
         },
         0
      )
      .to(
         elementToSelect,
         {
            duration: 1,
            scaleY: 0.1,
            ease: 'power4.inOut',
         },
         0
      );
};

const animateToTransparent = () => {
   const animateOpacity = gsap.utils.toArray(
      '.animate-opacity'
   ) as HTMLElement[];

   if (animateOpacity.length === 0) return;
   animateOpacity.forEach((element) => {
      gsap.set(element, {
         opacity: 0,
      });
   });
};
