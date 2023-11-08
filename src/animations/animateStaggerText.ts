import gsap from 'gsap';

export const animateStaggerText = (
   divElement: HTMLElement,
   delay?: number,
   duration?: number
) => {
   gsap.fromTo(
      divElement.children,
      { yPercent: 400, scaleY: 1.2 },
      {
         duration: duration || 0.3,
         delay: delay || 0,
         yPercent: 0,
         scaleY: 1,
         stagger: 0.1,
         ease: 'expo.out',
      }
   );
};
