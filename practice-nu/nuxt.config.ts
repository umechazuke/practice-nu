// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: [/vuetify/]
  },
  css: [
    "assets/style.sass",
    "@mdi/font/css/materialdesignicons.css"
  ]
})
