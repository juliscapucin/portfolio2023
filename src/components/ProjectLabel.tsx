import { IconArrow } from '@icons/.';
import { ProjectLabelMarquee } from '@/components';

type Props = {
 title: string;
 scope: string;
 divClass?: string;
 textSize: string;
 variant: 'list' | 'image' | 'thumbs';
};

export default function ProjectLabel({
 title,
 scope,
 divClass,
 textSize,
 variant,
}: Props) {
 return (
  <div
   className={`h-11 overflow-hidden w-full ${
    variant === 'image' && 'px-8'
   } ${divClass}`}
  >
   <div
    className={`${
     // Only animate if not thumbs variant
     variant !== 'thumbs' && 'md:group-hover:-translate-y-1/2'
    } flex flex-col justify-start items-start transition`}
   >
    <span className={`${textSize} uppercase text-secondary`}>{title}</span>

    {/* Hover state – only render if not thumb variant */}
    {variant !== 'thumbs' && (
     <div className='hidden md:flex gap-6 items-center w-full'>
      <span className={`${textSize} uppercase text-secondary`}>{title}</span>
      <span className='-translate-x-1/2 group-hover:-translate-x-0 transition duration-500'>
       <IconArrow />
      </span>
      <ProjectLabelMarquee text={scope} />
     </div>
    )}
   </div>
  </div>
 );
}
