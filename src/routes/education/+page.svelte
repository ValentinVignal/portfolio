<script lang="ts">
	import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul class="steps steps-vertical">
	{#each data.education as education (education.url)}
		<li data-content="" class="step step-primary">
			<a href={education.url}>
				<div class="card shadow-xl bg-base-100 max-w-96 card-bordered">
					<div class="card-body">
						<div class="card-title">
							<div class="card-name">
								{#if education.logo}
									<img src={education.logo} alt={education.name} class="h-12 rounded" />
								{/if}
								{education.name}
							</div>
							<div class="arrow-icon">
								<Icon src={ArrowTopRightOnSquare} size="25" />
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
			</a>
		</li>
	{/each}
</ul>

<svelte:head>
	<title>Valentin Vignal - Education</title>
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
</style>
