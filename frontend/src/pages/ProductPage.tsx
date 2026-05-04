import { useParams } from "react-router-dom"; // Importe useParams pour récupérer les paramètres de l'URL
import models from "../data/cars"; // Importe les données des voitures
// import HomeCards from "../Components/HomeCards"; // Importation inutilisée, à supprimer

function ProductPage() {
  // Récupère l'ID de la voiture depuis les paramètres de l'URL
  const { id } = useParams<{ id: string }>();
  // Convertit l'ID en nombre et recherche la voiture correspondante
  const car = models.find((car) => car.id === Number(id));

  // Gère le cas où la voiture n'est pas trouvée
  if (!car) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Voiture non trouvée
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Désolé, le modèle de voiture que vous recherchez n'existe pas.
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-40 py-8 px-4">
        {/* Ajustement de la taille de l'image pour la réactivité */}
        <div className="w-full max-w-md h-64 sm:h-80 lg:w-[500px] lg:h-[375px] relative">
          <img
            src={car.image}
            alt={car.name}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 lg:gap-10 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {car.name}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="font-normal mr-6">Prix :</span> {car.price} €
          </h2>

          {/* Ajustement de la largeur du bouton pour la réactivité */}
          <button className="bg-[#c40000] text-white w-full sm:w-auto px-6 py-2 rounded-sm text-lg font-medium hover:bg-[#a30000] transition-colors">
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
          {/* Ajustement de la grille pour la réactivité */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 text-lg sm:text-xl md:text-2xl">
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
