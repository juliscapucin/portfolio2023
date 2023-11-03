'use client';

import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

import { useCursorFollowerContext } from '@/context';

import { AnimationGridDiv, CustomCursor, ProjectLabel } from '@/components';
import { GridDiv } from '@/components/ui';
import { animateToFullScreen } from '@/animations';

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
 activeBreakpoint?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
 const router = useRouter();
 const { updateIsHovering } = useCursorFollowerContext();
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
  activeBreakpoint,
 } = props;

 return variant === 'list' ? (
  ////----- LIST VIEW -----////
  <GridDiv bottom={true} divClass={`relative h-32`}>
   {/* Custom Cursor */}
   {activeBreakpoint === 'desktop' && <CustomCursor />}
   {/* Div for animation */}
   <AnimationGridDiv
    divClass={`project-card-${id} overflow-hidden bg-primary pointer-events-none absolute top-0 left-0 bottom-0 w-full z-10 translate-x-full`}
    top={true}
    bottom={true}
   >
    <div className='m-auto mt-0 pt-48'>
     <h1 className='page-transition-title text-displaySmall md:text-displayMedium lg:text-displayLarge font-normal whitespace-nowrap'>
      {title}
     </h1>
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
     <h1 className='page-transition-title text-displaySmall md:text-displayMedium lg:text-displayLarge col-span-5 whitespace-nowrap font-normal'>
      {title}
     </h1>
    </div>
   </div>

   {/* Custom Cursor */}
   {activeBreakpoint === 'desktop' && <CustomCursor />}

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
     divClass={`absolute ${
      variant === 'image' ? 'bottom-4 left-0' : 'bottom-0 left-4'
     } z-10`}
     textSize={variant === 'image' ? 'text-titleMedium' : 'text-titleSmall'}
     variant={variant}
    />
    <div className='relative w-full h-full overflow-hidden'>
     {index === 1 ? (
      <CldImage
       src={`portfolio2023/work/${slug}/01`}
       key={id}
       alt={alt}
       sizes='100vw (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
       priority
      />
     ) : (
      <CldImage
       src={`portfolio2023/work/${slug}/01`}
       key={id}
       alt={alt}
       sizes='100vw (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     )}
    </div>
   </button>
  </div>
 );
}
