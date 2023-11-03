import { CldImage } from 'next-cloudinary';

type Props = {
 projectSlug: string;
 image: string;
};

export default function ProjectImage({ projectSlug, image }: Props) {
 return (
  <div className='w-full aspect-square overflow-hidden relative'>
   <CldImage
    src={`portfolio2023/work/${projectSlug}/${image}`}
    alt='photo'
    className='absolute w-full object-cover z-50'
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
    fill
   />
   <CldImage
    src={`portfolio2023/work/blank-ipad`}
    alt='photo'
    className='w-full object-cover'
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
    fill
   />
  </div>
 );
}
