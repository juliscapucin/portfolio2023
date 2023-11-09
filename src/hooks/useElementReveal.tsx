import { MutableRefObject, useEffect, useRef, useState } from 'react';

export default function ElementReveal(wrapperRef: MutableRefObject<null>) {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  if (!wrapperRef.current) return;

  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      setIsVisible(true);
      // Stop observing after it's triggered
      observer.unobserve(entry.target);
     }
    });
   },
   {
    threshold: 0.5, // 50% of the item is visible
   }
  );

  const { current } = wrapperRef;
  if (current) {
   observer.observe(current);
  }

  return () => {
   if (current) {
    observer.unobserve(current);
   }
  };
 }, [wrapperRef]);

 return isVisible;
}
