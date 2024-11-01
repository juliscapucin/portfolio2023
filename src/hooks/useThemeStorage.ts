'use client';

import { useEffect, useState } from 'react';

function getThemeStorage() {
   return localStorage.getItem('theme') || 'dark';
}

export function useThemeStorage() {
   const [theme, setTheme] = useState<string>(getThemeStorage);

   const updateTheme = (theme: string) => {
      localStorage.setItem('theme', theme);
   };

   // Update theme in session storage on change
   useEffect(() => {
      if (!theme) return;
      updateTheme(theme);
   }, [theme]);

   return { theme, setTheme };
}
