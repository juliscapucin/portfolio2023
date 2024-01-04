'use client';

import { usePathname } from 'next/navigation';

import { MenuLink, ThemeSwitcher } from '@/components';
import { GridDiv } from '@/components/ui';
import { useModalContext } from '@/context';

import { NavLink } from '@/types';

type NavLinksProps = {
 navLinks: NavLink[];
 transitionOnClick: (link: NavLink, mobileMenuRef?: HTMLDivElement) => void;
};

export default function MenuDesktop({
 navLinks,
 transitionOnClick,
}: NavLinksProps) {
 const { modalOpen, updateModalOpen } = useModalContext();
 const pathname = usePathname();

 return (
  <>
   {navLinks && (
    <GridDiv
     divClass={'h-16 max-w-full mx-8 px-4 hidden lg:flex bg-primary'}
     bottom={true}
    >
     {/* Menu links */}
     <nav className='w-full h-full hidden lg:flex justify-end items-center gap-8 mr-8'>
      {navLinks.map((link) => {
       return (
        <MenuLink
         label={link.label}
         key={link._key}
         activeState={pathname.includes(`/${link.slug}`) ? true : false}
         action={() => {
          transitionOnClick(link);
         }}
        />
       );
      })}

      {/* Contact button */}
      <MenuLink
       label='Connect'
       activeState={modalOpen && true}
       action={updateModalOpen}
      />
     </nav>

     <ThemeSwitcher variant='header' />
    </GridDiv>
   )}
  </>
 );
}
