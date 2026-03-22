/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e8bc0',
        secondary: '#0d2b45',
        accent: '#f59e0b',
        textDark: '#1a1a1a',
        textMedium: '#475569',
        textLight: '#6b7280',
        lightBg: '#f8fafc',
        borderLight: '#e5e7eb',
        borderMedium: '#d1d5db',
      },
      spacing: {
        '15': '3.75rem',
        '17': '4.25rem',
      },
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.06)',
        'elevated': '0 12px 28px rgba(0,0,0,0.12), 0 4px 10px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
