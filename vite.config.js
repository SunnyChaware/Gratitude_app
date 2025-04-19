import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Add ShadCN plugin if required in the future
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure 'src' is correctly resolved
      '@shadcn/ui': path.resolve(__dirname, 'node_modules/@shadcn/ui'), // Add alias for ShadCN
    },
  },
})
