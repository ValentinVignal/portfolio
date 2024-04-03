<script lang="ts">
	import Resume from '$lib/assets/ValentinVignal.pdf';
</script>

<svelte:head>
	<title>Valentin Vignal - Resume</title>
</svelte:head>

<embed class="resume" src={Resume} />

<style>
	.resume {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
