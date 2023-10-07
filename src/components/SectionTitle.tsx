'use client';

import { GridDiv } from '@/components';

interface SectionTitleProps {
 title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
 return (
  <GridDiv bottom={true}>
   <button
    className='h-full w-full flex justify-start items-center'
    onClick={(e) => console.log(e)}
   >
    <h2 className='text-displaySmall md:text-displayMedium lg:text-displayLarge ml-4'>
     {title}
    </h2>
   </button>
  </GridDiv>
 );
}
