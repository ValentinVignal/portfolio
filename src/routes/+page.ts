import type { PageLoad } from './$types';

type Pokemon = {
  name: string;
  url: string;
  id: string;
  image: string;
}

export const load = (async ({ fetch }) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const json = await response.json()
  const pokemons: Pokemon[] = json.results.map((pokemon: Pokemon) => {
    const splitUrl = pokemon.url.split('/');
    return {
      ...pokemon,
      id: splitUrl[splitUrl.length - 2],
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${splitUrl[splitUrl.length - 2]}.png`
    }
  });

  return { pokemons };
}) satisfies PageLoad
