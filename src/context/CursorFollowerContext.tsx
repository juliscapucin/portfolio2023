'use client';

import { createContext, useContext, useState } from 'react';

// TYPE
interface ContextProps {
 isHovering: boolean;
 updateIsHovering: (arg: boolean) => void;
}

// CREATE CONTEXT
const CursorFollowerContext = createContext<ContextProps | null>(null);

// CONTEXT PROVIDER
export const CursorFollowerContextProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
 const [isHovering, setIsHovering] = useState(false);

 const updateIsHovering = (state: boolean) => {
  console.log('updateIsHovering', state);
  setIsHovering(state);
 };

 return (
  <CursorFollowerContext.Provider
   value={{
    isHovering,
    updateIsHovering,
   }}
  >
   {children}
  </CursorFollowerContext.Provider>
 );
};

// CONTEXT CUSTOM HOOK
export const useCursorFollowerContext = () => {
 const context = useContext(CursorFollowerContext);
 if (!context)
  throw new Error(
   'useCursorFollowerContext must be used within CursorFollowerContextProvider'
  );
 return context;
};
