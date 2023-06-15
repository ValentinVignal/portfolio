/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      'light', 'dark', 'halloween', 'forest', 'dracula', 'night',
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}

