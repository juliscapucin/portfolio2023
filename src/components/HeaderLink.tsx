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
  <div className='overflow-hidden max-h-6'>
   <button
    className={`flex flex-col justify-center items-center hover:-translate-y-1/2 transition ${
     activeState ? 'opacity-50' : ''
    }`}
    onClick={action}
    type='button'
   >
    <span>{label}</span>
    <span>{label}</span>
   </button>
  </div>
 );
}
