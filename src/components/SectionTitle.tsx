'use client';

import { useRef } from 'react';

import { GridDiv } from '@/components/ui';
import { useTextReveal } from '@/hooks';

interface SectionTitleProps {
 title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
 const textRef = useRef(null);

 useTextReveal(textRef);

 return (
  <GridDiv divClass='h-full w-full overflow-clip pt-1' top={true}>
   <h2
    ref={textRef}
    className='text-displaySmall md:text-displayMedium lg:text-displayLarge mt-16 lg:mt-64 lg:ml-4 opacity-0'
   >
    {title}
   </h2>
  </GridDiv>
 );
}
