<script>
	import ActionDartAnalyze from './ActionDartAnalyze.svelte';
	import ChromeMarkdownEmojis from './ChromeMarkdownEmojis.svelte';
	import Hider from './Hider.svelte';
	import MidiGenerator from './MidiGenerator.svelte';
	import Ntm from './Ntm.svelte';
	import Periodik from './Periodik.svelte';
	import Portfolio from './Portfolio.svelte';
	import ThemedColorPalette from './ThemedColorPalette.svelte';
</script>

<div class="container">
	<Ntm />
	<Hider />
	<Periodik />
	<Portfolio />
	<ActionDartAnalyze />
	<ThemedColorPalette />
	<ChromeMarkdownEmojis />
	<MidiGenerator />
</div>

<svelte:head>
	<title>Valentin Vignal - Projects</title>
</svelte:head>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
