export type Generation = {
  id: number;
  name: string;
  games: string[];
  mainRegion: string;
  pokemonSpecies?: string[];
}


export const generations: Generation[] = [
  {
    id: 1,
    name: 'Generation I',
    games: ['Red', 'Blue', 'Yellow'],
    mainRegion: 'Kanto',
  },
  {
    id: 2,
    name: 'Generation II',
    games: ['Gold', 'Silver', 'Crystal'],
    mainRegion: 'Johto',
  },
  {
    id: 3,
    name: 'Generation III',
    games: ['Ruby', 'Sapphire', 'Emerald'],
    mainRegion: 'Hoenn',
  },
  {
    id: 4,
    name: 'Generation IV',
    games: ['Diamond', 'Pearl', 'Platinum'],
    mainRegion: 'Sinnoh',
  },
  {
    id: 5,
    name: 'Generation V',
    games: ['Black', 'White', 'Black 2', 'White 2'],
    mainRegion: 'Unova',
  },
  {
    id: 6,
    name: 'Generation VI',
    games: ['X', 'Y', 'Omega Ruby', 'Alpha Sapphire'],
    mainRegion: 'Kalos',
  },
  {
    id: 7,
    name: 'Generation VII',
    games: ['Sun', 'Moon', 'Ultra Sun', 'Ultra Moon'],
    mainRegion: 'Alola',
  },
  {
    id: 8,
    name: 'Generation VIII',
    games: ['Sword', 'Shield'],
    mainRegion: 'Galar',
  },
]
