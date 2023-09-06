'use client';

import { useState } from 'react';

export const useModalOpen = () => {
 const [count, setCount] = useState(1);

 const increment = () => {
  setCount(count + 1);
 };

 increment();

 return {
  count,
 };
};
