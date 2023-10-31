'use client';

import { createContext, useContext, useState } from 'react';

// TYPE
interface ContextProps {
 previousPage: string;
 updatePreviousPage: (page: string) => void;
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

 const updatePreviousPage = (page: string) => {
  setPreviousPage(page);
 };

 console.log(previousPage);

 return (
  <PageContext.Provider
   value={{
    previousPage,
    updatePreviousPage,
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
