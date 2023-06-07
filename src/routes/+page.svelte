<script lang="ts">
	import { goto } from '$app/navigation';
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

	$: generationId = $page.url.searchParams.get('generation-id') ?? '';

	const submitSearch = (event: Event) => {
		search = form.search;
	};

	const updateSearchParams = (key: string, value: string) => {
		const searchParams = new URLSearchParams($page.url.searchParams);
		searchParams.set(key, value);
		goto(`?${searchParams.toString()}`);
	};
</script>

{#if selectedPokemon}
	<PokemonCard pokemon={selectedPokemon} />
{/if}

<div class="generations">
	<button
		class="generation"
		class:active={generationId === 'all'}
		on:click={() => {
			updateSearchParams('generation-id', 'all');
		}}
	>
		All
	</button>
	{#each generations as generation (generation.id)}
		<button
			class="generation"
			class:active={generation.id.toString() === generationId}
			on:click={() => {
				updateSearchParams('generation-id', generation.id.toString());
			}}
		>
			{generation.mainRegion}
		</button>
	{/each}
</div>

<form class="search-form" on:submit|preventDefault={submitSearch}>
	<input type="text" bind:value={form.search} placeholder="Pokemon Name" />
	<input type="submit" value="Search" />
</form>

<div class="pokemons">
	{#each selectedPokemons as pokemon (pokemon.id)}
		<PokemonCard {pokemon} {updateSearchParams} />
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
		cursor: pointer;
	}

	.generation:hover {
		background-color: #eee;
	}

	.generation.active {
		background-color: #333;
		color: #fff;
	}

	.generation.active:hover {
		background-color: #444;
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
