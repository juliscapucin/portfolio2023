import { navLinks } from '@/constants';

import { GridDiv, MenuDesktop, MenuMobile } from '.';

export default function Header() {
 return (
  <header className='fixed top-0 z-50 w-full max-w-desktop'>
   {/* Outline */}
   <GridDiv
    divClass={'h-16 max-w-full mx-8 px-8 hidden lg:flex'}
    right={true}
    left={true}
   >
    <MenuDesktop navLinks={navLinks} />
   </GridDiv>
   <MenuMobile navLinks={navLinks} />
  </header>
 );
}
