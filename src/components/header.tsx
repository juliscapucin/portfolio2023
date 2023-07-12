'use client';

import { useRouter } from 'next/navigation';
import { navLinks } from '@/constants';
import { MouseEvent } from 'react';
import { GridDiv, GridElement, CustomSelect } from '@/components';

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
     {navLinks.map((link) => {
      return (
       <div className='overflow-hidden max-h-6' key={link.id}>
        <button
         className='flex flex-col justify-center items-center hover:-translate-y-1/2 transition'
         onClick={(e) => handleShallowClick(e, link.slug)}
         type='button'
        >
         <span>{link.label}</span>
         <span>{link.label}</span>
        </button>
       </div>
      );
     })}
    </nav>
    <CustomSelect />
   </GridDiv>

   {/* Mobile header */}
   <nav className='md:hidden max-w-[1440px] mx-auto sm:px-16 px-8 py-8'>
    Mobile
   </nav>
  </header>
 );
}
