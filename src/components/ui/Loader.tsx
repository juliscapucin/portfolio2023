export default function Loader() {
 return (
  <div className='relative w-16 h-16 animate-spin'>
   <div className='absolute w-full h-full top-0 left-0 rounded-full border border-transparent border-r-secondary z-10'></div>
   <div className='absolute w-full h-full top-0 left-0 rounded-full border border-colorFaded opacity-20'></div>
  </div>
 );
}
