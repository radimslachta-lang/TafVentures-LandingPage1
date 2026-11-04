// Needs questionnaire for all segments (Tally), one form per language.
// An empty URL makes the "Share your needs" buttons fall back to the contact form.
// Tally redirects respondents to /cs/dekujeme or /thanks after submitting.
export const intakeFormUrls = {
    cs: 'https://tally.so/r/Z98M00',
    en: 'https://tally.so/r/6DLq85',
};

export function intakeHref(lang = 'en') {
    const url = intakeFormUrls[lang];
    return url ? `${url}?lang=${lang}&source=lp` : '/#contact';
}

// Pitch form (second step for respondents with a concrete project), one per language.
export const pitchFormUrls = {
    cs: 'https://tally.so/r/WJO9Rj',
    en: 'https://tally.so/r/Ge68Dz',
};
