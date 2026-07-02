import { Link } from "react-router-dom";

const COLS = [
  {
    title: "Catalogue",
    links: [
      { label: "Neufs", to: "/neufs" },
      { label: "Occasions", to: "/occasions" },
      { label: "Bons plans", to: "/bons-plans" },
    ],
  },
  {
    title: "Services",
    links: [{ label: "V.BOT", to: "/" }],
  },
  {
    title: "V.ROOM",
    links: [
      { label: "À propos", to: "/" },
      { label: "Contact", to: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#888888] px-5 sm:px-8 lg:px-14 py-14 mt-6">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            className="font-serif font-bold text-[22px] tracking-[0.13em] text-white no-underline"
          >
            V.<span className="text-vroom-accent">ROOM</span>
          </Link>
          <p className="text-[13px] mt-4 leading-relaxed max-w-xs">
            La nouvelle façon de choisir, comparer et acheter votre prochaine
            voiture.
          </p>
        </div>

        {COLS.map(({ title, links }) => (
          <div key={title}>
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-white mb-4">
              {title}
            </div>
            {links.map(({ label, to }) => (
              <div key={label} className="text-[13px] py-1">
                <Link
                  to={to}
                  className="text-[#888888] no-underline hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-[#1a1a1a] mt-12 pt-6 flex flex-col gap-2 sm:flex-row sm:justify-between font-mono text-[10px] tracking-[0.15em] uppercase">
        <span>© 2026 V.ROOM</span>
        <span>CGU · Confidentialité · Mentions légales</span>
      </div>
    </footer>
  );
}
