<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { generations } from './generations';
	import PokemonCard from './PokemonCard.svelte';

	export let data: PageData;

	$: pokemonId = $page.url.searchParams.get('pokemon-id') ?? '';

	$: selectedPokemon = data.pokemons.find((pokemon) => pokemon.id === pokemonId);
</script>

{#if selectedPokemon}
	<PokemonCard pokemon={selectedPokemon} />
{/if}

<div class="generations">
	{#each generations as generation}
		<div class="generation">
			{generation.mainRegion}
		</div>
	{/each}
</div>

<div class="pokemons">
	{#each data.pokemons as pokemon (pokemon.id)}
		<PokemonCard {pokemon} isInteractive={true} />
	{/each}
</div>

<style>
	.generations {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	.generation {
		margin: 10px;
		padding: 5px 10px;
		border: 1px solid black;
		background-color: #f9f9f9;
		color: #333;
	}

	.generation:hover {
		background-color: #eee;
	}

	.pokemons {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
	}
</style>
