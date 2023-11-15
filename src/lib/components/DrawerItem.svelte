<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { changeUrlPath } from '$lib/services/redirect';
	import { Icon, type IconSource } from '@steeze-ui/svelte-icon';
	import { beforeUpdate } from 'svelte';

	export let href: string;
	export let text: string;
	export let icon: IconSource;

	const isActive = (path: string): boolean => {
		if (base) {
			path = path.replace(base, '');
		}
		if (href === '/') {
			return ['', '/'].includes(path);
		}
		return path.startsWith(href);
	};

	$: active = isActive($page.url.pathname);
	let url = href;
	beforeUpdate(() => {
		url = changeUrlPath($page.url, href).toString();
	});
</script>

<li>
	<a
		href="{base}{url}"
		class:active
		on:click={() => {
			document.getElementById('drawer')?.click();
		}}
	>
		<Icon src={icon} size="25" theme={active ? 'solid' : undefined} class="primary" />
		{text}
	</a>
</li>
