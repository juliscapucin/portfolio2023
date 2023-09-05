'use client';

import { GridDiv } from '@/components';

interface SectionTitleProps {
 title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
 return (
  <GridDiv top={false} right={true} bottom={true} left={true}>
   <button
    className='h-full w-full flex justify-start items-center'
    onClick={(e) => console.log(e)}
   >
    <h2 className='font-headline uppercase text-9xl ml-8'>{title}</h2>
   </button>
  </GridDiv>
 );
}
