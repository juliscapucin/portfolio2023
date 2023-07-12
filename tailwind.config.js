/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ['class'],
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
   ],
   theme: {
      gridTemplateColumns: { fluid: 'repeat(auto-fit, minmax(15rem, 1fr))' },
      fontFamily: {
         headline: ['var(--font-primary)'],
         text: ['var(--font-secondary)'],
      },
      colors: {
         colorBlack: 'var(--color-black)',
         colorWhite: 'var(--color-white)',
      },
      fontSize: {
         huge: '20rem',
      },
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
      },
      extend: {
         keyframes: {
            'accordion-down': {
               from: { height: 0 },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: 0 },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
};
