import { IconArrow } from '@icons/.';
import { ProjectLabelMarquee } from '@/components';
import { GridDiv } from '@/components/ui';

type Props = {
 title: string;
 scope: string;
 divClass?: string;
 textSize: string;
 variant: 'list' | 'image' | 'thumbs';
 index?: number;
 imageStart?: string;
};

export default function ProjectLabel({
 title,
 scope,
 divClass,
 textSize,
 variant,
 index,
 imageStart,
}: Props) {
 const imageStartNum = imageStart ? parseInt(imageStart) : 0;
 const labelStart =
  imageStart && imageStartNum > 5 ? imageStartNum - 4 : imageStartNum + 4;

 return (
  <>
   {/* //
   //----- THUMBS VIEW -----//
   // */}
   {variant === 'thumbs' && (
    <div className={`h-10 overflow-hidden w-full mx-4 ${divClass}`}>
     <div className='md:group-hover:-translate-y-1/2 flex flex-col justify-start items-start transition'>
      <span className={`${textSize}`}>{title}</span>
      <span className={`${textSize}`}>{title}</span>
     </div>
    </div>
   )}
   {/* //
   //----- IMAGE VIEW -----//
   // */}
   {variant === 'image' && (
    <div className='absolute -top-16 sm:top-0 sm:grid sm:grid-cols-20 md:grid-cols-12 w-full'>
     <div className={`custom-col-start-${labelStart} w-full px-4`}>
      <GridDiv divClass='whitespace-nowrap' top={true} bottom={true}>
       <span className={`${textSize}`}>
        {index && index < 10 && '0'}
        {index && index}
        {'.'}
       </span>
      </GridDiv>
      <GridDiv divClass='whitespace-nowrap' bottom={true}>
       <span className={`${textSize}`}>{title}</span>
      </GridDiv>
      <GridDiv divClass='whitespace-nowrap' bottom={true}>
       <ProjectLabelMarquee text={scope} textStyle={textSize} />
      </GridDiv>
     </div>
    </div>
   )}
   {/* //
   //----- LIST VIEW -----//
   // */}
   {variant === 'list' && (
    <div className={`h-11 overflow-hidden w-full ${divClass}`}>
     <div className='md:group-hover:-translate-y-1/2 flex flex-col justify-start items-start transition'>
      <span className={`${textSize}`}>{title}</span>

      {/* Hover state */}
      <div className='hidden md:flex gap-6 items-center w-full'>
       <span className={`${textSize}`}>{title}</span>
       <span className='-translate-x-1/2 group-hover:-translate-x-0 transition duration-500'>
        <IconArrow />
       </span>
       <ProjectLabelMarquee text={scope} />
      </div>
     </div>
    </div>
   )}
  </>
 );
}
