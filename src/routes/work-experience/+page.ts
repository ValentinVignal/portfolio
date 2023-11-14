import { SkillId } from "$lib/data/skills";

type Company = {
  name: string;
  url: string;
  logo: string;
}

type WorkExperience = {
  company: Company;
  description: string;
  title: string;
  url?: string;
  id: string;
  start: Date;
  end?: Date;
  country: string;
  skills: SkillId[],
}

const novade: Company = {
  name: 'Novade Solutions',
  url: 'https://www.novade.net/',
  logo: 'https://www.novade.net/wp-content/uploads/2022/02/Novade-Solutions-Logo.png',
};

const novadeSkills = [
  SkillId.Flutter,
  SkillId.Dart,
  SkillId.TypeScript,
  SkillId.PostgresQL,
  SkillId.Riverpod,
  SkillId.GraphQL,
  SkillId.GoRouter,
  SkillId.Drift,
  SkillId.Ferry,
  SkillId.NestJS,
  SkillId.NestjsQuery,
  SkillId.Provider,
  SkillId.BuiltValue,
  SkillId.Freezed,
  SkillId.SQLite,
  SkillId.GithubActions,
  SkillId.VSCode,
];

const novadeDescription = 'on the main web and mobile application with Flutter for the front end, NestJS for the backend, GraphQL for the API and PostgreSQL for the database.';

const workExperiences: WorkExperience[] = [
  {
    id: 'novade-senior-full-stack-developer',
    company: novade,
    title: 'Senior Full Stack Developer',
    url: 'novade-solutions',
    description: `Senior full stack developer ${novadeDescription}`,
    start: new Date(2022, 8),
    country: 'Singapore',
    skills: novadeSkills,
  },
  {
    id: 'novade-software-developer',
    company: novade,
    title: 'Software Developer',
    url: 'novade-solutions',
    description: `Full stack developer ${novadeDescription}`,
    start: new Date(2020, 5),
    end: new Date(2022, 7),
    country: 'Singapore',
    skills: novadeSkills,
  },
  {
    id: 'novade-part-time',
    company: novade,
    title: 'Part time Software Developer',
    description: 'Implement e2e testing on the web application using Cypress.',
    start: new Date(2019, 5),
    end: new Date(2020, 4),
    country: 'Singapore',
    skills: [
      SkillId.GithubActions,
      SkillId.TypeScript,
    ],
  }
];

export const load = () => {
  return { workExperiences };
}
