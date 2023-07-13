'use client';

import { GridDiv } from '@/components';
import { handleShallowClick } from '@/utils';

export default function SectionTitle() {
 return (
  <GridDiv top={false} right={true} bottom={true} left={true}>
   <button
    className='h-full w-full flex justify-start items-center'
    onClick={(e) => handleShallowClick(e, '/projects')}
   >
    <h2 className='font-headline text-9xl font-light ml-8'>Latest Work</h2>
   </button>
  </GridDiv>
 );
}
