<script lang="ts">
	import { page } from '$app/stores';
	import { SkillId, getSelectedSkills, skillFromId } from '$lib/data/skills';
	import { changeUrlSkill } from '$lib/services/redirect';

	export let skillIds: SkillId[];
	const skills = skillFromId(skillIds);
	$: selectedSkills = getSelectedSkills($page.url);
</script>

<div class="skills">
	{#each skills as skill}
		{@const selected = selectedSkills.includes(skill.id)}
		<span
			class="badge tooltip tooltip-bottom hover:ring-2 hover:ring-accent/50"
			class:ring-accent={selected}
			class:ring-2={selected}
			class:active={selected}
			data-tip={skill.name}
		>
			<a href={changeUrlSkill($page.url, skill.id).toString()}>
				<img
					src={`https://www.google.com/s2/favicons?domain=${skill.url}`}
					alt={`${skill.name} logo`}
				/>
			</a>
		</span>
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
	}
</style>
