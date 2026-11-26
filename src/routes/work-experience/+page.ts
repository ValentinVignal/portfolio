import { SkillId } from '$lib/data/skills';

type Company = {
	name: string;
	url: string;
	logo: string;
};

type WorkExperience = {
	company: Company;
	description: string;
	title: string;
	url?: string;
	id: string;
	start: Date;
	end?: Date;
	country: string;
	skills: SkillId[];
};

const arta: Company = {
	name: 'Arta Finance',
	url: 'https://artafinance.com',
	logo: 'https://artafinance.com/share_thumb.png'
};

const artaSkills = [
	SkillId.Flutter,
	SkillId.Dart,
	SkillId.Riverpod,
	SkillId.GoRouter,
	SkillId.Firebase,
	SkillId.VSCode,
];

const prudential: Company = {
	name: 'Prudential plc',
	url: 'https://www.prudentialplc.com/',
	logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Prudential-plc-1986.svg/1920px-Prudential-plc-1986.svg.png'
};

const prudentialSkills = [
	SkillId.Flutter,
	SkillId.Dart,
	SkillId.TypeScript,
	SkillId.Riverpod,
	SkillId.GraphQL,
	SkillId.GoRouter,
	SkillId.NestJS,
	SkillId.Freezed,
	SkillId.Firebase,
	SkillId.GithubActions,
	SkillId.VSCode
];

const novade: Company = {
	name: 'Novade Solutions',
	url: 'https://www.novade.net/',
	logo: 'https://favicon.run/favicon?domain=www.novade.net&sz=256'
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
	SkillId.VSCode
];

const novadeDescription =
	'on the main web and mobile application with Flutter for the front end, NestJS for the backend, GraphQL for the API and PostgreSQL for the database.';

const workExperiences: WorkExperience[] = [
	{
		id: 'arta-software-engineer',
		company: arta,
		title: 'Software Engineer',
		url: 'arta-finance',
		description: 'Software engineer',
		country: 'Singapore',
		skills: artaSkills,
		start: new Date(2026, 10, 23),
	},

	{
		id: 'prudential-lead-software-engineer',
		company: prudential,
		title: 'Lead Software Engineer',
		url: 'prudential-plc',
		description:
			'Lead a team of 5 engineers building the Flutter-based web and mobile application. Own internal Dart packages, ensuring code quality and best practices across the company.',
		start: new Date(2024, 9, 28),
		end: new Date(2026, 10, 13),
		country: 'Singapore',
		skills: prudentialSkills
	},
	{
		id: 'novade-senior-full-stack-developer',
		company: novade,
		title: 'Senior Full Stack Developer',
		url: 'novade-solutions',
		description: `Senior full stack developer ${novadeDescription}`,
		start: new Date(2022, 8, 1),
		end: new Date(2024, 9, 18),
		country: 'Singapore',
		skills: novadeSkills
	},
	{
		id: 'novade-software-developer',
		company: novade,
		title: 'Software Developer',
		url: 'novade-solutions',
		description: `Full stack developer ${novadeDescription}`,
		start: new Date(2020, 5, 1),
		end: new Date(2022, 7, 31),
		country: 'Singapore',
		skills: novadeSkills
	},
	{
		id: 'novade-part-time',
		company: novade,
		title: 'Part time Software Developer',
		description: 'Implement e2e testing on the web application using Cypress.',
		start: new Date(2019, 5, 6),
		end: new Date(2020, 4),
		country: 'Singapore',
		skills: [SkillId.GithubActions, SkillId.TypeScript]
	}
];

export const load = () => {
	return { workExperiences };
};
