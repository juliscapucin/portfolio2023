import { useState } from 'react';

export const useWindowDimensions = () => {
 const [width, setWidth] = useState(window.innerWidth);
 const [height, setHeight] = useState(window.innerHeight);

 useState(() => {
  const listener = () => {
   setWidth(window.innerWidth);
   setHeight(window.innerHeight);
  };

  window.addEventListener('resize', listener);

  return () => {
   window.removeEventListener('resize', listener);
  };
 });

 return {
  width,
  height,
 };
};
