<script>
	import Hider from './Hider.svelte';
	import Ntm from './Ntm.svelte';
	import Periodik from './Periodik.svelte';
	import Portfolio from './Portfolio.svelte';
</script>

<div class="container">
	<Ntm />
	<Hider />
	<Periodik />
	<Portfolio />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
