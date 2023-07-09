/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         gridTemplateColumns: { fluid: 'repeat(auto-fit, minmax(15rem, 1fr))' },
         fontFamily: { poppins: ['var(--poppins)'] },
         colors: { primary: 'var(--primary-color)' },
      },
   },
   plugins: [],
};
