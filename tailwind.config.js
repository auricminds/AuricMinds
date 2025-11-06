/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#f9f5ed',
          200: '#f0e6d2',
          300: '#e7d7b7',
          400: '#d4b887',
          500: '#c29958',
          600: '#a67c3a',
          700: '#8a6830',
          800: '#6e5426',
          900: '#52401c',
        },
        graphite: {
          50: '#f5f5f6',
          100: '#e5e6e8',
          200: '#cccfd2',
          300: '#a8adb3',
          400: '#7f868f',
          500: '#62686f',
          600: '#4d5258',
          700: '#3f4347',
          800: '#2a2d30',
          900: '#1a1c1e',
          950: '#0d0e0f',
        },
        navy: {
          500: '#2c3e50',
          600: '#1a2530',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
