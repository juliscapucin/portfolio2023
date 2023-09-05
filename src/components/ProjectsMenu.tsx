import Image from 'next/image';

import ProjectCard from './ProjectCard';
import GridDiv from './GridDiv';

interface ProjectItems {
 label: string;
 slug: string;
 id: string;
 coverImage: string;
}

interface ProjectsMenuProps {
 projectItems: ProjectItems[];
}

export default function ProjectsMenu({ projectItems }: ProjectsMenuProps) {
 return (
  <GridDiv divClass='grid grid-cols-12 grid-rows-6' bottom={true} left={true}>
   <div className='col-span-4 row-span-4 overflow-hidden relative'>
    <Image
     src={`/parking.avif`}
     //   placeholder='blur'
     alt='photo'
     className='object-cover ml-1'
     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
     fill
    />
   </div>
   <div className='col-span-2 row-span-4'></div>
   <div className='col-span-6 row-span-6 overflow-hidden'>
    {projectItems.map((link, index) => {
     return (
      <div key={index}>
       <ProjectCard
        title={link.label}
        slug={link.slug}
        id={link.id}
        coverImage={link.coverImage}
       />
      </div>
     );
    })}
   </div>
  </GridDiv>
 );
}
