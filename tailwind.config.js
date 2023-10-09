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
        'sm': '640px',    
        'md': '815px',    
        'lg': '1024px',   
        'xl': '1280px',   
      },
      maxWidth: {
        '1440': '1440px',
      },
      minWidth: {
        '320': '320px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'northBlue': '#334b5c',
        'northBeige': '#f1e9e3',
        'northOrange': '#e59163',
        'northLightBlue': '#eaf1f5'
      },
    },
  },
  plugins: [],
}
