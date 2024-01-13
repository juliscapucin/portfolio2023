'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

import { ProjectCardImage, ProjectCardLabel } from '@/components';
import { AnimationGridDiv, GridDiv } from '@/components/ui';
import { animateToFullScreen } from '@/animations';
import { useElementReveal } from '@/hooks';

import { FilterCategoryKey } from '@/types';

interface ProjectCardProps {
 index: number;
 id: string;
 title: string;
 scope: string;
 slug: string;
 alt: string;
 projectCategory?: string;
 filterCategory?: FilterCategoryKey;
 variant: 'list' | 'image' | 'thumbs';
 imageStart?: string;
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
  projectCategory,
  filterCategory,
  variant,
  imageStart,
  updateIsHovering,
 } = props;
 const imageWrapperRef = useRef(null);

 useElementReveal(imageWrapperRef.current, true);

 return (
  <>
   {/* //
    //----- LIST VIEW -----//
    // */}
   {variant === 'list' && (
    <GridDiv bottom={true} divClass='relative h-32'>
     {/* Div for animation */}
     <AnimationGridDiv
      divClass={`project-card-${id} overflow-clip bg-primary pointer-events-none absolute top-0 left-0 bottom-0 w-screen pr-16 z-10 translate-x-full`}
      top={true}
      bottom={true}
     >
      <div className='m-auto mt-0 pt-48'>
       <h1 className='page-transition-title text-displaySmall md:text-displayMedium lg:text-displayLarge'>
        {title}
       </h1>
      </div>
     </AnimationGridDiv>

     {/* Button action */}
     <button
      className='h-full w-full p-8 group'
      onMouseEnter={() => updateIsHovering(true)}
      onMouseLeave={() => updateIsHovering(false)}
      onClick={() => {
       animateToFullScreen(`.project-card-${id}`, () =>
        router.push(`/work/${slug}`, { scroll: false })
       );
      }}
     >
      <ProjectCardLabel
       title={title}
       scope={scope}
       textSize='text-headlineSmall'
       variant='list'
      />
     </button>
    </GridDiv>
   )}

   {/* //
   //----- IMAGE VIEW -----//
   // */}
   {variant === 'image' && (
    // If image, ref is passed to useElementReveal hook
    <div ref={imageWrapperRef} className='relative w-full'>
     <ProjectCardLabel
      title={title}
      scope={scope}
      textSize={`sm:text-headlineSmall lg:text-headlineLarge`}
      variant={variant}
      index={index + 1}
      imageStart={imageStart}
     />
     <div className='sm:grid sm:grid-cols-20 md:grid-cols-12 w-full'>
      <div
       className={`custom-col-start-${imageStart} aspect-square relative overflow-clip`}
      >
       {/* Div for transition animation */}
       <div
        className={`project-card-${id} overflow-clip bg-primary pointer-events-none absolute top-0 left-0 bottom-0 w-screen pr-16 z-30 translate-x-full`}
       >
        <div className='m-auto mt-0 pt-48 max-w-desktop overflow-clip'>
         <h1 className='page-transition-title text-displaySmall md:text-displayMedium lg:text-displayLarge col-span-5'>
          {title}
         </h1>
        </div>
       </div>
       <div className='relative w-full h-full overflow-clip z-0'>
        {/* Element Reveal Mask for useElementReveal hook */}
        {variant === 'image' && (
         <div className='mask absolute top-0 left-0 w-full h-full bg-primary text-secondary z-20'></div>
        )}

        <ProjectCardImage
         {...{
          id,
          slug,
          alt,
          updateIsHovering,
          index,
          filterCategory,
          projectCategory,
         }}
        />
       </div>
      </div>
     </div>
    </div>
   )}

   {/* //
   //----- THUMBS VIEW -----//
   // */}
   {variant === 'thumbs' && (
    <div className='aspect-square relative overflow-clip group'>
     {/* Div for animation */}
     <div
      className={`project-card-${id} overflow-clip bg-primary pointer-events-none absolute top-0 left-0 bottom-0 w-screen pr-16 z-30 translate-x-full`}
     >
      <div className='m-auto mt-0 pt-48 max-w-desktop overflow-clip'>
       <h1 className='page-transition-title text-displaySmall md:text-displayMedium lg:text-displayLarge col-span-5'>
        {title}
       </h1>
      </div>
     </div>
     <ProjectCardLabel
      title={title}
      scope={scope}
      divClass='absolute bottom-0 z-10'
      textSize='text-titleSmall'
      variant={variant}
     />
     <div className='relative w-full h-full overflow-clip z-0'>
      <ProjectCardImage {...{ id, slug, alt, updateIsHovering, index }} />
     </div>
    </div>
   )}
  </>
 );
}
