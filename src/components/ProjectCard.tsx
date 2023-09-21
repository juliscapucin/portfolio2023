'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { GridDiv, AnimationGridDiv, ProjectTitle } from '@/components';
import { animateToFullScreen } from '@/animations/pageTransitions';

interface ProjectCardProps {
 id: string;
 title: string;
 slug: string;
 coverImage: string;
 variant?: string;
 setIsHovering?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProjectCard({
 title,
 id,
 slug,
 coverImage,
 variant,
 setIsHovering,
}: ProjectCardProps) {
 const router = useRouter();

 return variant === 'image' ? (
  // Image View
  <GridDiv divClass={`aspect-square`}>
   {/* Empty grid element for animation */}
   <div className='absolute bottom-[100%] left-0 w-full h-full pointer-events-none'>
    <AnimationGridDiv
     divClass={`project-card-${id} overflow-hidden bg-colorWhite dark:bg-colorBlack pointer-events-none`}
    />
   </div>
   <button
    className={`h-full w-full group flex justify-center items-center absolute`}
    //  onMouseEnter={() => setIsHovering(true)}
    //  onMouseLeave={() => setIsHovering(false)}
    onClick={() => {
     animateToFullScreen(`.project-card-${id}`, () =>
      router.push(`/${slug}`, { scroll: false })
     );
    }}
   >
    <ProjectTitle
     title={title}
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
     divClass={`project-card-${id} overflow-hidden bg-colorWhite dark:bg-colorBlack pointer-events-none`}
    />
   </div>
   {/* Button action */}
   <button
    className={`h-full w-full p-8 group`}
    //  onMouseEnter={() => setIsHovering(true)}
    //  onMouseLeave={() => setIsHovering(false)}
    onClick={() => {
     animateToFullScreen(`.project-card-${id}`, () =>
      router.push(`/${slug}`, { scroll: false })
     );
    }}
   >
    <ProjectTitle title={title} textSize='text-headlineSmall' />
   </button>
  </GridDiv>
 );
}
