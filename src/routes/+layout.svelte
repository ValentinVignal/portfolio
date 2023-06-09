<script lang="ts">
	import { base } from '$app/paths';
	import '$lib/global.css';
	const toggle = () => {
		window.document.body.classList.toggle('dark-mode');
	};
</script>

<div class="navbar">
	<a href="{base}/">Home</a>
	<a href="{base}/education">Education</a>
	<a href="{base}/work-experience">Work experience</a>
	<a href="{base}/projects">Projects</a>
	<a href="{base}/contributions">Contributions</a>
</div>

<slot />

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
</style>
