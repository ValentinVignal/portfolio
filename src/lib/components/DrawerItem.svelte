<script lang="ts">
	import { base } from '$app/paths';

	export let href: string;
	export let text: string;
</script>

<a
	href="{base}{href}"
	on:click={() => {
		document.getElementById('drawer')?.click();
	}}
>
	{text}
</a>
