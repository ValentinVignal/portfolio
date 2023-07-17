<script lang="ts">
	export let src: string;
	export let alt: string | null = null;
	export let title: string;
	export let round: boolean = false;
</script>

<div>
	<img {src} alt={alt ?? title} class="h-8" class:rounded={!round} class:rounded-full={round} />
	{title}
</div>

<style>
	img {
		margin-right: 8px;
	}

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
