import { MouseEventHandler } from 'react';
import { IconBurger } from '@/components/icons';

interface ButtonBurgerProps {
 action: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonBurger({ action }: ButtonBurgerProps) {
 return (
  <button onClick={action} aria-label='open menu'>
   <IconBurger />
  </button>
 );
}
