'use client';

import { createContext, useContext, useState } from 'react';

// TYPE
interface ContextProps {
 isHovering: boolean;
 setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
 updateIsHovering: () => void;
}

// CREATE CONTEXT
const CustomCursorContext = createContext({} as ContextProps);

// CONTEXT PROVIDER
export const CustomCursorProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
 const [isHovering, setIsHovering] = useState(false);
 const [mobileMenyOpen, setMobileMenuOpen] = useState(false);

 const updateIsHovering = () => {
  setIsHovering(!isHovering);
 };

 const updateMobileMenuOpen = () => {
  setMobileMenuOpen(!isHovering);
 };

 return (
  <CustomCursorContext.Provider
   value={{
    isHovering,
    setIsHovering,
    updateIsHovering,
   }}
  >
   {children}
  </CustomCursorContext.Provider>
 );
};

// CONTEXT CUSTOM HOOK
export const useCustomCursorContext = () => useContext(CustomCursorContext);
