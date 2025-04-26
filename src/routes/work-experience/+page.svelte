<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Skills from '$lib/components/Skills.svelte';
	import { changeUrlPath } from '$lib/services/redirect';
	import { ChevronRight } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import ConditionalAnchor from '$lib/components/ConditionalAnchor.svelte';

	const { data }: { data: PageData } = $props();

	let links = $state(
		data.workExperiences.map((workExperience) =>
			workExperience.url ? `${base}/work-experience/${workExperience.url}` : null
		)
	);

	$effect(() => {
		links = data.workExperiences.map((workExperience) =>
			workExperience ? changeUrlPath(`/work-experience/${workExperience.url}`) : null
		);
	});
</script>

<ul class="steps steps-vertical">
	{#each data.workExperiences as workExperience, index (workExperience.id)}
		<li data-content="" class="step step-primary">
			<div class="card shadow-xl bg-base-300 card-bordered my-8 px-8">
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
	.card {
		width: 100%;
		text-align: left;
	}

	.card-title {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		@media (min-width: 1280px) {
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
