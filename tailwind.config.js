// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.edge', // Include all .edge files in resources
    './resources/**/*.js',
    './resources/**/*.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
