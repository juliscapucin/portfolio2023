export const updateTheme = (theme: string) => {
   sessionStorage.setItem('theme', theme);
};

export const getTheme = () => {
   return sessionStorage.getItem('theme');
};
