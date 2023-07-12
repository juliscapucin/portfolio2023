import { MouseEvent } from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
   return twMerge(clsx(inputs));
};

export const handleShallowClick = (
   event: MouseEvent<HTMLButtonElement>,
   slug: string
): void => {
   event.preventDefault();
   history.replaceState(null, '', slug);
};
