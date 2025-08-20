import Link from "next/link";

interface Boton {
  texto: string;
  direccion: string;
}

const BotonLink = ({ texto, direccion }: Boton) => {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={direccion}
        className=" bg-blue-600 hover:bg-blue-500 transition-all border-4 p-4 m-4 rounded-2xl hover:font-bold"
      >
        {texto}
      </Link>
    </div>
  );
};

export default BotonLink;
