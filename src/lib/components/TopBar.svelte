<script>
	import { Toggle } from 'carbon-components-svelte';
	import { theme, Theme, toggleTheme } from '../store/Theme';

	const toggled = $theme === Theme.Dark;
</script>

<nav class="layout">
	<a href="/">Home</a>
	<a href="/projects">Projects</a>
	<a href="/experience">Experience</a>
	<a href="/misc">Misc</a>
	<Toggle
		{toggled}
		hideLabel={false}
		labelA=""
		labelB=""
		labelText="Dark"
		on:toggle={() => {
			toggleTheme();
		}}
	/>
</nav>
