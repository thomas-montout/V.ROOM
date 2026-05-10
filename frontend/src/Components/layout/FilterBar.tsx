import { useVehicleStore } from "../../store/useVehicleStore";

const TYPES = ["Tous", "SUV", "Berline", "Compacte", "Monospace"];
const ENERGIES = ["Toutes", "Électrique", "Hybride", "Essence", "Diesel"];
const GEARBOXES = ["Toutes", "Auto", "Manuelle"];
const PLACES = ["Toutes", "2+", "5+", "7+"];

export default function FilterBar({ count }: { count?: number }) {
  const { filter, setFilter, vehicles } = useVehicleStore();
  const total = count ?? vehicles.length;

  return (
    <div className="flex items-center gap-0 px-14 py-5 border-t border-b border-vroom-line bg-white">
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-vroom-ink4 mr-7 shrink-0">
        Filtres
      </span>

      <div className="flex gap-3 flex-1">
        <FilterSelect
          label="Type"
          value={filter.type || "Tous"}
          options={TYPES}
          onChange={(v) => setFilter({ type: v === "Tous" ? undefined : v })}
        />
        <FilterSelect
          label="Énergie"
          value={filter.energy || "Toutes"}
          options={ENERGIES}
          onChange={(v) => setFilter({ energy: v === "Toutes" ? undefined : v })}
        />
        <FilterSelect
          label="Boîte"
          value={filter.gearbox || "Toutes"}
          options={GEARBOXES}
          onChange={(v) => setFilter({ gearbox: v === "Toutes" ? undefined : v })}
        />
        <FilterSelect
          label="Places"
          value={filter.minPlaces ? `${filter.minPlaces}+` : "Toutes"}
          options={PLACES}
          onChange={(v) =>
            setFilter({ minPlaces: v === "Toutes" ? undefined : parseInt(v) })
          }
        />
      </div>

      <span className="text-[13px] text-vroom-ink3 shrink-0">
        <b className="text-vroom-ink font-medium">{total}</b> véhicules
      </span>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-vroom-ink4">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-transparent border border-vroom-line rounded px-4 py-2 text-[14px] text-vroom-ink cursor-pointer font-sans pr-7"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
