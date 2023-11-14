<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Skills from '$lib/components/Skills.svelte';
	import { changeUrlPath } from '$lib/services/redirect';
	import { ChevronRight } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul class="steps steps-vertical">
	{#each data.workExperiences as workExperience (workExperience.id)}
		{@const newUrl = changeUrlPath($page.url, `/work-experience/${workExperience.url}`)}
		<li data-content="" class="step step-primary">
			<a href={workExperience.url ? `${base}${newUrl}` : null}>
				<div class="card shadow-xl bg-base-100 max-w-96 card-bordered">
					<div class="card-body">
						<div class="card-title">
							<div class="card-name">
								<img src={workExperience.company.logo} alt="logo" class="h-12 rounded" />
								<div>
									<a
										href={workExperience.company.url}
										class="company-url"
										target="_blank"
										rel="noopener noreferrer"
									>
										{workExperience.company.name}
									</a>
									-
									{workExperience.title}
								</div>
							</div>
							<div class="flex flex-row">
								<div class="skills">
									<Skills skillIds={workExperience.skills} />
								</div>
								{#if workExperience.url}
									<div class="arrow-icon">
										<Icon src={ChevronRight} size="25" />
									</div>
								{/if}
							</div>
						</div>
						<p>
							<small>
								{workExperience.start.toLocaleDateString('en-GB', {
									month: 'short',
									year: 'numeric'
								})} -
								{#if workExperience.end}
									{workExperience.end?.toLocaleDateString('en-GB', {
										month: 'short',
										year: 'numeric'
									})}
								{/if}
							</small>
						</p>
						{#if workExperience.description}
							<p>
								{workExperience.description}
							</p>
						{/if}
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>

<svelte:head>
	<title>Valentin Vignal - Work Experience</title>
</svelte:head>

<style>
	ul {
		width: 100%;
	}
	li {
		width: 100%;
	}
	.card {
		margin: 8px;
		width: 100%;
		text-align: left;
	}
	.card-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.company-url {
		text-decoration: underline;
	}

	.arrow-icon {
		size: 25px;
	}

	.card-name {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	img {
		margin-right: 8px;
	}
</style>
