import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'

const config = defineConfig({
  plugins: [
    Vue(),
    Pages({
      onRoutesGenerated: async (routes) => {
        generateSitemap({
          hostname: 'https://caculat.com/',
          routes: [...routes],
          readable: true,
        })
      },
    }),
  ],
  build: {
    sourcemap: true,
  },

  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
})

export default config
