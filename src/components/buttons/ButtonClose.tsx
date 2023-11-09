import { MouseEventHandler } from 'react';
import { IconClose } from '@/components/icons';

interface ButtonCloseProps {
 action: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonClose({ action }: ButtonCloseProps) {
 return (
  <button
   onClick={action}
   className='h-16 w-16 relative'
   aria-label='close menu'
  >
   <IconClose />
  </button>
 );
}
