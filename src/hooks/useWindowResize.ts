import { useState, useEffect } from 'react';

export const useWindowResize = () => {
 const [windowSize, setWindowSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
 });

 useEffect(() => {
  // Function to update window size
  function handleResize() {
   setWindowSize({
    width: window.innerWidth,
    height: window.innerHeight,
   });
  }

  // Add event listener to window resize
  window.addEventListener('resize', handleResize);

  // Remove event listener on component unmount
  return () => {
   window.removeEventListener('resize', handleResize);
  };
 }, []);

 return windowSize;
};
