export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'de',
  datetimeFormats: {
    de: {
      numeric: {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      },
      short: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      },
      dateTime: {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      },
    },
  },
}));
