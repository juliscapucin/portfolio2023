'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

import { animateToFullScreen } from '@/animations';

type Props = {
 id: string;
 index: number;
 slug: string;
 alt: string;
 updateIsHovering: (state: boolean) => void;
};

export default function ProjectCardImage(props: Props) {
 const router = useRouter();

 const { id, index, slug, alt, updateIsHovering } = props;
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
   <div
    className={`relative w-full h-full overflow-clip transition-transform duration-300 ease-in-out ${
     // Hover animation
     isHovering && 'scale-[115%] -rotate-2'
    }`}
   >
    <CldImage
     src={`portfolio2023/work/${slug}/01`}
     key={slug}
     alt={alt}
     sizes='100vw (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
     fill
     priority={index < 4 ? true : false}
    />
   </div>
  </button>
 );
}
