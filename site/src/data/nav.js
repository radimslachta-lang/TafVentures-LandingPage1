// Main menu. Each top-level item has its own landing link and an optional
// list of children shown as a dropdown. Add new pages here, not in Nav.astro.
export const nav = [
    {
        label: 'About us',
        href: '/#mission',
        children: [
            { label: 'Mission & Vision', href: '/#mission' },
            { label: 'Our Identity', href: '/#vision' },
        ],
    },
    {
        label: 'Platform',
        href: '/#platform',
        children: [
            { label: 'How it works', href: '/#platform' },
            { label: 'Innovation Programs', href: '/#programs' },
            { label: 'Partners', href: '/#partners' },
        ],
    },
    {
        label: 'How to join',
        href: '/#join',
        children: [
            { label: 'Clinicians & Researchers', href: '/#join-clinicians' },
            { label: 'Startups & Innovators', href: '/#join-startups' },
            { label: 'Investors', href: '/#join-investors' },
            { label: 'Industry Partners', href: '/#join-industry' },
        ],
    },
    { label: 'Contact', href: '/#contact' },
];

export const cta = { label: 'Get in Touch', href: '/#contact' };
