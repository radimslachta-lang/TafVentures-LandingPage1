// Main menu. Each top-level item has its own landing link and an optional
// list of children shown as a dropdown. Add new pages here, not in Nav.astro.
export const nav = [
    {
        label: 'About us',
        href: '/about',
        children: [
            { label: 'Mission & Vision', href: '/about#mission' },
            { label: 'Why now', href: '/about#why-now' },
            { label: 'Our Identity', href: '/about#vision' },
            { label: 'Team', href: '/about#team' },
        ],
    },
    {
        label: 'Platform',
        href: '/#different',
        children: [
            { label: 'What makes us different', href: '/#different' },
            { label: 'TafelVent Gate', href: '/#gate' },
            { label: 'How it works', href: '/#platform' },
            { label: 'Innovation Programs', href: '/#programs' },
            { label: 'Partners', href: '/#partners' },
        ],
    },
    {
        label: 'How to join',
        href: '/how-to-join',
        children: [
            { label: 'Share your needs', href: '/how-to-join#shape' },
            { label: 'Clinicians & Researchers', href: '/how-to-join#join-clinicians' },
            { label: 'Startups & Innovators', href: '/how-to-join#join-startups' },
            { label: 'Investors', href: '/how-to-join#join-investors' },
            { label: 'Industry Partners', href: '/how-to-join#join-industry' },
        ],
    },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/#contact' },
];

export const cta = { label: 'Help us build it', href: '/#shape' };
