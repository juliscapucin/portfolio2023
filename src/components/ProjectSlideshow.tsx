import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

import { CldImage } from 'next-cloudinary';

type Props = {
 projectImages: string[];
 projectSlug: string;
};

export default function Slideshow({ projectImages, projectSlug }: Props) {
 const [index, setIndex] = useState(1);
 const slideshowRef = React.useRef<HTMLDivElement | null>(null);

 //  useEffect(() => {
 //   if (!slideshowRef.current) return;

 //   const tl = gsap.timeline();

 //   tl
 //    .to(slideshowRef.current, { opacity: 1, duration: 0.5 })
 //    .to(slideshowRef.current, {
 //     opacity: 0,
 //     duration: 0.5,
 //     delay: 4,
 //     onComplete: () => {
 //      setIndex((prevIndex) =>
 //       prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
 //      );
 //     },
 //    });
 //  }, [index]);

 useEffect(() => {
  if (!slideshowRef.current) return;

  const tl = gsap.timeline({ repeat: -1 }); // Infinite loop

  tl.to(slideshowRef.current, {
   opacity: 1,
   duration: 1,
   onComplete: () => {
    // After fade in, wait for a delay (e.g., 4 seconds)
    tl.to(slideshowRef.current, {
     opacity: 0,
     duration: 1,
     delay: 4,
     onComplete: () => {
      // Update the index to show the next slide
      setIndex((prevIndex) =>
       prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      );
     },
    });
   },
  });
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
