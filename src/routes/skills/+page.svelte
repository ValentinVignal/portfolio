<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: skills = data.skills;
</script>

<div class="skills-container">
	{#each skills as skill (skill.id)}
		<div class="card card-bordered shadow-xl bg-base-100">
			<a href={skill.url}>
				<div class="card-body">
					<div class="card-title">
						<img
							src={`https://www.google.com/s2/favicons?domain=${skill.url}`}
							alt={`{skill.name} logo`}
						/>
						{skill.name}
					</div>
				</div>
			</a>
		</div>
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
