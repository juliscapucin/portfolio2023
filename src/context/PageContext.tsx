'use client';

import { SetStateAction, createContext, useContext, useState } from 'react';

// TYPE
interface ContextProps {
 previousPage: string;
 updatePreviousPage: (page: string) => void;
}

// CREATE CONTEXT
const PageContext = createContext({} as ContextProps);

// CONTEXT PROVIDER
export const PageContextProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
 const [previousPage, setPreviousPage] = useState('');

 const updatePreviousPage = (page: string) => {
  setPreviousPage(page);
 };

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
export const usePageContext = () => useContext(PageContext);
