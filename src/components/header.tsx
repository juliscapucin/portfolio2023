import { navLinks } from '@/constants';

import { GridDiv, MenuDesktop, MenuMobile } from '@/components';

export default function Header() {
 return (
  <header className='fixed top-0 left-0 right-0 z-50'>
   {/* Outline */}
   <GridDiv
    divClass={'h-16 max-w-full mx-8 px-8 hidden lg:block'}
    right={true}
    left={true}
   >
    <MenuDesktop navLinks={navLinks} />
   </GridDiv>
   <GridDiv
    divClass={'h-[800px] max-w-full mx-8 block lg:hidden'}
    right={true}
    left={true}
   >
    <MenuMobile navLinks={navLinks} />
   </GridDiv>
  </header>
 );
}
