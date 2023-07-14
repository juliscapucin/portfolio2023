'use client';

import { GridDiv } from '@/components';
import { handleShallowClick } from '@/utils';

interface SectionTitleProps {
 title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
 return (
  <GridDiv top={false} right={true} bottom={true} left={true}>
   <button
    className='h-full w-full flex justify-start items-center'
    onClick={(e) => handleShallowClick(e, '/projects')}
   >
    <h2 className='font-headline text-9xl font-light ml-8'>{title}</h2>
   </button>
  </GridDiv>
 );
}
