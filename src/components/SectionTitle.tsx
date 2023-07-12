'use client';

import { GridDiv } from '@/components';
import { handleShallowClick } from '@/utils';

export default function SectionTitle() {
   return (
      <button
         className='h-full w-full'
         onClick={(e) => handleShallowClick(e, '/projects')}
      >
         <GridDiv top={false} right={true} bottom={true} left={true}>
            <h2 className='text-9xl font-light ml-8'>Latest Work</h2>
         </GridDiv>
      </button>
   );
}
