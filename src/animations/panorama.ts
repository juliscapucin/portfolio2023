import { gsap } from 'gsap';

export const animatePanorama = (heroRef: HTMLElement) => {
   if (!heroRef) return;

   gsap.set(heroRef, { xPercent: 0 });

   const tl = gsap
      .timeline({ paused: true })
      .to(heroRef, { xPercent: -30, ease: 'power4.inOut' });

   const container = document.querySelector('body');
   if (!container) return;

   const containerWidth = container.clientWidth - 500;

   window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX - container.getBoundingClientRect().left - 300;

      const mouseXPercentage = mouseX / containerWidth;
      if (heroRef.getBoundingClientRect().bottom > e.clientY) {
         gsap.to(tl, { duration: 1, progress: mouseXPercentage });
      }
   });

   //   initialization
   tl.reverse();
};
