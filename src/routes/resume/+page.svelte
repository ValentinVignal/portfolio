<script lang="ts">
	import Resume from '$lib/assets/ValentinVignal.pdf';
	import { browser } from '$app/environment';

	const pdfViewerEnabled = browser && window.navigator.pdfViewerEnabled;
	const src = pdfViewerEnabled
		? Resume
		: `https://drive.google.com/viewerng/viewer?embedded=true&url=${Resume}`;
</script>

<svelte:head>
	<title>Valentin Vignal - Resume</title>
</svelte:head>

<embed class="resume" {src} />

<style>
	.resume {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
