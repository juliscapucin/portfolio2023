'use client';

import { navLinks } from '@/constants';
import { GridDiv, HeaderLink } from '@/components';
import { handleShallowClick } from '@/utils';
import { MouseEvent } from 'react';

export default function Header() {
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
    <button className='h-full' onClick={(e) => handleShallowClick(e, '/')}>
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
     {navLinks.map((link, index) => {
      return (
       <HeaderLink
        label={link.label}
        id={index}
        action={(e: MouseEvent<HTMLButtonElement>) =>
         handleShallowClick(e, `/${link.slug}`)
        }
       />
      );
     })}
     <HeaderLink
      label='Contact'
      action={(e: MouseEvent<HTMLButtonElement>) =>
       handleShallowClick(e, `/contact`)
      }
     />
    </nav>
   </GridDiv>

   {/* Mobile header */}
   <nav className='md:hidden max-w-[1440px] mx-auto sm:px-16 px-8 py-8'>
    Mobile
   </nav>
  </header>
 );
}
