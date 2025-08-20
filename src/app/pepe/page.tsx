import Logo from "@/components/logo";
import BotonLink from "@/components/boton-link";

export default function PepePage() {
  return (
    <div className="bg-lime-600 min-h-screen flex flex-col items-center justify-center">
      <Logo border={"border-blue-900"} bg={"bg-blue-900"} />
      <span className="text-6xl mb-10"> HOLA SOY LA PEPE PAGE </span>

      <BotonLink texto={"IR AL HOME 🏠"} direccion={"/"} />
    </div>
  );
}
