import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const animateSplitText = (textElement: HTMLElement) => {
   const split = new SplitText(textElement, { type: 'chars' });

   const tl = gsap.timeline();

   tl.from(split.chars, {
      duration: 0.3,
      delay: 0.5,
      yPercent: 50,
      yScale: 1.2,
      stagger: 0.05,
      ease: 'expo.out',
   });
};
