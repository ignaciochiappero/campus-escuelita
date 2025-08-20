import { Pokemon, Respuesta } from "./pokemonesInterfaces";

export const Respueston: Respuesta = await fetch(
  "https://pokeapi.co/api/v2/pokemon/"
).then((res) => res.json());

export async function obternerPokemon(numeritoId: string) {
  const pokemon: Pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${numeritoId}`
  ).then((res) => res.json());

  return pokemon;
}
