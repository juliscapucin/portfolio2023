import { MouseEvent, useRef } from 'react';

interface ProjectsFilterProps {
 filterProjects: (filter: any) => void;
 editVariant: () => void;
 variant?: string;
}

export default function ProjectsFilter({
 filterProjects,
 editVariant,
 variant,
}: ProjectsFilterProps) {
 const filterButtonsRef = useRef(null);

 const handleActiveButton = (e: MouseEvent) => {
  const filterDiv = filterButtonsRef.current as HTMLElement | null;
  if (!filterDiv) return;

  const button = e.target as HTMLButtonElement;
  const buttons = filterDiv.querySelectorAll('button');
  buttons.forEach((btn) => {
   btn.classList.remove('text-colorFaded');
  });
  button.classList.add('text-colorFaded');
 };

 return (
  <div className='flex justify-between items-end mt-16 mr-4 mb-4 h-32'>
   {/* View buttons */}
   <div className='hidden md:flex gap-8 align-bottom '>
    {variant === 'list' ? (
     <span className='text-colorFaded'>List View</span>
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
     <span className='text-colorFaded'>Image View</span>
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
    <button
     className='text-colorFaded hover:text-colorFaded duration-200'
     onClick={(e) => {
      filterProjects('all');
      handleActiveButton(e);
     }}
    >
     All
    </button>
    <span>/</span>
    <button
     className='hover:text-colorFaded duration-200'
     onClick={(e) => {
      filterProjects('latest');
      handleActiveButton(e);
     }}
    >
     Recent
    </button>
    <span>/</span>
    <button
     className='hover:text-colorFaded duration-200'
     onClick={(e) => {
      filterProjects('playground');
      handleActiveButton(e);
     }}
    >
     Playground
    </button>
    <span>/</span>
    <button
     className='hover:text-colorFaded duration-200'
     onClick={(e) => {
      filterProjects('archive');
      handleActiveButton(e);
     }}
    >
     Archive
    </button>
   </div>
  </div>
 );
}
