<script lang="ts">
	import { page } from '$app/stores';

	import type { PageData } from './$types';
	import SkillCard from './SkillCard.svelte';

	$: selectedSkills = $page.url.searchParams.getAll('skill');
	$: url = $page.url;

	export let data: PageData;
	$: skills = data.skills;

	let visible = false;
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
