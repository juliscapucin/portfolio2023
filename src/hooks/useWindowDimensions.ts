'use client';

import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
 const [width, setWidth] = useState(0);
 const [height, setHeight] = useState(0);

 useEffect(() => {
  if (typeof window === 'undefined') return;

  const listener = () => {
   setWidth(window.innerWidth);
   setHeight(window.innerHeight);
  };
  listener();

  window.addEventListener('resize', listener);

  return () => {
   window.removeEventListener('resize', listener);
  };
 }, []);

 return {
  width,
  height,
 };
};
