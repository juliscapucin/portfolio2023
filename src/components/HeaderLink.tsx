'use client';

import { handleShallowClick } from '@/utils';
import { MouseEvent } from 'react';

interface HeaderLinkProps {
 label: string;
 id?: number;
 action: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function HeaderLink({ label, id, action }: HeaderLinkProps) {
 const toggleModal = (element: HTMLElement) => {
  console.log('hi');
 };

 return (
  <div className='overflow-hidden max-h-6' key={id}>
   <button
    className='flex flex-col justify-center items-center hover:-translate-y-1/2 transition'
    onClick={action}
    type='button'
   >
    <span>{label}</span>
    <span>{label}</span>
   </button>
  </div>
 );
}
