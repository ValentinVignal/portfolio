<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { changeUrlPath } from '$lib/services/redirect';
	import { Icon, type IconSource } from '@steeze-ui/svelte-icon';

	const { href, text, icon }: { href: string; text: string; icon: IconSource } = $props();

	const isActive = (path: string): boolean => {
		if (base) {
			path = path.replace(base, '');
		}
		if (href === '/') {
			return ['', '/'].includes(path);
		}
		return path.startsWith(href);
	};

	const active = $derived(isActive(page.url.pathname));
	const url = $derived(changeUrlPath(href));
</script>

<li>
	<a
		class:active
		class:bg-neutral={active}
		class:text-neutral-content={active}
		class="rounded-md"
		href={url}
		onclick={() => {
			document.getElementById('drawer')?.click();
		}}
	>
		<Icon src={icon} size="25" theme={active ? 'solid' : undefined} class="primary" />
		{text}
	</a>
</li>
