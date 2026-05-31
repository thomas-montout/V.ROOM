import { useState } from "react";
import { useVehicleStore } from "../../store/useVehicleStore";

export interface Msg {
  role: "user" | "bot";
  text: string;
}

const WELCOME: Msg = {
  role: "bot",
  text: "Bonjour 👋 Je suis V.BOT. Décrivez-moi votre usage quotidien et je vous propose les modèles les plus adaptés dans notre catalogue.",
};

export function useVBot() {
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [isLoading, setIsLoading] = useState(false);
  const vehicles = useVehicleStore((s) => s.vehicles);

  async function send(text: string) {
    setMessages((m) => [...m, { role: "user", text }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/vbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", text }],
          catalog: vehicles.map((v) => ({
            id: v.id,
            brand: v.brand,
            model: v.model,
            type: v.type,
            energy: v.energy,
            price: v.price,
            nbPlace: v.nbPlace,
          })),
        }),
      });

      if (!res.ok) throw new Error("Erreur réseau");
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", text: data.message }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "L'endpoint /api/vbot n'est pas encore configuré côté Symfony. Ajoutez un proxy Claude pour activer cette fonctionnalité.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return { messages, send, isLoading };
}
