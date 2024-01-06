'use client';

import {
 useEffect,
 useLayoutEffect,
 useRef,
 useState,
 Fragment,
 use,
} from 'react';
import { CldImage } from 'next-cloudinary';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { animateProjectsMenu } from '@/animations';
import { GridDiv } from '@/components/ui';
import { CustomCursor, ProjectCard, ProjectsFilter } from '@/components';
import { Project, FilterCategoryKey } from '@/types';

import { filterCategories } from '@/constants';

interface ProjectsMenuProps {
 activeBreakpoint: string | undefined;
 allProjects: Project[];
 startVariant: 'list' | 'image' | 'thumbs';
 startCategory: FilterCategoryKey;
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
 const [category, setCategory] = useState<FilterCategoryKey>(startCategory);
 const [filterScrollOffset, setFilterScrollOffset] = useState(0);
 const [projectsMenuHeight, setProjectsMenuHeight] = useState(0);

 // Scroll to filter offset on filter change
 const scrollToFilterOffset = () => {
  window.scrollTo({ top: filterScrollOffset - 30, behavior: 'smooth' });
 };

 const updateIsHovering = (state: boolean) => {
  setIsHovering(state);
 };

 // View options
 const [variant, setVariant] = useState(startVariant);

 // Refs
 const projectsMenuRef = useRef<HTMLDivElement>(null);
 const projectsImgsRef = useRef(null);
 const projectsLinksRef = useRef(null);
 const filterRef = useRef<HTMLDivElement>(null);
 const filterTitleRef = useRef(null);
 const filterContainerRef = useRef(null);

 // Get projects by category
 const getProjectsByCategory = (category: FilterCategoryKey) => {
  return category === 'all'
   ? allProjects
   : allProjects.filter((project) => project.category.includes(category));
 };

 // Get number of projects in each category for badge
 const numberOfProjectsByCategory = filterCategories.reduce((acc, category) => {
  acc[category] = getProjectsByCategory(category).length;
  return acc;
 }, {} as Record<FilterCategoryKey, number>);

 // Filter projects
 const filterProjects = (filterString: FilterCategoryKey) => {
  if (!allProjects) return;

  const filteredProjects = getProjectsByCategory(filterString);

  ctx.add(() => {
   gsap.to('.filter-projects', {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
     setProjectItems(filteredProjects);
     setCategory(filterString);
     scrollToFilterOffset();
    },
   });
  }, projectsMenuRef);
 };

 // Change category – fade in
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
      scrollToFilterOffset();
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
      scrollToFilterOffset();
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

 // Set projects menu height on variant or view change
 useEffect(() => {
  if (!projectsMenuRef.current) return;
  setProjectsMenuHeight(projectsMenuRef.current.offsetHeight);
 }, [variant, projectItems]);

 // Restart list view animation on resize, filter or variant change
 useLayoutEffect(() => {
  if (projectsImgsRef.current && projectsLinksRef.current)
   animateProjectsMenu(projectsImgsRef.current, projectsLinksRef.current);
 }, [projectsImgsRef.current, projectsLinksRef.current, variant, projectItems]);

 // Define offset for filter menu
 // Define initial height of projects menu
 useEffect(() => {
  if (!filterRef.current || !projectsMenuRef.current) return;
  setFilterScrollOffset(filterRef.current.getBoundingClientRect().top);
  setProjectsMenuHeight(projectsMenuRef.current.getBoundingClientRect().height);
 }, [filterRef, projectsMenuRef]);

 // Create ScrollTrigger to pin filter menu
 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  let ctx = gsap.context(() => {});

  let timeoutId = setTimeout(() => {
   ctx.add(() => {
    ScrollTrigger.create({
     trigger: filterRef.current,
     start: 'top-=40',
     end: `top+=${projectsMenuHeight - 40}`,
     pin: filterRef.current,
     pinSpacing: false,
     toggleClass: {
      targets: filterTitleRef.current,
      className: 'translate-x-0', // to hide / show small title
     },
    });
   });
  }, 1000); // 1000 milliseconds delay to avoid triggering on page load === causes bug with page transition animation

  return () => {
   clearTimeout(timeoutId);
   if (ctx) ctx.revert();
  };
 }, [projectsMenuHeight]);

 return (
  <section
   ref={projectsMenuRef}
   className='projects-menu custom-min-h-screen relative'
  >
   {/* Custom Cursor */}
   {activeBreakpoint === 'desktop' && <CustomCursor isHovering={isHovering} />}

   {/* Project Filter */}
   {variant !== 'thumbs' && (
    <div
     ref={filterContainerRef}
     className={`w-full mt-16 ${variant === 'image' && 'mb-8'}`}
    >
     <GridDiv
      divClass='w-full bg-primary pt-10 pb-1 z-8'
      ref={filterRef}
      bottom={true}
     >
      {/* Hidden Work Title on scroll */}
      <div className='bg-primary overflow-x-clip'>
       <h2
        ref={filterTitleRef}
        className={`${
         activeBreakpoint !== 'desktop' && 'absolute'
        } pb-8 pr-2 text-displaySmall transition-transform duration-200 ease-in-out -translate-x-full`}
       >
        Work
       </h2>
      </div>
      <ProjectsFilter
       {...{
        filterProjects,
        editVariant,
        variant,
        activeBreakpoint,
        startCategory,
        numberOfProjectsByCategory,
       }}
      />
     </GridDiv>
    </div>
   )}

   {/* List View */}
   {variant === 'list' && (
    <GridDiv divClass='list-view filter-projects grid grid-cols-12 w-full mb-32'>
     {/* Render left side images only on desktop */}
     {activeBreakpoint === 'desktop' && (
      <div className='sticky top-[188px] col-span-4 aspect-square max-h-[500px] overflow-clip mt-8'>
       <div className='relative w-full h-full' ref={projectsImgsRef}>
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
      </div>
     )}
     {/* White space */}
     <div
      className={`col-span-${activeBreakpoint === 'mobile' ? 3 : 2} row-span-6`}
     ></div>
     {/* Render right side links */}
     <div
      className={`col-span-${activeBreakpoint === 'mobile' ? 9 : 6} row-span-6`}
      ref={projectsLinksRef}
     >
      {projectItems &&
       projectItems.map((link) => {
        if (!link.coverImage || !link.title || !link.slug) return;
        return (
         <Fragment key={`${link.slug}-${category}`}>
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
         </Fragment>
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
         className='sm:grid grid-cols-20 lg:grid-cols-12 mb-32 md:mb-64'
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
 );
}
