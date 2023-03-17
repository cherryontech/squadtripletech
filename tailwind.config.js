/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-indigo': '#4f46e5',
        'cool-black': '#3f3f46',
      },
    },
  },
  plugins: [],
}
