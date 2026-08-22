/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1a1a',
        ink2: '#222222',
        amber: {
          DEFAULT: '#ffcc00',
          dark: '#e6b800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(255,204,0,0.7)' },
          '70%': { boxShadow: '0 0 0 22px rgba(255,204,0,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255,204,0,0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'pulse-ring': 'pulseRing 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'scale-in': 'scaleIn 0.25s ease-out both',
      },
    },
  },
  plugins: [],
};
