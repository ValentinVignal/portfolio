<script lang="ts">
	import Skills from '$lib/components/Skills.svelte';
	import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul class="steps steps-vertical">
	{#each data.education as education (education.url)}
		<li data-content="" class="step step-primary">
			<div class="card shadow-xl bg-base-300 card-bordered px-8 my-8">
				<div class="card-body">
					<div class="card-title">
						<a href={education.url}>
							<div class="card-name">
								{#if education.logo}
									<img src={education.logo} alt={education.name} class="h-12 rounded" />
								{/if}
								{education.name}
							</div>
						</a>
						<div class="flex flex-row">
							<div class="skills">
								<Skills skillIds={education.skills} />
							</div>
							<a href={education.url}>
								<div class="arrow-icon pl-8 pt-2">
									<Icon src={ArrowTopRightOnSquare} size="25" />
								</div>
							</a>
						</div>
					</div>
					<p>
						<small>
							{education.start.toLocaleDateString('en-GB', {
								month: 'short',
								year: 'numeric'
							})} - {education.end.toLocaleDateString('en-GB', {
								month: 'short',
								year: 'numeric'
							})}
						</small>
					</p>
					{#if education.description}
						<p>
							{education.description}
						</p>
					{/if}
				</div>
			</div>
		</li>
	{/each}
</ul>

<svelte:head>
	<title>Valentin Vignal - Education</title>
</svelte:head>

<style>
	.card {
		width: 100%;
		text-align: left;
	}
	.card-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.card-name {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	img {
		margin-right: 8px;
	}

	.arrow-icon {
		size: 25px;
	}
	.skills {
		padding: 4px;
		flex-shrink: 0;
	}
</style>
