'use client';

import Image from 'next/image';
import { ShallowPage } from '@/components';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Page({ params }: any) {
 const imageRef = useRef(null);

 useEffect(() => {
  gsap.to('.transition-fullscreen', {
   duration: 1,
   opacity: 0,
   delay: 0.5,
  });
 }, [imageRef]);

 return (
  <ShallowPage>
   <div className='w-screen h-screen'>
    <div className={`relative h-full w-full overflow-hidden`}>
     <Image
      src='/pool.avif'
      alt='photo'
      className='object-cover '
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
      priority
      ref={imageRef}
     />
    </div>
   </div>
   <h1 className='text-7xl z-35'>{params.slug} intercepted</h1>
  </ShallowPage>
 );
}
