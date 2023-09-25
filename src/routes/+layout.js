import { loadTranslations } from '$lib/translations';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
    await loadTranslations(); // keep this just before the `return`

    return {};
}
