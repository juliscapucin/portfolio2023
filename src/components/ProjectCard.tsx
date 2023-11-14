'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

import { ProjectLabel } from '@/components';
import { AnimationGridDiv, GridDiv, ElementReveal } from '@/components/ui';
import { animateToFullScreen } from '@/animations';
import { useElementReveal } from '@/hooks';

interface ProjectCardProps {
 index?: number;
 id: string;
 title: string;
 scope: string;
 slug: string;
 alt: string;
 variant: 'list' | 'image' | 'thumbs';
 imageSize?: number;
 imageStart?: number;
 updateIsHovering: (state: boolean) => void;
}

export default function ProjectCard(props: ProjectCardProps) {
 const router = useRouter();
 const {
  index,
  title,
  scope,
  id,
  slug,
  alt,
  variant,
  imageSize,
  imageStart,
  updateIsHovering,
 } = props;
 // local isHovering state for individual hover animation
 const [isHovering, setIsHovering] = useState(false);
 const imageRevealRef = useRef(null);
 const isVisible = useElementReveal(imageRevealRef);

 return variant === 'list' ? (
  ////----- LIST VIEW -----////
  <GridDiv bottom={true} divClass='relative h-32'>
   {/* Div for animation */}
   <AnimationGridDiv
    divClass={`project-card-${id} overflow-hidden bg-primary pointer-events-none absolute top-0 left-0 bottom-0 w-full z-10 translate-x-full`}
    top={true}
    bottom={true}
   >
    <div className='m-auto mt-0 pt-48'>
     <h1 className='page-transition-title text-displaySmall md:text-displayMedium lg:text-displayLarge whitespace-nowrap'>
      {title}
     </h1>
    </div>
   </AnimationGridDiv>

   {/* Button action */}
   <button
    className='h-full w-full p-8 group cursor-none'
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
     textSize='text-headlineSmall'
     variant='list'
    />
   </button>
  </GridDiv>
 ) : (
  ////----- IMAGE VIEW + THUMBS VIEW -----////
  <div
   className={`custom-col-start-${imageStart} col-span-5 aspect-square relative overflow-hidden`}
  >
   {/* Div for animation */}
   <div
    className={`project-card-${id} overflow-hidden bg-primary pointer-events-none absolute top-0 left-0 bottom-0 w-full z-10 translate-x-full`}
   >
    <div className='m-auto mt-0 pt-48 overflow-hidden'>
     <h1 className='page-transition-title text-displaySmall md:text-displayMedium lg:text-displayLarge col-span-5 whitespace-nowrap'>
      {title}
     </h1>
    </div>
   </div>
   <div
    ref={variant === 'image' ? imageRevealRef : null}
    className='relative w-full h-full overflow-hidden z-0'
   >
    <div
     className={`absolute top-0 left-0 w-full h-full bg-primary z-20 transition-transform duration-500 ease-in-out ${
      isVisible || variant === 'thumbs' ? 'translate-y-full' : 'translate-y-0'
     }`}
    ></div>
    <button
     className='h-full w-full group flex justify-center items-center absolute cursor-none'
     onMouseEnter={() => {
      setIsHovering(true);
      updateIsHovering(true);
     }}
     onMouseLeave={() => {
      setIsHovering(false);
      updateIsHovering(false);
     }}
     onClick={() => {
      animateToFullScreen(`.project-card-${id}`, () =>
       router.push(`/work/${slug}`, { scroll: false })
      );
     }}
    >
     <ProjectLabel
      title={title}
      scope={scope}
      divClass={`absolute ${
       variant === 'image' ? 'bottom-4 left-0' : 'bottom-0 left-4'
      } z-10`}
      textSize={variant === 'image' ? 'text-titleMedium' : 'text-titleSmall'}
      variant={variant}
     />
     <div
      className={`relative w-full h-full overflow-hidden transition-transform duration-300 ease-in-out ${
       // Hover animation
       isHovering && 'scale-[115%] -rotate-2'
      }`}
     >
      <CldImage
       src={`portfolio2023/work/${slug}/01`}
       key={id}
       alt={alt}
       sizes='100vw (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
       priority={index === 1 ? true : false}
      />
     </div>
    </button>
   </div>
  </div>
 );
}
