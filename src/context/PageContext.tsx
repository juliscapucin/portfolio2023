'use client';

import { createContext, useContext, useState } from 'react';

// TYPE
interface ContextProps {
 previousPage: string;
 updatePreviousPage: (page: string) => void;
 isHovering: boolean;
 updateIsHovering: (arg: boolean) => void;
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

 const updatePreviousPage = (page: string) => {
  setPreviousPage(page);
 };

 const updateIsHovering = (state: boolean) => {
  setIsHovering(state);
 };

 console.log(previousPage);

 return (
  <PageContext.Provider
   value={{
    previousPage,
    updatePreviousPage,
    isHovering,
    updateIsHovering,
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
