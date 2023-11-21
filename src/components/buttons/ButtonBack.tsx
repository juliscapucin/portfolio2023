import { MouseEventHandler } from 'react';
import { IconArrowBack } from '@icons/.';

interface ButtonCloseProps {
 action: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonBack({ action }: ButtonCloseProps) {
 return (
  <button
   onClick={action}
   className='fixed z-50 h-8 flex gap-4 items-center group'
   aria-label='back'
  >
   <div className='text-secondary h-4'>
    <IconArrowBack />
   </div>
   <div className='h-8 overflow-hidden'>
    <div className='flex flex-col justify-start items-start group-hover:-translate-y-1/2 transition'>
     <span>Back</span>
     <span>Back</span>
    </div>
   </div>
  </button>
 );
}
