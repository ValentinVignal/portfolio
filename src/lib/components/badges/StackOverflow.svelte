<script lang="ts">
	type StackOverFlowData = {
		items: [
			{
				reputation: number;
				link: string;
				display_name: string;
			}
		];
	};

	const getData = async () => {
		const res = await fetch(
			'https://api.stackexchange.com/2.3/users/12066144?pagesize=1&order=desc&sort=reputation&site=stackoverflow',
			{ method: 'GET' }
		);
		const data: StackOverFlowData = await res.json();
		return data.items[0];
	};

	$: data = getData();
</script>

{#await data then data}
	<a href={data.link}>
		<img
			src="https://img.shields.io/badge/Stack%20Overflow-{data.reputation}-F47F24"
			alt={data.display_name}
		/>
	</a>
{/await}
