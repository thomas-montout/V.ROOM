import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/neufs", label: "Neufs" },
    { to: "/occasions", label: "Occasions" },
    { to: "/bons-plans", label: "Bons plans" },
  ];

  return (
    // "sticky top-0 z-50" permet au menu de rester accroché en haut quand on défile
    <header className="top-0 sticky z-50 bg-white border-b border-vroom-line">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-14 py-3">
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
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-[16px] font-light text-vroom-ink hover:text-vroom-accent transition-colors no-underline"
            >
              {label}
            </Link>
          ))}
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

        <div className="flex items-center gap-5 sm:gap-6 text-[16px] text-vroom-ink3">
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

          {/* Bouton hamburger - visible uniquement sous md */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden hover:text-vroom-accent transition-colors"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden border-t border-vroom-line px-5 sm:px-8 py-4 flex flex-col gap-1 bg-white">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-light text-vroom-ink hover:text-vroom-accent transition-colors no-underline py-2"
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center bg-white border border-vroom-line rounded px-4 py-2 mt-2 focus-within:border-vroom-ink3 transition-colors">
            <i className="fa-solid fa-magnifying-glass text-vroom-ink4 text-[12px]"></i>
            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-transparent outline-none ml-3 w-full text-[14px] text-vroom-ink placeholder-vroom-ink4 font-light"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
