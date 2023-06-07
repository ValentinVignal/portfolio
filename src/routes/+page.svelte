<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { generations } from './generations';
	import PokemonCard from './PokemonCard.svelte';

	export let data: PageData;
	let form = {
		search: ''
	};
	let search = '';
	$: selectedPokemons = data.pokemons.filter((pokemon) => {
		return pokemon.name.toLowerCase().includes(search.toLowerCase());
	});

	$: pokemonId = $page.url.searchParams.get('pokemon-id') ?? '';
	$: selectedPokemon = data.pokemons.find((pokemon) => pokemon.id === pokemonId);

	const submitSearch = (event: Event) => {
		search = form.search;
	};
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

<form class="search-form" on:submit={submitSearch}>
	<input type="text" bind:value={form.search} placeholder="Pokemon Name" />
	<input type="submit" value="Search" />
</form>

<div class="pokemons">
	{#each selectedPokemons as pokemon (pokemon.id)}
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

	.search-form {
		display: flex;
		justify-content: center;
		margin: 20px 0;
	}

	.search-form input[type='text'] {
		padding: 5px 10px;
		border-radius: 5px;
		border: 1px solid #333;
		width: 200px;
	}

	.search-form input[type='submit'] {
		padding: 5px 10px;
		border: 1px solid #333;
		border-radius: 5px;
		margin-left: 10px;
		background-color: #333;
		color: #fff;
	}
</style>
