'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GridDiv } from '@/components';
import { useRouter } from 'next/navigation';
import { animateToFullScreen } from '@/utils';

interface ProjectCardProps {
 title: string;
 category: string;
 slug: string;
}

export default function ProjectCard({
 title,
 category,
 slug,
}: ProjectCardProps) {
 const router = useRouter();

 const handleShallowClick = (): void => {
  setTimeout(() => {
   console.log('transition');
   router.push(`/${slug}`, { shallow: true });
  }, 1000);
 };

 return (
  <GridDiv top={false} right={true} bottom={true} left={true}>
   <button
    className='h-full w-full p-8 overflow-hidden flex justify-start items-center text-7xl hover:opacity-50 transition-opacity'
    onClick={() => {
     animateToFullScreen(`.${title}`);
    }}
   >
    <div className={`${title} relative h-16 w-16 mr-8 overflow-hidden`}>
     <Image
      src='/pool.avif'
      alt='photo'
      className='object-cover '
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     />
    </div>
    <span className='font-headline text-7xl font-thin'>{title}</span>
   </button>
  </GridDiv>
 );
}
