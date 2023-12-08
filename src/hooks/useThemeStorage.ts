'use client';

import { useEffect, useState } from 'react';

export function useThemeStorage() {
   const [theme, setTheme] = useState<string | null>(null);
   const [mounted, setMounted] = useState(false);

   const updateTheme = (theme: string) => {
      localStorage.setItem('theme', theme);
   };

   // Get theme from session storage on mount
   useEffect(() => {
      const storageTheme = localStorage.getItem('theme');
      if (storageTheme) {
         setTheme(theme);
      } else {
         setTheme('dark');
      }
   }, []);

   // Update theme in session storage on change
   useEffect(() => {
      if (!mounted) {
         setMounted(true);
         return;
      }
      updateTheme(theme!);
   }, [theme]);

   return { theme, setTheme };
}
