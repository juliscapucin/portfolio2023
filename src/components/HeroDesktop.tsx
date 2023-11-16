import { useLayoutEffect, useRef } from 'react';

import { Status } from '@/components';
import { GridDiv } from '@/components/ui';
import {
 animateEnterHorizontal,
 animateSplitText,
 animateStaggerText,
} from '@/animations';

const HeroDesktop = () => {
 const heroRef = useRef(null);
 const nameRef = useRef(null);
 const numberRef = useRef(null);
 const descriptionRef = useRef(null);
 const statusRef = useRef(null);
 const themeRef = useRef(null);

 useLayoutEffect(() => {
  if (
   !nameRef.current ||
   !numberRef.current ||
   !descriptionRef.current ||
   !statusRef.current ||
   !themeRef.current
  )
   return;

  // Name
  animateSplitText(nameRef.current, 200, 0.7);
  // Description
  animateStaggerText(descriptionRef.current, 0.7);
  // Number
  animateSplitText(numberRef.current, 100, 1.4);
  // Status
  animateEnterHorizontal(statusRef.current, -100, 1.5);
 }, [nameRef, numberRef, descriptionRef, statusRef]);

 return (
  <div
   className='hero__desktop grid grid-cols-12 grid-rows-6 h-screen max-h-screen w-full'
   ref={heroRef}
  >
   {/* Status */}
   <GridDiv
    ref={statusRef}
    divClass='col-span-full row-span-1 grid grid-cols-12'
   >
    <Status />
   </GridDiv>

   {/* Blank Space */}
   <GridDiv divClass='col-span-5 row-span-1' top={true}></GridDiv>

   {/* Name */}
   <GridDiv
    divClass='col-span-7 row-span-1 overflow-hidden flex items-center justify-start'
    top={true}
   >
    <h1
     ref={nameRef}
     className='text-displaySmall xl:text-displayMedium font-normal whitespace-nowrap'
    >
     Juli Scapucin
    </h1>
   </GridDiv>

   {/* Blank Space */}
   <GridDiv divClass='col-span-5 row-span-1' top={true}></GridDiv>

   {/* Description */}
   <GridDiv
    divClass='col-span-7 row-span-1 flex flex-col items-start justify-center'
    top={true}
    ref={descriptionRef}
   >
    <h2 className='text-headlineLarge xl:text-displaySmall font-normal'>
     Design &
    </h2>
    <h2 className='text-headlineLarge xl:text-displaySmall font-normal'>
     Web Development
    </h2>
   </GridDiv>

   {/* Number */}
   <GridDiv
    divClass='col-span-4 row-span-3 overflow-hidden flex flex-nowrap items-center justify-center'
    top={true}
   >
    <h3
     ref={numberRef}
     className='text-numberDesktop font-normal tracking-tighter flex'
    >
     23
    </h3>
   </GridDiv>

   {/* Theme */}
   <GridDiv
    divClass='col-span-1 row-span-3'
    top={true}
    right={true}
    left={true}
    ref={themeRef}
   ></GridDiv>

   {/* Arrow */}
   {/* <GridDiv divClass='col-span-2 row-span-1' top={true} left={true}></GridDiv> */}
   {/* Snackbar */}
   {/* <GridDiv divClass='col-span-9 row-span-1' top={true} left={true}></GridDiv> */}
   {/* Blank Space */}
   <GridDiv divClass='col-span-7 row-span-3' top={true}></GridDiv>
  </div>
 );
};

export default HeroDesktop;
