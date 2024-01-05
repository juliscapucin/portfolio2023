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
 const numberRef = useRef(null);
 const descriptionRef = useRef(null);
 const statusRef = useRef(null);

 useLayoutEffect(() => {
  if (
   !nameRef.current ||
   !numberRef.current ||
   !descriptionRef.current ||
   !statusRef.current
  )
   return;

  let ctx = gsap.context(() => {
   // Name
   animateSplitText(nameRef.current!, 200, 0.7);
   // Description
   animateStaggerText(descriptionRef.current!, 0.7);
   // Number
   animateSplitText(numberRef.current!, 100, 1.4);
   // Status
   animateHorizontal(statusRef.current, -100, 0, 1.5);
  });

  return () => ctx.revert();
 }, [nameRef, numberRef, descriptionRef, statusRef]);

 return (
  <div
   className='hero__desktop grid grid-cols-12 grid-rows-6 h-screen max-h-screen w-full'
   ref={heroRef}
  >
   {/* Status */}
   <GridDiv
    ref={statusRef}
    divClass='status col-span-full row-span-1 grid grid-cols-12'
   >
    <Status />
   </GridDiv>

   {/* Name */}
   <GridDiv
    divClass='col-span-full row-span-1 overflow-clip flex items-center justify-end'
    top={true}
    bottom={true}
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
    divClass='col-span-full row-span-1 flex items-center'
    ref={descriptionRef}
   >
    <Marquee speed={150}>
     <h2 className='text-displaySmall xl:text-displayMedium font-normal whitespace-nowrap px-4'>
      Design & Web Development Design & Web Development
     </h2>
     <h2 className='text-displaySmall xl:text-displayMedium font-normal whitespace-nowrap px-4'>
      Design & Web Development Design & Web Development
     </h2>
    </Marquee>
   </GridDiv>

   {/* Number */}
   <GridDiv
    divClass='col-span-4 row-span-3 overflow-clip flex flex-nowrap items-center justify-center'
    top={true}
   >
    <h3 ref={numberRef} className='number font-normal tracking-tightest flex'>
     24
    </h3>
   </GridDiv>

   {/* Theme */}
   <GridDiv divClass='col-span-8 row-span-3' top={true} left={true}></GridDiv>

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
