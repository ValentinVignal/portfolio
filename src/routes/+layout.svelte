<script lang="ts">
	import Analytics from '$lib/components/Analytics.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<Analytics />

<Drawer>
	<NavBar />
	<div class="container">
		<slot />
	</div>
</Drawer>

<style>
	.container {
		padding: 16px;
		width: 100%;
		height: 100%;
	}
</style>
