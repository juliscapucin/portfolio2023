export const animateProjectsMenu = (
   imagesDiv: HTMLElement,
   linksDiv: HTMLElement
) => {
   const links = linksDiv.querySelectorAll('button');
   const images = imagesDiv.querySelectorAll('img');

   links.forEach((link, index) => {
      images[index].classList.add('transition-all');

      if (index === 0) {
         images[index].classList.add('translate-y-0');
      } else {
         images[index].classList.add('translate-y-full');
      }

      link.addEventListener('mouseenter', () => {
         images.forEach((image) => {
            if (image.classList.contains('translate-y-0'))
               image.classList.remove('translate-y-0');
            if (!image.classList.contains('translate-y-full'))
               image.classList.add('translate-y-full');
         });
         images[index].classList.remove('translate-y-full');
         images[index].classList.add('translate-y-0');
      });

      // Remove event listener / cleanup
      return () => {
         link.removeEventListener('mouseenter', () => {});
      };
   });
};
