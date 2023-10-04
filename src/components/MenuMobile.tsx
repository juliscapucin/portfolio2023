import Link from 'next/link';
import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import {
 animateMobileMenu,
 animateToLeftTransition,
 animateToRightTransition,
} from '@/animations';

import { GridDiv } from '.';

import ButtonBurger from '@buttons/ButtonBurger';
import ButtonClose from '@buttons/ButtonClose';

type NavLinksProps = {
 navLinks: {
  title: string;
  slug: string;
  _key: string;
 }[];
};

export default function MenuMobile({ navLinks }: NavLinksProps) {
 const mobileMenuRef = useRef(null);
 const pathname = usePathname();
 const router = useRouter();

 return (
  <>
   {navLinks ? (
    <div className='block lg:hidden'>
     <GridDiv divClass='absolute max-w-full h-16 mx-8 flex justify-between items-center'>
      {/* Home Button */}
      <button
       className='w-1/2 h-16 right-8'
       onClick={() => {
        const shallowPage = document.querySelector('.shallow-page');
        if (shallowPage)
         animateToRightTransition('shallow-page', () => router.back());
        else {
         animateToRightTransition(`${pathname.slice(1)}-page`, () =>
          router.push('/')
         );
        }
       }}
      >
       {/* <button
     className='w-1/2 h-16 right-8'
     onClick={(e) => {
      console.log('home');
     }}
    > */}
       Home
      </button>

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
      className='absolute top-0 w-full min-h-full p-8 bg-colorBlack transition-transform -translate-y-full'
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
      <nav className='flex flex-col border-solid border-b border-colorWhite mt-16'>
       {navLinks.map((link) => {
        return (
         <GridDiv
          bottom={true}
          divClass={`relative max-h-32 min-h-32 flex justify-start items-start`}
          key={link._key}
         >
          <Link className='block' href={link.slug}>
           <span className='font-headline text-displaySmall uppercase text-secondary'>
            {link.title}
           </span>
          </Link>
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
