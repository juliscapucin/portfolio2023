import { useEffect, useRef } from 'react';

type TextElement = HTMLElement | null;

export const useTextResize = (textElement: TextElement): void => {
 const resizeTimeoutRef = useRef<number | null>(null);

 useEffect(() => {
  console.log(textElement);
  if (!textElement) return;

  const resize = () => {
   textElement.style.fontSize = '40rem';

   while (textElement.offsetWidth > textElement.parentElement!.offsetWidth) {
    const currentSize = parseInt(
     window.getComputedStyle(textElement).fontSize,
     10
    );
    textElement.style.fontSize = `${currentSize - 1}px`;
   }
  };

  // Debounce the resize event
  const handleResize = () => {
   if (resizeTimeoutRef.current) {
    clearTimeout(resizeTimeoutRef.current);
   }

   resizeTimeoutRef.current = window.setTimeout(() => {
    resize();
    resizeTimeoutRef.current = null;
   }, 100);
  };

  // Execute once on mount
  resize();

  // Attach the resize listener
  window.addEventListener('resize', handleResize);

  // Cleanup the listener on unmount
  return () => {
   window.removeEventListener('resize', handleResize);

   if (resizeTimeoutRef.current) {
    clearTimeout(resizeTimeoutRef.current);
   }
  };
 }, [textElement]);
};
