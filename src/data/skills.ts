export interface SkillCategory {
    title: string;
    tags: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Backend',
        tags: ['Node.js', 'NestJS', 'Fastify', 'Express', 'TypeScript', 'Prisma', 'Socket Servers'],
    },
    {
        title: 'Frontend',
        tags: ['React + TypeScript', 'Next.js', 'TanStack (Query, Table, Router)', 'WebSockets'],
    },
    {
        title: 'Databases & Testing',
        tags: ['MySQL', 'MongoDB', 'Redis', 'Cypress', 'Jest', 'Vitest'],
    },
    {
        title: 'Cloud & Tooling',
        tags: ['AWS', 'S3', 'Docker', 'Kubernetes', 'Datadog', 'GitHub', 'GitLab'],
    },
];
