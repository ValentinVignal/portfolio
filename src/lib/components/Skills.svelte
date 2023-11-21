<script lang="ts">
	import { page } from '$app/stores';
	import { SkillId, getSelectedSkills, skillFromId } from '$lib/data/skills';
	import { changeUrlSkill } from '$lib/services/redirect';
	import { beforeUpdate } from 'svelte';

	export let skillIds: SkillId[];
	const skills = skillFromId(skillIds);
	let selectedSkills: SkillId[] = [];

	let links = Array<string>(skills.length).map(() => $page.url.toString());
	beforeUpdate(() => {
		selectedSkills = getSelectedSkills($page.url);
		links = skills.map((skill) => changeUrlSkill($page.url, skill.id).toString());
	});
</script>

<div class="skills">
	{#each skills as skill, index (skill.id)}
		{@const selected = selectedSkills.includes(skill.id)}
		<a data-sveltekit-noscroll href={links[index]}>
			<span
				class="badge badge-neutral tooltip tooltip-bottom hover:ring-2 hover:ring-accent/50"
				class:ring-accent={selected}
				class:ring-2={selected}
				class:active={selected}
				data-tip={skill.name}
			>
				<img
					src={`https://www.google.com/s2/favicons?domain=${skill.url}`}
					alt={`${skill.name} logo`}
				/>
			</span>
		</a>
	{/each}
</div>

<style>
	a {
		pointer-events: all;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
		padding-top: 4px;
		@screen lg {
			padding-top: 0px;
		}
	}
</style>
