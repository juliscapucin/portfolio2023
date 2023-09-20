import { ExperienceItem } from '.';

interface ExperienceItem {
 id: number;
 title: string;
 date: string;
 description: string;
}

interface ExperienceProps {
 experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
 return (
  <section className='mb-32 lg:grid grid-cols-12'>
   <div className='lg:col-span-2 xl:col-span-4 2xl:col-span-6'></div>
   <div className='lg:col-span-9 xl:col-span-7 2xl:col-span-5'>
    <h2 className='text-displaySmall mb-16'>Work Experience</h2>
    {experience.map((item) => {
     return (
      <ExperienceItem
       key={item.id}
       title={item.title}
       date={item.date}
       description={item.description}
      />
     );
    })}
   </div>
  </section>
 );
}
