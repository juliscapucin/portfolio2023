import Image from 'next/image';
import { CustomFilter, SearchBar } from '@/components';

export default function Home() {
 return (
  <section className='bg-primary'>
   <div className='relative h-80'>
    <Image
     src='/pool.avif'
     alt='Pool photo'
     className='object-contain'
     fill
     priority
    />
   </div>

   <div className='search'>
    <SearchBar />
    <CustomFilter />
   </div>
  </section>
 );
}
