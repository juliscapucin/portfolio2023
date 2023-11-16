import Link from 'next/link';
import { IconArrow } from './icons';

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
   {info.link ? (
    <Link
     href={info.link}
     target='_blank'
     className='flex flex-col group h-10 overflow-hidden'
    >
     <div className='flex items-center gap-4 mx-2'>
      <span>Visit website</span>
      <IconArrow />
     </div>
     <div className='flex items-center gap-4 mx-2'>
      <span>Open</span>
      <IconArrow />
     </div>
    </Link>
   ) : (
    <span className='mx-2'>Status: Offline</span>
   )}
   <span className='h-[1px] bg-secondary'></span>
  </div>
 );
}
