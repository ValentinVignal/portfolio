<script lang="ts">
	import { page } from '$app/stores';
	import { getSelectedSkills, type SkillId } from '$lib/data/skills';
	import { beforeUpdate } from 'svelte';

	import type { PageData } from './$types';
	import SkillCard from './SkillCard.svelte';

	let selectedSkills: SkillId[] = [];

	beforeUpdate(() => {
		selectedSkills = getSelectedSkills($page.url);
	});

	export let data: PageData;
	$: skills = data.skills;
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
