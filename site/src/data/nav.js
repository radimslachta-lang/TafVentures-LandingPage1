// Main menu per language. Each top-level item has its own landing link and an optional
// list of children shown as a dropdown. Add new pages here, not in Nav.astro.
import { url, pick } from '../i18n.js';

function build(lang, L) {
    return [
        {
            label: L.about,
            href: url(lang, 'about'),
            children: [
                { label: L.mission, href: url(lang, 'about', 'mission') },
                { label: L.whyNow, href: url(lang, 'about', 'why-now') },
                { label: L.identity, href: url(lang, 'about', 'vision') },
                { label: L.team, href: url(lang, 'about', 'team') },
            ],
        },
        {
            label: L.platform,
            href: url(lang, 'home', 'different'),
            children: [
                { label: L.different, href: url(lang, 'home', 'different') },
                { label: 'TafelVent Gate', href: url(lang, 'home', 'gate') },
                { label: L.howItWorks, href: url(lang, 'home', 'platform') },
                { label: L.programs, href: url(lang, 'home', 'programs') },
                { label: L.partners, href: url(lang, 'home', 'partners') },
            ],
        },
        {
            label: L.join,
            href: url(lang, 'join'),
            children: [
                { label: L.share, href: url(lang, 'join', 'shape') },
                { label: L.clinicians, href: url(lang, 'join', 'join-clinicians') },
                { label: L.startups, href: url(lang, 'join', 'join-startups') },
                { label: L.investors, href: url(lang, 'join', 'join-investors') },
                { label: L.industry, href: url(lang, 'join', 'join-industry') },
            ],
        },
        { label: L.news, href: url(lang, 'news') },
        { label: L.contact, href: url(lang, 'home', 'contact') },
    ];
}

const labels = {
    en: {
        about: 'About us', mission: 'Mission & Vision', whyNow: 'Why now', identity: 'Our Identity', team: 'Team',
        platform: 'Platform', different: 'What makes us different', howItWorks: 'How it works',
        programs: 'Innovation Programs', partners: 'Partners',
        join: 'How to join', share: 'Share your needs', clinicians: 'Clinicians & Researchers',
        startups: 'Startups & Innovators', investors: 'Investors', industry: 'Industry Partners',
        news: 'News', contact: 'Contact', cta: 'Help us build it',
    },
    cs: {
        about: 'O nás', mission: 'Mise a vize', whyNow: 'Proč právě teď', identity: 'Naše identita', team: 'Tým',
        platform: 'Platforma', different: 'Čím se odlišujeme', howItWorks: 'Jak to funguje',
        programs: 'Inovační programy', partners: 'Partneři',
        join: 'Jak se zapojit', share: 'Sdílejte své potřeby', clinicians: 'Lékaři a výzkumníci',
        startups: 'Startupy a inovátoři', investors: 'Investoři', industry: 'Průmysloví partneři',
        news: 'Novinky', contact: 'Kontakt', cta: 'Pomozte nám ji postavit',
    },
};

export function navFor(lang) {
    return build(lang, pick(labels, lang));
}

export function ctaFor(lang) {
    return { label: pick(labels, lang).cta, href: url(lang, 'home', 'shape') };
}
