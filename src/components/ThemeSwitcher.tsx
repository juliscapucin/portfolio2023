import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
 const documentDiv = document.querySelector('html');
 const [theme, setTheme] = useState('dark');

 const handleThemeChange = (color: string) => {
  setTheme(color);
 };

 useEffect(() => {
  documentDiv?.setAttribute('data-theme', theme);
 }, [theme]);

 return (
  <div className='mt-2 ml-2 bg-primary'>
   <span>Theme</span>
   <div>
    <div></div>
    <div>
     <div>
      <button
       className='bg-colorWhite border border-colorFaded w-10 h-10'
       onClick={() => handleThemeChange('light')}
      ></button>
     </div>
     <div>
      <button
       className='bg-colorBlack border border-colorFaded w-10 h-10'
       onClick={() => handleThemeChange('dark')}
      ></button>
     </div>
     <div>
      <button
       className='bg-colorBurgundy border border-colorFaded w-10 h-10'
       onClick={() => handleThemeChange('burgundy')}
      ></button>
     </div>
    </div>
   </div>
  </div>
 );
}
