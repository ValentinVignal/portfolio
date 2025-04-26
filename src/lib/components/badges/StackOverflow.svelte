<script lang="ts">
	import { onMount } from 'svelte';

	type StackOverflowItem = {
		reputation: number;
		link: string;
		display_name: string;
	};

	type StackOverFlowData = {
		items: [StackOverflowItem];
	};

	let data: StackOverflowItem | null = null;
	onMount(async () => {
		const res = await fetch(
			'https://api.stackexchange.com/2.3/users/12066144?pagesize=1&order=desc&sort=reputation&site=stackoverflow',
			{ method: 'GET' }
		);
		const stackOverflowData: StackOverFlowData = await res.json();
		data = stackOverflowData.items[0];
	});
</script>

{#if data}
	<a href={data.link}>
		<img
			src="https://img.shields.io/badge/Stack%20Overflow-{data.reputation}-F47F24"
			alt={data.display_name}
		/>
	</a>
{/if}
