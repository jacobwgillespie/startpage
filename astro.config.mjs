import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import {defineConfig} from 'astro/config'

export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react()],
  adapter: cloudflare(),
  vite: {
    resolve: {
      alias: import.meta.env.PROD && {
        'react-dom/server': 'react-dom/server.edge',
      },
    },
  },
})
