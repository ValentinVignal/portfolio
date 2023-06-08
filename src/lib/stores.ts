import { writable, type Writable } from "svelte/store";
import type { Pokemon } from "../routes/+page";

export const caughtPokemons: Writable<Pokemon[]> = writable([]);
