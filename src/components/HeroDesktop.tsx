import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';

import { Status } from '@/components';
import { GridDiv, Marquee } from '@/components/ui';
import {
 animateHorizontal,
 animateSplitText,
 animateStaggerText,
} from '@/animations';

const HeroDesktop = () => {
 const heroRef = useRef(null);
 const nameRef = useRef(null);
 const yearRef = useRef(null);
 const descriptionRef = useRef(null);
 const statusRef = useRef(null);
 const year = new Date().getFullYear().toString().slice(-2);

 useLayoutEffect(() => {
  if (
   !nameRef.current ||
   !yearRef.current ||
   !descriptionRef.current ||
   !statusRef.current
  )
   return;

  let ctx = gsap.context(() => {
   // Name
   animateSplitText(nameRef.current!, 200, 0.7);
   // Description
   // animateStaggerText(descriptionRef.current!, 0.7); // fix this
   // Number
   animateSplitText(yearRef.current!, 150, 1.4);
   // Status
   animateHorizontal(statusRef.current, -100, 0, 1.5);
  });

  return () => ctx.revert();
 }, [nameRef, yearRef, descriptionRef, statusRef]);

 return (
  <div
   className='hero__desktop grid grid-cols-12 grid-rows-6 h-screen custom-min-h-screen max-h-screen w-full'
   ref={heroRef}
  >
   {/* Status */}
   <GridDiv
    ref={statusRef}
    divClass='status col-span-full row-span-1 grid grid-cols-12 bg-primary sticky top-16 z-5'
   >
    <Status />
   </GridDiv>

   {/* Name */}
   <GridDiv
    divClass='col-span-full row-span-1 overflow-clip flex items-center justify-end bg-primary sticky top-16 z-10'
    top={true}
   >
    <h1
     ref={nameRef}
     className='name text-displaySmall xl:text-displayMedium font-normal whitespace-nowrap'
    >
     Juli Scapucin
    </h1>
   </GridDiv>

   {/* Marquee */}
   <GridDiv
    divClass='col-span-full row-span-1 flex items-center bg-primary sticky top-16 z-20'
    ref={descriptionRef}
    top={true}
    bottom={true}
   >
    <Marquee>
     <h2 className='text-displaySmall xl:text-displayMedium font-normal whitespace-nowrap px-4'>
      Design & Web Development Design & Web Development
     </h2>
     <h2 className='text-displaySmall xl:text-displayMedium font-normal whitespace-nowrap px-4'>
      Design & Web Development Design & Web Development
     </h2>
    </Marquee>
   </GridDiv>

   {/* Year */}
   <GridDiv divClass='col-span-full row-span-3 grid grid-cols-12 bg-primary'>
    <GridDiv
     divClass='col-span-4 overflow-clip flex flex-nowrap items-center justify-center'
     right={true}
    >
     <h3
      ref={yearRef}
      className='year font-normal tracking-tightest flex -ml-16'
     >
      {year}
     </h3>
    </GridDiv>
   </GridDiv>
  </div>
 );
};

export default HeroDesktop;
