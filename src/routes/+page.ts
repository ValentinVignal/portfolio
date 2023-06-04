import type { PageLoad } from './$types';

type ApiPokemon = {
  name: string;
  url: string;
}

export type Pokemon = ApiPokemon & {
  id: string;
  image: string;
}



export const load = (async ({ fetch }) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const json = await response.json()
  const pokemons: Pokemon[] = json.results.map((pokemon: ApiPokemon) => {
    const splitUrl = pokemon.url.split('/');
    return {
      ...pokemon,
      id: splitUrl[splitUrl.length - 2],
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${splitUrl[splitUrl.length - 2]}.png`
    }
  });

  return { pokemons };
}) satisfies PageLoad
