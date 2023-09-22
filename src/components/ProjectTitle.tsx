interface ProjectTitleProps {
 title: string;
 divClass?: string;
 textSize: string;
}

export default function ProjectTitle({
 title,
 divClass,
 textSize,
}: ProjectTitleProps) {
 return (
  <div className={`h-11 overflow-hidden ${divClass}`}>
   <div className='flex flex-col justify-start items-start group-hover:-translate-y-1/2 transition'>
    <span className={`${textSize} uppercase text-secondary`}>{title}</span>
    <span className={`${textSize} uppercase text-secondary`}>{title}</span>
   </div>
  </div>
 );
}
