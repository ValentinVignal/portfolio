<script lang="ts">
	import { base } from '$app/paths';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<div class="drawer md:drawer-open">
	<input id="drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-start">
		<slot />
	</div>
	<div class="drawer-side">
		<label for="drawer" class="drawer-overlay" />

		<ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
			<li><a class="link" href="{base}/">Home</a></li>
			<li><a class="link" href="{base}/education">Education</a></li>
			<li><a class="link" href="{base}/work-experience">Work experience</a></li>
			<li><a class="link" href="{base}/projects">Projects</a></li>
			<li><a class="link" href="{base}/contributions">Contributions</a></li>
			<li><a class="link" href="{base}/skills">Skills</a></li>
			<div class="divider" />
			<ThemeSwitcher />
		</ul>
	</div>
</div>

<style>
	a {
		text-decoration: none;
	}
</style>
