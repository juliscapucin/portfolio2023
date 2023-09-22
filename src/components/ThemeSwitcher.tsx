import { useEffect, useState, MouseEvent } from 'react';

import { usePageContext } from '@/context';
import { ButtonArrow } from '@buttons/.';

const themes = [
 { theme: 'light', color: 'colorWhite' },
 { theme: 'dark', color: 'colorBlack' },
 { theme: 'green', color: 'colorGreen' },
];

export default function ThemeSwitcher() {
 const documentDiv = document.querySelector('html');
 const { theme, updateTheme } = usePageContext();

 const handleThemeChange = (
  e: MouseEvent<HTMLButtonElement>,
  color: string
 ) => {
  updateTheme(color);
  handleThemeHover(e, color);
 };

 const handleThemeHover = (e: MouseEvent<HTMLButtonElement>, color: string) => {
  const container = e.currentTarget.closest('.theme-switcher');
  const arrows = container?.querySelectorAll('.arrow');
  const target = e.currentTarget;

  arrows?.forEach((arrow) => {
   if (!arrow.classList.contains('opacity-0')) arrow.classList.add('opacity-0');
   if (arrow.classList.contains('opacity-100'))
    arrow.classList.remove('opacity-100');
  });

  target.previousElementSibling?.classList.remove('opacity-0');
  target.previousElementSibling?.classList.add('opacity-100');
 };

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
        className={`bg-${item.color} border border-colorFaded w-10 h-10`}
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
