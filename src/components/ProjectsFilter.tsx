interface ProjectsFilterProps {
 filterProjects: (filter: any) => void;
 editVariant: () => void;
 allProjects: any;
 work: any;
 playground: any;
 archive: any;
 variant?: string;
}

export default function ProjectsFilter({
 filterProjects,
 editVariant,
 allProjects,
 work,
 playground,
 archive,
 variant,
}: ProjectsFilterProps) {
 return (
  <div className='flex justify-between items-end mt-16 mr-4 mb-4 h-32'>
   {/* View buttons */}
   <div className='hidden md:flex gap-8 align-bottom '>
    {variant === 'list' ? (
     <span className='text-colorGray'>List View</span>
    ) : (
     <button
      onClick={() => {
       editVariant();
      }}
     >
      List View
     </button>
    )}
    <span>/</span>
    {variant === 'image' ? (
     <span className='text-colorGray'>Image View</span>
    ) : (
     <button
      onClick={() => {
       editVariant();
      }}
     >
      Image View
     </button>
    )}
   </div>

   {/* Filter buttons */}
   <div className='flex gap-8 align-bottom '>
    <button
     onClick={() => {
      filterProjects(allProjects);
     }}
    >
     All
    </button>
    <span>/</span>
    <button
     onClick={() => {
      filterProjects(work.links);
     }}
    >
     Recent
    </button>
    <span>/</span>
    <button
     onClick={() => {
      filterProjects(playground.links);
     }}
    >
     Playground
    </button>
    <span>/</span>
    <button
     onClick={() => {
      filterProjects(archive.links);
     }}
    >
     Archive
    </button>
   </div>
  </div>
 );
}
