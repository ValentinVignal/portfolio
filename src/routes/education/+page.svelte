<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul class="steps steps-vertical">
	{#each data.education as education (education.url)}
		<li data-content="" class="step step-primary">
			<a href={education.url} target="_blank" rel="noopener noreferrer">
				<div class="card shadow-xl bg-base-100 max-w-96 card-bordered">
					<div class="card-body">
						<div class="card-title">
							{education.name}
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
</style>
