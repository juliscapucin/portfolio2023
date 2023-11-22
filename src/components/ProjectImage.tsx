import { CldImage } from 'next-cloudinary';
import { Loader } from '@/components/ui';

type Props = {
 projectSlug: string;
 image: string;
 isWeb: boolean;
};

export default function ProjectImage({ projectSlug, image, isWeb }: Props) {
 return (
  <div className='w-full aspect-square overflow-hidden relative mt-1'>
   <div className='absolute top-0 left-0 min-w-full min-h-full z-20 opacity-5 bg-primary'></div>
   <CldImage
    src={`portfolio2023/work/${projectSlug}/${image}`}
    alt='photo'
    className='absolute w-full object-cover z-20 border border-primary'
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
    fill
   />
   <div className='absolute top-0 left-0 min-w-full min-h-full flex items-center justify-center z-10'>
    <Loader />
   </div>
   {isWeb && (
    <CldImage
     src={`portfolio2023/work/bg-ipad`}
     alt='photo'
     className='w-full object-cover border border-primary'
     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
     quality={100}
     fill
    />
   )}
  </div>
 );
}
