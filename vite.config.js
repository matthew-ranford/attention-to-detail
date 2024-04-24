import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/attention-to-detail',
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
})
