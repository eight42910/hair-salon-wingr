import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf7f2',
          100: '#f5ede0',
          500: '#8b5e3c',
          700: '#6b4423',
          800: '#5a3820',
          900: '#4a2c16',
        },
        secondary: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          500: '#d4c4a8',
          700: '#b8a082',
        },
        accent: {
          50: '#fffef9',
          100: '#fffcf0',
          500: '#f5e6d3',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
