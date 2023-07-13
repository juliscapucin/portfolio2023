import { GridElement, ProjectCard, Modal } from '@/components';
import SectionTitle from '@/components/SectionTitle';

import { projectLinks } from '@/constants';

export default function Home() {
 return (
  <main>
   <section className='grid'>
    <Modal containerClass='absolute w-full h-full'>
     <h1>Hello</h1>
    </Modal>
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
     <SectionTitle />
    </div>
    {projectLinks.map((project, index) => {
     return (
      <div className='h-32' key={index}>
       <ProjectCard title={project.label} slug={project.slug} />
      </div>
     );
    })}
   </section>
  </main>
 );
}
