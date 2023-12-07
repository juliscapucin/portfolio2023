import { navLinks } from '@/constants';

import { MenuDesktop, MenuMobile } from '@/components';
import { usePageContext } from '@/context';

export default function Header() {
 const { buttonAction } = usePageContext();

 return (
  navLinks && (
   <header className='fixed top-0 z-100 w-full max-w-desktop'>
    <MenuDesktop navLinks={navLinks} buttonAction={buttonAction} />
    <MenuMobile navLinks={navLinks} buttonAction={buttonAction} />
   </header>
  )
 );
}
