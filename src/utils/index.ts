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
   const animationEnd = document.querySelector('.transition-fullscreen');

   gsap.set('.transition-fullscreen', {
      opacity: 1,
   });

   if (!animationStart || !animationEnd) return;
   animationEnd.innerHTML = '';
   const animationStartClone = animationStart.cloneNode(true);

   if (!animationStartClone) return;
   animationStart.parentNode?.appendChild(animationStartClone);

   const animationStart2 = document.querySelector(transitionStart);

   if (!animationStart2) return;
   const state = Flip.getState(animationStart2);

   animationEnd.classList.remove('hidden');
   animationStart2.classList.remove('h-16', 'w-16');
   animationStart2.classList.add('h-full', 'w-full');
   animationEnd.appendChild(animationStart2);

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
   const fullscreen = document.querySelector('.transition-fullscreen');
   if (fullscreen) gsap.set(fullscreen, { opacity: 0 });

   gsap.to('.animate-left', {
      duration: 1,
      x: '-100%',
      ease: 'power1.inOut',
      onComplete: () => {
         routerFunction();
      },
   });

   document.documentElement.classList.remove('overflow-hidden');
};
