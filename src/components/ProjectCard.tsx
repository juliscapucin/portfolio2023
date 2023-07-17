'use client';

import { MouseEvent, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GridDiv } from '@/components';
import { useRouter } from 'next/navigation';
import { animateToFullScreen } from '@/utils';

interface ProjectCardProps {
 id: string;
 title: string;
 slug: string;
 coverImage: string;
}

export default function ProjectCard({
 title,
 id,
 slug,
 coverImage,
}: ProjectCardProps) {
 const router = useRouter();

 const handleShallowClick = (): void => {
  router.push(`/${slug}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 return (
  <>
   <div className='transition-fullscreen w-screen h-screen top-0 left-0 fixed z-10 hidden pointer-events-none'></div>

   <GridDiv top={false} right={true} bottom={true} left={true}>
    <button
     className='h-full w-full p-8 overflow-hidden flex justify-start items-center text-7xl hover:opacity-50 transition-opacity'
     onClick={() => {
      animateToFullScreen(`.${id}`, handleShallowClick);
     }}
    >
     <div className={`relative h-16 w-16 mr-8 overflow-hidden`}>
      <Image
       src={`/${coverImage}`}
       alt='photo'
       className='object-cover '
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>

     {/* Duplicated image for animation */}
     <div className='absolute top-8 left-8'>
      <div className={`${id} relative h-16 w-16 overflow-hidden`}>
       <Image
        src={`/${coverImage}`}
        alt='photo'
        className='object-cover '
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
        fill
       />
      </div>
     </div>
     <span className='font-headline text-7xl font-thin'>{title}</span>
    </button>
   </GridDiv>
  </>
 );
}
