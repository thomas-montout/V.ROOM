import { Link } from "react-router-dom";

function Header() {
  // TODO: Implémenter un menu hamburger pour la navigation et la recherche sur mobile
  return (
    // "sticky top-0 z-50" permet au menu de rester accroché en haut quand on défile
    <header className="top-0 flex items-center justify-between px-6 py-2 bg-white shadow-md sticky z-50">
      <div className="flex items-center cursor-pointer">
        <span className="text-4xl font-serif font-extrabold tracking-[0.2em] text-black">
          V.
        </span>
        <span className="text-4xl font-serif font-extrabold tracking-[0.2em] text-[#c40000]">
          ROOM
        </span>
      </div>

      {/* Navigation principale - cachée sur mobile, visible à partir de md */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/neufs"
          className="text-lg font-light hover:text-[#c40000] transition-colors"
        >
          Neufs
        </Link>
        <Link
          to="/occasions"
          className="text-lg font-light hover:text-[#c40000] transition-colors"
        >
          Occasions
        </Link>
        <Link
          to="/bons-plans"
          className="text-lg font-light hover:text-[#c40000] transition-colors"
        >
          Bons plans
        </Link>
      </nav>

      {/* Barre de recherche - cachée sur mobile et tablette, visible à partir de lg */}
      <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-1 w-72 border border-transparent focus-within:border-gray-400 focus-within:bg-white transition-all">
        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-transparent outline-none ml-3 w-full text-gray-700 placeholder-gray-400 font-light"
        />
      </div>

      <div className="flex items-center gap-6 text-xl text-gray-700">
        <Link
          to="/mon-compte"
          className="hover:text-[#c40000] transition-colors"
          title="Mon Compte"
        >
          <i className="fa-solid fa-user"></i>
        </Link>
        <Link
          to="/mon-panier"
          className="hover:text-[#c40000] transition-colors"
          title="Mon Panier"
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link
          to="/mes-favoris"
          className="hover:text-[#c40000] transition-colors"
          title="Mes Favoris"
        >
          <i className="fa-solid fa-heart"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
