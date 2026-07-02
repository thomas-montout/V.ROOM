import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useVehicleStore } from "../store/useVehicleStore";
import { api } from "../services/api";
import type { Vehicle } from "../types/vehicle";
import VehicleGallery from "../Components/vehicle/VehicleGallery";
import VehiclePriceCard from "../Components/vehicle/VehiclePriceCard";
import VehicleSpecs from "../Components/vehicle/VehicleSpecs";
import VehicleCard from "../Components/vehicle/VehicleCard";
import VBotFAB from "../Components/vbot/VBotFAB";
import VBotChat from "../Components/vbot/VBotChat";
import { useVBot } from "../Components/vbot/useVBot";
import { isNew } from "../types/vehicle";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [botOpen, setBotOpen] = useState(false);

  const { vehicles, fetchAll } = useVehicleStore();
  const { messages, send, isLoading: botLoading } = useVBot();

  useEffect(() => {
    if (vehicles.length === 0) fetchAll();
  }, [fetchAll, vehicles.length]);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    api
      .vehicle(Number(id))
      .then((v) => setVehicle(v))
      .catch(() => setVehicle(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] font-mono text-[12px] tracking-widest uppercase text-vroom-ink4">
        Chargement…
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="font-serif text-[36px] font-normal">
          Véhicule non trouvé
        </h1>
        <Link to="/" className="text-vroom-accent text-[14px]">
          ← Retour à l'accueil
        </Link>
      </div>
    );
  }

  const tag = isNew(vehicle) ? "NEUF · DISPONIBLE" : "OCCASION · DISPONIBLE";

  const similar = vehicles
    .filter((v) => v.id !== vehicle.id && v.type === vehicle.type)
    .slice(0, 3);

  const breadcrumb = [
    {
      label: isNew(vehicle) ? "Neufs" : "Occasions",
      to: isNew(vehicle) ? "/neufs" : "/occasions",
    },
    { label: vehicle.type, to: "/" },
    { label: vehicle.brand, to: "/" },
    { label: vehicle.model, to: null },
  ];

  return (
    <div className="min-h-screen bg-vroom-bg font-sans text-vroom-ink">
      {/* Breadcrumb */}
      <div className="px-5 sm:px-8 lg:px-14 py-5 border-b border-vroom-line bg-white text-[12px] text-vroom-ink3 flex flex-wrap gap-2">
        {breadcrumb.map((crumb, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-vroom-ink4">/</span>}
            {crumb.to ? (
              <Link
                to={crumb.to}
                className="hover:text-vroom-ink transition-colors no-underline text-vroom-ink3"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-vroom-ink font-medium">{crumb.label}</span>
            )}
          </span>
        ))}
      </div>

      {/* Hero produit */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 lg:gap-14 px-5 sm:px-8 lg:px-14 py-8 lg:py-14">
        <VehicleGallery
          images={vehicle.images}
          alt={`${vehicle.brand} ${vehicle.model}`}
          tag={tag}
        />
        <VehiclePriceCard vehicle={vehicle} onVBot={() => setBotOpen(true)} />
      </section>

      {/* Specs */}
      <VehicleSpecs vehicle={vehicle} />

      {/* Vidéo */}
      {vehicle.video && (
        <section className="px-5 sm:px-8 lg:px-14 py-14 bg-[#0a0a0a]">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-vroom-accent mb-3">
            Vidéo
          </div>
          <h2 className="font-serif text-[26px] sm:text-[32px] font-normal mb-8 tracking-[-0.005em] text-white">
            En mouvement.
          </h2>
          <div className="aspect-video w-full max-w-4xl">
            <video
              src={`/${vehicle.video}`}
              controls
              className="w-full h-full object-cover rounded"
            />
          </div>
        </section>
      )}

      {/* Modèles similaires */}
      {similar.length > 0 && (
        <section className="px-5 sm:px-8 lg:px-14 py-18">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-vroom-accent mb-3">
            Aussi pour vous
          </div>
          <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-normal mb-9 tracking-[-0.005em]">
            Modèles similaires.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similar.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        </section>
      )}

      {/* V.BOT */}
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
