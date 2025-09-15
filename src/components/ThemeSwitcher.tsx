'use client';

import { useEffect, MouseEvent, useState } from 'react';

import { ButtonArrow } from '@buttons/.';
import { useThemeStorage } from '@/hooks';
import { IconChevron } from '@icons/.';

const themes = [
 { theme: 'light', color: 'bg-colorWhite' },
 { theme: 'dark', color: 'bg-colorBlack' },
 { theme: 'green', color: 'bg-colorGreen' },
];

interface Props {
 variant: 'body' | 'header';
}

export default function ThemeSwitcher({ variant }: Props) {
 const { theme, updateTheme } = useThemeStorage();
 const [menuOpen, setMenuOpen] = useState(false);

 useEffect(() => {
  if (theme && theme.length === 0) {
   updateTheme('dark');
  }
 }, [theme, updateTheme]);

 const handleThemeChange = (
  e: MouseEvent<HTMLButtonElement>,
  color: string,
 ) => {
  updateTheme(color);
  toggleMenu();
  e.currentTarget.classList.add('active');
 };

 const toggleMenu = () => {
  setMenuOpen(!menuOpen);
 };

 //  Apply theme on theme change
 useEffect(() => {
  const documentDiv = document.querySelector('html');
  documentDiv?.setAttribute('data-theme', theme ? theme : 'dark');
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
    <div
     className={`theme-switcher flex items-center h-full transition-transform duration-200 ${
      !menuOpen && `translate-x-[80px]`
     }`}
    >
     {/* Open Theme Menu */}
     <button
      className='flex gap-2 h-full items-center mr-4 -mb-[3px]'
      onClick={toggleMenu}
     >
      <span
       className={`mr-4 leading-tight transition-transform duration-200 ${
        menuOpen && `translate-x-[38px]`
       }`}
      >
       Theme
      </span>
      {/* Active State */}
      <div
       className={`w-6 h-6 border border-secondary ${menuOpen && 'opacity-0'}
       }`}
      ></div>
      {/* Chevron */}
      <IconChevron />
     </button>
     {/* Themes buttons */}
     <div className='flex gap-4 items-center -mb-[3px]'>
      {themes.map((item) => {
       return (
        <button
         key={item.theme}
         type='button'
         className={`${item.color} ${
          item.theme === theme && 'active'
         } border border-colorFaded w-6 h-6 hover:scale-125 transition-transform duration-200`}
         onClick={(e) => handleThemeChange(e, item.theme)}
        ></button>
       );
      })}
     </div>
    </div>
   )}
  </>
 );
}
