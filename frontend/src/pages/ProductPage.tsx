import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useVehicleStore from "../store/useVehicleStore";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { vehicles, isLoading, error, fetchVehicles } = useVehicleStore();

  useEffect(() => {
    if (vehicles.length === 0) {
      fetchVehicles();
    }
  }, [vehicles.length, fetchVehicles]);

  const car = vehicles.find((v) => v.id === Number(id));

  if (isLoading) {
    return <p className="p-8 text-gray-600">Chargement…</p>;
  }
  if (error) {
    return <p className="p-8 text-red-600">{error}</p>;
  }
  if (!car) {
    return <p className="p-8 text-gray-600">Véhicule introuvable.</p>;
  }

  const label = `${car.brand} ${car.model}`;
  const cover = car.images?.[0] ? `/cars/${car.images[0]}` : "";

  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <section className="w-full flex flex-row items-center gap-40 py-8 px-4">
        <div className="w-200 h-150 relative">
          <img
            src={cover}
            alt={label}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        </div>
        <div className="flex flex-col justify-between gap-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {label}
          </h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="font-normal mr-6">Prix :</span> {car.price} €
          </h2>

          <button className="bg-[#c40000] text-white w-25 py-1 rounded-sm text-lg font-medium hover:bg-[#a30000] transition-colors">
            Acheter
          </button>
          <div className="flex flex-row gap-4 text-xl items-center">
            <button className="hover:text-[#a30000] transition-colors">
              <i className="fa-solid fa-heart"></i>
            </button>
            <p className="font-extralight">Enregistrer en favoris</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center my-20">
          <h1 className="text-xl md:text-4xl font-bold mb-16">
            Caractéristiques techniques
          </h1>
          <div className="grid grid-cols-3 gap-16 text-2xl">
            <div className="flex flex-col gap-3">
              <span className="font-extralight">Type :</span>
              <p className="font-bold">{car.type}</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-extralight">Énergie :</span>
              <p className="font-bold">{car.energy}</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-extralight">Puissance :</span>
              <p className="font-bold">{car.horses}ch</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-extralight">Places :</span>
              <p className="font-bold">{car.nbPlace}</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-extralight">Portes :</span>
              <p className="font-bold">{car.nbDoors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-extralight">Boîte de vitesses :</span>
              <p className="font-bold">{car.gearbox}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default ProductPage;
