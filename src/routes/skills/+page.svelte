<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: skills = data.skills;
</script>

<div class="skills-container">
	{#each skills as skill (skill.id)}
		<div class="card card-bordered shadow-xl bg-base-100">
			<div class="card-body">
				<div class="card-title">
					{skill.name}
				</div>
				<!-- {skill.name} -->
			</div>
		</div>
	{/each}
</div>

<style>
	.skills-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
	}
</style>
