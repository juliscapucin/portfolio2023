import Link from 'next/link';

type ProjectInfoProps = {
 info: { tech: string; scope: string; link: string };
};

export default function ProjectInfo({ info }: ProjectInfoProps) {
 return (
  <div className='md:col-span-5 flex flex-col text-titleMedium mt-16 mb-64'>
   <span className='mx-2'>Scope: {info.scope}</span>
   <span className='h-[1px] bg-secondary'></span>
   <span className='mx-2'>Tech: {info.tech}</span>
   <span className='h-[1px] bg-secondary'></span>
   {/* If link data starts with http, it's a link. If not, it's a span */}
   {info.link?.toLowerCase().startsWith('http') ? (
    <span className='mx-2'>
     Status:{' '}
     <a href={info.link} target='_blank'>
      Online
     </a>
    </span>
   ) : (
    <span className='mx-2'>Status_ {info.link}</span>
   )}
   <span className='h-[1px] bg-secondary'></span>
  </div>
 );
}
