<script lang="ts">
	import { base } from '$app/paths';
	import { Icon, type IconSource } from 'svelte-hero-icons';

	export let href: string;
	export let text: string;
	export let icon: IconSource;
</script>

<a
	href="{base}{href}"
	on:click={() => {
		document.getElementById('drawer')?.click();
	}}
>
	<Icon src={icon} size="25" />
	{text}
</a>
