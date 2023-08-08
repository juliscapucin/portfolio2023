import { gsap } from 'gsap';
import { GSDevTools } from 'gsap/GSDevTools';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(GSDevTools, Flip);

export const toggleModal = (element: HTMLElement) => {
   console.log('hi');
};

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
   animationStartClone.classList.remove('h-16', 'w-16');
   animationStartClone.classList.add('h-full', 'w-full');
   animationEnd.appendChild(animationStartClone);

   document.documentElement.classList.add('overflow-hidden');

   Flip.from(state, {
      duration: 1,
      absolute: true,
      ease: 'power1.inOut',
      onComplete: () => {
         routerFunction();
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
   element: string,
   routerFunction: () => void
) => {
   const animateToRightElement = document.querySelector(`.${element}`);

   if (!animateToRightElement) return;

   const timeline = gsap.timeline({
      onComplete: () => {
         if (routerFunction) routerFunction();
      },
   });

   timeline.set(animateToRightElement, {
      x: '-100%',
   });

   timeline.to(animateToRightElement, {
      duration: 0.3,
      x: '0%',
      ease: 'power4.inOut',
   });
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
