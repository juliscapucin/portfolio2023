"use client"

import Link from 'next/link';
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/navigation';

interface HeaderProps {
   label: string;
   slug: string;
}

const navLinks = [
   { label: 'Home', slug: '/' },
   { label: 'Projects', slug: 'projects' },
   { label: 'Posts', slug: 'posts' },
   { label: 'Posts', slug: 'posts' },
   { label: 'Contact', slug: 'contact' }]

export default function Header() {
   const router = useRouter()

   return (
      <header className="header">
         <nav>
            {navLinks.map((link, index) => {
               return <button onClick={(e) => {
                  e.preventDefault();
                  history.replaceState(null, '', '/juli')
               }} key={index}>
                  {link.label}
               </button>
            })}
         </nav>
      </header>
   );
};