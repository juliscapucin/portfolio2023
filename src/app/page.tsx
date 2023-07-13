'use client';

import {
 ContextLayout,
 GridElement,
 ProjectCard,
 Modal,
 SectionTitle,
} from '@/components';
import { projectLinks } from '@/constants';

export default function Home() {
 //   console.log(modalOpen);

 return (
  <main className='overflow-hidden'>
   <section className='grid'>
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
    <div className='h-64'>
     <SectionTitle title={'Latest Work'} />
    </div>
    {projectLinks.map((project, index) => {
     return (
      <div className='h-32' key={index}>
       <ProjectCard title={project.label} slug={project.slug} />
      </div>
     );
    })}
   </section>
   <section>
    <div className='h-64'>
     <SectionTitle title={'Playground'} />
    </div>
    {projectLinks.map((project, index) => {
     return (
      <div className='h-32' key={index}>
       <ProjectCard title={project.label} slug={project.slug} />
      </div>
     );
    })}
   </section>
   <div className='h-32 flex'>
    <GridElement
     top={false}
     right={true}
     bottom={true}
     left={true}
     divClass='basis-3/4'
    />
    <GridElement
     top={false}
     right={true}
     bottom={true}
     left={false}
     buttonLabel='View all'
     width='basis-1/4'
     divClass='flex justify-center items-center'
    />
   </div>
  </main>
 );
}
