import { forwardRef, useRef } from 'react';

import { Status, ThemeSwitcher } from '@/components';
import { GridDiv } from '@/components/ui';

export const HeroDesktop = forwardRef<HTMLSpanElement, {}>((props, ref) => {
 const heroRef = useRef(null);

 return (
  <div
   className='hero__desktop grid grid-cols-12 grid-rows-6 h-screen max-h-screen w-full'
   ref={heroRef}
  >
   {/* Status */}
   <GridDiv divClass='col-span-full row-span-1 grid grid-cols-12'>
    <Status />
   </GridDiv>

   {/* Blank Space */}
   <GridDiv divClass='col-span-5 row-span-1' top={true}></GridDiv>

   {/* Name */}
   <GridDiv
    divClass='col-span-7 row-span-1 overflow-hidden flex items-center justify-start'
    top={true}
   >
    <h1 className='text-displaySmall xl:text-displayMedium'>Juli Scapucin</h1>
   </GridDiv>

   {/* Blank Space */}
   <GridDiv divClass='col-span-5 row-span-1' top={true}></GridDiv>

   {/* Description */}
   <GridDiv
    divClass='col-span-7 row-span-1 flex flex-col items-start justify-center'
    top={true}
   >
    <h2 className='text-headlineLarge xl:text-displaySmall'>Design & Web</h2>
    <h2 className='text-headlineLarge xl:text-displaySmall'>Development</h2>
   </GridDiv>

   {/* Number */}
   <GridDiv
    divClass='col-span-4 row-span-3 overflow-hidden flex items-center'
    top={true}
   >
    <span ref={ref} className='desktop tracking-tighter'>
     23
    </span>
   </GridDiv>

   {/* Theme */}
   <GridDiv
    divClass='col-span-1 row-span-3'
    top={true}
    right={true}
    left={true}
   >
    <ThemeSwitcher />
   </GridDiv>

   {/* Arrow */}
   {/* <GridDiv divClass='col-span-2 row-span-1' top={true} left={true}></GridDiv> */}
   {/* Snackbar */}
   {/* <GridDiv divClass='col-span-9 row-span-1' top={true} left={true}></GridDiv> */}
   {/* Blank Space */}
   <GridDiv divClass='col-span-7 row-span-3' top={true}></GridDiv>
  </div>
 );
});
