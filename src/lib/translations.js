import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
    translations: {
        en: {
            en: 'English',
            de: 'German',
        },
        de: {
            en: 'Englisch',
            de: 'Deutsch',
        }
    },
    initLocale: 'en',
    loaders: [
        {
            locale: 'en',
            key: 'common',
            loader: async () => (
                await import('./translations/en/common.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'projects',
            loader: async () => (
                await import('./translations/en/projects.json')
            ).default,
        },
        {
            locale: 'de',
            key: 'common',
            loader: async () => (
                await import('./translations/de/common.json')
            ).default,
        },
        {
            locale: 'de',
            key: 'projects',
            loader: async () => (
                await import('./translations/de/projects.json')
            ).default,
        },
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);