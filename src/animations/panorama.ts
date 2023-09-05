import { gsap } from 'gsap';
import { MutableRefObject } from 'react';

export const animatePanorama = (heroRef: MutableRefObject<null>) => {
   gsap.set(heroRef.current, { xPercent: 0 });

   const tl = gsap
      .timeline({ paused: true })
      .to(heroRef.current, { xPercent: -30, ease: 'power4.inOut' });

   const container = document.querySelector('body');
   if (!container) return;

   const containerWidth = container.clientWidth - 500;

   window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX - container.getBoundingClientRect().left - 300;

      const mouseXPercentage = mouseX / containerWidth;

      tl.progress(mouseXPercentage);
   });
};
