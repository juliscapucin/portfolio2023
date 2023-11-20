import { CldImage } from 'next-cloudinary';

type Props = {
 projectSlug: string;
 image: string;
};

export default function ProjectImage({ projectSlug, image }: Props) {
 return (
  <div className='w-full aspect-square overflow-hidden relative mt-1'>
   {/* <div className='absolute top-0 left-0 min-w-full min-h-full bg-red-500'>
    cacete
   </div> */}
   <CldImage
    src={`portfolio2023/work/${projectSlug}/${image}`}
    alt='photo'
    className='absolute w-full object-cover z-20 border border-primary'
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
    fill
   />
   <CldImage
    src={`portfolio2023/work/bg-ipad`}
    alt='photo'
    className='w-full object-cover border border-primary'
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
    quality={100}
    fill
   />
  </div>
 );
}
