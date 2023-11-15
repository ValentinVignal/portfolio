<script lang="ts">
	import { ChevronDown } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	const options = [
		['default', 'Default'],
		['dark', 'Dark'],
		['light', 'Light'],
		['halloween', 'Halloween'],
		['forest', 'Forest'],
		['dracula', 'Dracula'],
		['night', 'Night'],
		['sunset', 'Sunset'],
		['grassland', 'Grassland']
	];
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
