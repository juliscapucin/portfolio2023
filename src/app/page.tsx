import Image from 'next/image';
import { CustomFilter, SearchBar } from '@/components';

export default function Home() {
 return (
  <section className='juli'>
   <div className='relative h-80'>
    <Image
     src='/pool.avif'
     alt='Next.js Logo'
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
