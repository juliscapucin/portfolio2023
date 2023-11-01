import { forwardRef } from 'react';
import { Status, ThemeSwitcher } from '@/components';
import { GridDiv } from '@/components/ui';

export const HeroMobile = forwardRef<HTMLSpanElement, {}>((props, ref) => {
 return (
  <div className='hero__mobile grid grid-cols-6 grid-rows-6 h-screen max-h-screen'>
   {/* Status */}
   <GridDiv divClass='col-span-3 sm:col-span-2 md:col-span-1 row-span-1'>
    <Status />
   </GridDiv>

   {/* Name */}
   <GridDiv divClass='col-span-6 row-span-1 overflow-hidden flex items-center'>
    <h1 className='text-headlineLarge'>Juli Scapucin</h1>
   </GridDiv>

   {/* Description */}
   <GridDiv divClass='col-span-full row-span-1' top={true}>
    <h2 className='text-headlineLarge'>Design & web Development</h2>
   </GridDiv>

   {/* Theme */}
   <GridDiv divClass='col-span-full row-span-1 flex justify-end' top={true}>
    <ThemeSwitcher />
   </GridDiv>

   {/* Number */}
   <GridDiv
    divClass='col-span-6 row-span-3 overflow-hidden flex items-center'
    top={true}
   >
    <span ref={ref} className='tracking-tighter'>
     23
    </span>
   </GridDiv>
  </div>
 );
});
