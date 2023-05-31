<script lang="ts">
	import type { PageData } from './$types';
	import { generations } from './generations';

	export let data: PageData;
</script>

<div class="generations">
	{#each generations as generation}
		<div class="generation">
			{generation.mainRegion}
		</div>
	{/each}
</div>

<div class="pokemons">
	{#each data.pokemons as pokemon (pokemon.id)}
		<div class="pokemon">
			<div class="pokemon-content">
				<img src={pokemon.image} alt={pokemon.name} />
				{pokemon.name}
			</div>
			<div class="pokemon-id">{pokemon.id}</div>
		</div>
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
