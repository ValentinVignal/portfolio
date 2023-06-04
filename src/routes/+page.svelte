<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import type { Pokemon } from './+page';
	import { generations } from './generations';

	export let data: PageData;

	const pokemonId = $page.url.searchParams.get('pokemon-id') ?? '';

	$: selectedPokemon = data.pokemons.find((pokemon) => pokemon.id === pokemonId);
	const onPokemonClick = (pokemon: Pokemon) => {
		goto(`/?pokemon-id=${pokemon.id}`);
	};
</script>

{$page.url.searchParams.get('pokemon-id')}

<div class="generations">
	{#each generations as generation}
		<div class="generation">
			{generation.mainRegion}
		</div>
	{/each}
</div>

<div class="pokemons">
	{#each data.pokemons as pokemon (pokemon.id)}
		<button class="pokemon" on:click={() => onPokemonClick(pokemon)}>
			<div class="pokemon-content">
				<img src={pokemon.image} alt={pokemon.name} />
				{pokemon.name}
			</div>
			<div class="pokemon-id">{pokemon.id}</div>
		</button>
	{/each}
</div>

<style>
	button {
		border: none;
	}

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
	.pokemon {
		width: 100px;
		margin: 10px;
		padding: 10px;
		position: relative;
		background-color: #eee;
	}

	.pokemon:hover {
		background-color: #ddd;
	}

	.pokemon-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.pokemon-id {
		position: absolute;
		top: 8px;
		left: 8px;
		font-size: 0.8em;
		color: #aaa;
	}
</style>
