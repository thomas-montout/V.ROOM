const DEMO_MSGS = [
  {
    role: "bot",
    text: "Bonjour, je suis V.BOT. Quelques questions et je vous propose 3 modèles. Quel est l'usage principal ?",
  },
  {
    role: "user",
    text: "Famille de 5, beaucoup de route, budget 35 k€, hybride si possible.",
  },
  {
    role: "bot",
    text: "Voici 3 modèles qui correspondent à votre profil :",
    suggestions: [
      { brand: "Peugeot", model: "3008 GT", energy: "Hybride", price: 34900 },
      { brand: "Renault", model: "Megane E-Tech", energy: "Électrique", price: 33500 },
      { brand: "Toyota", model: "RAV4 Hybrid", energy: "Hybride", price: 35200 },
    ],
  },
];

export default function VBotPromo() {
  return (
    <section className="bg-[#0a0a0a] text-white px-14 py-20 my-6">
      <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-center">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-vroom-accent mb-4">
            ◆ Assistant IA
          </div>
          <h2 className="font-serif text-[56px] font-normal leading-[1.05] tracking-[-0.01em] m-0">
            V.BOT trouve la voiture
            <br />
            que vous n'aviez pas{" "}
            <em className="not-italic text-vroom-accent">envisagée.</em>
          </h2>
          <p className="text-[16px] font-light text-[#bbbbbb] mt-6 max-w-[44ch] leading-relaxed">
            Décrivez votre quotidien — pas votre voiture idéale. V.BOT croise
            budget, usage et préférences avec notre catalogue, et vous propose
            3 modèles en moins de 30 secondes.
          </p>
          <button className="inline-flex items-center gap-2.5 mt-8 bg-vroom-accent text-white px-8 py-4 text-[14px] font-medium tracking-[0.05em] rounded border-0 cursor-pointer hover:bg-vroom-accent-hover transition-colors">
            Démarrer une conversation
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        <div className="bg-[#141414] border border-[#1f1f1f] rounded-lg p-6 flex flex-col gap-3">
          {DEMO_MSGS.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] px-4 py-3 rounded-[14px] text-[14px] leading-relaxed ${
                m.role === "user"
                  ? "self-end bg-white text-vroom-ink rounded-tr-[4px]"
                  : "self-start bg-vroom-accent text-white rounded-tl-[4px]"
              }`}
            >
              {m.text}
              {m.suggestions && (
                <div className="mt-2.5 flex flex-col gap-1.5">
                  {m.suggestions.map((s) => (
                    <div
                      key={s.model}
                      className="bg-black/25 px-2 py-2 rounded flex gap-2.5 items-center text-[12px]"
                    >
                      <div className="flex-1">
                        <div className="font-medium">
                          {s.brand} {s.model}
                        </div>
                        <div className="opacity-80">
                          {s.energy} · {s.price.toLocaleString("fr-FR")} €
                        </div>
                      </div>
                      <span>→</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
