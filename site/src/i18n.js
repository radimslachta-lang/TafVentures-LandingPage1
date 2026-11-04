// Language helpers. English lives at "/", Czech at "/cs/" (see astro.config.mjs).
// Components call langOf(Astro) and pick their texts from a { en, cs } object.

export const langs = ['en', 'cs'];

export function langOf(Astro) {
    return Astro.currentLocale === 'cs' ? 'cs' : 'en';
}

// Page paths per language. Add new pages here so the CZ|EN switcher finds them.
const pages = {
    home:     { en: '/',            cs: '/cs/' },
    about:    { en: '/about',       cs: '/cs/o-nas' },
    join:     { en: '/how-to-join', cs: '/cs/jak-se-zapojit' },
    news:     { en: '/news',        cs: '/cs/novinky' },
    thanks:   { en: '/thanks',      cs: '/cs/dekujeme' },
};

// URL of a page in a language, optionally with an #anchor.
export function url(lang, page, anchor = '') {
    const p = pages[page][lang];
    return anchor ? `${p}#${anchor}` : p;
}

// The same page in the other language (for the switcher). Falls back to home.
export function alternate(pathname, toLang) {
    const clean = pathname.replace(/\/$/, '') || '/';
    for (const key of Object.keys(pages)) {
        for (const l of langs) {
            const p = pages[key][l].replace(/\/$/, '') || '/';
            if (p === clean) return pages[key][toLang];
        }
    }
    return pages.home[toLang];
}

// Czech typography: a non-breaking space after one-letter words (v, s, k, z, o, u, a, i),
// so they never end a line. Applied to every string of the chosen language's texts.
function nbsp(s) {
    return s.replace(/(^|[\s(„])([vVsSkKzZoOuUaAiI]) /g, '$1$2 ');
}
function deep(v) {
    if (typeof v === 'string') return nbsp(v);
    if (Array.isArray(v)) return v.map(deep);
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x)]));
    return v;
}

// Pick the texts for a language from a { en, cs } object.
export function pick(texts, lang) {
    return lang === 'cs' ? deep(texts.cs) : texts.en;
}
