<script lang="ts">
	import LogoTitle from '$lib/components/LogoTitle.svelte';
	import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container">
	{#each data.accounts as account (account.url)}
		<a href={account.url} target="_blank" rel="noopener noreferrer">
			<div class="card shadow-xl bg-base-100 max-w-96">
				<div class="card-body">
					<LogoTitle title={account.name} src={account.icon} />
					<Icon src={ArrowTopRightOnSquare} size="25" />
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

	.card-body {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
