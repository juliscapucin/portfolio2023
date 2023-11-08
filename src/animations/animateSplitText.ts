import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const animateSplitText = (textElement: HTMLElement, delay?: number) => {
   const split = new SplitText(textElement, { type: 'chars' });

   const tl = gsap.timeline();

   return tl.set(textElement, { opacity: 1 }).from(split.chars, {
      duration: 0.3,
      delay: delay || 0.5,
      yPercent: 100,
      scaleY: 1.2,
      stagger: 0.05,
      ease: 'expo.out',
   });
};
