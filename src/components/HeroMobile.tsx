import { GridDiv, Status, ThemeSwitcher } from '@/components';

export default function HeroMobile() {
 return (
  <div className='hero__mobile grid grid-cols-6 grid-rows-6 h-screen max-h-screen'>
   {/* Status */}
   <GridDiv divClass='col-span-full row-span-1' top={true}>
    <div className='col-span-full row-span-1 grid grid-cols-20'>
     <Status />
    </div>
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
    <span className='text-huge tracking-tighter'>23</span>
   </GridDiv>
  </div>
 );
}
