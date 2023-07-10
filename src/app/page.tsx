import Image from 'next/image';
import { CustomFilter, SearchBar } from '@/components';

export default function Home() {
 return (
  <main>
   <section className='grid gap-[1px]'>
    <div className='h-64 bg-colorBlack'></div>
    <div className='h-32 bg-colorBlack'></div>
    <div className='grid grid-cols-3 gap-[1px] bg-colorWhite [&>*]:bg-colorBlack [&>*]:h-32'>
     <div></div>
     <div></div>
     <div></div>
    </div>
    <div className='h-64 bg-colorBlack'></div>
    <div className='h-32 bg-colorBlack'></div>
    <div className='h-32 bg-colorBlack'></div>
   </section>
  </main>
 );
}
