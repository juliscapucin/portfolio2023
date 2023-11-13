import { useRef } from 'react';

import { animateMobileMenu } from '@/animations';

import { Availability } from '@/components';
import { GridDiv } from '@/components/ui';
import { ButtonBurger, ButtonClose } from '@/components/buttons';

type NavLink = { label: string; slug: string; _key: number };

type NavLinksProps = {
 navLinks: NavLink[];
 buttonAction: (link: NavLink, mobileMenuRef: HTMLDivElement) => void;
};

export default function MenuMobile({ navLinks, buttonAction }: NavLinksProps) {
 const mobileMenuRef = useRef(null);

 return (
  <>
   {navLinks && (
    <div className='block lg:hidden'>
     <GridDiv
      divClass='absolute max-w-full max-w-16 py-2 flex justify-end items-center bg-primary'
      bottom={true}
     >
      {/* Burger Button */}
      <ButtonBurger
       action={(e) => {
        if (mobileMenuRef.current) {
         animateMobileMenu(mobileMenuRef.current);
        }
       }}
      />
     </GridDiv>
     <aside
      className='absolute top-0 w-full min-h-screen p-8 bg-primary transition-transform -translate-y-full'
      ref={mobileMenuRef}
     >
      {/* Close Button */}
      <ButtonClose
       action={(e) => {
        if (mobileMenuRef.current) {
         animateMobileMenu(mobileMenuRef.current);
        }
       }}
      />

      {/* Nav Links */}
      <nav className='flex flex-col border-solid border-b border-secondary mt-16 h-full'>
       {navLinks.map((link) => {
        return (
         <GridDiv
          bottom={true}
          divClass={`relative max-h-32 min-h-32 flex justify-start items-start`}
          key={link._key}
         >
          <button
           className='block'
           onClick={() => {
            if (mobileMenuRef.current)
             buttonAction(link, mobileMenuRef.current);
           }}
          >
           <span className='font-headline text-displaySmall uppercase text-secondary'>
            {link.label}
           </span>
          </button>
         </GridDiv>
        );
       })}
      </nav>
      {/* Availability / Contact */}
      <div className='w-full flex justify-center mt-32'>
       <Availability />
      </div>
     </aside>
    </div>
   )}
  </>
 );
}
