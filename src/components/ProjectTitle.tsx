interface ProjectTitleProps {
 title: string;
 scope: string;
 divClass?: string;
 textSize: string;
}

export default function ProjectTitle({
 title,
 scope,
 divClass,
 textSize,
}: ProjectTitleProps) {
 return (
  <div className={`h-11 overflow-hidden ${divClass}`}>
   <div className='flex flex-col justify-start items-start group-hover:-translate-y-1/2 transition'>
    <span className={`${textSize} uppercase text-secondary`}>{title}</span>
    <div className='flex justify-between items-center w-full'>
     <span className={`${textSize} uppercase text-secondary`}>{title}</span>
     <div className='h-full flex items-center text-labelLarge'>
      {`>`} {scope}
     </div>
    </div>
   </div>
  </div>
 );
}
