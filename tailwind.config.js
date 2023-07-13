/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
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
      },
   },
   plugins: [],
};
