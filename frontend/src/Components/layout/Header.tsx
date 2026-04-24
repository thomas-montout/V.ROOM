/**
 * Composant Header
 * * Barre de navigation principale de l'application V.ROOM.
 * * @returns {JSX.Element} L'en-tête de la page avec logo, navigation, recherche et profil.
 */
function Header() {
  return (
    // "sticky top-0 z-50" permet au menu de rester accroché en haut quand on défile
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between px-8 py-4 bg-white shadow-sm w-full">
      {/* 1. Logo */}
      <div className="flex items-center cursor-pointer">
        <span className="text-4xl font-serif font-extrabold tracking-[0.2em] text-black">
          V.
        </span>
        <span className="text-4xl font-serif font-extrabold tracking-[0.2em] text-[#c40000]">
          ROOM
        </span>
      </div>

      {/* 2. Navigation (Catégories) */}
      {/* "hidden md:flex" cache le menu sur téléphone et l'affiche sur tablette/PC */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          href="/"
          className="text-xl font-light hover:text-[#c40000] transition-colors"
        >
          Neufs
        </a>
        <a
          href="/occasions"
          className="text-xl font-light hover:text-[#c40000] transition-colors"
        >
          Occasions
        </a>
        <a
          href="/bons-plans"
          className="text-xl font-light hover:text-[#c40000] transition-colors"
        >
          Bons plans
        </a>
      </nav>

      {/* 3. Barre de recherche interactive */}
      <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 border border-transparent focus-within:border-gray-400 focus-within:bg-white transition-all">
        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-transparent outline-none ml-3 w-full text-gray-700 placeholder-gray-400 font-light"
        />
      </div>

      {/* 4. Boutons utilisateur (Icônes) */}
      <div className="flex items-center gap-6 text-xl text-gray-700">
        <button
          className="hover:text-[#c40000] transition-colors"
          title="Mon Compte"
        >
          <i className="fa-solid fa-user"></i>
        </button>
        <button
          className="hover:text-[#c40000] transition-colors"
          title="Mon Panier"
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <button
          className="hover:text-[#c40000] transition-colors"
          title="Mes Favoris"
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
