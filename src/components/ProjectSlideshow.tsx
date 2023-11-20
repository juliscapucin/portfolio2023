import React, { useState, useEffect, useRef } from 'react';

import { CldImage } from 'next-cloudinary';

type Props = {
 projectImages: string[];
 projectSlug: string;
};

const delay = 5000;

export default function Slideshow({ projectImages, projectSlug }: Props) {
 const [index, setIndex] = useState(1);
 const slideshowRef = useRef<HTMLDivElement | null>(null);
 const timeoutRef = useRef<NodeJS.Timeout | null>(null);

 const resetTimeout = () => {
  if (timeoutRef.current) {
   clearTimeout(timeoutRef.current);
  }
 };

 useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(
   () =>
    setIndex((prevIndex) =>
     prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    ),
   delay
  );

  return () => {
   resetTimeout();
  };
 }, [index]);

 return (
  <div className='slideshow relative w-full aspect-square overflow-hidden'>
   <div ref={slideshowRef} className='relative w-full aspect-square'>
    <CldImage
     src={`portfolio2023/work/${projectSlug}/${projectImages[index]}`}
     alt='photo'
     className='w-full object-cover z-50'
     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
     fill
    />
   </div>
   <CldImage
    src={`portfolio2023/work/bg-ipad`}
    alt='photo'
    className='absolute w-full object-cover top-0 left-0 z-0'
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
    quality={100}
    fill
   />
  </div>
 );
}
