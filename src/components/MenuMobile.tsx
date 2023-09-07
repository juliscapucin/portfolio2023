import { useRef } from 'react';

import { animateMobileMenu } from '@/animations';
import { GridDiv } from '.';

interface NavLinksProps {
 label: string;
 slug: string;
 id: number;
}

interface MenuProps {
 navLinks: NavLinksProps[];
}

export default function MenuMobile({ navLinks }: MenuProps) {
 const mobileMenuRef = useRef(null);

 return (
  <div className='block lg:hidden'>
   <GridDiv
    right={true}
    left={true}
    divClass='absolute max-w-full h-16 mx-8 flex justify-between items-center'
   >
    <button
     className='w-1/2 h-16 right-8'
     onClick={(e) => {
      console.log('home');
     }}
    >
     Home
    </button>
    <button
     className='w-1/2 h-16 right-8'
     onClick={(e) => {
      if (mobileMenuRef.current) animateMobileMenu(mobileMenuRef.current);
     }}
    >
     MENU
    </button>
   </GridDiv>
   <aside
    className='absolute top-0 w-full min-h-full p-8 bg-colorBlack transition-transform -translate-y-full'
    ref={mobileMenuRef}
   >
    <button
     onClick={(e) => {
      if (mobileMenuRef.current) {
       animateMobileMenu(mobileMenuRef.current);
      }
     }}
    >
     X
    </button>
    <nav className='flex flex-col h-full min-h-screen'>
     {navLinks.map((link) => {
      return (
       <a href={`/${link.slug}`} key={`${link.id}-mobile}`}>
        {link.label}
       </a>
      );
     })}
    </nav>
   </aside>
  </div>
 );
}
