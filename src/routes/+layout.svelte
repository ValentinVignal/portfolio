<script lang="ts">
	import { base } from '$app/paths';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import '../app.css';
</script>

<div class="drawer drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />

		<ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
			<li><a class="link" href="{base}/">Home</a></li>
			<li><a class="link" href="{base}/education">Education</a></li>
			<li><a class="link" href="{base}/work-experience">Work experience</a></li>
			<li><a class="link" href="{base}/projects">Projects</a></li>
			<li><a class="link" href="{base}/contributions">Contributions</a></li>
			<div class="divider" />
			<ThemeSwitcher />
		</ul>
	</div>
</div>

<div class="container">
	<div class="navbar" />
</div>

<style>
	a {
		text-decoration: none;
	}
	.container {
		display: flex;
		flex-direction: row;
		justify-items: start;
	}
	.navbar {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 10px;
	}
</style>
