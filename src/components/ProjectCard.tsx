'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { usePageContext } from '@/context';

import { GridDiv, AnimationGridDiv, ProjectTitle } from '@/components';
import { animateToFullScreen } from '@/animations/pageTransitions';

interface ProjectCardProps {
 id: string;
 title: string;
 scope: string;
 slug: string;
 coverImage: string;
 variant?: string;
 thumbnailSize?: number;
}

export default function ProjectCard({
 title,
 scope,
 id,
 slug,
 coverImage,
 variant,
 thumbnailSize,
}: ProjectCardProps) {
 const router = useRouter();
 const { updateIsHovering } = usePageContext();

 return variant === 'image' ? (
  // Image View
  <GridDiv divClass={`aspect-square col-span-${thumbnailSize}`}>
   {/* Empty grid element for animation */}
   <div className='absolute bottom-[100%] left-0 w-full h-full pointer-events-none'>
    <AnimationGridDiv
     divClass={`project-card-${id} overflow-hidden bg-primary pointer-events-none`}
    />
   </div>
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
    <ProjectTitle
     title={title}
     scope={scope}
     divClass={`absolute bottom-4 left-4 z-10`}
     textSize='text-titleMedium'
    />
    <div className='relative w-full h-full overflow-hidden'>
     <Image
      src={coverImage}
      key={id}
      // placeholder='blur'
      alt='photo'
      className='object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     />
    </div>
   </button>
  </GridDiv>
 ) : (
  // List View
  <GridDiv bottom={true} divClass={`relative h-32`}>
   {/* Empty grid element for animation */}
   <div className='absolute -top-36 left-0 bottom-0 w-full h-full opacity-0'>
    <AnimationGridDiv
     divClass={`project-card-${id} overflow-hidden bg-primary pointer-events-none`}
     top={true}
     bottom={true}
    />
   </div>
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
    <ProjectTitle title={title} scope={scope} textSize='text-headlineSmall' />
   </button>
  </GridDiv>
 );
}
