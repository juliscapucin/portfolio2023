'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

interface MenuLinkProps {
 label: string;
 action?: (e: MouseEvent<HTMLButtonElement>) => void | (() => void);
 activeState?: boolean;
 slug?: string;
}

export default function MenuLink({
 label,
 action,
 activeState,
}: MenuLinkProps) {
 const router = useRouter();

 return (
  <div className='overflow-hidden max-h-8'>
   <button
    className={`flex flex-col justify-center items-center hover:-translate-y-1/2 transition ${
     activeState ? 'opacity-50 pointer-events-none' : ''
    }`}
    onClick={action}
   >
    <span className='text-titleMedium uppercase text-colorBlack dark:text-colorWhite'>
     {label}
    </span>
    <span className='text-titleMedium uppercase text-colorBlack dark:text-colorWhite'>
     {label}
    </span>
   </button>
  </div>
 );
}
