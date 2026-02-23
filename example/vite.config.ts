import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base prevents broken asset URLs when the example is served from a sub-path
  // (common for previews), which otherwise can cause GLTF loads to 404 and the Canvas
  // to appear blank.
  base: './',
  optimizeDeps: {
    exclude: ['@react-three/fiber'],
  },
  plugins: [react()],
})
