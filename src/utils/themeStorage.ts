export const updateTheme = (theme: string) => {
   sessionStorage.setItem('theme', theme);
};

export const getTheme = () => {
   // Only try to access `sessionStorage` if `window` is defined
   if (typeof window !== 'undefined') {
      return sessionStorage.getItem('theme');
   }

   // Return a default value or null if on the server
   return null;
};
