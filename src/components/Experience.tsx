import { ExperienceItem } from '.';

interface ExperienceItem {
 id: number;
 title: string;
 description: string;
}

interface ExperienceProps {
 experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
 return (
  <section className='mb-32 grid grid-cols-12'>
   <div className='col-span-6'></div>
   <div className='col-span-6'>
    <h2 className='text-displaySmall mb-16'>Work Experience</h2>
    {experience.map((item) => {
     return (
      <ExperienceItem
       key={item.id}
       title={item.title}
       description={item.description}
      />
     );
    })}
   </div>
  </section>
 );
}
