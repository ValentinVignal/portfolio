<script lang="ts">
	import { base } from '$app/paths';
	import { ChevronRight, Icon } from 'svelte-hero-icons';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul class="steps steps-vertical">
	{#each data.workExperiences as workExperience (workExperience.id)}
		<li data-content="" class="step step-primary">
			<a href={workExperience.url ? `${base}/work-experience/${workExperience.url}` : null}>
				<div class="card shadow-xl bg-base-100 max-w-96 card-bordered">
					<div class="card-body">
						<div class="card-title">
							<div>
								<a
									href={workExperience.company.url}
									class="company-url"
									target="_blank"
									rel="noopener noreferrer"
									>{workExperience.company.name}
								</a>
								-
								{workExperience.title}
							</div>
							{#if workExperience.url}
								<Icon src={ChevronRight} size="25" />
							{/if}
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
</style>
