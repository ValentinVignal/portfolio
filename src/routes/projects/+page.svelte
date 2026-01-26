<script>
	import ActionDartAnalyze from './ActionDartAnalyze.svelte';
	import AnimatedCollection from './AnimatedCollection.svelte';
	import ChromeMarkdownEmojis from './ChromeMarkdownEmojis.svelte';
	import MidiGenerator from './MidiGenerator.svelte';
	import NotificationBlocker from './NotificationBlocker.svelte';
	import Ntm from './Ntm.svelte';
	import Padelistas from './Padelistas.svelte';
	import Periodik from './Periodik.svelte';
	import Portfolio from './Portfolio.svelte';
	import Pyronear from './Pyronear.svelte';
	import ThemedColorPalette from './ThemedColorPalette.svelte';
</script>

<div class="container">
	<Ntm />
	<Padelistas />
	<Periodik />
	<Portfolio />
	<ActionDartAnalyze />
	<AnimatedCollection />
	<Pyronear />
	<NotificationBlocker />
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
