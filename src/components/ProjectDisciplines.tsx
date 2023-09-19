interface ProjectDisciplinesProps {
 project: {
  disciplines: string[];
 };
}

export default function ProjectDisciplines({
 project,
}: ProjectDisciplinesProps) {
 return (
  <section className='w-full py-64 flex gap-8 justify-center items-center'>
   {project.disciplines.map((discipline, index) => {
    return (
     <span className='text-displaySmall' key={index}>
      {index !== 0 && ' | '}
      {discipline}
     </span>
    );
   })}
  </section>
 );
}
