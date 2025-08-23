/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e8bc0',      // 主蓝色，匹配原设计
        secondary: '#0d2b45',    // 深蓝色，匹配原设计
        accent: '#f59e0b',
        textDark: '#1a1a1a',     // 更深的文字色
        textLight: '#6b7280',
        lightBg: '#f8fafc',
        borderLight: '#e5e7eb',
      },
      spacing: {
        '15': '3.75rem',  // 添加这行支持 pt-15, w-15 等
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}