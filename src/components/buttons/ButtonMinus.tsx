import { MouseEventHandler } from 'react';

interface ButtonMinusProps {
 action?: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonMinus({ action }: ButtonMinusProps) {
 return (
  <div className='h-16 w-16 flex justify-center items-center relative'>
   <div className='absolute h-[1px] w-3/4 bg-colorBlack dark:bg-colorWhite'></div>
  </div>
 );
}
