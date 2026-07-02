import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useVehicleStore, useNew, useUsed } from "../store/useVehicleStore";
import VehicleCard from "../Components/vehicle/VehicleCard";
import Hero from "../Components/home/Hero";
import VBotPromo from "../Components/home/VBotPromo";
import FilterBar from "../Components/layout/FilterBar";
import Footer from "../Components/layout/Footer";
import VBotFAB from "../Components/vbot/VBotFAB";
import VBotChat from "../Components/vbot/VBotChat";
import { useVBot } from "../Components/vbot/useVBot";

export default function HomePage() {
  const { fetchAll, isLoading, error, filter } = useVehicleStore();
  const newVehicles = useNew();
  const usedVehicles = useUsed();
  const [botOpen, setBotOpen] = useState(false);
  const { messages, send, isLoading: botLoading } = useVBot();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const filterVehicles = <
    T extends {
      type?: string;
      energy?: string;
      gearbox?: string;
      nbPlace: number;
      price: number;
    },
  >(
    list: T[],
  ) =>
    list.filter((v) => {
      if (filter.type && v.type !== filter.type) return false;
      if (filter.energy && v.energy !== filter.energy) return false;
      if (filter.gearbox && v.gearbox !== filter.gearbox) return false;
      if (filter.minPlaces && v.nbPlace < filter.minPlaces) return false;
      if (filter.maxPrice && Number(v.price) > filter.maxPrice) return false;
      return true;
    });

  const filteredNew = filterVehicles(newVehicles);
  const filteredUsed = filterVehicles(usedVehicles);
  const total = filteredNew.length + filteredUsed.length;

  return (
    <div className="min-h-screen bg-vroom-bg font-sans text-vroom-ink">
      <Hero />
      <FilterBar count={total} />

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

      {!isLoading && !error && (
        <>
          {/* Section Neufs */}
          <section className="px-5 sm:px-8 lg:px-14 pt-18 pb-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-9">
              <div>
                <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-vroom-accent mb-3">
                  01 — Nouveautés
                </div>
                <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-normal m-0 tracking-[-0.005em]">
                  Les neufs du moment.
                </h2>
              </div>
              <Link
                to="/neufs"
                className="text-[14px] text-vroom-ink no-underline border-b border-b-vroom-accent pb-1"
              >
                Tous les neufs ({newVehicles.length}) →
              </Link>
            </div>
            {filteredNew.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNew.slice(0, 3).map((v) => (
                  <VehicleCard key={v.id} vehicle={v} />
                ))}
              </div>
            ) : (
              <p className="text-vroom-ink3 py-8">
                Aucun véhicule neuf pour ces filtres.
              </p>
            )}
          </section>

          <VBotPromo onOpen={() => setBotOpen(true)} />

          {/* Section Occasions */}
          <section className="px-5 sm:px-8 lg:px-14 py-18">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-9">
              <div>
                <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-vroom-accent mb-3">
                  02 — Sélection
                </div>
                <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-normal m-0 tracking-[-0.005em]">
                  Occasions & bons plans.
                </h2>
              </div>
              <Link
                to="/occasions"
                className="text-[14px] text-vroom-ink no-underline border-b border-b-vroom-accent pb-1"
              >
                Tout voir ({usedVehicles.length}) →
              </Link>
            </div>
            {filteredUsed.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsed.slice(0, 3).map((v) => (
                  <VehicleCard key={v.id} vehicle={v} />
                ))}
              </div>
            ) : (
              <p className="text-vroom-ink3 py-8">
                Aucune occasion pour ces filtres.
              </p>
            )}
          </section>
        </>
      )}

      <Footer />

      {botOpen ? (
        <VBotChat
          messages={messages}
          onClose={() => setBotOpen(false)}
          onSend={send}
          isLoading={botLoading}
        />
      ) : (
        <VBotFAB onClick={() => setBotOpen(true)} />
      )}
    </div>
  );
}
