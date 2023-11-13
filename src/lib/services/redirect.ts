import { goto } from "$app/navigation";
import type { SkillId } from "$lib/data/skills";

export const changeUrlPath = (url: URL, path: string): URL => {

  const newUrl = new URL(url);
  newUrl.pathname = path;
  return newUrl;
}

export const redirect = (url: URL, path: string): void => {
  goto(changeUrlPath(url, path), { noScroll: true });
}

export const changeUrlSkill = (url: URL, skillId: SkillId): URL => {
  const newUrl = new URL(url);
  const selectedSkills = url.searchParams.getAll('skill');
  if (selectedSkills.includes(skillId)) {
    newUrl.searchParams.delete('skill', skillId);
  } else {
    newUrl.searchParams.append('skill', skillId);
  }
  return newUrl

}

export const selectSkill = (url: URL, skillId: SkillId): void => {
  goto(changeUrlSkill(url, skillId), { noScroll: true });
};

