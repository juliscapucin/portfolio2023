'use client';

import Image from 'next/image';
import { GridDiv, AnimationGridDiv } from '@/components';
import { useRouter } from 'next/navigation';
import {
 animateToFullScreen,
 animateToLeftTransition,
 animateToShallowPage,
} from '@/animations/pageTransitions';

interface ProjectCardProps {
 id: string;
 title: string;
 slug: string;
 coverImage: string;
}

export default function ProjectCard({
 title,
 id,
 slug,
 coverImage,
}: ProjectCardProps) {
 const router = useRouter();

 return (
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
   <button
    className={`h-full w-full p-8 group`}
    onClick={() => {
     animateToFullScreen(`.project-card-${id}`, () => router.push(`/${slug}`));
    }}
   >
    <div className='h-11 overflow-hidden'>
     <div className='flex flex-col justify-start items-start group-hover:-translate-y-1/2 transition'>
      <span className='font-headline text-headlineSmall uppercase text-colorBlack dark:text-colorWhite'>
       {title}
      </span>
      <span className='font-headline text-headlineSmall uppercase text-colorBlack dark:text-colorWhite'>
       {title}
      </span>
     </div>
    </div>
   </button>
  </GridDiv>
 );
}
