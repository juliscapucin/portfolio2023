import { navLinks } from '@/constants';

import { MenuDesktop, MenuMobile } from '.';

export default function Header() {
 return (
  <header className='fixed top-0 z-50 w-full max-w-desktop'>
   <MenuDesktop navLinks={navLinks} />
   <MenuMobile navLinks={navLinks} />
  </header>
 );
}
