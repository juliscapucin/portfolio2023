import { GridDiv } from '@/components';

export default function HeroMobile() {
 return (
  <div className='hero__mobile grid grid-cols-6 grid-rows-6 h-screen w-screen max-h-screen'>
   {/* Description */}
   <GridDiv divClass='col-span-full row-span-1' top={true} left={true}>
    Design & web Development
   </GridDiv>
  </div>
 );
}
