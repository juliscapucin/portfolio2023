import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MouseEvent } from 'react';
// import { useRouter } from 'next/navigation';

import { gsap } from 'gsap';
import { GSDevTools } from 'gsap/GSDevTools';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(GSDevTools, Flip);

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

// export const handleShallowClick = (
//    event: MouseEvent<HTMLButtonElement>,
//    slug: string
// ): void => {
//    // event.preventDefault();
//    const router = useRouter();
//    const url = new URL(window.location.href);
//    const baseURL = `${url.protocol}//${url.host}/`;
//    setTimeout(() => {
//       console.log('waiting');
//       // window.location.href = `${baseURL}${slug}`;
//       router.push('/About', { shallow: true });
//    }, 1000);
// };

export const toggleModal = (element: HTMLElement) => {
   console.log('hi');
};

export const animateToFullScreen = (
   transitionStart: string,
   routerFunction: () => void
) => {
   const animationStart = document.querySelector(transitionStart);
   const animationEnd = document.querySelector('.transition-fullscreen');
   const state = Flip.getState(animationStart);

   if (!animationStart || !animationEnd) return;

   animationEnd!.innerHTML = '';
   animationEnd?.classList.remove('hidden');
   animationStart?.classList.remove('h-16', 'w-16');
   animationStart?.classList.add('h-full', 'w-full');
   animationEnd?.appendChild(animationStart as Node);

   Flip.from(state, {
      duration: 1,
      absolute: true,
      ease: 'power1.inOut',
      onComplete: () => {
         routerFunction();
         // animationEnd?.classList.add('hidden');
      },
   });
};
