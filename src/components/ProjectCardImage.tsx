'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

import { animateToFullScreen } from '@/animations';

import { FilterCategoryKey } from '@/types';

type Props = {
 id: string;
 index: number;
 slug: string;
 alt: string;
 updateIsHovering: (state: boolean) => void;
 filterCategory?: FilterCategoryKey;
 projectCategory?: string;
 variant?: 'list' | 'image' | 'thumbs';
};

export default function ProjectCardImage(props: Props) {
 const router = useRouter();

 const {
  id,
  index,
  slug,
  alt,
  updateIsHovering,
  filterCategory,
  projectCategory,
  variant,
 } = props;
 const [isHovering, setIsHovering] = useState(false);

 return (
  <button
   className='h-full w-full group flex justify-center items-center absolute'
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
   <div className={`relative w-full h-full overflow-clip`}>
    {filterCategory === 'all' && (
     <div className='absolute bottom-4 right-4 sm:hidden md:block whitespace-nowrap z-50'>
      {projectCategory && <span>[ {projectCategory} ]</span>}
     </div>
    )}
    <CldImage
     src={`portfolio2023/work/${slug}/01`}
     key={slug}
     alt={alt}
     sizes='100vw (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
     fill
     priority={index < 2 ? true : false}
     className={`${isHovering && 'scale-[115%] -rotate-2'} ${
      variant && variant === 'thumbs' && 'grayscale hover:grayscale-0'
     } transition-transform duration-300 ease-in-out`}
    />
   </div>
  </button>
 );
}
