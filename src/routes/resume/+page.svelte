<script lang="ts">
	import Resume from '$lib/assets/ValentinVignal.pdf';
	import { browser } from '$app/environment';

	const pdfViewerEnabled = browser && window.navigator.pdfViewerEnabled;
</script>

<svelte:head>
	<title>Valentin Vignal - Resume</title>
</svelte:head>

{#if pdfViewerEnabled}
	<embed class="resume" src={Resume} />
{:else}
	<iframe
		src="https://drive.google.com/viewerng/viewer?embedded=true&url={Resume}"
		frameBorder="0"
		scrolling="auto"
		class="resume"
		title="ValentinVignal.pdf"
	></iframe>
{/if}

<style>
	.resume {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
