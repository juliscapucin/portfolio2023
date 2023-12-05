'use client';

import { useEffect, useState } from 'react';

export default function RootLayout(props: { children: React.ReactNode }) {
 const [rootTheme, setRootTheme] = useState<string>('dark');

 useEffect(() => {
  const storageTheme = localStorage.getItem('theme');
  if (storageTheme) {
   setRootTheme(storageTheme);
  }
 }, []);

 return (
  <html lang='en' data-theme={rootTheme} className='max-w-desktop mx-auto'>
   {props.children}
  </html>
 );
}
