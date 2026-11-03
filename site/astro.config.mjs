import { defineConfig } from 'astro/config';

// English is the default language and lives at "/", Czech at "/cs/".
export default defineConfig({
    site: 'https://taf-ventures-landing-page1.vercel.app',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'cs'],
        routing: { prefixDefaultLocale: false },
    },
});
