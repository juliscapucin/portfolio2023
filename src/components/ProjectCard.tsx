'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GridDiv } from '@/components';
import { handleShallowClick } from '@/utils';

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
 return (
  <GridDiv top={false} right={true} bottom={true} left={true}>
   <Link key={title} href={`/${slug}`}>
    {title}
   </Link>
   {/* <button
    className='h-full w-full p-8 overflow-hidden flex justify-start items-center text-7xl hover:opacity-50 transition-opacity'
    onClick={(e) => handleShallowClick(e, `/${category}/${slug}`)}
   >
    <div className='relative h-16 w-16 mr-8'>
     <Image
      src='/pool.avif'
      alt='photo'
      className='object-cover '
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      fill
     />
    </div>
    <span className='font-headline text-7xl font-thin'>{title}</span>
   </button> */}
  </GridDiv>
 );
}
