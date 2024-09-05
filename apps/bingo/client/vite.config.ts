import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  // console.log(env)
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      port: 5278,
      proxy: {
        [env.VITE_API_BASE_URL]: {
          target: env.VITE_API_SERVER_URL,
          rewrite: (path) => {
            // console.log({ path })
            // console.log(
            //   path.replace(new RegExp(`^${env.VITE_API_BASE_URL}`), '')
            // )
            return path.replace(new RegExp(`^${env.VITE_API_BASE_URL}`), '')
          },
          // rewrite: (path) => path.replace(`/${env.VITE_API_BASE_URL}/`, '/'),
          changeOrigin: true
        }
      }
    }
  }
})
