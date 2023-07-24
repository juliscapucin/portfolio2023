'use client';

import Image from 'next/image';
import { ShallowPage } from '@/components';

export default function Page({ params }: any) {
 return (
  <ShallowPage>
   <div className='w-screen h-screen'>
    <div className={`relative h-full w-full overflow-hidden`}>
     <Image
      src='/pool.avif'
      alt='photo'
      className='object-cover '
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
      priority
     />
    </div>
   </div>
   <div className='px-8 py-16 bg-colorBlack'>
    <h1 className='text-7xl z-35'>{params.slug} intercepted</h1>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit
     obcaecati temporibus cum. Laudantium ad voluptatem consequuntur. Omnis
     quasi, accusamus optio ab aliquid deleniti ut. Ipsam excepturi nam vitae
     sit.
    </p>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit
     obcaecati temporibus cum. Laudantium ad voluptatem consequuntur. Omnis
     quasi, accusamus optio ab aliquid deleniti ut. Ipsam excepturi nam vitae
     sit.
    </p>
   </div>
  </ShallowPage>
 );
}
