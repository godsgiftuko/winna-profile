import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx',  '.vue', '.json', '.css', '.scss', '.sass', '.less', '.styl']
  }
})
