/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Dark Green Professional Theme
        green: {
          50: '#F0F5F0',
          100: '#E8F5E9',
          200: '#C8E6C9',
          300: '#A5D6A7',
          400: '#81C784',
          500: '#5FBB75', // Accent Green
          600: '#4CAF50', // Primary Green
          700: '#43A047',
          800: '#2D6A3E', // Secondary Green
          900: '#1F4D2B', // Deep Forest Green
          950: '#0F2818', // Very Deep Green
        },
        dark: {
          50: '#F0F5F0',
          100: '#E0E7E0',
          200: '#C0D0C0',
          300: '#A0B8A0',
          400: '#6D8D6D',
          500: '#4A6B4A',
          600: '#354D35',
          700: '#2A3E2A',
          800: '#1F2E1F',
          900: '#172D1F', // Dark background
          950: '#0F1419', // Darkest background
        },
        slate: {
          50: '#F0F5F0',
          100: '#E8F0E8',
          200: '#D1E3D1',
          300: '#B5D5B5',
          400: '#7FA97F',
          500: '#5A7D5A',
          600: '#466346',
          700: '#354D35',
          800: '#2A3E2A',
          900: '#1A2E1A',
        },
      },
      backgroundColor: {
        primary: '#0F1419',
        secondary: '#1A2E1F',
        tertiary: '#2D6A3E',
        accent: '#4CAF50',
        accentLight: '#5FBB75',
      },
      textColor: {
        primary: '#E8F5E9',
        secondary: '#B0E0B0',
        tertiary: '#81C784',
        accent: '#4CAF50',
      },
      borderColor: {
        primary: 'rgba(76, 175, 80, 0.2)',
        secondary: 'rgba(76, 175, 80, 0.1)',
      },
      boxShadow: {
        'green-glow': '0 0 20px rgba(76, 175, 80, 0.3)',
        'green-glow-sm': '0 0 10px rgba(76, 175, 80, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      spacing: {
        gutter: '1rem',
      },
    },
  },
  plugins: [],
};
