export interface Job {
    company: string;
    date: string;
    role: string;
    bullets: string[];
}

export const jobs: Job[] = [
    {
        company: 'Crombie',
        date: 'Feb 2026 – Present',
        role: 'Senior Software Engineer, Software Engineer (Finch)',
        bullets: [
            "Part of the Integrations Team, owning the full lifecycle of every integration between upstream payroll providers and Finch's interfacing layer.",
            'Keep existing integrations stable and performant while expanding coverage and the number of integrations.',
            'Respond to breakages and alerts, and invest in automation that shrinks the maintenance load over time.',
        ],
    },
    {
        company: 'Egg Live',
        date: 'Jul 2021 – Feb 2026',
        role: 'Software Engineer',
        bullets: [
            "Contributed to Egg's Backoffice frontend development, enhancing user experience with React.",
            'Built a Fastify and Node.js API for student sign-ups from scratch, prioritizing performance and security.',
            'Led a microservices infrastructure development, ensuring seamless integration and scalability.',
        ],
    },
    {
        company: 'Egg Live',
        date: 'Jul 2021 – Jun 2022',
        role: 'Professor',
        bullets: [
            'Designed and delivered engaging lectures for an Egg course, fostering a dynamic learning environment.',
            'Guided students through practical applications of course material, contributing to their skill development.',
        ],
    },
];
