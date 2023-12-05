'use client';

import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

// TYPE
interface ContextProps {
 previousPage: string;
 updatePreviousPage: (page: string) => void;
 isShallowPage: boolean;
 setIsShallowPage: (state: boolean) => void;
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
 const [isShallowPage, setIsShallowPage] = useState(false);
 const pathname = usePathname();

 const updatePreviousPage = (page: string) => {
  setPreviousPage(page);
 };

 // Set previousPage && isShallowPage when using shallow page back button
 useEffect(() => {
  if (!previousPage.includes('project')) return;
  if (pathname === '/') setPreviousPage('home');
  if (pathname === '/work') setPreviousPage('work');
  setIsShallowPage(false);
 }, [pathname]);

 return (
  <PageContext.Provider
   value={{
    previousPage,
    updatePreviousPage,
    isShallowPage,
    setIsShallowPage,
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
