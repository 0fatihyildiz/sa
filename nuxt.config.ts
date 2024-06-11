import { existsSync, readFileSync } from "fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "shadcn-nuxt",
    "nuxt-icon",
    "@nuxt/test-utils",
    "@vee-validate/nuxt",
    "nuxt-typed-router",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@vue-macros/nuxt",
    "@nuxt/eslint",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'S',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  vite: {
    vue: {
      script: {
        fs: {
          fileExists(file) {
            return existsSync(file);
          },
          readFile(file) {
            return readFileSync(file, 'utf-8');
          },
        },
      },
    },
  },
})