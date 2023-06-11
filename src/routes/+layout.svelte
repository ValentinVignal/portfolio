<script lang="ts">
	import Drawer from '$lib/components/Drawer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<Drawer>
	<NavBar />
	<slot />
</Drawer>
