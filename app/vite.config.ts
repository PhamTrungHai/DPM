import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import { validateEnv } from './src/utils/validateEnv'

// https://vite.dev/config/
export default defineConfig(({ mode }) =>{
  const env = loadEnv(mode, process.cwd())
  validateEnv(env, { required: ['API_URL'], prefix: 'VITE_' });
  
  return ({
    plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths()
  ],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
} 
)