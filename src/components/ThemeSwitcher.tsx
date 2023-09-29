import { useEffect, useState, MouseEvent } from 'react';

import { ButtonArrow } from '@buttons/.';
import { useThemeStorage } from '@/hooks';

const themes = [
 { theme: 'light', color: 'bg-colorWhite' },
 { theme: 'dark', color: 'bg-colorBlack' },
 { theme: 'green', color: 'bg-colorGreen' },
];

export default function ThemeSwitcher() {
 const documentDiv = document.querySelector('html');
 const { theme, setTheme } = useThemeStorage();

 const handleThemeChange = (
  e: MouseEvent<HTMLButtonElement>,
  color: string
 ) => {
  setTheme(color);
  e.currentTarget.classList.add('active');
  handleThemeHover(e, color);
 };

 const handleThemeHover = (e: MouseEvent<HTMLButtonElement>, color: string) => {
  const container = e.currentTarget.closest('.theme-switcher');
  const arrows = container?.querySelectorAll('.arrow');
  const target = e.currentTarget;

  arrows?.forEach((arrow) => {
   if (
    !arrow.classList.contains('opacity-0') &&
    !target.classList.contains('active')
   )
    arrow.classList.add('opacity-0');
   if (
    arrow.classList.contains('opacity-100') &&
    !target.classList.contains('active')
   )
    arrow.classList.remove('opacity-100');
  });

  target.previousElementSibling?.classList.remove('opacity-0');
  target.previousElementSibling?.classList.add('opacity-100');
 };

 //  Apply theme on theme change
 useEffect(() => {
  documentDiv?.setAttribute('data-theme', theme);
 }, [theme]);

 return (
  <div className='theme-switcher mt-2 ml-2 bg-primary'>
   <span>Theme</span>
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
        } border border-colorFaded w-10 h-10`}
        onClick={(e) => handleThemeChange(e, item.theme)}
        onMouseEnter={(e) => handleThemeHover(e, item.theme)}
       ></button>
      </div>
     );
    })}
   </div>
  </div>
 );
}
