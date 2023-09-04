import { GridDiv } from '@/components';

export default function () {
 return (
  <GridDiv
   divClass='grid grid-cols-20 grid-rows-6 min-h-screen min-w-[160vw]'
   top={false}
   right={true}
   bottom={true}
   left={true}
  >
   {/* Status */}
   <div className='border border-white col-span-full row-span-1'></div>
   {/* Description */}
   <div className='border border-white col-span-full row-span-1'></div>
   {/* Name */}
   <div className='border border-white col-span-full row-span-1'></div>
   {/* Number */}
   <div className='border border-white col-span-3 row-span-3'></div>
   {/* Theme */}
   <div className='border border-white col-span-1 row-span-3'></div>
   {/* Blank Space */}
   <div className='border border-white col-span-2 row-span-3'></div>
   {/* Blank Space */}
   <div className='border border-white col-span-4 row-span-1'></div>
   {/* Surname */}
   <div className='border border-white col-span-9 row-span-1'></div>
   {/* Arrow */}
   <div className='border border-white col-span-2 row-span-1'></div>
   {/* Snackbar */}
   <div className='border border-white col-span-5 row-span-1'></div>
   {/* Blank Space */}
   <div className='border border-white col-span-8 row-span-1'></div>
   <div className='border border-white col-span-15 row-span-1 bg-red-500'></div>
  </GridDiv>
 );
}
