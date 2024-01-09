import { useEffect, useState } from 'react';

import { MenuDesktop, MenuMobile } from '@/components';
import { usePageContext } from '@/context';

import { NavLink } from '@/types';

export default function Header() {
 const [navLinks, setNavLinks] = useState<NavLink[] | null>(null);
 const { transitionOnClick } = usePageContext();

 //  Fetch data from api Route Handler (api/...)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch(`/api/navbar`);
   const data = await response.json();

   setNavLinks(data.items);
  };

  fetchData();
 }, []);

 return (
  navLinks && (
   <header className='fixed top-0 z-100 w-full max-w-desktop overflow-clip'>
    <MenuDesktop navLinks={navLinks} transitionOnClick={transitionOnClick} />
    <MenuMobile navLinks={navLinks} transitionOnClick={transitionOnClick} />
   </header>
  )
 );
}
