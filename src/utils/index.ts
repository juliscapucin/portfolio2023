import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MouseEvent } from 'react';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export const handleShallowClick = (
   event: MouseEvent<HTMLButtonElement>,
   slug: string
): void => {
   event.preventDefault();
   const url = new URL(window.location.href);
   const baseURL = `${url.protocol}//${url.host}/`;
   setTimeout(() => {
      console.log('waiting');
      window.location.href = `${baseURL}${slug}`;
   }, 1000);
};

export const toggleModal = (element: HTMLElement) => {
   console.log('hi');
};
