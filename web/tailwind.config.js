/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},
        'md': {'max': '800px'},
        'lg': {'max': '1024px'},
        'xl': {'max': '1280px'},
        '2xl': {'max': '1536px'},
      },
      fontFamily: {
        rob: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjure)',
      },
      colors: {
        blue: {
          500: '#2E6BE0',
          950: '#020C14',
        },
        pink: {
          500: '#D22EE0',
          950: '#81007B',
        },
        purple: {
          500: '#5C4BC2',
        },
      },
    },
  },
  plugins: [],
}
