import { useRef } from 'react';

import { animateMobileMenu } from '@/animations';

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
  <div>
   <button
    className='absolute w-16 h-16 right-8'
    onClick={() => {
     if (mobileMenuRef.current) animateMobileMenu(mobileMenuRef.current);
    }}
   >
    X
   </button>
   <aside
    className='absolute w-full min-h-full p-8 bg-colorBlack transition-transform -translate-y-full'
    ref={mobileMenuRef}
   >
    <button
     onClick={() => {
      if (mobileMenuRef.current) animateMobileMenu(mobileMenuRef.current);
     }}
    >
     X
    </button>
    <nav className='flex flex-col min-h-full'>
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
