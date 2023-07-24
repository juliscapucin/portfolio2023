import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MouseEvent } from 'react';
// import { useRouter } from 'next/navigation';

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

export const animateToLeft = (routerFunction: () => void) => {
   const animationFullScreen = document.querySelector('.transition-fullscreen');

   gsap.set('.animate-left', {
      y: '-100%',
   });

   if (!animationFullScreen) return;
   animationFullScreen?.classList.add('hidden');
   animationFullScreen.innerHTML = '';

   const timeline = gsap.timeline({
      onComplete: () => {
         routerFunction();
      },
   });

   timeline
      .to('.animate-left', {
         duration: 0.5,
         y: '0%',
         ease: 'power1.inOut',
         onComplete: animateToTransparent,
      })
      .to('.animate-left', {
         duration: 0.5,
         x: '-100%',
         ease: 'power1.inOut',
      });

   document.documentElement.classList.remove('overflow-hidden');
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
