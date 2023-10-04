type ServicesProps = { services: string[] };

export default function Services({ services }: ServicesProps) {
 return (
  <section className='w-full py-64 flex flex-nowrap gap-8 justify-center items-center'>
   {services.map((discipline, index) => {
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
