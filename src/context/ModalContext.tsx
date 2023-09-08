'use client';

import { createContext, useContext, useState } from 'react';

// TYPE
interface ContextProps {
 modalOpen: boolean;
 setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
 updateModalOpen: () => void;
}

// CREATE CONTEXT
const ModalContext = createContext({} as ContextProps);

// CONTEXT PROVIDER
export const ModalContextProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
 const [modalOpen, setModalOpen] = useState(false);
 const [mobileMenyOpen, setMobileMenuOpen] = useState(false);

 const updateModalOpen = () => {
  setModalOpen(!modalOpen);
 };

 const updateMobileMenuOpen = () => {
  setMobileMenuOpen(!modalOpen);
 };

 return (
  <ModalContext.Provider
   value={{
    modalOpen,
    setModalOpen,
    updateModalOpen,
   }}
  >
   {children}
  </ModalContext.Provider>
 );
};

// CONTEXT CUSTOM HOOK
export const useModalContext = () => useContext(ModalContext);
