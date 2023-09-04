/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         gridTemplateColumns: { fluid: 'repeat(auto-fit, minmax(15rem, 1fr))' },
         fontFamily: {
            headline: ['var(--font-primary) sans-serif'],
            text: ['var(--font-secondary)'],
         },
         colors: {
            colorBlack: 'var(--color-black)',
            colorWhite: 'var(--color-white)',
         },
         fontSize: {
            huge: '20rem',
            displayLarge: '18rem',
            displayMedium: '10.3rem',
            displaySmall: '5.7rem',
            headlineLarge: '3.2rem',
            headlineMedium: '2.8rem',
            headlineSmall: '2.4rem',
            titleLarge: '2.2rem',
            titleMedium: '1.6rem',
            titleSmall: '1.4rem',
            bodyLarge: '1.6rem',
            bodyMedium: '1.4rem',
            bodySmall: '1.2rem',
            labelLarge: '1.4rem',
            labelMedium: '1.2rem',
            labelSmall: '1.1rem',
         },
      },
   },
   plugins: [],
};
