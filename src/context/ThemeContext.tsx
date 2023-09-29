'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getTheme, updateTheme } from '@/utils';

// TYPE
interface ContextProps {
 theme: string;
 updateTheme: (theme: string) => void;
}

// CREATE CONTEXT
const Context = createContext<ContextProps | null>(null);

// CONTEXT PROVIDER
export const ThemeContextProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
 const [theme, setTheme] = useState('dark');

 // Get theme from session storage on mount
 useEffect(() => {
  setTheme(getTheme() || 'dark');
 }, []);

 // Update theme in session storage on change
 useEffect(() => {
  updateTheme(theme);
 }, [theme]);

 console.log(theme);

 return (
  <Context.Provider
   value={{
    theme,
    updateTheme,
   }}
  >
   {children}
  </Context.Provider>
 );
};

// CONTEXT CUSTOM HOOK
export const useThemeContext = () => {
 const context = useContext(Context);
 if (!context)
  throw new Error('useThemeContext must be used within ContextProvider');
 return context;
};
