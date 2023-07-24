'use client';

import Image from 'next/image';
import { ShallowPage } from '@/components';
import { useEffect } from 'react';

export default function Page({ params }: any) {
 useEffect(() => {
  const handleScroll = () => {
   if (window.scrollY === 0) {
    document.querySelector('.transition-fullscreen')?.classList.add('hidden');
   }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 return (
  <ShallowPage>
   <div className='w-screen h-screen bg-colorBlack'>
    <div className={`relative h-full w-full overflow-hidden`}>
     <Image
      src='/pool.avif'
      alt='photo'
      className='object-cover '
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
      priority
     />
    </div>
   </div>
   <h1 className='text-7xl z-35'>{params.slug} intercepted</h1>
  </ShallowPage>
 );
}
