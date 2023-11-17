<script lang="ts">
	import { options } from '$lib/data/themes';
	import { ChevronDown } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<div class="dropdown dropdown-top m-4">
	<label for="theme-dropdown" tabindex="-1" class="btn m-1">
		Theme
		<div class="icon opacity-60">
			<Icon src={ChevronDown} size="14" />
		</div>
	</label>
	<ul class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
		{#each options as [value, label] (value)}
			<li>
				<input
					tabindex="-1"
					data-set-theme={value}
					id="theme-dropdown-{value}"
					type="radio"
					name="theme-dropdown"
					class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					aria-label={label}
					{value}
				/>
			</li>
		{/each}
	</ul>
</div>
