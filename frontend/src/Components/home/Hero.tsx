import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-110 md:h-155 overflow-hidden bg-[#0a0a0a]">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/herovideo2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(10,10,10,0.2)] to-[rgba(10,10,10,0.7)]" />

      <div className="relative z-10 px-5 sm:px-8 lg:px-14 pt-20 md:pt-30 pb-14 mt-28 sm:mt-40 md:mt-55 text-white max-w-225">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-vroom-accent mb-6">
          ◆ V.ROOM ◆
        </div>
        <p className="text-[18px] font-light mt-7 max-w-[60ch] text-[#d4d4d4] leading-relaxed">
          Trouvez, comparez et achetez votre prochaine voiture. Notre assistant
          V.BOT vous guide parmi des modèles neufs et d'occasion, en quelques
          questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 mt-9">
          <Link
            to="/"
            className="bg-vroom-accent text-white px-8 py-4 text-[14px] font-medium tracking-wider no-underline inline-flex items-center gap-2.5 rounded hover:bg-vroom-accent-hover transition-colors"
          >
            Parler à V.BOT
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link
            to="/neufs"
            className="bg-transparent text-white px-8 py-4 text-[14px] font-light tracking-wider no-underline border border-white/40 rounded hover:bg-white/10 transition-colors"
          >
            Voir le catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
