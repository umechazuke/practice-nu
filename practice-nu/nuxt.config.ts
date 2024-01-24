// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "assets/style.sass",
  ],
  buildModules: {
    [
      "@nuxtjs/vuetify",
      {
        customVariables: ["~assets/scss/vuetify/variables/_index.scss"],
        optionsPath: "~/configs/vuetify.js",
        treeShake: true,
        defaultAssets: {
          font: {
            family: "Noto Sans JP",
          },
          icons: "mdiSvg",
        }
      }
    ],
  }
})
