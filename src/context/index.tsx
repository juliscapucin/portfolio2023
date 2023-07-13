'use client';

import { createContext, useContext, useState } from 'react';

// TYPE
interface ContextProps {
 modalOpen: boolean;
 setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
 updateModalOpen: () => void;
}

// CREATE CONTEXT
const Context = createContext({} as ContextProps);

// CONTEXT PROVIDER
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
 const [modalOpen, setModalOpen] = useState(false);

 const updateModalOpen = () => {
  setModalOpen(!modalOpen);
  console.log(modalOpen);
 };

 return (
  <Context.Provider
   value={{
    modalOpen,
    setModalOpen,
    updateModalOpen,
   }}
  >
   {children}
  </Context.Provider>
 );
};

// CONTEXT CUSTOM HOOK
const useCustomContext = () => useContext(Context);

export { useCustomContext, ContextProvider };
