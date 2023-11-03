import { IconArrow } from '@icons/.';
import { ProjectLabelMarquee } from '@/components';

interface ProjectLabelProps {
 title: string;
 scope: string;
 divClass?: string;
 textSize: string;
}

export default function ProjectLabel({
 title,
 scope,
 divClass,
 textSize,
}: ProjectLabelProps) {
 return (
  <div className={`h-11 overflow-hidden ${divClass}`}>
   <div className='flex flex-col justify-start items-start md:group-hover:-translate-y-1/2 transition'>
    <span className={`${textSize} uppercase text-secondary`}>{title}</span>
    <div className='hidden md:flex justify-between items-center w-full'>
     <span className={`${textSize} uppercase text-secondary`}>{title}</span>
     <div className='h-full flex gap-8 items-center text-labelLarge '>
      <span className='-translate-x-1/2 group-hover:-translate-x-0 transition duration-500'>
       <IconArrow />
      </span>
      <ProjectLabelMarquee text={scope} />
     </div>
    </div>
   </div>
  </div>
 );
}
