<script lang="ts">
	import { page } from '$app/stores';

	$: isLocalHost = $page.url.hostname === 'localhost';

	$: {
		if (!isLocalHost && typeof gtag !== 'undefined') {
			// cspell: disable-next-line
			gtag('config', 'G-1SBGVLP63X', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	{#if !isLocalHost}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-1SBGVLP63X">
		</script>
		<script>
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());
			// cspell: disable-next-line
			gtag('config', 'G-1SBGVLP63X');
		</script>
	{/if}
</svelte:head>
