import { gsap } from 'gsap';

export const animateMobileMenu = (el: HTMLElement) => {
   gsap.set(el, {
      yPercent: -100,
   });

   gsap.to(el, {
      duration: 0.3,
      yPercent: 0,
      ease: 'power4.out',
   });

   console.log('animateMobileMenu');
};
