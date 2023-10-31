import { useRef } from 'react';
import { GridDiv, ProjectsMenu } from '@/components';
import { breakpoints } from '@/constants';
import { useMediaQuery, useToggle } from '@/hooks';
import { Project } from '@/types';
import { IconClose, IconPlus } from '@/components/icons';

export default function ProjectsMenuThumbs({
 allProjects,
}: {
 allProjects: Project[];
}) {
 // Set breakpoint for mobile/desktop (values are in constants.ts)
 const breakpoint = useMediaQuery(breakpoints.desktop);
 const projectsMenuRef = useRef<HTMLDivElement | null>(null);

 const { toggle, open } = useToggle(false, projectsMenuRef.current);

 return (
  <div
   ref={projectsMenuRef}
   className='projects-thumbs fixed top-0 right-8 flex bg-primary z-50'
  >
   {/* All projects button */}
   <GridDiv
    divClass='relative fixed w-16 bg-primary min-h-full pt-32'
    left={true}
    right={true}
   >
    <button
     className='relative w-full h-full flex flex-col items-center justify-start gap-8 overflow-hidden'
     onClick={toggle}
    >
     <div className='relative flex items-center justify-center w-8 h-8 z-20'>
      {open ? <IconClose /> : <IconPlus />}
     </div>
     <span className='block whitespace-nowrap -rotate-90 mt-16'>
      All Projects
     </span>
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