<script lang="ts">
	import { onMount } from 'svelte';
	import { Cog6Tooth, Icon } from 'svelte-hero-icons';
	import { themeChange } from 'theme-change';
	onMount(() => {
		themeChange(false);
	});
</script>

<div class="icon">
	<Icon src={Cog6Tooth} size="25" />
</div>

<select data-choose-theme class="select">
	<option value="">Default</option>

	<option value="dark">Dark</option>
	<option value="light">Light</option>
	<option value="halloween">Halloween</option>
	<option value="forest">Forest</option>
	<option value="dracula">Dracula</option>
	<option value="night">Night</option>
</select>

<style>
	.icon {
		padding-right: 16px;
	}
</style>
