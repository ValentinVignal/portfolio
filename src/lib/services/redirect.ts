import { goto } from '$app/navigation';
import { base } from '$app/paths';
import { page } from '$app/state';
import type { SkillId } from '$lib/data/skills';

export const changeUrlPath = (path: string): string => {
	const url = new URL(page.url);
	const search = url.search;

	return `${base}${path}${search}`;
};

export const changeUrlSkill = (url: URL, skillId: SkillId): URL => {
	const newUrl = new URL(url);
	const selectedSkills = url.searchParams.getAll('skill');
	if (selectedSkills.includes(skillId)) {
		newUrl.searchParams.delete('skill', skillId);
	} else {
		newUrl.searchParams.append('skill', skillId);
	}
	return newUrl;
};

export const selectSkill = (url: URL, skillId: SkillId): void => {
	goto(changeUrlSkill(url, skillId), { noScroll: true });
};
