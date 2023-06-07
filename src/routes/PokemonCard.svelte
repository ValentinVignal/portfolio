<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Pokemon } from './+page';

	export let pokemon: Pokemon;
	export let isInteractive: boolean = false;

	const onPokemonClick = (pokemon: Pokemon) => {
		goto(`/?pokemon-id=${pokemon.id}`);
	};
</script>

<button class="pokemon" on:click={isInteractive ? () => onPokemonClick(pokemon) : null}>
	<div class="pokemon-content">
		<img src={pokemon.image} alt={pokemon.name} />
		{pokemon.name}
	</div>
	<div class="pokemon-id">{pokemon.id}</div>
</button>

<style>
	button {
		border: none;
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
