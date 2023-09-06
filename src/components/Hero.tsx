import { useLayoutEffect, useRef } from 'react';

import { GridDiv } from '@/components';
import { animatePanorama } from '@/animations';
import { useMediaQuery } from '@/hooks';

export default function () {
 const heroRef = useRef(null);

 useLayoutEffect(() => {
  if (heroRef.current) animatePanorama(heroRef.current);
 }, [heroRef]);

 const isBreakpoint = useMediaQuery(1200);

 return (
  <>
   {isBreakpoint ? (
    <div></div>
   ) : (
    <div
     ref={heroRef}
     className='grid grid-cols-20 grid-rows-6 h-screen max-h-screen min-w-[160vw]'
    >
     {/* Status */}
     <GridDiv
      divClass='col-span-full row-span-1'
      top={true}
      left={true}
     ></GridDiv>

     {/* Description */}
     <GridDiv
      divClass='col-span-full row-span-1'
      top={true}
      left={true}
     ></GridDiv>

     {/* Blank Space */}
     <GridDiv divClass='col-span-8 row-span-1' top={true} left={true}></GridDiv>

     {/* Name */}
     <GridDiv
      divClass='col-span-12 row-span-1 text-displayLarge overflow-hidden flex items-center'
      top={true}
      left={true}
     >
      JULI
     </GridDiv>

     {/* Number */}
     <GridDiv
      divClass='col-span-3 row-span-3 text-huge overflow-hidden flex items-center'
      top={true}
      left={true}
     >
      23
     </GridDiv>

     {/* Theme */}
     <GridDiv divClass='col-span-1 row-span-3' top={true} left={true}></GridDiv>

     {/* Blank Space */}
     <GridDiv divClass='col-span-2 row-span-3' top={true} left={true}></GridDiv>

     {/* Blank Space */}
     <GridDiv divClass='col-span-4 row-span-1' top={true} left={true}></GridDiv>

     {/* Surname */}
     <GridDiv
      divClass='col-span-9 row-span-1 text-displayLarge overflow-hidden flex items-center'
      top={true}
      left={true}
     >
      SCAPUCIN
     </GridDiv>
     {/* Arrow */}
     <GridDiv divClass='col-span-2 row-span-1' top={true} left={true}></GridDiv>
     {/* Snackbar */}
     <GridDiv divClass='col-span-9 row-span-1' top={true} left={true}></GridDiv>
     {/* Blank Space */}
     <GridDiv
      divClass='col-span-11 row-span-1'
      top={true}
      left={true}
     ></GridDiv>
    </div>
   )}
  </>
 );
}
