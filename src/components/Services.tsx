interface ServicesProps {
 project: {
  disciplines: string[];
 };
}

export default function Services({ project }: ServicesProps) {
 return (
  <section className='w-full py-64 flex flex-nowrap gap-8 justify-center items-center'>
   {project.disciplines.map((discipline, index) => {
    return (
     <span className='text-displaySmall whitespace-nowrap' key={index}>
      {index !== 0 && ' | '}
      {discipline}
     </span>
    );
   })}
  </section>
 );
}
