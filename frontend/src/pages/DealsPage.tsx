import { useEffect } from "react";
import { useVehicleStore, useUsed } from "../store/useVehicleStore";
import VehicleCard from "../Components/vehicle/VehicleCard";
import FilterBar from "../Components/layout/FilterBar";
import Footer from "../Components/layout/Footer";

export default function DealsPage() {
  const { fetchAll, isLoading, error, filter } = useVehicleStore();
  const usedVehicles = useUsed();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  // Bons plans = occasions triées par prix croissant
  const sorted = [...usedVehicles].sort(
    (a, b) => Number(a.price) - Number(b.price)
  );

  const filtered = sorted.filter((v) => {
    if (filter.type && v.type !== filter.type) return false;
    if (filter.energy && v.energy !== filter.energy) return false;
    if (filter.gearbox && v.gearbox !== filter.gearbox) return false;
    if (filter.minPlaces && v.nbPlace < filter.minPlaces) return false;
    if (filter.maxPrice && Number(v.price) > filter.maxPrice) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-vroom-bg font-sans text-vroom-ink">
      <div className="px-14 pt-14 pb-10 border-b border-vroom-line bg-white">
        <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-vroom-accent mb-3">
          Catalogue — Bons plans
        </div>
        <h1 className="font-serif text-[54px] font-normal m-0 leading-[1.05] tracking-[-0.01em]">
          Les meilleures affaires.
        </h1>
        <p className="text-vroom-ink3 text-[16px] font-light mt-4 max-w-[50ch]">
          Occasions sélectionnées et triées par rapport qualité-prix.
        </p>
      </div>

      <FilterBar count={filtered.length} />

      <section className="px-14 py-12">
        {isLoading && (
          <div className="flex items-center justify-center py-24 font-mono text-[12px] tracking-widest uppercase text-vroom-ink4">
            Chargement…
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center py-24 text-vroom-accent">
            {error}
          </div>
        )}
        {!isLoading && !error && filtered.length === 0 && (
          <p className="text-vroom-ink3 py-8">Aucun bon plan pour ces filtres.</p>
        )}
        {!isLoading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-3 gap-6">
            {filtered.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
