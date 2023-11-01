import { useEffect, useRef, useState } from 'react';

const filterOptions = ['all', 'recent', 'playground', 'archive'];

interface ProjectsFilterProps {
 filterProjects: (filter: any) => void;
 editVariant: () => void;
 variant?: string;
}

const ActiveButton = ({ label }: { label: string }) => {
 return (
  <div className='relative'>
   <span>{label}</span>
   <div className='w-full h-[1px] bg-secondary bottom-0'></div>
  </div>
 );
};

type FilterButton = {
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
}: FilterButton) => {
 return active ? (
  <ActiveButton label={label.toUpperCase()} />
 ) : (
  <button
   className='hover:text-colorFaded duration-200'
   onClick={(e) => {
    filterProjects(label);
    handleActiveButton(label);
   }}
  >
   {label.toUpperCase()}
  </button>
 );
};

export default function ProjectsFilter({
 filterProjects,
 editVariant,
 variant,
}: ProjectsFilterProps) {
 const filterButtonsRef = useRef(null);
 const [activeButton, setActiveButton] = useState('all');

 const handleActiveButton = (label: string) => {
  setActiveButton(label);
 };

 useEffect(() => {
  console.log(activeButton);
 }, [activeButton]);

 return (
  <div className='flex justify-between items-end mt-16 mr-4 mb-4 h-32'>
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
   <div ref={filterButtonsRef} className='flex gap-8 align-bottom '>
    {filterOptions.map((label) => {
     return (
      <>
       <FilterButton
        label={label}
        filterProjects={filterProjects}
        handleActiveButton={handleActiveButton}
        active={activeButton === label ? true : false}
       />
       <span>/</span>
      </>
     );
    })}
   </div>
  </div>
 );
}
