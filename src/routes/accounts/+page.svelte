<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container">
	{#each data.accounts as account (account.url)}
		<a href={account.url} target="_blank" rel="noopener noreferrer">
			<div class="card shadow-xl bg-base-100 max-w-96">
				<div class="card-body">
					{account.name}
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.container > * {
		flex: 1 1 200px;
	}
</style>
