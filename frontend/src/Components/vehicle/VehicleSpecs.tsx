import type { Vehicle } from "../../types/vehicle";
import { isUsed, isNew } from "../../types/vehicle";

export default function VehicleSpecs({ vehicle }: { vehicle: Vehicle }) {
  const specs: [string, string][] = [
    ["Marque", vehicle.brand],
    ["Modèle", vehicle.model],
    ["Type", vehicle.type],
    ["Énergie", vehicle.energy],
    ["Puissance", `${vehicle.horses} ch`],
    ["Places", `${vehicle.nbPlace}`],
    ["Portes", `${vehicle.nbDoors}`],
    ["Boîte de vitesses", vehicle.gearbox],
    ...(isNew(vehicle) ? ([["Garantie", `${vehicle.warranty} ans`]] as [string, string][]) : []),
    ["Prix", `${Number(vehicle.price).toLocaleString("fr-FR")} €`],
  ];

  return (
    <section className="bg-white px-14 py-18 border-t border-b border-vroom-line">
      <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-vroom-accent mb-3">
        Spécifications
      </div>
      <h2 className="font-serif text-[38px] font-normal mb-10 tracking-[-0.005em]">
        Caractéristiques techniques.
      </h2>

      <div className="grid grid-cols-2 gap-x-16">
        {specs.map(([k, v]) => (
          <div
            key={k}
            className="flex justify-between py-5 border-b border-vroom-line2"
          >
            <span className="text-vroom-ink3 font-light">{k}</span>
            <span className="font-medium">{v}</span>
          </div>
        ))}
      </div>

      {isUsed(vehicle) && (
        <div className="mt-14 p-6 bg-vroom-surface border-l-[3px] border-vroom-accent">
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-vroom-accent mb-3">
            ◆ Véhicule d'occasion
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-vroom-ink4">
                Kilométrage
              </div>
              <div className="font-serif text-[28px] font-normal mt-1">
                {vehicle.mileage.toLocaleString("fr-FR")} km
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-vroom-ink4">
                État général
              </div>
              <div className="font-serif text-[28px] font-normal mt-1">
                {vehicle.generalState}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-vroom-ink4">
                Propriétaires
              </div>
              <div className="font-serif text-[28px] font-normal mt-1">
                {vehicle.nbPreviousOwner === 1
                  ? "1 propriétaire"
                  : `${vehicle.nbPreviousOwner} propriétaires`}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
