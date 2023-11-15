/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      'light', 'dark', 'halloween', 'forest', 'dracula', 'night', 'sunset',
      {
        grassland: {
          "primary": "#079e79",
          "secondary": "#4ab5e8",
          "accent": "#4ab5e8",
          "neutral": "#1f292f",
          "base-100": "#121a1e",
          "info": "#00afe0",
          "success": "#00c266",
          "warning": "#ffb200",
          "error": "#f34469",
        },
      },

    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}

