export interface Contact {
    icon: string;
    label: string;
    href?: string;
}

export const profileImage = `${import.meta.env.BASE_URL}me.jpeg`;

export const contacts: Contact[] = [
    {
        icon: 'GH',
        label: '/ValenChiola',
        href: 'https://github.com/ValenChiola',
    },
    {
        icon: 'IN',
        label: '/in/valentino-chiola',
        href: 'https://www.linkedin.com/in/valentino-chiola-651b421b8/',
    },
    { icon: '✉', label: 'tinochiola06@gmail.com' },
    { icon: '🏠', label: 'Mar del Plata, Argentina' },
];

export const languages: string[] = ['Spanish (native)', 'English (B2, certified)'];
