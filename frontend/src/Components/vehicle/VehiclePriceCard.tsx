import type { Vehicle } from "../../types/vehicle";
import { isNew, isUsed } from "../../types/vehicle";

interface Props {
  vehicle: Vehicle;
  onVBot?: () => void;
}

export default function VehiclePriceCard({ vehicle, onVBot }: Props) {
  const monthly = Math.round(Number(vehicle.price) / 60); // Calcul pour 60 mois

  const pills = [
    vehicle.type,
    vehicle.energy,
    `${vehicle.horses} ch`,
    `${vehicle.nbPlace} places`,
    vehicle.gearbox,
    ...(isUsed(vehicle) ? [`${Math.round(vehicle.mileage / 1000)} k km`] : []), // Calcul du kilométrage en milliers de km pour les occasions
  ];

  return (
    <aside className="sticky top-24 self-start">
      <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-vroom-ink4">
        {vehicle.brand}
      </div>
      <h1 className="font-serif text-[52px] font-normal mt-2 mb-3 leading-[1.05] tracking-[-0.01em]">
        {vehicle.model}
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {pills.map((s) => (
          <span
            key={s}
            className="text-[12px] px-3 py-1 border border-vroom-line text-vroom-ink2 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="border-t border-b border-vroom-line py-5 mb-6">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-vroom-ink4">
          À PARTIR DE
        </div>
        <div className="font-serif text-[48px] font-normal mt-1">
          {Number(vehicle.price).toLocaleString("fr-FR")} €
        </div>
        <div className="text-[13px] text-vroom-ink3 mt-1">
          ou{" "}
          <b className="text-vroom-ink font-medium">
            {monthly.toLocaleString("fr-FR")} €/mois
          </b>{" "}
          sur 60 mois · 0% TAEG
        </div>
      </div>

      <button className="w-full bg-vroom-accent text-white border-0 py-4.5 text-[15px] font-medium tracking-wider cursor-pointer rounded mb-2.5 hover:bg-vroom-accent-hover transition-colors">
        Acheter ce véhicule
      </button>
      <button className="w-full bg-white text-vroom-ink border border-vroom-line py-4 text-[14px] font-light cursor-pointer rounded mb-6 flex items-center justify-center gap-2.5 hover:bg-vroom-surface transition-colors">
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        Enregistrer en favoris
      </button>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 bg-vroom-surface rounded">
          <div className="font-medium text-[13px]">Livraison 48h</div>
          <div className="text-[12px] text-vroom-ink3 mt-1">
            Partout en France
          </div>
        </div>
        <div className="p-3.5 bg-vroom-surface rounded">
          {isNew(vehicle) ? (
            <>
              <div className="font-medium text-[13px]">
                Garantie {vehicle.warranty} ans
              </div>
              <div className="text-[12px] text-vroom-ink3 mt-1">
                Pièces & main d'œuvre
              </div>
            </>
          ) : (
            <>
              <div className="font-medium text-[13px]">Contrôlé</div>
              <div className="text-[12px] text-vroom-ink3 mt-1">
                Véhicule certifié
              </div>
            </>
          )}
        </div>
      </div>

      {onVBot && (
        <button
          onClick={onVBot}
          className="w-full mt-4 border border-vroom-line py-3 text-[13px] text-vroom-ink3 rounded flex items-center justify-center gap-2 cursor-pointer bg-white hover:bg-vroom-surface transition-colors"
        >
          <span className="font-serif font-bold text-vroom-accent text-[14px]">
            V.BOT
          </span>
          Comparer ce modèle
        </button>
      )}
    </aside>
  );
}
