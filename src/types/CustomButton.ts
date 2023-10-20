import { MouseEventHandler } from 'react';

export type CustomButtonProps = {
   label: string;
   containerStyles?: string;
   handleClick?: MouseEventHandler<HTMLButtonElement>;
   buttonType?: 'button' | 'submit';
};
