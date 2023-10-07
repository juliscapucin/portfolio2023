import { IconArrow } from '@icons/.';

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
   <div className='flex flex-col justify-start items-start group-hover:-translate-y-1/2 transition'>
    <span className={`${textSize} uppercase text-secondary`}>{title}</span>
    <div className='flex justify-between items-center w-full'>
     <span className={`${textSize} uppercase text-secondary`}>{title}</span>
     <div className='h-full flex gap-8 items-center text-labelLarge '>
      <span className='-translate-x-1/2 group-hover:-translate-x-0 transition duration-500'>
       <IconArrow />
      </span>
      <span>{scope}</span>
     </div>
    </div>
   </div>
  </div>
 );
}
