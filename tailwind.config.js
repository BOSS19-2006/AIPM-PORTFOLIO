/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#08070b',
          card: '#12101b',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          orange: '#f97316',
          orangeHover: '#ea580c',
          orangeGlow: '#ff5500',
          darkOrange: '#c2410c',
        }
      },
      boxShadow: {
        'glow-orange': '0 0 40px -10px rgba(249, 115, 22, 0.35)',
        'glow-orange-lg': '0 0 60px -5px rgba(255, 85, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
