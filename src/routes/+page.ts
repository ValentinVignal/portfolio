import type { PageLoad } from './$types';

type ApiPokemon = {
  name: string;
  url: string;
}

export type Pokemon = ApiPokemon & {
  id: string;
  image: string;
}



export const load = (async ({ fetch, url }) => {
  const generationId = url.searchParams.get('generation-id') ?? '1';
  let apiPokemons: ApiPokemon[];
  if (generationId === 'all') {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=99999')
    const json = await response.json()
    apiPokemons = json.results;
  } else {
    const generationResponse = await fetch(`https://pokeapi.co/api/v2/generation/${generationId}`);
    const generationJson = await generationResponse.json();
    apiPokemons = generationJson.pokemon_species
  }
  const pokemons: Pokemon[] = apiPokemons.map((pokemon: ApiPokemon) => {
    const splitUrl = pokemon.url.split('/');
    return {
      ...pokemon,
      id: splitUrl[splitUrl.length - 2],
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${splitUrl[splitUrl.length - 2]}.png`
    }
  });

  return { pokemons };
}) satisfies PageLoad
