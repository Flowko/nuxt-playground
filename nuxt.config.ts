// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['vue-email/nuxt'],
  vueEmail: {
    baseUrl: 'https://vue-email-demo.vercel.app/',
    autoImport: true
  }
})
