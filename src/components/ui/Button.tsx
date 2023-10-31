'use client';

import { MouseEvent, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface ButtonProps {
 label: string;
 action?: (e: MouseEvent<HTMLButtonElement>) => void | (() => void);
 activeState?: boolean;
 slug?: string;
}

export default function Button({ label, action, activeState }: ButtonProps) {
 const linkRef = useRef<HTMLButtonElement | null>(null);
 const pathname = usePathname();

 useEffect(() => {
  const link = linkRef.current;
  link?.classList.remove('translate-y-full');
  link?.classList.add('translate-y-0');
 }, [linkRef.current, pathname]);

 return (
  <div className='overflow-hidden max-h-8'>
   <button
    ref={linkRef}
    className={`flex flex-col justify-center items-center translate-y-full hover:-translate-y-1/2 transition ${
     activeState ? 'opacity-50 pointer-events-none' : ''
    }`}
    onClick={action}
   >
    <span className='text-titleMedium uppercase text-secondary'>{label}</span>
    <span className='text-titleMedium uppercase text-secondary'>{label}</span>
   </button>
  </div>
 );
}
