import Image from 'next/image';
import { CustomFilter, GridElement, SearchBar } from '@/components';

export default function Home() {
 return (
  <main className='m-10'>
   <section className='grid'>
    <div className='flex h-8'></div>
    <div className='flex h-64'>
     <GridElement top={true} right={true} bottom={true} left={true} />
     <GridElement top={true} right={true} bottom={true} left={false} />
     <GridElement top={true} right={true} bottom={true} left={false} />
     <GridElement
      text={'hello'}
      textClass={'text-5xl'}
      top={true}
      right={true}
      bottom={true}
      left={false}
     />
    </div>
    <div className='flex h-32'>
     <GridElement top={false} right={true} bottom={true} left={true} />
     <GridElement top={false} right={true} bottom={true} left={false} />
    </div>
    <div className='flex h-32'>
     <GridElement top={false} right={true} bottom={true} left={true} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
    </div>
    <div className='flex h-64'>
     <GridElement top={false} right={true} bottom={true} left={true} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
    </div>
    <div className='h-32'></div>
    <div className='h-32'></div>
   </section>
  </main>
 );
}
