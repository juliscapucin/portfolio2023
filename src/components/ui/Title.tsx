'use client';

import { animateSplitText } from '@/animations';
import { useEffect, useRef } from 'react';

type TitleProps = {
 title: string;
};

export default function Title({ title }: TitleProps) {
 const titleRef = useRef(null);

 useEffect(() => {
  if (titleRef.current) {
   animateSplitText(titleRef.current);
  }
 }, [titleRef]);

 return (
  <div className='overflow-clip'>
   <h1
    ref={titleRef}
    className='text-displayMedium md:text-displayLarge lg:text-displayLarge whitespace-nowrap'
   >
    {title}
   </h1>
  </div>
 );
}
