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
  <section className='mb-32'>
   <h2 className='text-displaySmall mb-16'>Work Experience</h2>
   <div className='description'>
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
