/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0033A0', // NTT Corporate Blue
        secondary: '#4A90E2', // Light Blue
        accent: '#FF6B35', // Orange
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Meiryo', 'system-ui', 'sans-serif'],
        heading: ['Yu Gothic', 'Noto Sans JP', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      screens: {
        'xs': '475px',
        'sm': '768px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
}