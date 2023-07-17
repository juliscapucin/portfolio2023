'use client';

import Link from 'next/link';
import { navLinks } from '@/constants';
import { GridDiv, HeaderLink } from '@/components';
import { MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useModalContext } from '@/context';

interface HeaderProps {
 label: string;
 slug: string;
}

export default function Header() {
 const { modalOpen, updateModalOpen } = useModalContext();
 const pathname = usePathname();
 const router = useRouter();

 return (
  <header className='w-full absolute flex h-16 z-10 max-w-[2000px] overflow-hidden'>
   {/* Desktop Header */}
   <GridDiv
    divClass={
     'flex h-full items-center justify-between relative overflow-hidden'
    }
    top={false}
    right={true}
    bottom={true}
    left={true}
   >
    <button className='h-full' onClick={(e) => router.push('/')}>
     <GridDiv
      top={false}
      right={true}
      bottom={false}
      left={false}
      divClass='flex items-center justify-center'
     >
      <span className='min-w-[4rem]'>&#5193;</span>
     </GridDiv>
    </button>
    <nav className='w-4/5 max-w-screen-md h-full hidden md:flex justify-between items-center mr-8'>
     {navLinks.map((link) => {
      return (
       //  <Link key={link.label} href={`/photos/${link.slug}`}></Link>
       <HeaderLink
        label={link.label}
        key={link.label}
        activeState={pathname === `/${link.slug}` ? true : false}
        action={(e: MouseEvent<HTMLButtonElement>) =>
         console.log(e, `/${link.slug}`)
        }
       />
      );
     })}
     <HeaderLink label='Contact' action={updateModalOpen} />
    </nav>
   </GridDiv>

   {/* Mobile header */}
   <nav className='md:hidden max-w-[1440px] mx-auto sm:px-16 px-8 py-8'>
    Mobile
   </nav>
  </header>
 );
}
