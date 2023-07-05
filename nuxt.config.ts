// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "preline-nuxt3",
      script: [
        {
          src: "/assets/preline/dist/preline.js",
          body: true,
          defer: true,
        },
      ],
    },
  },

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-headlessui",
    "@nuxtjs/color-mode",
  ],

  colorMode: {
    classSuffix: "",
  },

  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },

  css: ["@/assets/main.scss"],
  plugins: ["~/plugins/Vue3Lottie.client.ts"],
});
