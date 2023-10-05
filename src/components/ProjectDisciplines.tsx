import Link from 'next/link';

type ProjectDisciplinesProps = {
 disciplines: { tech: string; scope: string; link: string };
};

export default function ProjectDisciplines({
 disciplines,
}: ProjectDisciplinesProps) {
 return (
  <div className='col-span-6 flex flex-col text-titleMedium mt-16 mb-64'>
   <span className='mx-2'>Scope_ {disciplines.scope}</span>
   <span className='h-[1px] bg-secondary'></span>
   <span className='mx-2'>Tech_ {disciplines.tech}</span>
   <span className='h-[1px] bg-secondary'></span>
   {/* If link data starts with http, it's a link. If not, it's a span */}
   {disciplines.link.toLowerCase().startsWith('http') ? (
    <Link className='mx-2' href={disciplines.link}>
     Link_ {disciplines.link}
    </Link>
   ) : (
    <span className='mx-2'>Link_ {disciplines.link}</span>
   )}
   <span className='h-[1px] bg-secondary'></span>
  </div>
 );
}
