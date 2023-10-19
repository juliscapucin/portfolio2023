export const animateMobileMenu = (el: HTMLElement) => {
   if (el.classList.contains('opacity-0')) el.classList.remove('opacity-y-0');

   el.classList.toggle('-translate-y-full');
};
