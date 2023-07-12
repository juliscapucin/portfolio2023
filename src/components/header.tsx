'use client';

import Link from 'next/link';
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { navLinks } from '@/constants';
import { MouseEvent } from 'react';
import { GridDiv } from '@/components';

export default function Header() {
 const router = useRouter();
 const handleShallowClick = (
  event: MouseEvent<HTMLButtonElement>,
  slug: string
 ): void => {
  event.preventDefault();
  history.replaceState(null, '', slug);
 };

 return (
  <header className='w-full absolute flex h-16 z-10'>
   {/* Desktop Header */}
   <GridDiv
    divClass={'flex h-full items-center justify-between'}
    top={false}
    right={true}
    bottom={true}
    left={true}
   >
    <h1 className='pl-8 pr-16'>LOGO</h1>
    <nav className='w-4/5 max-w-screen-md h-full hidden md:flex justify-between items-center mr-8'>
     {navLinks.map((link, index) => {
      return (
       <button
        className='flex justify-center items-center'
        onClick={(e) => handleShallowClick(e, link.slug)}
        key={index}
        type='button'
       >
        {link.label}
       </button>
      );
     })}
    </nav>
   </GridDiv>

   {/* Mobile header */}
   <nav className='md:hidden max-w-[1440px] mx-auto sm:px-16 px-8 py-8'>
    Mobile
   </nav>
  </header>
 );
}
