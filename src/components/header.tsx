import { navLinks } from '@/constants';

import { MenuDesktop, MenuMobile } from '@/components';
import { usePageContext } from '@/context';

export default function Header() {
 const { transitionOnClick } = usePageContext();

 return (
  navLinks && (
   <header className='fixed top-0 z-100 w-full max-w-desktop'>
    <MenuDesktop navLinks={navLinks} transitionOnClick={transitionOnClick} />
    <MenuMobile navLinks={navLinks} transitionOnClick={transitionOnClick} />
   </header>
  )
 );
}
