import { MouseEventHandler } from 'react';

interface ButtonPlusProps {
 action?: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonPlus({ action }: ButtonPlusProps) {
 return (
  <div className='h-16 w-16 flex justify-center items-center relative'>
   <div className='absolute h-[1px] w-3/4 bg-secondary'></div>
   <div className='absolute h-[1px] w-3/4 bg-secondary rotate-90'></div>
  </div>
 );
}
