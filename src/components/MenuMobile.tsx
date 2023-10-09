import { useRef } from 'react';

import { animateMobileMenu } from '@/animations';

import { GridDiv } from '.';

import ButtonBurger from '@buttons/ButtonBurger';
import ButtonClose from '@buttons/ButtonClose';

type NavLink = { title: string; slug: string; _key: string };

type NavLinksProps = {
 navLinks: NavLink[];
 buttonAction: (link: NavLink, mobileMenuRef: HTMLDivElement) => void;
};

export default function MenuMobile({ navLinks, buttonAction }: NavLinksProps) {
 const mobileMenuRef = useRef(null);

 return (
  <>
   {navLinks ? (
    <div className='block lg:hidden'>
     <GridDiv divClass='absolute max-w-full h-16 mx-8 flex justify-end items-center bg-primary'>
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
            {link.title}
           </span>
          </button>
         </GridDiv>
        );
       })}
      </nav>
      {/* Availability / Contact */}
      <div className='flex flex-col items-start mt-32'>
       <span className='text-headlineSmall'>Available November 2023</span>
       <a href='mailto:hello@juliscapucin.com' className='text-displaySmall'>
        Say Hi :)
       </a>
      </div>
     </aside>
    </div>
   ) : (
    <h1>Loading...</h1>
   )}
  </>
 );
}
