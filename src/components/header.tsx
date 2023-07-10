'use client';

import Link from 'next/link';
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { navLinks } from '@/constants';
import { MouseEvent } from 'react';

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
  <header className='w-full absolute z-10'>
   {/* Desktop Header */}
   <nav className='hidden md:flex max-w-[1440px] mx-auto justify-between items-center sm:px-16 px-8 py-8'>
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
   {/* Mobile header */}
   <nav className='md:hidden max-w-[1440px] mx-auto sm:px-16 px-8 py-8'>
    Mobile
   </nav>
  </header>
 );
}
