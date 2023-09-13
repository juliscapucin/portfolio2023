'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GridDiv, AnimationGridDiv, ProjectTitle } from '.';
import { animateToFullScreen } from '@/animations/pageTransitions';

interface ProjectCardProps {
 id: string;
 title: string;
 slug: string;
 coverImage: string;
 variant?: string;
}

export default function ProjectCard({
 title,
 id,
 slug,
 coverImage,
 variant,
}: ProjectCardProps) {
 const router = useRouter();

 return variant === 'image' ? (
  <GridDiv
   right={true}
   bottom={true}
   divClass={`relative col-span-1 aspect-square`}
  >
   <button
    className={`h-full w-full p-8 group flex justify-center items-center`}
    onClick={() => {
     animateToFullScreen(`.project-card-${id}`, () =>
      router.push(`/${slug}`, { scroll: false })
     );
    }}
   >
    <ProjectTitle
     title={title}
     divClass={`absolute bottom-4 left-4`}
     textSize='text-titleMedium'
    />
    <div className='relative w-3/4 h-3/4'>
     <Image
      src={coverImage}
      key={id}
      //   placeholder='blur'
      alt='photo'
      className='object-cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
      fill
     />
    </div>
   </button>
  </GridDiv>
 ) : (
  <GridDiv
   top={false}
   right={true}
   bottom={true}
   left={true}
   divClass={`relative h-32`}
  >
   {/* Empty grid element for animation */}
   <div className='absolute -top-36 left-0-0 bottom-0 w-full h-full opacity-0'>
    <AnimationGridDiv
     divClass={`project-card-${id} overflow-hidden bg-colorWhite dark:bg-colorBlack pointer-events-none`}
    />
   </div>
   {/* Button action */}
   <button
    className={`h-full w-full p-8 group`}
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
