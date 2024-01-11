import { useState, useEffect } from 'react';

export const useWindowResize = () => {
   const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
   });

   useEffect(() => {
      // Function to update window size
      function handleResize() {
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      }

      handleResize();

      // Add event listener to window resize
      window.addEventListener('resize', handleResize);

      // Remove event listener on component unmount
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return windowSize;
};
