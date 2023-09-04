'use client';

import { useModalOpen } from '@/hooks';
import { MouseEvent } from 'react';

interface HeaderLinkProps {
 label: string;
 action?: (e: MouseEvent<HTMLButtonElement>) => void | (() => void);
 activeState?: boolean;
}

export default function HeaderLink({
 label,
 action,
 activeState,
}: HeaderLinkProps) {
 return (
  <div className='overflow-hidden max-h-8'>
   <button
    className={`flex flex-col justify-center items-center hover:-translate-y-1/2 transition ${
     activeState ? 'opacity-50' : ''
    }`}
    onClick={action}
    type='button'
   >
    <span className='text-titleMedium uppercase'>{label}</span>
    <span className='text-titleMedium uppercase'>{label}</span>
   </button>
  </div>
 );
}
