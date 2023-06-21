<script>
	import Drift from './Drift.svelte';
	import Ferry from './Ferry.svelte';
	import Flutter from './Flutter.svelte';
	import FlutterPackages from './FlutterPackages.svelte';
	import GoRouter from './GoRouter.svelte';
	import NestJsQuery from './NestJSQuery.svelte';
	import Riverpod from './Riverpod.svelte';
</script>

<div class="container">
	<Flutter />
	<FlutterPackages />
	<GoRouter />
	<Riverpod />
	<Ferry />
	<Drift />
	<NestJsQuery />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
