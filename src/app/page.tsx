import Image from 'next/image';
import { CustomFilter, SearchBar } from '@/components';

export default function Home() {
 return (
  <main>
   <section className='grid'>
    <div className='flex h-64'></div>
    <div className='flex h-32'>
     <div className='grid-element'>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <span>HOVER ME</span>
     </div>
     <div className='grid-element'>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <span>HOVER ME</span>
     </div>
    </div>
    <div className='flex h-32'>
     <div className='grid-element'>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <span>HOVER ME</span>
     </div>
     <div className='grid-element'>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <span>HOVER ME</span>
     </div>
     <div className='grid-element'>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <span>HOVER ME</span>
     </div>
    </div>
    <div className='h-64'></div>
    <div className='h-32'></div>
    <div className='h-32'></div>
   </section>
  </main>
 );
}
