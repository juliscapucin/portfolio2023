import Image from 'next/image';
import { CustomFilter, GridElement, SearchBar } from '@/components';

export default function Home() {
 return (
  <main>
   <section className='grid'>
    <div className='flex h-16'></div>
    <div className='flex h-64'>
     <GridElement
      top={false}
      right={true}
      bottom={true}
      left={true}
      hoverClass='bg-green-700'
     />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement top={false} right={true} bottom={true} left={false} />
     <GridElement
      textClass={'text-huge'}
      text='hello'
      top={false}
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
