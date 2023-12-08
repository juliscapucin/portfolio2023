import { useRef, useState } from 'react';

const filterOptions = ['all', 'recent', 'playground', 'archive'];

type FilterButtonProps = {
 filterProjects: (filter: any) => void;
 handleActiveButton: (label: string) => void;
 active: boolean;
 label: string;
};

type ProjectsFilterProps = {
 filterProjects: (filter: any) => void;
 editVariant: () => void;
 variant?: string;
 activeBreakpoint: string | undefined;
 startCategory: 'all' | 'recent' | 'playground' | 'archive';
};

const ActiveFilterButton = ({ label }: { label: string }) => {
 return (
  <div className='relative'>
   <span>{label}</span>
   <div className='w-full h-[1px] bg-secondary bottom-0'></div>
  </div>
 );
};

const FilterButton = ({
 filterProjects,
 handleActiveButton,
 active,
 label,
}: FilterButtonProps) => {
 return active ? (
  <div className='relative'>
   <span>{label}</span>
   <div className='w-full h-[1px] bg-secondary bottom-0'></div>
  </div>
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
 );
};

export default function ProjectsFilter({
 filterProjects,
 editVariant,
 variant,
 activeBreakpoint,
 startCategory,
}: ProjectsFilterProps) {
 const filterButtonsRef = useRef(null);
 const [activeButton, setActiveButton] = useState(startCategory);

 const handleActiveButton = (label: string) => {
  setActiveButton(label as 'all' | 'recent' | 'playground' | 'archive');
 };

 return (
  <div className='w-full flex justify-between items-end mr-4 mb-4'>
   {/* View buttons */}
   <div className='hidden lg:flex gap-8 align-bottom '>
    <span>View:</span>
    {variant === 'list' ? (
     <ActiveFilterButton label='List' />
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
     <ActiveFilterButton label='Image' />
    ) : (
     <button
      className='hover:text-colorFaded transition-colors duration-200'
      onClick={() => {
       editVariant();
      }}
     >
      Image
     </button>
    )}
   </div>
   {/* Filter buttons */}
   <div
    ref={filterButtonsRef}
    className='flex flex-col w-full md:w-fit md:flex-row gap-2 lg:gap-8 items-end md:items-start lg:items-center align-bottom '
   >
    <span className='hidden md:block'>Filter:</span>
    {filterOptions.map((label, index) => {
     return (
      <div key={label} className='flex gap-8'>
       {index !== 0 && activeBreakpoint === 'desktop' && <span>/</span>}
       <FilterButton
        label={label}
        filterProjects={filterProjects}
        handleActiveButton={handleActiveButton}
        active={activeButton === label ? true : false}
       />
      </div>
     );
    })}
   </div>
  </div>
 );
}
