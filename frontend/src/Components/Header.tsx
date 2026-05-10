import { Link } from "react-router-dom";

function Header() {
  // TODO: Implémenter un menu hamburger pour la navigation et la recherche sur mobile
  return (
    // "sticky top-0 z-50" permet au menu de rester accroché en haut quand on défile
    <header className="top-0 flex items-center justify-between px-14 py-5 bg-white border-b border-vroom-line sticky z-50">
      <Link to="/" className="flex items-center cursor-pointer no-underline">
        <span className="font-serif font-bold text-[22px] tracking-[0.13em] text-vroom-ink">
          V.
        </span>
        <span className="font-serif font-bold text-[22px] tracking-[0.13em] text-vroom-accent">
          ROOM
        </span>
      </Link>

      {/* Navigation principale - cachée sur mobile, visible à partir de md */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/neufs"
          className="text-[16px] font-light text-vroom-ink hover:text-vroom-accent transition-colors no-underline"
        >
          Neufs
        </Link>
        <Link
          to="/occasions"
          className="text-[16px] font-light text-vroom-ink hover:text-vroom-accent transition-colors no-underline"
        >
          Occasions
        </Link>
        <Link
          to="/bons-plans"
          className="text-[16px] font-light text-vroom-ink hover:text-vroom-accent transition-colors no-underline"
        >
          Bons plans
        </Link>
      </nav>

      {/* Barre de recherche - cachée sur mobile et tablette, visible à partir de lg */}
      <div className="hidden lg:flex items-center bg-white border border-vroom-line rounded px-4 py-2 w-72 focus-within:border-vroom-ink3 transition-colors">
        <i className="fa-solid fa-magnifying-glass text-vroom-ink4 text-[12px]"></i>
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-transparent outline-none ml-3 w-full text-[14px] text-vroom-ink placeholder-vroom-ink4 font-light"
        />
      </div>

      <div className="flex items-center gap-6 text-[16px] text-vroom-ink3">
        <Link
          to="/mon-compte"
          className="hover:text-vroom-accent transition-colors"
          title="Mon Compte"
        >
          <i className="fa-solid fa-user"></i>
        </Link>
        <Link
          to="/mon-panier"
          className="hover:text-vroom-accent transition-colors"
          title="Mon Panier"
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link
          to="/mes-favoris"
          className="hover:text-vroom-accent transition-colors"
          title="Mes Favoris"
        >
          <i className="fa-solid fa-heart"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
