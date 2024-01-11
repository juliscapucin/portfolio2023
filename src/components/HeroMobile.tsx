import { useLayoutEffect, useRef } from 'react';

import { Status } from '@/components';
import { GridDiv, Marquee } from '@/components/ui';
import { animateSplitText } from '@/animations';

const HeroMobile = () => {
 const nameRef = useRef(null);
 const yearRef = useRef(null);
 const year = new Date().getFullYear().toString().slice(-2);

 useLayoutEffect(() => {
  if (!nameRef.current || !yearRef.current) return;
  // Name
  animateSplitText(nameRef.current, 300, 1);
  // Number
  animateSplitText(yearRef.current, 100, 1.4);
 }, [nameRef]);

 return (
  <div className='hero__mobile h-5/6 flex flex-col justify-between'>
   <div className='grid grid-cols-6'>
    {/* Status */}
    <GridDiv divClass='col-span-4 sm:col-span-3 md:col-span-1'>
     <Status />
    </GridDiv>
   </div>
   <div>
    {/* Marquee */}
    <GridDiv divClass='h-64 flex items-center' top={true}>
     <Marquee>
      <h2 className='text-displayMedium whitespace-nowrap px-2'>
       Design & Web Development
      </h2>
      <h2 className='text-displayMedium whitespace-nowrap px-2'>
       Design & Web Development
      </h2>
     </Marquee>
    </GridDiv>

    {/* Name */}
    <GridDiv divClass='overflow-clip h-32 flex items-center' top={true}>
     <h1 ref={nameRef} className='text-[11vw] whitespace-nowrap'>
      Juli Scapucin
     </h1>
    </GridDiv>

    {/* Year */}
    <GridDiv
     divClass='h-fit overflow-clip flex items-center'
     top={true}
     bottom={true}
    >
     <h3
      ref={yearRef}
      className='year font-normal tracking-tightest leading-none'
     >
      {year}
     </h3>
    </GridDiv>
   </div>
  </div>
 );
};

export default HeroMobile;
