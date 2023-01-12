<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import '@picocss/pico';
	import { theme } from '../lib/store/Theme';
</script>

<main data-theme={$theme}>
	<TopBar />
	<slot />
	<Footer />
</main>
