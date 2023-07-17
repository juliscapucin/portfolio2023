import Image from 'next/image';
import { ShallowPage } from '@/components';

export default function Page({ params }: any) {
 return (
  <ShallowPage>
   <main className='relative'>
    <h1 className='text-7xl z-35 absolute'>{params.slug}</h1>
    <div className='transition-fullscreen w-screen h-screen top-0 left-0'>
     <div className={`relative h-screen w-full overflow-hidden`}>
      <Image
       src='/pool.avif'
       alt='photo'
       className='object-cover '
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
    </div>
   </main>
  </ShallowPage>
 );
}
