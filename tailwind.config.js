import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['Comic Neue', 'cursive'],
        'playful': ['Fredoka One', 'cursive'],
      },
      colors: {
        'sunshine': '#FFD93D',
        'coral': '#FF6B6B',
        'mint': '#4ECDC4',
        'lavender': '#A8E6CF',
        'peach': '#FFB347',
        'sky': '#87CEEB',
      }
    },
  },
  plugins: [],
};
