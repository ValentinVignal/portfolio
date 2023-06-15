<script lang="ts">
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	onMount(() => {
		themeChange(false);
	});
</script>

<select data-choose-theme class="select">
	<option value="">Default</option>

	<option value="dark">Dark</option>
	<option value="light">Light</option>
	<option value="halloween">Halloween</option>
	<option value="forest">Forest</option>
	<option value="dracula">Dracula</option>
	<option value="night">Night</option>
</select>
