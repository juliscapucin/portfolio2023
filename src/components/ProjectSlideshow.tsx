import React, { useState, useEffect } from 'react';
import ProjectImage from '@/components/ProjectImage';

type Props = {
 projectImages: string[];
 projectSlug: string;
};

const delay = 1000; // Delay in milliseconds

export default function Slideshow({ projectImages, projectSlug }: Props) {
 const [index, setIndex] = useState(0);
 const [slide, setSlide] = useState(projectImages[index]);

 useEffect(() => {
  const timer = setTimeout(() => {
   setIndex((prevIndex) =>
    prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
   );
  }, delay);

  setSlide(projectImages[index]);

  return () => clearTimeout(timer);
 }, [index]);

 return (
  <div className='slideshow relative w-full overflow-hidden'>
   <div
    className='slide transition-opacity duration-700 ease-in-out'
    key={`slide-${index}`}
   >
    <ProjectImage
     key={`${projectSlug}-${index}}`}
     projectSlug={projectSlug}
     image={projectImages[index]}
    />
   </div>
  </div>
 );
}
