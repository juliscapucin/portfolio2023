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

export const animateToLeft = (
   element: string,
   action: string,
   routerFunction?: () => void
) => {
   const animateToLeftElement = document.querySelector(`.${element}`);

   if (!animateToLeftElement) return;

   const timeline = gsap.timeline();

   if (action === 'enter')
      timeline.set(animateToLeftElement, {
         x: '100%',
         opacity: 1,
      });

   if (routerFunction) routerFunction();

   timeline.to(animateToLeftElement, {
      duration: 0.6,
      x: action === 'enter' ? '0%' : '-100%',
      opacity: action === 'enter' ? 1 : 0,
      ease: 'power1.inOut',
   });
};

export const animateToRight = (
   element: string,
   action: string,
   routerFunction?: () => void
) => {
   const animateToRightElement = document.querySelector(`.${element}`);

   if (!animateToRightElement) return;

   const timeline = gsap.timeline({
      onComplete: () => {
         if (routerFunction) routerFunction();
      },
   });

   if (action === 'enter')
      timeline.set(animateToRightElement, {
         x: '-100%',
         opacity: 1,
      });

   timeline.to(animateToRightElement, {
      duration: 0.6,
      x: action === 'enter' ? '0%' : '100%',
      opacity: action === 'enter' ? 1 : 0,
      ease: 'power1.inOut',
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
