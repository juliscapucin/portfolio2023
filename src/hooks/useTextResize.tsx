import { useEffect, useRef } from 'react';

type TextElement = HTMLElement | null;

export const useTextResize = (textElement: TextElement): void => {
 const resizeTimeoutRef = useRef<number | null>(null);

 useEffect(() => {
  console.log('useTextResize');
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

  const handleResize = (): void => {
   const rtime = new Date();

   if (!resizeTimeoutRef.current) {
    resizeTimeoutRef.current = window.setTimeout(() => {
     if (new Date().getTime() - rtime.getTime() < 100) {
      setTimeout(handleResize, 100);
     } else {
      resizeTimeoutRef.current = null;
      resize();
     }
    }, 100);
   }
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
