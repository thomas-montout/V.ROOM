import HomeCards from "../Components/HomeCards";
import models from "../data/cars";

function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/herovideo2.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      </section>

      <section className="flex flex-col items-center justify-center py-16 px-4 text-center z-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Bienvenue chez V.Room
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
          Découvrez une nouvelle expérience d'achat de sneakers, où style et
          durabilité se rencontrent.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {" "}
          <a
            href="/neufs"
            className="inline-block bg-[#c40000] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#a30000] transition-colors"
          >
            Explorer les Neufs
          </a>
          <a
            href="/occasions"
            className="inline-block bg-[#c40000] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#a30000] transition-colors mt-4 sm:mt-0 sm:ml-4" // Ajustement de l'espacement pour mobile
          >
            Explorer les Occasions
          </a>
          <a
            href="/bons-plans"
            className="inline-block bg-[#c40000] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#a30000] transition-colors mt-4 sm:mt-0 sm:ml-4" // Ajustement de l'espacement pour mobile
          >
            Explorer les Bons Plans
          </a>
        </div>
      </section>
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Nos Meilleures Offres
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HomeCards car={models[0]} />
          <HomeCards car={models[1]} />
          <HomeCards car={models[2]} />
          <HomeCards car={models[3]} />
          <HomeCards car={models[4]} />
          <HomeCards car={models[5]} />
        </div>
      </section>
    </main>
  );
}
export default HomePage;
