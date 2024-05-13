import { useLayoutEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { filterCategories } from '@/constants';
import { FilterCategoryKey } from '@/types';

type FilterButtonProps = {
 filterProjects: (filter: any) => void;
 handleActiveButton: (label: FilterCategoryKey) => void;
 active: boolean;
 label: FilterCategoryKey;
 numberOfProjectsByCategory: Record<FilterCategoryKey, number>;
};

type ProjectsFilterProps = {
 filterProjects: (filter: any) => void;
 editVariant: () => void;
 variant?: string;
 activeBreakpoint: string | undefined;
 startCategory: FilterCategoryKey;
 numberOfProjectsByCategory: Record<FilterCategoryKey, number>;
 isFilterMenuPinned: boolean;
};

const ActiveViewButton = ({ label }: { label: FilterCategoryKey }) => {
 return (
  <div className='relative'>
   <span>{label}</span>
   <div className='w-full h-[1px] bg-secondary bottom-0'></div>
  </div>
 );
};

const FilterBadge = ({ projectsTotal }: { projectsTotal: number }) => {
 return (
  <div className='absolute w-6 h-6 -top-[4px] -right-[18px] flex justify-center items-center'>
   <span className='text-labelSmall font-medium z-5'>[{projectsTotal}]</span>
  </div>
 );
};

const FilterButton = ({
 filterProjects,
 handleActiveButton,
 active,
 label,
 numberOfProjectsByCategory,
}: FilterButtonProps) => {
 return (
  <div className='relative'>
   <FilterBadge projectsTotal={numberOfProjectsByCategory[label]} />
   {active ? (
    <>
     <span>{label}</span>
     <div className='w-full h-[1px] bg-secondary bottom-0'></div>
    </>
   ) : (
    <button
     className='hover:text-colorFaded duration-200'
     onClick={(e) => {
      filterProjects(label);
      handleActiveButton(label);
     }}
    >
     {label}
    </button>
   )}
  </div>
 );
};

export default function ProjectsFilter({
 filterProjects,
 editVariant,
 variant,
 activeBreakpoint,
 startCategory,
 numberOfProjectsByCategory,
 isFilterMenuPinned,
}: ProjectsFilterProps) {
 const [activeButton, setActiveButton] = useState(startCategory);
 const titleWrapperRef = useRef<HTMLDivElement>(null);

 const handleActiveButton = (label: FilterCategoryKey) => {
  setActiveButton(label);
 };

 useLayoutEffect(() => {
  if (!titleWrapperRef.current) return;

  gsap.to(titleWrapperRef.current, {
   xPercent: isFilterMenuPinned ? 0 : -100,
   duration: 0.7,
   ease: 'power4.out',
  });
 }, [isFilterMenuPinned, titleWrapperRef]);

 return (
  <div
   ref={titleWrapperRef}
   className='w-full flex md:gap-16 bg-primary overflow-x-clip justify-between items-end mr-4 mb-4 lg:mb-8'
  >
   <div className='flex items-end gap-32 w-full'>
    {/* Hidden Work Title on scroll */}
    <h2
     className={`${
      activeBreakpoint !== 'desktop' && 'absolute'
     } px-2 text-displaySmall transition-transform duration-200 ease-in-out`}
    >
     Work
    </h2>
    {/* Filter buttons */}
    <div className='flex flex-col w-full md:w-fit md:flex-row gap-2 md:gap-8 items-end md:items-start lg:items-center pr-8'>
     {filterCategories.map((label, index) => {
      return (
       <div key={label} className='flex gap-8'>
        {index !== 0 && activeBreakpoint === 'desktop' && <span>/</span>}
        <FilterButton
         label={label}
         filterProjects={filterProjects}
         handleActiveButton={handleActiveButton}
         active={activeButton === label ? true : false}
         numberOfProjectsByCategory={numberOfProjectsByCategory}
        />
       </div>
      );
     })}
    </div>
   </div>
   {/* View buttons */}
   <div className='hidden lg:flex gap-8 align-bottom mr-4'>
    {variant === 'list' ? (
     <ActiveViewButton label='List' />
    ) : (
     <button
      className='hover:text-colorFaded transition-colors duration-200'
      onClick={() => {
       editVariant();
      }}
     >
      List
     </button>
    )}
    <span>/</span>
    {variant === 'image' ? (
     <ActiveViewButton label='Images' />
    ) : (
     <button
      className='hover:text-colorFaded transition-colors duration-200'
      onClick={() => {
       editVariant();
      }}
     >
      Images
     </button>
    )}
   </div>
  </div>
 );
}
