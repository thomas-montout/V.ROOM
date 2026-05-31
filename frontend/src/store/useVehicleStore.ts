import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import type { Vehicle } from "../types/vehicle";
import { api } from "../services/api";

interface Filter {
  type?: string;
  energy?: string;
  gearbox?: string;
  maxPrice?: number;
  minPlaces?: number;
}

interface State {
  vehicles: Vehicle[];
  isLoading: boolean;
  error: string | null;
  filter: Filter;
  fetchAll: () => Promise<void>;
  setFilter: (f: Partial<Filter>) => void;
}

export const useVehicleStore = create<State>((set) => ({
  vehicles: [],
  isLoading: false,
  error: null,
  filter: {},
  fetchAll: async () => {
    set({ isLoading: true, error: null });
    try {
      set({ vehicles: await api.vehicles(), isLoading: false });
    } catch {
      set({ error: "Erreur API", isLoading: false });
    }
  },
  setFilter: (f) => set((s) => ({ filter: { ...s.filter, ...f } })),
}));

export const useNew = () =>
  useVehicleStore(useShallow((s) => s.vehicles.filter((v) => "warranty" in v)));
export const useUsed = () =>
  useVehicleStore(useShallow((s) => s.vehicles.filter((v) => "mileage" in v)));
