'use client';

import { MouseEvent } from 'react';
import { usePathname } from 'next/navigation';

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
 const pathname = usePathname();

 return (
  <>
   {activeState ? (
    <div className='relative max-h-8'>
     <span className='text-titleMedium uppercase text-secondary'>{label}</span>
     <div className='absolute -bottom-1 w-full h-[1px] bg-secondary'></div>
    </div>
   ) : (
    <div className='overflow-clip max-h-8'>
     <button
      className={`flex flex-col justify-center items-center hover:-translate-y-1/2 transition-transform ${
       label === 'Home' &&
       pathname === '/' &&
       'translate-y-full pointer-events-none'
      }`}
      onClick={action}
      aria-hidden={pathname === '/' && label === 'Home'}
      tabIndex={pathname === '/' && label === 'Home' ? -1 : 0}
     >
      <span className='text-titleMedium uppercase text-secondary'>{label}</span>
      <span className='text-titleMedium uppercase text-secondary'>{label}</span>
     </button>
    </div>
   )}
  </>
 );
}
