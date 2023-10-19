'use client';

import { usePathname } from 'next/navigation';

import { GridDiv, MenuLink } from '@/components';
import { useModalContext } from '@/context';

type NavLink = { title: string; slug: string; _key: string };

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
     {/* Menu links */}
     <nav className='w-full h-full hidden lg:flex justify-end items-center gap-8 mr-8'>
      {navLinks.map((link) => {
       // Render all links if not in home page
       return pathname !== '/' ? (
        <MenuLink
         label={link.title}
         key={link._key}
         activeState={pathname.includes(`/${link.slug}`) ? true : false}
         action={() => {
          buttonAction(link);
         }}
        />
       ) : (
        // If in home page, render all links except home link
        link.slug !== '/' && (
         <MenuLink
          label={link.title}
          key={link._key}
          activeState={pathname.includes(`/${link.slug}`) ? true : false}
          action={() => {
           buttonAction(link);
          }}
         />
        )
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
