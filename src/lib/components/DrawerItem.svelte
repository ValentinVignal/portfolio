<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { Icon, type IconSource } from '@steeze-ui/svelte-icon';

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
</script>

<li>
	<a
		href="{base}{href}"
		class:active
		on:click={() => {
			document.getElementById('drawer')?.click();
		}}
	>
		<Icon src={icon} size="25" theme={active ? 'solid' : undefined} class="primary" />
		{text}
	</a>
</li>
