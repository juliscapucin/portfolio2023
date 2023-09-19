import { GridDiv } from '.';

interface Project {
 title: string;
 slug: string;
 coverImage: string;
}

interface ProjectNextProps {
 allProjects: Project[];
 project: Project;
}

export default function ProjectNext({
 allProjects,
 project,
}: ProjectNextProps) {
 const actualProjectIndex = allProjects.findIndex(
  (item: Project, index: number) => item.slug === project.slug
 );

 const nextProject = allProjects[actualProjectIndex + 1];
 const previousProject = allProjects[actualProjectIndex - 1];

 const handleNextButton = () => {
  console.log(allProjects[actualProjectIndex + 1]);
 };
 const handlePreviousButton = () => {
  console.log(allProjects[actualProjectIndex - 1]);
 };
 return (
  <GridDiv
   divClass={'flex justify-center items-center gap-32 py-32'}
   right={true}
   left={true}
   bottom={true}
  >
   {previousProject && (
    <button
     className='text-displaySmall cursor-pointer'
     onClick={handlePreviousButton}
    >
     Previous
    </button>
   )}
   {nextProject && (
    <button
     className='text-displaySmall cursor-pointer'
     onClick={handleNextButton}
    >
     Next
    </button>
   )}
  </GridDiv>
 );
}
