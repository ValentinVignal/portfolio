<script lang="ts">
	import { page } from '$app/state';
	import { SkillId, getSelectedSkills, skillFromId } from '$lib/data/skills';
	import { GTagEvent, gtagEvent } from '$lib/services/gtag';
	import { changeUrlSkill } from '$lib/services/redirect';

	const { skillIds } = $props<{ skillIds: SkillId[] }>();
	const skills = skillFromId(skillIds);

	let selectedSkills: string[] = $state([]);
	$effect(() => {
		selectedSkills = getSelectedSkills(page.url);
	});

	let links: string[] = $state([]);
	$effect(() => {
		links = skills.map((skill) => changeUrlSkill(page.url, skill.id).toString());
	});

	const handleClick = (id: SkillId): void => {
		const wasSelected = selectedSkills.includes(id);

		gtagEvent({
			event: GTagEvent.SkillClick,
			data: {
				location: 'skill-chip',
				id,
				selected: !wasSelected
			}
		});
	};
</script>

<div class="skills">
	{#each skills as skill, index (skill.id)}
		{@const selected = selectedSkills.includes(skill.id)}

		<a data-sveltekit-noscroll href={links[index]} onclick={() => handleClick(skill.id)}>
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
		@media (min-width: 1280px) {
			padding-top: 0px;
		}
	}
</style>
