'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GridDiv, AnimationGridDiv } from '.';
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
  <GridDiv>
   <Image
    src={coverImage}
    key={id}
    //   placeholder='blur'
    alt='photo'
    className='object-cover ml-1 bg-red-500'
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
    fill
   />
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
