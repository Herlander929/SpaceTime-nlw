/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily: {
      sans: 'var(--font-roboto)',
      alt: 'var(--font-bai-jamjuree)',
     },
     colors: {
      gray: {
        #eaeaea
#bebebf
#9e9ea0
#727275
#56565a
#2c2c31
#28282d
#1f1f23
#18181b
#121215
      }
     }
    },
  },
  plugins: [],
}
