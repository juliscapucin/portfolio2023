'use client';

import { GridDiv } from '@/components';
import { handleShallowClick } from '@/utils';

interface ProjectCardProps {
 title: string;
 description?: string;
 slug: string;
}

export default function ProjectCard({
 title,
 description,
 slug,
}: ProjectCardProps) {
 return (
  <GridDiv top={false} right={true} bottom={true} left={true}>
   <button
    className='h-full w-full flex justify-start items-center text-7xl'
    onClick={(e) => handleShallowClick(e, '/projects/${slug}')}
   >
    <span className='font-headline text-7xl font-light ml-8'>{title}</span>
   </button>
  </GridDiv>
 );
}
