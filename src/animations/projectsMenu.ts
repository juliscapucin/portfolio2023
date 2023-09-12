import { gsap } from 'gsap';

export const animateProjectsMenu = (
   imagesDiv: HTMLElement,
   linksDiv: HTMLElement
) => {
   const links = linksDiv.querySelectorAll('button');
   const images = imagesDiv.querySelectorAll('img');

   links.forEach((item, index) => {
      gsap.set(images[index], { yPercent: -100 });
      gsap.set(images[0], { yPercent: 0 });

      //   image reveal animation
      const animation = gsap.to(images[index], {
         duration: 0.2,
         yPercent: 0,
         ease: 'ease-in-out',
      });

      item.addEventListener('mouseenter', () => animation.play());
      item.addEventListener('mouseleave', () => animation.reverse());

      console.log('animate');

      //   initialization
      animation.reverse();
   });
};
