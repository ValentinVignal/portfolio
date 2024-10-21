<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Skills from '$lib/components/Skills.svelte';
	import { changeUrlPath, redirect } from '$lib/services/redirect';
	import { ChevronRight } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { beforeUpdate } from 'svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import ConditionalAnchor from '$lib/components/ConditionalAnchor.svelte';

	export let data: PageData;

	let links = data.workExperiences.map((workExperience) =>
		workExperience.url ? `${base}/work-experience/${workExperience.url}` : null
	);

	beforeUpdate(() => {
		links = data.workExperiences.map((workExperience) =>
			workExperience
				? changeUrlPath($page.url, `/work-experience/${workExperience.url}`).toString()
				: null
		);
	});
</script>

<ul class="steps steps-vertical">
	{#each data.workExperiences as workExperience, index (workExperience.id)}
		<li data-content="" class="step step-primary">
			<div class="card shadow-xl bg-base-100 card-bordered">
				<div class="card-body">
					<div class="card-title">
						<div class="card-name">
							<a
								href={workExperience.company.url}
								class="company-url"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={workExperience.company.logo} alt="logo" class="h-12 rounded" />
							</a>
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
								<ConditionalAnchor link={links[index]}>
									{workExperience.title}
								</ConditionalAnchor>
							</div>
						</div>
						<div class="flex flex-row">
							<div class="skills">
								<Skills skillIds={workExperience.skills} />
							</div>
							{#if workExperience.url}
								<a href={links[index]}>
									<div class="arrow-icon">
										<Icon src={ChevronRight} size="25" />
									</div>
								</a>
							{/if}
						</div>
					</div>

					<ConditionalAnchor link={links[index]}>
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
					</ConditionalAnchor>
				</div>
			</div>
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
		flex-direction: column;
		align-items: flex-start;
		@screen lg {
			justify-content: space-between;
			flex-direction: row;
			align-items: center;
		}
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

	a:has(img) {
		display: contents;
	}
</style>
