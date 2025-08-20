import Logo from "@/components/logo";
import BotonLink from "@/components/boton-link";
import { Respueston } from "./consultaPokemones";
import { SimplePokemon } from "./pokemonesInterfaces";
import Link from "next/link";
import PokeCard from "@/components/poke-card";

export default async function PepePage() {
  const respuesta = Respueston;

  return (
    <div className="bg-lime-600 min-h-screen flex flex-col items-center justify-center">
      <Logo border={"border-red-600"} bg={"bg-white"} />
      <span className="text-6xl mb-10"> POKEMON PAGE </span>

      <div className="grid  lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 gap-10">
        {respuesta.results.map((poke: SimplePokemon, index) => (
          <Link href={`pokemon/${(index + 1).toString()}`} key={index}>
            <PokeCard id={index + 1} name={poke.name} />
          </Link>
        ))}
      </div>
      <BotonLink texto={"IR AL HOME 🏠"} direccion={"/"} />
    </div>
  );
}
