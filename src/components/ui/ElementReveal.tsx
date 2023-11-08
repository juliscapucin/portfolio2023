import { useEffect, useRef, useState } from 'react';

export default function ElementReveal({
 children,
}: {
 children: React.ReactNode;
}) {
 const [isVisible, setIsVisible] = useState(false);
 const wrapperRef = useRef(null);

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
    threshold: 0.7, // 50% of the item is visible
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

 return (
  <div ref={wrapperRef} className='relative w-full h-full overflow-hidden z-0'>
   <div
    className={`absolute top-0 left-0 w-full h-full bg-primary z-20 transition-transform duration-500 ease-in-out ${
     isVisible ? 'translate-y-full' : 'translate-y-0'
    }`}
   ></div>
   {children}
  </div>
 );
}
