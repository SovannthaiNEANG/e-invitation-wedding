import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "IBM+Plex+Sans": [400, 500, 600, 700],
          "Manrope": [400, 500, 600, 700],
          "Pacifico": [400, 500, 600, 700],
        },
      },
    ],
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_global.scss" as *;',
        },
      },
    },
  },
  css: ["@mdi/font/css/materialdesignicons.css", 'vuetify/styles', '~/assets/main.scss'],
  app: {
    head: {
       title: "Innovation Website",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css",
        },
      ],
      script: [
        {
          type: "module",
          src: "https://unpkg.com/@splinetool/viewer@1.12.42/build/spline-viewer.js",
        },
      ],
    },
  },
})
