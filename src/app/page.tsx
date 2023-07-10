import Image from 'next/image';
import { CustomFilter, SearchBar } from '@/components';

export default function Home() {
 return (
  <main>
   <section className='grid gap-[1px] [&>*]:bg-colorBlack'>
    <div className='h-32'></div>
    <div className='h-32'></div>
    <div className='h-32'></div>
    <div className='h-32'></div>
    <div className='h-32'></div>
    <div className='h-32'></div>
   </section>
  </main>
 );
}
