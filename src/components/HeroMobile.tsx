import { useLayoutEffect, useRef } from 'react';

import { Status, ThemeSwitcher } from '@/components';
import { GridDiv, Marquee } from '@/components/ui';
import { animateSplitText } from '@/animations';

const HeroMobile = () => {
 const nameRef = useRef(null);
 const numberRef = useRef(null);

 useLayoutEffect(() => {
  if (!nameRef.current || !numberRef.current) return;
  // Name
  animateSplitText(nameRef.current, 300, 1);
  // Number
  animateSplitText(numberRef.current, 100, 1.4);
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
     <Marquee speed={150}>
      <h2 className='text-displayMedium whitespace-nowrap px-2'>
       Design & Web Development
      </h2>
      <h2 className='text-displayMedium whitespace-nowrap px-2'>
       Design & Web Development
      </h2>
     </Marquee>
    </GridDiv>

    {/* Name */}
    <GridDiv divClass='overflow-hidden h-32 flex items-center' top={true}>
     <h1 ref={nameRef} className='text-[11vw] whitespace-nowrap'>
      Juli Scapucin
     </h1>
    </GridDiv>

    {/* Number */}
    <GridDiv
     divClass='h-fit overflow-hidden flex items-center'
     top={true}
     bottom={true}
    >
     <h3
      ref={numberRef}
      className='number font-normal tracking-tightest leading-none'
     >
      23
     </h3>
    </GridDiv>
   </div>
  </div>
 );
};

export default HeroMobile;
