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
}

const novade: Company = {
  name: 'Novade Solutions',
  url: 'https://www.novade.net/',
  logo: 'https://media.licdn.com/dms/image/C4D0BAQE2vYPi2C2EAQ/company-logo_200_200/0/1519922033388?e=1697673600&v=beta&t=_SehKVTRlmf7JP2sDVbjDjnM348Ml_37XG0CiV9m91U',
};

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
  },
  {
    id: 'novade-part-time',
    company: novade,
    title: 'Part time Software Developer',
    description: 'Implement e2e testing on the web application using Cypress.',
    start: new Date(2019, 5),
    end: new Date(2020, 4),
    country: 'Singapore',
  }
];

export const load = () => {
  return { workExperiences };
}
