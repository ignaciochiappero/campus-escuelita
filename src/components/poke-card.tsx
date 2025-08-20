import { Pokemon } from "@/app/pokemon/pokemonesInterfaces";
import Image from "next/image";

const PokeCard = ({ id, name }: Pokemon) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="max-w-[720px] mx-auto">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                height={1000}
                width={1000}
                alt="card-image"
                className="object-cover w-full h-full bg-black"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans antialiased font-medium leading-relaxed text-blue-gray-900 text-2xl">
                  {name.toUpperCase()}
                </p>
                <p className="text-xl font-bold font-sans antialiased leading-relaxed text-blue-gray-900 border p-2 h-16 w-16 rounded-full flex items-center justify-center border-neutral-300">
                  # {id}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
