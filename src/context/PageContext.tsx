'use client';

import { createContext, useContext, useState } from 'react';

// TYPE
interface ContextProps {
 previousPage: string;
 updatePreviousPage: (page: string) => void;
 isHovering: boolean;
 updateIsHovering: (arg: boolean) => void;
 theme: string;
 updateTheme: (theme: string) => void;
}

// CREATE CONTEXT
const PageContext = createContext<ContextProps | null>(null);

// CONTEXT PROVIDER
export const PageContextProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
 const [previousPage, setPreviousPage] = useState('home');
 const [isHovering, setIsHovering] = useState(false);
 const [theme, setTheme] = useState('dark');

 const updatePreviousPage = (page: string) => {
  setPreviousPage(page);
 };

 const updateIsHovering = (state: boolean) => {
  setIsHovering(state);
 };

 const updateTheme = (theme: string) => {
  setTheme(theme);
 };

 return (
  <PageContext.Provider
   value={{
    previousPage,
    updatePreviousPage,
    isHovering,
    updateIsHovering,
    theme,
    updateTheme,
   }}
  >
   {children}
  </PageContext.Provider>
 );
};

// CONTEXT CUSTOM HOOK
export const usePageContext = () => {
 const context = useContext(PageContext);
 if (!context)
  throw new Error('usePageContext must be used within PageContextProvider');
 return context;
};
