'use client';

import { useEffect, MouseEvent } from 'react';

import { ButtonArrow } from '@buttons/.';
import { useThemeStorage } from '@/hooks';

const themes = [
 { theme: 'light', color: 'bg-colorWhite' },
 { theme: 'dark', color: 'bg-colorBlack' },
 { theme: 'green', color: 'bg-colorGreen' },
];

interface Props {
 variant: 'body' | 'header';
}

export default function ThemeSwitcher({ variant }: Props) {
 const { theme, setTheme } = useThemeStorage();

 const handleThemeChange = (
  e: MouseEvent<HTMLButtonElement>,
  color: string
 ) => {
  setTheme(color);
  e.currentTarget.classList.add('active');
 };

 //  Apply theme on theme change
 useEffect(() => {
  const documentDiv = document.querySelector('html');
  documentDiv?.setAttribute('data-theme', theme);
 }, [theme]);

 return (
  <>
   {variant === 'body' && (
    <div className='theme-switcher mt-4 lg:mt-8 flex flex-col items-center'>
     <span className='mb-2 lg:mb-4'>Theme</span>
     <div className='flex flex-col gap-2'>
      {themes.map((item) => {
       return (
        <div className='flex gap-2 items-center' key={item.theme}>
         <div
          className={`arrow w-8 fill-secondary transition-opacity ${
           theme !== item.theme && 'opacity-0'
          }`}
         >
          <ButtonArrow />
         </div>
         <button
          type='button'
          className={`${item.color} ${
           item.theme === theme && 'active'
          } border border-colorFaded w-8 lg:w-10 h-8 lg:h-10`}
          onClick={(e) => handleThemeChange(e, item.theme)}
         ></button>
        </div>
       );
      })}
     </div>
    </div>
   )}
   {variant === 'header' && (
    <div className='theme-switcher flex items-center'>
     <span className='mb-2 lg:mb-4'>Theme</span>
     <div className='flex gap-2'>
      {themes.map((item) => {
       return (
        <div className='flex gap-2 items-center' key={item.theme}>
         <div
          className={`arrow w-8 fill-secondary transition-opacity ${
           theme !== item.theme && 'opacity-0'
          }`}
         >
          <ButtonArrow />
         </div>
         <button
          type='button'
          className={`${item.color} ${
           item.theme === theme && 'active'
          } border border-colorFaded w-8 lg:w-10 h-8 lg:h-10`}
          onClick={(e) => handleThemeChange(e, item.theme)}
         ></button>
        </div>
       );
      })}
     </div>
    </div>
   )}
  </>
 );
}
