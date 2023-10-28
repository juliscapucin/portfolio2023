import { useRef } from 'react';
import { GridDiv, ProjectsMenu } from '@/components';
import { breakpoints } from '@/constants';
import { useMediaQuery, useToggle } from '@/hooks';
import { Project } from '@/types';

export default function ProjectsMenuThumbs({
 allProjects,
}: {
 allProjects: Project[];
}) {
 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);
 const projectsMenuRef = useRef<HTMLDivElement | null>(null);

 const { toggle } = useToggle(true, projectsMenuRef.current);

 return (
  <div
   ref={projectsMenuRef}
   className='projects-thumbs fixed top-0 right-8 flex bg-primary z-50'
  >
   <GridDiv
    divClass='fixed w-16 bg-primary min-h-full pt-64'
    left={true}
    right={true}
   >
    <button
     className='w-full -rotate-90 text-right whitespace-nowrap'
     onClick={toggle}
    >
     All Projects
    </button>
   </GridDiv>
   <ProjectsMenu
    allProjects={allProjects}
    activeBreakpoint={breakpoint}
    isThumbView={true}
   />
  </div>
 );
}
