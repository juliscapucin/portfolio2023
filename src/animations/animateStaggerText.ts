import gsap from 'gsap';

export const animateStaggerText = (
   divElement: HTMLElement,
   delay?: number,
   duration?: number
) => {
   gsap.fromTo(
      divElement.children,
      { yPercent: 400 },
      {
         duration: duration || 0.3,
         delay: delay || 0,
         yPercent: 0,
         stagger: 0.1,
         ease: 'expo.out',
      }
   );
};
