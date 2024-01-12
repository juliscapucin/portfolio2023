import { IconArrow } from '@icons/.';
import { ProjectLabelMarquee } from '@/components';

type Props = {
 title: string;
 scope: string;
 divClass?: string;
 textSize: string;
 variant: 'list' | 'image' | 'thumbs';
 index?: number;
};

export default function ProjectLabel({
 title,
 scope,
 divClass,
 textSize,
 variant,
 index,
}: Props) {
 return (
  <div
   className={`${
    variant === 'image' ? '' : 'h-11 overflow-hidden '
   } w-full ${divClass}`}
  >
   <div
    className={`${
     // Only animate if not thumbs variant
     variant !== 'thumbs' && 'md:group-hover:-translate-y-1/2'
    } flex flex-col justify-start items-start transition`}
   >
    <span
     className={`${textSize} ${
      variant === 'image' && 'w-full h-full font-semibold leading-none'
     }`}
    >
     {index && `${index}. `}
     {title}
    </span>

    {/* Hover state – only render if list variant */}
    {variant === 'list' && (
     <div className='hidden md:flex gap-6 items-center w-full'>
      <span className={`${textSize}`}>{title}</span>
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
