'use client';

import { useEffect, useState } from 'react';

export function useThemeStorage() {
   const [theme, setTheme] = useState<string | null>(() => {
      return localStorage.getItem('theme') || 'dark';
   });

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
