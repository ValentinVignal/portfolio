<script lang="ts">
	import { caughtPokemons } from '$lib/stores';
	import PokemonCard from '../PokemonCard.svelte';
</script>

<h2>My pokemons</h2>

<div class="pokemons">
	{#each $caughtPokemons as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>

<style>
	.pokemons {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
	}
</style>
