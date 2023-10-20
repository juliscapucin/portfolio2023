'use client';

import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

import { usePageContext } from '@/context';

import { GridDiv, AnimationGridDiv, ProjectLabel } from '@/components';
import { animateToFullScreen } from '@/animations/pageTransitions';

interface ProjectCardProps {
 index?: number;
 id: string;
 title: string;
 scope: string;
 slug: string;
 coverImage: string;
 alt: string;
 variant?: string;
 imageSize?: number;
 imageStart?: number;
}

export default function ProjectCard({
 index,
 title,
 scope,
 id,
 slug,
 coverImage,
 alt,
 variant,
 imageSize,
 imageStart,
}: ProjectCardProps) {
 const router = useRouter();
 const { updateIsHovering } = usePageContext();

 return variant === 'image' ? (
  ////----- IMAGE VIEW -----////
  <div
   className={`custom-col-start-${imageStart} col-span-5 aspect-square relative`}
  >
   {/* Empty grid element for animation */}
   <AnimationGridDiv
    divClass={`project-card-${id} overflow-hidden bg-primary pointer-events-none absolute top-[-5px] left-0 bottom-0 w-full opacity-0`}
    top={true}
    bottom={true}
   >
    <div className='m-auto mt-0 pt-44 md:pt-32'>
     <span className='text-displaySmall md:text-displayMedium lg:text-displayLarge font-normal'>
      {title}
     </span>
    </div>
   </AnimationGridDiv>

   <button
    className={`h-full w-full group flex justify-center items-center absolute`}
    onMouseEnter={() => updateIsHovering(true)}
    onMouseLeave={() => updateIsHovering(false)}
    onClick={() => {
     animateToFullScreen(`.project-card-${id}`, () =>
      router.push(`/work/${slug}`, { scroll: false })
     );
    }}
   >
    <ProjectLabel
     title={title}
     scope={scope}
     divClass={`absolute bottom-4 left-4 z-10`}
     textSize='text-titleMedium'
    />
    <div className='relative w-full h-full overflow-hidden'>
     {index === 1 ? (
      <CldImage
       src={coverImage}
       key={id}
       alt={alt}
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
       priority
      />
     ) : (
      <CldImage
       src={coverImage}
       key={id}
       alt={alt}
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     )}
    </div>
   </button>
  </div>
 ) : (
  ////----- LIST VIEW -----////
  <GridDiv bottom={true} divClass={`relative h-32`}>
   {/* Empty grid element for animation */}
   <AnimationGridDiv
    divClass={`project-card-${id} overflow-hidden bg-primary pointer-events-none absolute top-[-5px] left-0 bottom-0 w-full opacity-0`}
    top={true}
    bottom={true}
   >
    <div className='m-auto mt-0 pt-44 md:pt-32'>
     <span className='text-displaySmall md:text-displayMedium lg:text-displayLarge font-normal'>
      {title}
     </span>
    </div>
   </AnimationGridDiv>

   {/* Button action */}
   <button
    className={`h-full w-full p-8 group`}
    onMouseEnter={() => updateIsHovering(true)}
    onMouseLeave={() => updateIsHovering(false)}
    onClick={() => {
     animateToFullScreen(`.project-card-${id}`, () =>
      router.push(`/work/${slug}`, { scroll: false })
     );
    }}
   >
    <ProjectLabel title={title} scope={scope} textSize='text-headlineSmall' />
   </button>
  </GridDiv>
 );
}
