import { loadTranslations } from '$lib/translations';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
    const { pathname } = url;


    await loadTranslations(pathname); // keep this just before the `return`

    return {};
}
