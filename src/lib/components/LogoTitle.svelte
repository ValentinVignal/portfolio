<script lang="ts">
	import { Icon, type IconSource } from '@steeze-ui/svelte-icon';

	export let src: string | IconSource;
	export let alt: string | null = null;
	export let title: string | null = null;
	export let round: boolean = false;
</script>

<!--
  @component

  It displays a logo with a title.

  If a `slot` is provided, it will be displayed instead of the `title`.
-->
<div>
	{#if typeof src === 'string'}
		<img {src} alt={alt ?? title} class="h-8" class:rounded={!round} class:rounded-full={round} />
	{:else}
		<Icon {src} size="25" class="h-8 me-2" />
	{/if}
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
