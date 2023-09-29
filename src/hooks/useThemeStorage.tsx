import { useEffect, useState } from 'react';

import { getTheme, updateTheme } from '@/utils';

export function useThemeStorage() {
 const [theme, setTheme] = useState('');

 // Get theme from session storage on mount
 useEffect(() => {
  setTheme(getTheme() || 'dark');
 }, []);

 // Update theme in session storage on change
 useEffect(() => {
  updateTheme(theme);
 }, [theme]);

 return { theme, setTheme };
}
