import { MouseEventHandler } from 'react';
import { IconBurger } from '@/components/icons';

interface ButtonBurgerProps {
 action: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonBurger({ action }: ButtonBurgerProps) {
 return (
  <button onClick={action} className='h-16 w-16 relative mr-8'>
   <IconBurger />
  </button>
 );
}
