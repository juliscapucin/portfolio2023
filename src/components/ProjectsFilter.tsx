import { useRef, useState } from 'react';

const filterOptions = ['all', 'recent', 'playground', 'archive'];

const ActiveButton = ({ label }: { label: string }) => {
 return (
  <div className='relative'>
   <span>{label}</span>
   <div className='w-full h-[1px] bg-secondary bottom-0'></div>
  </div>
 );
};

type FilterButtonProps = {
 filterProjects: (filter: any) => void;
 handleActiveButton: (label: string) => void;
 active: boolean;
 label: string;
};

const FilterButton = ({
 filterProjects,
 handleActiveButton,
 active,
 label,
}: FilterButtonProps) => {
 return active ? (
  <ActiveButton label={label} />
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

type ProjectsFilterProps = {
 filterProjects: (filter: any) => void;
 editVariant: () => void;
 variant?: string;
 activeBreakpoint: string | undefined;
};

export default function ProjectsFilter({
 filterProjects,
 editVariant,
 variant,
 activeBreakpoint,
}: ProjectsFilterProps) {
 const filterButtonsRef = useRef(null);
 const [activeButton, setActiveButton] = useState('all');

 const handleActiveButton = (label: string) => {
  setActiveButton(label);
 };

 return (
  <div className='flex justify-between items-end mt-16 mr-4 mb-16 lg:mb-4 lg:h-32'>
   {/* View buttons */}
   <div className='hidden md:flex gap-8 align-bottom '>
    {variant === 'list' ? (
     <ActiveButton label='List View' />
    ) : (
     <button
      className='hover:text-colorFaded transition-colors duration-200'
      onClick={() => {
       editVariant();
      }}
     >
      List View
     </button>
    )}
    <span>/</span>
    {variant === 'image' ? (
     <ActiveButton label='Image View' />
    ) : (
     <button
      className='hover:text-colorFaded transition-colors duration-200'
      onClick={() => {
       editVariant();
      }}
     >
      Image View
     </button>
    )}
   </div>

   {/* Filter buttons */}
   <div
    ref={filterButtonsRef}
    className='flex flex-col lg:flex-row gap-2 lg:gap-8 items-start lg:items-center align-bottom '
   >
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
