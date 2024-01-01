<script lang="ts">
	export let src: string;
	export let alt: string | null = null;
	export let title: string;
	export let round: boolean = false;
</script>

<!--
  @component

  It displays a logo with a title.

  If a `slot` is provided, it will be displayed instead of the `title`.
-->
<div>
	<img {src} alt={alt ?? title} class="h-8" class:rounded={!round} class:rounded-full={round} />
	{#if $$slots.default}
		<slot />
	{:else}
		{title}
	{/if}
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
