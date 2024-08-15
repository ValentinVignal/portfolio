import { SkillId } from '$lib/data/skills';

type Education = {
	url: string;
	name: string;
	start: Date;
	end: Date;
	description?: string;
	logo?: string;
	skills: SkillId[];
};

const education: Education[] = [
	{
		name: 'National University of Singapore - School of Computing',
		url: 'https://nus.edu.sg/',
		description: 'Master in Computer Science - Specialization in Artificial Intelligence',
		start: new Date(2019, 0),
		end: new Date(2020, 5),
		logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/800px-NUS_coat_of_arms.svg.png',
		skills: [SkillId.Python, SkillId.Kotlin, SkillId.Android]
	},
	{
		name: 'CentraleSupélec',
		url: 'https://www.centralesupelec.fr/en',
		description:
			'Master in Engineering - Specialization in Computer Science and Electrical Engineering',
		start: new Date(2016, 8),
		end: new Date(2020, 5),
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/LogoCS.png/1280px-LogoCS.png',
		skills: [SkillId.Python]
	},
	{
		name: 'Lycée Masséna - MPSI/MP*',
		url: 'http://www.lycee-massena.fr/les-cpge/',
		description:
			'Intensive two-year preparation to the highly competitive entrance examinations for the French Engineering Schools',
		start: new Date(2014, 8),
		end: new Date(2016, 5),
		skills: [SkillId.Python]
	}
];

export const load = () => ({ education });
