import { GridDiv } from '@/components';

export default function HeroMobile() {
 return (
  <div className='hero__mobile grid grid-cols-6 grid-rows-6 h-screen max-h-screen'>
   {/* Name */}
   <GridDiv
    divClass='col-span-6 row-span-1 text-headlineLarge overflow-hidden flex items-center uppercase'
    right={true}
    left={true}
   >
    Juli Scapucin
   </GridDiv>

   {/* Space */}
   <GridDiv
    divClass='col-span-full row-span-1 text-headlineLarge uppercase'
    top={true}
    right={true}
    left={true}
   ></GridDiv>

   {/* Description */}
   <GridDiv
    divClass='col-span-full row-span-1 text-headlineLarge uppercase'
    top={true}
    right={true}
    left={true}
   >
    Design & web Development
   </GridDiv>

   {/* Theme */}
   <GridDiv
    divClass='col-span-full row-span-1 flex justify-end text-titleSmall uppercase'
    top={true}
    right={true}
    left={true}
   >
    Theme
   </GridDiv>

   {/* Number */}
   <GridDiv
    divClass='col-span-6 row-span-3 text-huge overflow-hidden flex items-center'
    top={true}
    right={true}
    left={true}
   >
    23
   </GridDiv>
  </div>
 );
}
