<script lang="ts">
	type BulletLine = {
		emoji: string;
		text: string;
	};
	export let items: BulletLine[];
</script>

<div class="layout box">
	<ul>
		{#each items as item}
			<li style:list-style-type={`"${item.emoji}"`}>
				{item.text}
			</li>
		{/each}
	</ul>
</div>

<style>
	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		margin-top: 5vw;
		margin-bottom: 5vw;
	}

	ul {
		margin: 0;
		padding-left: 2rem;
		flex: 1;
	}

	.box :global(li:last-child) {
		margin-bottom: 0;
	}

	.box :global(li) {
		font-weight: 500;
		color: #eee;
		padding-left: 0.5rem;
		margin-bottom: 1rem;
	}
</style>
