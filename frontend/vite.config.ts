import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { fileURLToPath } from 'url'


const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@common":path.resolve(_dirname,"../common")
    }
  }
})
