// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vue-email/nuxt-edge', '@nuxtjs/i18n'],
  i18n: {
    langDir: 'locales',
    locales: [{ name: 'English', code: 'en-US', file: 'en.json' }],
    defaultLocale: 'en-US',
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
    },
    vueI18n: './i18n.config.ts',
    experimental: {
      localeDetector: './localeDetector.ts'
    }
  },
  nitro: { preset: "vercel-edge" },
})
