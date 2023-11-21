import React, { useState, useEffect, useRef } from 'react';

import { CldImage } from 'next-cloudinary';
import ProjectImage from './ProjectImage';

type Props = {
 projectImages: string[];
 projectSlug: string;
};

const delay = 5000;

export default function Slideshow({ projectImages, projectSlug }: Props) {
 const [slideIndex, setSlideIndex] = useState(1);
 const slideshowRef = useRef<HTMLDivElement | null>(null);
 const timeoutRef = useRef<NodeJS.Timeout | null>(null);

 const resetTimeout = () => {
  if (timeoutRef.current) {
   clearTimeout(timeoutRef.current);
  }
 };

 //  useEffect(() => {
 //   resetTimeout();
 //   timeoutRef.current = setTimeout(
 //    () =>
 //     setIndex((prevIndex) =>
 //      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
 //     ),
 //    delay
 //   );

 //   return () => {
 //    resetTimeout();
 //   };
 //  }, [index]);

 useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(
   () =>
    setSlideIndex((prevIndex) =>
     prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    ),
   delay
  );

  return () => {
   resetTimeout();
  };
 }, [slideIndex]);

 return (
  <div
   ref={slideshowRef}
   className='slideshow relative w-full aspect-square flex flex-nowrap overflow-hidden'
  >
   {projectImages.map((index) => {
    return (
     <div
      className='min-w-full transition-transform duration-200'
      key={`projectSlideshow-${index}`}
      style={{ transform: `translate3d(${-slideIndex * 100}%, 0, 0)` }}
     >
      <ProjectImage projectSlug={projectSlug} image={index} />
     </div>
    );
   })}
  </div>
 );
}
