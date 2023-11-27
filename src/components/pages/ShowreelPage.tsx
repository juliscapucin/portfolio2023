'use client';

import { useRef } from 'react';
import { ProjectSlideshow, ShowreelSlideshow } from '@/components';
import { Title } from '@/components/ui';

type Props = {};

export default function ShowreelPage() {
 return (
  <div className='page about-page pt-64'>
   {/* Title */}
   <Title title='Showreel' />
   <div className='lg:grid grid-cols-12'>
    {/* Image */}
    <div className='col-span-6 aspect-square overflow-clip relative mt-4 mb-8 lg:mb-0'>
     <ShowreelSlideshow />
    </div>
   </div>
  </div>
 );
}
