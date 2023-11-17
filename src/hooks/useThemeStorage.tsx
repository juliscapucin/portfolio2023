'use client';

import { useEffect, useState } from 'react';

import { getTheme, updateTheme } from '@/utils';

export function useThemeStorage() {
 const [theme, setTheme] = useState('');

 useEffect(() => {
  () => {
   const storageTheme = getTheme();
   return storageTheme || 'dark'; // Default to 'dark' if storageTheme is not available
  };
 }, []);

 // Update theme in session storage on change
 useEffect(() => {
  updateTheme(theme);
 }, [theme]);

 return { theme, setTheme };
}
