import { MouseEventHandler } from 'react';

interface ButtonCloseProps {
 action: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonClose({ action }: ButtonCloseProps) {
 return (
  <button onClick={action} className='h-16 w-16 relative'>
   <div className='absolute h-[1px] w-full bg-secondary rotate-45'></div>
   <div className='absolute h-[1px] w-full bg-secondary -rotate-45'></div>
  </button>
 );
}
