import BotonLink from "@/components/boton-link";
import Logo from "@/components/logo";
export default function PepePagina() {
  return (
    <div className=" bg-neutral-500 min-h-screen flex flex-col justify-center items-center">
      <Logo border={"border-yellow-900"} bg={"bg-yellow-900"} />

      <h1 className="text-8xl mt-10 mb-10"> HOME PAGE </h1>

      <BotonLink texto={"LINK A PAGINA PEPE 🐸"} direccion={"/pepe"} />
      <BotonLink
        texto={"LINK A PAGINA DE POKEMONES 🐱"}
        direccion={"/pokemon"}
      />
    </div>
  );
}
