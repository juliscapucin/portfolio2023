'use client';

import Image from 'next/image';
import { GridDiv, AnimationGridDiv } from '@/components';
import { useRouter } from 'next/navigation';
import {
 animateToFullScreen,
 animateToLeftTransition,
 animateToShallowPage,
} from '@/animations';

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
  <>
   <GridDiv
    top={false}
    right={true}
    bottom={true}
    left={true}
    divClass={`bg-colorBlack relative h-32`}
   >
    {/* Empty grid element for animation */}
    <div className='absolute -top-36 left-0-0 bottom-0 w-full h-full opacity-0'>
     <AnimationGridDiv
      divClass={`project-card-${id} overflow-hidden bg-colorBlack pointer-events-none`}
     />
    </div>
    <button
     className={`h-full w-full p-8 overflow-hidden flex justify-start items-center text-7xl hover:opacity-50 transition-opacity`}
     onClick={() => {
      animateToFullScreen(`.project-card-${id}`, () => router.push(`/${slug}`));
     }}
    >
     <div className={`relative h-16 w-16 mr-8 overflow-hidden`}>
      <Image
       src={`/${coverImage}`}
       alt='photo'
       className='object-cover '
       sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
       fill
      />
     </div>
     <span className='font-headline text-7xl uppercase'>{title}</span>
    </button>
   </GridDiv>
  </>
 );
}
