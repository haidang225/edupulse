import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Để deploy lên GitHub Pages, set base = '/tên-repository/'
// Ví dụ: base: '/edupulse/'
export default defineConfig({
  plugins: [react()],
  base: './',  // Sử dụng relative paths để tương thích với GitHub Pages
})
