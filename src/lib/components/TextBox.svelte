<script lang="ts">
	export let text: string;
	export let emoji: string;
	export let reverse: boolean = false;
</script>

<div class="layout">
	<article class:reverse>
		<div class="emoji">{emoji}</div>
		<div class="text">
			{text}
		</div>
	</article>
</div>

<style>
	article {
		display: flex;
		align-items: flex-start;
		gap: 1.2rem;
		padding: 2rem 2rem 2rem 1.4rem;
	}

	.emoji {
		font-size: 2rem;
	}

	.reverse {
		flex-direction: row-reverse;
		padding: 2rem 1.4rem 2rem 2rem;
	}
</style>
