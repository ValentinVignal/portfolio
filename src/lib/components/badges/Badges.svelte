<script lang="ts">
	import StackOverflow from './StackOverflow.svelte';
</script>

<div class="row py-4">
	<div>
		<StackOverflow />
	</div>

	<a href="https://github.com/ValentinVignal">
		<img alt="GitHub followers" src="https://img.shields.io/github/followers/ValentinVignal" />
	</a>

	<a href="https://wakatime.com/@a700230c-ba51-4378-8fbc-fbcb542401ed">
		<img
			src="https://wakatime.com/badge/user/a700230c-ba51-4378-8fbc-fbcb542401ed.svg"
			alt="Wakatime"
		/>
	</a>

	<a href="https://x.com/vignalvalentin1">
		<img
			alt="X (formerly Twitter) Follow"
			src="https://img.shields.io/twitter/follow/vignalvalentin1"
		/>
	</a>
</div>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
	}
	.row > * {
		padding: 4px 8px;
	}
</style>
