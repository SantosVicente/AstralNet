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
