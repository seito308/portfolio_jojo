/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sbr: {
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          magenta: '#D81B60',
          pink: '#FF4081',
          turquoise: '#00BFA5',
          cyan: '#00E5FF',
          emerald: '#1DE9B6',
          parchment: '#FAF6F0',
          sand: '#EFE6D5',
          obsidian: '#0B0914',
          plum: '#161124',
          ink: '#1A1423'
        }
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', '"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Thai"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'halftone': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
