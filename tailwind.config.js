/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         animation: {
            'fade-in': 'fadeIn 1s linear forwards',
         },
         maxWidth: {
            desktop: '2000px',
         },
         minHeight: {
            '1/2': '50vh',
         },
         fontFamily: {
            headline: ['var(--font-primary) sans-serif'],
            text: ['var(--font-secondary)'],
         },
         zIndex: {
            5: '5',
            8: '8',
            15: '15',
            100: '100',
         },
         letterSpacing: { tightest: '-.075em' },
         colors: {
            colorBlack: 'rgb(var(--color-black) / <alpha-value>)',
            colorWhite: 'rgb(var(--color-white) / <alpha-value>)',
            colorGreen: 'rgb(var(--color-green) / <alpha-value>)',
            primary: 'rgb(var(--color-primary) / <alpha-value>)',
            secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
            colorFaded: 'rgb(var(--color-faded) / <alpha-value>)',
         },
         gridTemplateColumns: {
            20: 'repeat(20, 1fr)',
         },
         fontSize: {
            numberDesktop: '30vw',
            numberTablet: '40vw',
            numberMobile: '80vw',
            huge: '32rem',
            displayLarge: '18rem',
            displayMedium: '10.3rem',
            displaySmall: '5.7rem',
            headlineLarge: '3.2rem',
            headlineMedium: '2.8rem',
            headlineSmall: '2.4rem',
            titleLarge: '2.2rem',
            titleMedium: '1.6rem',
            titleSmall: '1.4rem',
            bodyLarge: '1.8rem',
            bodyMedium: '1.6rem',
            bodySmall: '1.4rem',
            labelLarge: '1.4rem',
            labelMedium: '1.2rem',
            labelSmall: '1.1rem',
         },
      },
   },
   plugins: [],
};
