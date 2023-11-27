import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { CldImage, CldVideoPlayer } from 'next-cloudinary';

const projectImages = [
 '01',
 '02',
 '03',
 '04',
 '05',
 '06',
 '07',
 '08',
 '09',
 '10',
];

const delay = 5000;

export default function ShowreelSlideshow() {
 const [slideIndex, setSlideIndex] = useState(1);
 const slideshowRef = useRef<HTMLDivElement | null>(null);
 const timeoutRef = useRef<NodeJS.Timeout | null>(null);

 //  const resetTimeout = () => {
 //   if (timeoutRef.current) {
 //    clearTimeout(timeoutRef.current);
 //   }
 //  };

 //  useEffect(() => {
 //   resetTimeout();
 //   timeoutRef.current = setTimeout(
 //    () =>
 //     setSlideIndex((prevIndex) =>
 //      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
 //     ),
 //    delay
 //   );

 //   return () => {
 //    resetTimeout();
 //   };
 //  }, [slideIndex]);

 return (
  <div ref={slideshowRef} className='slideshow relative w-full'>
   {projectImages.map((image, index) => {
    return (
     <div
      key={`showreel-${index}`}
      className='w-[500px] aspect-square overflow-clip relative mt-1'
     >
      <Image
       className='absolute top-0 left-0 z-10'
       src='/ipad-vazado.png'
       width={500}
       height={500}
       alt='Picture of the author'
      />
      {/* <video src='/showreel-01.mov' controls autoPlay /> */}
     </div>
    );
   })}
  </div>
 );
}
