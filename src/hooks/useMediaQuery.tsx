import { useEffect, useState, useCallback } from 'react';

export const useMediaQuery = (width: number) => {
 const [targetReached, setTargetReached] = useState(false);

 const updateTarget = useCallback((e: MediaQueryListEvent) => {
  if (e.matches) {
   setTargetReached(true);
  } else {
   setTargetReached(false);
  }
 }, []);

 useEffect(() => {
  const media = window.matchMedia(`(max-width: ${width}px)`);

  console.log('media', media);

  // Check on mount (callback is not called until a change occurs)
  if (media.matches) {
   setTargetReached(true);
  }

  if (media.addEventListener) {
   media.addEventListener('change', updateTarget);
  }

  if (media.removeEventListener) {
   return () => media.removeEventListener('change', updateTarget);
  }
 }, []);

 console.log('targetReached', targetReached);
 return targetReached;
};
