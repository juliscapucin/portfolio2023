import { MouseEventHandler } from 'react';

interface ButtonBurgerProps {
 action: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonBurger({ action }: ButtonBurgerProps) {
 return (
  <button onClick={action} className='h-16 w-16 relative mr-8'>
   <div className='absolute h-[1px] w-full bg-secondary'></div>
   <div className='absolute h-[1px] w-full bg-secondary mt-4'></div>
  </button>
 );
}
