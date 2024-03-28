<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { ArrowDownTray, Bars3 } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

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
			<Icon src={Bars3} size="24" />
		</label>
	</div>
	<div class="breadcrumbs">
		<ul>
			<li>
				<a id="main-nav-bar-button" class="btn btn-ghost normal-case text-xl" href="{base}/"
					>Valentin Vignal</a
				>
			</li>

			{#if title}
				<li>
					<p class="text-lg">{title}</p>
				</li>
			{/if}
		</ul>
	</div>
	<button class="btn btn-square">
		<Icon src={ArrowDownTray} size="24" />
	</button>
</div>

<style>
	#main-nav-bar-button {
		text-decoration: none;
	}

	.navbar > button {
		margin-left: auto;
	}
</style>
