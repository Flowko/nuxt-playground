// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vue-email/nuxt-edge'],
  vueEmail: {
    baseUrl: 'https://vue-email-demo.vercel.app/',
    autoImport: true
  },
})
