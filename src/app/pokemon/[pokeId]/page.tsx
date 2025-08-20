import BotonLink from "@/components/boton-link";
import { obternerPokemon } from "../consultaPokemones";
import PokeCard from "@/components/poke-card";

interface PokePropUrl {
  params: {
    pokeId: string;
  };
}

export default async function page({ params }: PokePropUrl) {
  const url = await params;

  const identificador = await url.pokeId;

  const poke = await obternerPokemon(identificador);

  const { id, name } = await obternerPokemon(identificador);

  console.log(poke);
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center">
      <BotonLink texto={"⬅️ VOLVER A LA LISTA"} direccion="/pokemon" />
      <PokeCard id={id} name={name} />
    </div>
  );
}
