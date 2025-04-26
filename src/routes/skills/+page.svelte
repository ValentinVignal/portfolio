<script lang="ts">
	import { building } from '$app/environment';
	import { page } from '$app/state';
	import { getSelectedSkills, type SkillId } from '$lib/data/skills';

	import type { PageData } from './$types';
	import SkillCard from './SkillCard.svelte';

	// This is because page.url.searchParams cannot be used in the server-side
	// rendering
	let selectedSkills = $derived.by(() => (building ? [] : getSelectedSkills(page.url)));

	const { data }: { data: PageData } = $props();
	const skills = data.skills;
</script>

<div class="skills-container">
	{#each skills as skill (skill.id)}
		{@const selected = selectedSkills.includes(skill.id)}
		<SkillCard {skill} {selected} />
	{/each}
</div>

<svelte:head>
	<title>Valentin Vignal - Skills</title>
</svelte:head>

<style>
	.skills-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
	}
</style>
