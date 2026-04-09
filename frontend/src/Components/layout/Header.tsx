function Header() {
  return (
    <header className="header flex flex-row items-center justify-between gap-6 p-4">
      <div className="logo flex items-center font-bold tracking-[0.3em]">V.ROOM</div>
      <nav className="nav flex items-center">
        <ul className="flex flex-row items-center gap-4">
          <li>
            <a href="/">Neufs</a>
          </li>
          <li>
            <a href="/about">Occasions</a>
          </li>
          <li>
            <a href="/contact">Bons plans</a>
          </li>
        </ul>
      </nav>
      <div className="search flex flex-row items-center gap-2 rounded-xl bg-[#D2D2D2] p-2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Rechercher" />
      </div>
      <div className="user-btn flex flex-row items-center gap-4 p-2">
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-heart"></i>
      </div>
    </header>
  );
}

export default Header;