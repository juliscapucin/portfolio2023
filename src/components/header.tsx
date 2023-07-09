"use client"

import Link from 'next/link';
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton'
import { navLinks } from '@/constants';

export default function Header() {
   const router = useRouter()

   return (
      <header className="w-full absolute z-10">
         <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-8 py-8">
            {navLinks.map((link, index) => {
               return <button className="flex justify-center items-center" onClick={(e) => {
                  e.preventDefault();
                  history.replaceState(null, '', link.slug)
               }} key={index}>
                  {link.label}
               </button>
            })}
         </nav>
         <CustomButton label='Sign in' buttonType='button' containerStyles="text-primary-white rounded-full min-w-[130px] bg-green-500" />
      </header>
   );
};