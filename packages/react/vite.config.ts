import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import {extname, relative, resolve } from 'path'
import { glob } from 'glob'
import {fileURLToPath} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],
  resolve: {
    alias: {
      '@': '/lib'
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      },
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}').map(file => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),

          fileURLToPath(new URL(file, import.meta.url))
      ]))
    },
  },
})