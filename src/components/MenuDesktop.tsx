'use client';

import { usePathname } from 'next/navigation';

import { MenuLink, ThemeSwitcher } from '@/components';
import { GridDiv } from '@/components/ui';
import { useModalContext } from '@/context';

type NavLink = { label: string; slug: string; _key: number };

type NavLinksProps = {
 navLinks: NavLink[];
 buttonAction: (link: NavLink) => void;
};

export default function MenuDesktop({ navLinks, buttonAction }: NavLinksProps) {
 const { updateModalOpen } = useModalContext();
 const pathname = usePathname();

 return (
  <>
   {navLinks ? (
    <GridDiv
     divClass={'h-16 max-w-full mx-8 px-8 hidden lg:flex bg-primary'}
     bottom={true}
    >
     <ThemeSwitcher variant='header' />
     {/* Menu links */}
     <nav className='w-full h-full hidden lg:flex justify-end items-center gap-8 mr-8'>
      {navLinks.map((link) => {
       return (
        <MenuLink
         label={link.label}
         key={link._key}
         activeState={pathname.includes(`/${link.slug}`) ? true : false}
         action={() => {
          buttonAction(link);
         }}
        />
       );
      })}

      {/* Contact button */}
      <MenuLink label='Connect' action={updateModalOpen} />
     </nav>
    </GridDiv>
   ) : (
    <span>Loading...</span>
   )}
  </>
 );
}
