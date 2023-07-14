'use client';

import React, { createContext } from 'react';
import { useState } from 'react';

const TransitionContext = createContext({} as ToggleCompleted);

type ToggleCompleted = {
 completed: boolean;
 toggleCompleted: () => void;
};

export const TransitionContextProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
 const [completed, setCompleted] = useState(false);

 const toggleCompleted = () => {
  setCompleted(!completed);
 };

 return (
  <TransitionContext.Provider
   value={{
    completed,
    toggleCompleted,
   }}
  >
   {children}
  </TransitionContext.Provider>
 );
};
