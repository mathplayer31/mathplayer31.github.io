import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mathplayer31.github.io',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
