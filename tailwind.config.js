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
      },
      colors: {
        green: {
          50: '#e6f4f0',
          100: '#d9efe8',
          200: '#b0ddd0',
          300: '#019267',
          400: '#01835d',
          500: '#017552',
          600: '#016e4d',
          700: '#01583e',
          800: '#00422e',
          900: '#003324',
        },

        gray: {
          50: '#f6f6f7',
          100: '#f1f1f2',
          200: '#e2e2e5',
          300: '#a1a1aa',
          400: '#919199',
          500: '#818188',
          600: '#797980',
          700: '#616166',
          800: '#48484c',
          900: '#38383b',
        },

        red: {
          50: '#fce9e9',
          100: '#fadede',
          200: '#f4bcbc',
          300: '#dc2626',
          400: '#c62222',
          500: '#b01e1e',
          600: '#a51d1d',
          700: '#841717',
          800: '#631111',
          900: '#4d0d0d',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
