<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	// TODO: Fix
	const getTitle = (path: string): string => {
		if (base) {
			path = path.replace(base, '');
		}
		switch (path) {
			case `/education`:
				return 'Education';
			case `/work-experience`:
				return 'Work experience';
			case `/work-experience/novade-solutions`:
				return 'Novade Solutions';
			case `/projects`:
				return 'Projects';
			case `/contributions`:
				return 'Contributions';
			case `/skills`:
				return 'Skills';
			case `/accounts`:
				return 'Accounts';
			default:
				return '';
		}
	};

	$: title = getTitle($page.url.pathname);
</script>

<div class="navbar bg-base-100">
	<div class="flex-none">
		<label for="drawer" class="btn btn-ghost drawer-button md:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</label>
	</div>
	<a class="btn btn-ghost normal-case text-xl" href="{base}/">Valentin Vignal</a>
	{#if title}
		<p class="text-lg">{title}</p>
	{/if}
</div>
