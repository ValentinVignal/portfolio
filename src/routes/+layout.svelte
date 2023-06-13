<script lang="ts">
	import Drawer from '$lib/components/Drawer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<Drawer>
	<NavBar />
	<div class="container">
		<slot />
	</div>
</Drawer>

<style>
	.container {
		padding: 16px;
	}
</style>
