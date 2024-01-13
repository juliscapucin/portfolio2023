'use client';

import { useRef, useLayoutEffect, Suspense } from 'react';

import { CldImage } from 'next-cloudinary';
import gsap from 'gsap';

import { Loader } from '@/components/ui';
import {
 ProjectInfo,
 ProjectSplitScreen,
 ProjectsMenuThumbs,
} from '@/components';

import { ShallowPage } from '@/components/pages';
import { Project } from '@/types';

type Props = {
 project: Project;
 allProjects: Project[];
 isShallow: boolean;
};

export default function ProjectPage({
 project,
 allProjects,
 isShallow,
}: Props) {
 const headerRef = useRef<HTMLHeadingElement | null>(null);

 // Animate header children on mount
 useLayoutEffect(() => {
  if (!headerRef.current) return;
  const children = headerRef.current.children;

  if (!children) return;

  let ctx = gsap.context(() => {
   gsap.set(headerRef.current, { zIndex: 100 });
   gsap.fromTo(
    children,
    {
     opacity: 0,
     yPercent: 30,
    },
    {
     opacity: 1,
     yPercent: 0,
     stagger: 0.05,
     ease: 'expo.out',
     duration: 0.5,
     delay: 0.5,
     onComplete: () => {
      gsap.set(headerRef.current, { zIndex: 0 });
     },
    }
   );
  });

  return () => ctx.revert();
 }, [headerRef]);

 return (
  <ShallowPage isShallow={isShallow} key={project.slug}>
   {project ? (
    <>
     {/* Title */}
     <h1 className='mb-4 pt-32 z-30 text-displaySmall md:text-displayMedium lg:text-displayLarge'>
      {project.title}
     </h1>

     {/* Page */}
     <Suspense fallback={<Loader />}>
      <ProjectsMenuThumbs allProjects={allProjects} />

      <section className='relative w-full z-30 bg-primary'>
       {/* Header */}
       <div ref={headerRef} className='md:grid grid-cols-12'>
        {/* Cover Image */}
        <div
         className={`col-span-7 block overflow-clip aspect-square relative`}
        >
         <CldImage
          src={`portfolio2023/work/${project.slug}/01`}
          alt={project.coverImage.alt}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
          fill
          priority
         />
        </div>
        <div className='md:col-span-4 md:pl-16 mt-8'>
         {/* Description */}
         <div className='mb-16'>
          <p className='text-titleLarge md:text-headlineSmall mt-16 md:mt-0'>
           {project.description}
          </p>
         </div>
         {/* Project Info */}
         <ProjectInfo info={project.info} />
        </div>
       </div>
      </section>

      {/* Split Screen */}
      {project.images && <ProjectSplitScreen project={project} />}
     </Suspense>
    </>
   ) : (
    <div className='min-w-screen min-h-screen bg-primary flex items-center justify-center'>
     <Loader />
    </div>
   )}
  </ShallowPage>
 );
}
