import { useEffect, useState, useCallback } from 'react';

type BreakpointState = string | null;

export const useMediaQuery = (width: number) => {
 const [targetReached, setTargetReached] = useState<BreakpointState>(null);

 const updateTarget = useCallback((e: MediaQueryListEvent) => {
  if (e.matches) {
   setTargetReached('mobile');
  } else {
   setTargetReached('desktop');
  }
 }, []);

 useEffect(() => {
  const media = window.matchMedia(`(max-width: ${width}px)`);

  // Check on mount (callback is not called until a change occurs)
  if (media.matches) {
   setTargetReached('mobile');
  } else {
   setTargetReached('desktop');
  }

  if (media.addEventListener) {
   media.addEventListener('change', updateTarget);
  }

  if (media.removeEventListener) {
   return () => media.removeEventListener('change', updateTarget);
  }
 }, []);

 if (targetReached !== null) return targetReached;
};
