import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
  },
  css: ["~~/app/assets/scss/main.scss"],
  modules: ["@auth0/auth0-nuxt"],
  runtimeConfig: {
    auth0: {
      domain: process.env.NUXT_AUTH0_DOMAIN,
      clientId: process.env.NUXT_AUTH0_CLIENT_ID,
      clientSecret: process.env.NUXT_AUTH0_CLIENT_SECRET,
      sessionSecret: process.env.NUXT_AUTH0_SESSION_SECRET,
      appBaseUrl: process.env.NUXT_AUTH0_APP_BASE_URL,
    },
  },
});
