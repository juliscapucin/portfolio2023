'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { CldImage } from 'next-cloudinary';

import gsap from 'gsap';

import { animateProjectsMenu } from '@/animations';
import { GridDiv } from '@/components/ui';
import { CustomCursor, ProjectCard, ProjectsFilter } from '@/components';
import { Project } from '@/types';
import { set } from 'sanity';

interface ProjectsMenuProps {
 activeBreakpoint: string | undefined;
 allProjects: Project[];
 startVariant: 'list' | 'image' | 'thumbs';
 startCategory: 'all' | 'recent' | 'playground' | 'archive';
}

export default function ProjectsMenu({
 activeBreakpoint,
 allProjects,
 startVariant,
 startCategory,
}: ProjectsMenuProps) {
 let ctx = gsap.context(() => {});
 // Start component with startCategory projects
 const [projectItems, setProjectItems] = useState(
  startCategory === 'all'
   ? allProjects
   : allProjects.filter((project: Project) => {
      return project.category?.includes(startCategory);
     })
 );

 const [isHovering, setIsHovering] = useState(false);
 const [category, setCategory] = useState(startCategory);
 const [scrollDirection, setScrollDirection] = useState('');

 const updateIsHovering = (state: boolean) => {
  setIsHovering(state);
 };

 // View options
 const [variant, setVariant] = useState(startVariant);

 // Refs
 const projectsMenuRef = useRef(null);
 const projectsImgsRef = useRef(null);
 const projectsLinksRef = useRef(null);
 const filterRef = useRef(null);
 const filterContainerRef = useRef(null);

 //  Filter Projects + Fade Out Transitions
 const filterProjects = (
  filterString: 'all' | 'recent' | 'playground' | 'archive'
 ) => {
  if (!allProjects) return;

  const filteredProjects =
   filterString === 'all'
    ? allProjects
    : allProjects.filter((project: Project) => {
       return project.category.includes(filterString);
      });

  ctx.add(() => {
   gsap.to('.filter-projects', {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
     setProjectItems(filteredProjects);
     setCategory(filterString);
    },
   });
  }, projectsMenuRef);
 };

 useLayoutEffect(() => {
  let ctx = gsap.context(() => {
   gsap.to('.filter-projects', {
    opacity: 1,
    duration: 0.5,
   });
  }, projectsMenuRef);

  return () => {
   ctx.revert();
  };
 }, [projectItems]);

 //  Change view – fade out + change variant
 const editVariant = () => {
  if (variant === 'list') {
   ctx.add(() => {
    gsap.to('.list-view', {
     opacity: 0,
     duration: 0.5,
     onComplete: () => {
      setVariant('image');
     },
    });
   }, projectsMenuRef);
  } else if (variant === 'image') {
   ctx.add(() => {
    gsap.to('.image-view', {
     opacity: 0,
     duration: 0.5,
     onComplete: () => {
      setVariant('list');
     },
    });
   }, projectsMenuRef);
  }
 };

 //  Change view – fade in
 useLayoutEffect(() => {
  if (variant === 'list') {
   ctx.add(() => {
    gsap.to('.list-view', {
     opacity: 1,
     duration: 0.5,
    });
   });
  } else if (variant === 'image') {
   ctx.add(() => {
    gsap.to('.image-view', {
     opacity: 1,
     duration: 0.5,
    });
   });
  }

  return () => {
   ctx.revert();
  };
 }, [variant]);

 // Restart list view animation on resize, filter or variant change
 useLayoutEffect(() => {
  if (projectsImgsRef.current && projectsLinksRef.current)
   animateProjectsMenu(projectsImgsRef.current, projectsLinksRef.current);
 }, [projectsImgsRef.current, projectsLinksRef.current, variant, projectItems]);

 useEffect(() => {
  return () => {
   ctx.revert();
  };
 }, []);

 // Filter menu scroll functionality
 useEffect(() => {
  if (!filterRef.current || !filterContainerRef.current) return;
  const filterContainerDiv = filterContainerRef.current as HTMLDivElement;

  const inicialDistanceTop = filterContainerDiv.getBoundingClientRect().top;
  let lastScrollTop = 0;
  // let scrollDirection = 'down';

  const handleScroll = () => {
   const scrollY = window.scrollY;

   if (inicialDistanceTop < scrollY) {
    filterContainerDiv.style.transform = `translateY(${
     window.scrollY - inicialDistanceTop
    }px)`;
   } else {
    filterContainerDiv.style.transform = 'translateY(0px)';
   }

   // Define scroll direction
   if (scrollY > lastScrollTop && inicialDistanceTop < scrollY) {
    setScrollDirection('down');
   } else if (scrollY < lastScrollTop && inicialDistanceTop > scrollY) {
    setScrollDirection('up');
   }

   lastScrollTop = scrollY <= 0 ? 0 : scrollY;
  };

  window.addEventListener('scroll', () => {
   handleScroll();
  });

  return () => {
   window.removeEventListener('scroll', () => {
    handleScroll();
    filterContainerDiv.style.transform = '';
   });
  };
 }, [filterRef, filterContainerRef, variant]);

 // Hide filter on scroll down
 //  useLayoutEffect(() => {
 //   if (!filterRef.current || !filterContainerRef.current) return;
 //   const filterDiv = filterRef.current as HTMLDivElement;

 //   if (scrollDirection === 'up') {
 //    filterDiv.style.transform = 'translateY(0)';
 //     filterDiv.classList.remove('transition-transform', 'ease-in-out');
 //    return;
 //   } else if (scrollDirection === 'down') {
 //     filterDiv.classList.add('transition-transform', 'ease-in-out');
 //    filterDiv.style.transform = 'translateY(-300%)';
 //   }

 //   return () => {
 //    filterDiv.style.transform = '';
 //   };
 //  }, [scrollDirection]);

 return (
  <>
   {/* Project Filter */}
   {variant !== 'thumbs' && (
    <div className='relative block w-full h-64 bg-primary z-100'>
     <div
      ref={filterContainerRef}
      className={`absolute w-full h-32 top-0 z-100`}
     >
      <div className='bg-primary'>
       <h2
        className={`block pt-24 pb-8 text-displaySmall transition-transform duration-300 ease-in-out ${
         scrollDirection !== 'down' && '-translate-x-full'
        }`}
       >
        Work
       </h2>
       <GridDiv divClass='bg-primary mb-8' ref={filterRef} bottom={true}>
        <ProjectsFilter
         {...{
          filterProjects,
          editVariant,
          variant,
          activeBreakpoint,
          startCategory,
         }}
        />
       </GridDiv>
      </div>
     </div>
    </div>
   )}

   {/* Projects Menu */}
   <section
    ref={projectsMenuRef}
    className={`projects-menu min-h-screen relative ${
     variant === 'image' && 'mt-16'
    }`}
   >
    {/* Custom Cursor */}
    {activeBreakpoint === 'desktop' && <CustomCursor isHovering={isHovering} />}

    {/* List View */}
    {variant === 'list' && (
     <GridDiv divClass='list-view filter-projects grid grid-cols-12 w-full h-[500px] overflow-hidden'>
      {/* Render left side images only on desktop */}
      {activeBreakpoint === 'desktop' && (
       <div
        className='col-span-4 aspect-square max-h-[500px] relative mt-8 overflow-hidden'
        ref={projectsImgsRef}
       >
        {projectItems &&
         projectItems.map((project, index) => {
          if (!project.coverImage.fileName) return;
          return (
           <CldImage
            src={`portfolio2023/work/${project.slug}/${project.coverImage.fileName}`}
            key={index}
            alt={project.coverImage.alt}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
            fill
           />
          );
         })}
       </div>
      )}
      {/* White space */}
      <div
       className={`col-span-${
        activeBreakpoint === 'mobile' ? 3 : 2
       } row-span-6`}
      ></div>
      {/* Render right side links */}
      <div
       className={`col-span-${
        activeBreakpoint === 'mobile' ? 9 : 6
       } row-span-6 overflow-y-auto`}
       ref={projectsLinksRef}
      >
       {projectItems &&
        projectItems.map((link) => {
         if (!link.coverImage || !link.title || !link.slug) return;
         return (
          <div key={`${link.slug}-${category}`}>
           <ProjectCard
            {...{
             title: link.title,
             scope: link.info.scope,
             slug: link.slug,
             id: link._id,
             alt: link.coverImage.alt,
             variant,
             updateIsHovering,
            }}
           />
          </div>
         );
        })}
      </div>
     </GridDiv>
    )}

    {/* Image View */}
    {variant === 'image' && (
     <GridDiv divClass='image-view filter-projects w-full'>
      {projectItems &&
       projectItems.map((project, index) => {
        return (
         <div
          className='lg:grid grid-cols-12 mb-32 lg:mb-64'
          key={`${project._id}-${category}`}
         >
          {project.title &&
           project.slug &&
           project.imageSize &&
           project.imageStart && (
            <ProjectCard
             {...{
              title: project.title,
              slug: project.slug,
              id: project._id,
              imageSize: project.imageSize,
              imageStart: project.imageStart,
              scope: project.info.scope,
              alt: project.coverImage.alt,
              index,
              variant,
              updateIsHovering,
             }}
            />
           )}
         </div>
        );
       })}
     </GridDiv>
    )}

    {/* Thumb View */}
    {variant === 'thumbs' && (
     <div className='thumb-view filter-projects flex flex-col gap-8 p-8 pt-24 h-screen overflow-y-scroll'>
      {projectItems &&
       projectItems.map((project, index) => {
        return (
         <div className='w-56 h-56' key={project._id}>
          {project.title &&
           project.slug &&
           project.imageSize &&
           project.imageStart && (
            <ProjectCard
             {...{
              index,
              title: project.title,
              scope: project.info.scope,
              slug: project.slug,
              id: project._id,
              alt: project.coverImage.alt,
              variant,
              imageSize: project.imageSize,
              imageStart: project.imageStart,
              updateIsHovering,
             }}
            />
           )}
         </div>
        );
       })}
     </div>
    )}
   </section>
  </>
 );
}
