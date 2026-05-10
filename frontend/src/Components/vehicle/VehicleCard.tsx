import { Link } from "react-router-dom";
import type { Vehicle } from "../../types/vehicle";
import { isUsed } from "../../types/vehicle";

interface Props {
  vehicle: Vehicle;
  dark?: boolean;
}

export default function VehicleCard({ vehicle, dark = false }: Props) {
  const used = isUsed(vehicle);
  const tag = used ? "Occasion" : "Neuf";
  const tagClass = used
    ? "bg-vroom-ink text-white"
    : "bg-vroom-accent text-white";

  const mainImg = vehicle.images[0];

  return (
    <article
      className={`flex flex-col ${dark ? "bg-[#0a0a0a] text-white border-[#0a0a0a]" : "bg-white text-vroom-ink border-vroom-line"} border transition-all duration-200`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-vroom-surface">
        {mainImg ? (
          <img
            src={mainImg}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-vroom-ink4 font-mono text-[11px] tracking-widest uppercase">
            Aucune photo
          </div>
        )}
        <span
          className={`absolute top-3.5 left-3.5 font-mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm ${tagClass}`}
        >
          {tag}
        </span>
        <button
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center border-0 cursor-pointer"
          aria-label="Enregistrer en favoris"
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0A0A0A"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div>
          <div
            className={`font-mono text-[10px] tracking-[0.18em] uppercase ${dark ? "text-[#888]" : "text-vroom-ink4"}`}
          >
            {vehicle.brand}
          </div>
          <h3 className="font-serif text-[22px] font-normal mt-1 tracking-[-0.005em]">
            {vehicle.model}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            vehicle.type,
            vehicle.energy,
            `${vehicle.horses} ch`,
            `${vehicle.nbPlace} pl.`,
            used ? `${Math.round(vehicle.mileage / 1000)} k km` : null,
          ]
            .filter(Boolean)
            .map((s) => (
              <span
                key={s}
                className={`text-[11px] px-2.5 py-0.5 rounded-full font-normal border ${dark ? "border-[#333] text-[#bbb]" : "border-vroom-line text-vroom-ink3"}`}
              >
                {s}
              </span>
            ))}
        </div>

        <div
          className={`flex justify-between items-end mt-auto pt-2 border-t ${dark ? "border-[#1a1a1a]" : "border-vroom-line2"}`}
        >
          <div>
            <div
              className={`font-mono text-[9px] tracking-[0.18em] uppercase ${dark ? "text-[#888]" : "text-vroom-ink4"}`}
            >
              À PARTIR DE
            </div>
            <div className="text-[22px] font-medium mt-0.5">
              {Number(vehicle.price).toLocaleString("fr-FR")} €
            </div>
          </div>
          <Link
            to={`/product/${vehicle.id}`}
            className="text-[13px] text-vroom-accent font-medium no-underline"
          >
            Découvrir →
          </Link>
        </div>
      </div>
    </article>
  );
}
