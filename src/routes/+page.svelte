<script lang="ts">
	import { generations } from './generations';
</script>

{#each generations as generation}
	<h1>{generation.name}</h1>
	<p>Games {generation.games.join(', ')}</p>
	<p>Region: {generation.mainRegion}</p>
{/each}
