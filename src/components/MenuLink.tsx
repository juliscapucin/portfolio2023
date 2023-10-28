'use client';

import { MouseEvent, useEffect, useRef } from 'react';
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
 const linkRef = useRef<HTMLButtonElement | null>(null);
 const pathname = usePathname();

 useEffect(() => {
  const link = linkRef.current;

  if (label === 'Home' && pathname === '/') {
   link?.classList.add('translate-y-full', 'pointer-events-none');
  } else {
   link?.classList.remove('translate-y-full', 'pointer-events-none');
  }
 }, [linkRef.current, pathname]);

 return (
  <div className='overflow-hidden max-h-8'>
   <button
    ref={linkRef}
    className={`flex flex-col justify-center items-center hover:-translate-y-1/2 transition-transform ${
     activeState && 'opacity-50 pointer-events-none'
    }`}
    onClick={action}
   >
    <span className='text-titleMedium uppercase text-secondary'>{label}</span>
    <span className='text-titleMedium uppercase text-secondary'>{label}</span>
   </button>
  </div>
 );
}
