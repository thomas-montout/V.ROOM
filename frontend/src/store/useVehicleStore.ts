import { create } from "zustand";

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  price: number;
  type: string;
  energy: string;
  gearbox: string;
  nbDoors: number;
  nbPlace: number;
  horses: number;
  images: string[] | null;
  video: string | null;
}

export interface NewVehicle extends Vehicle {
  warranty: number;
}

export interface UsedVehicle extends Vehicle {
  mileage: number;
}

interface VehicleStore {
  vehicles: (NewVehicle | UsedVehicle)[];
  isLoading: boolean;
  error: string | null;
  filter: {
    type: string;
    energy: string;
    gearbox: string;
    nbDoors: number;
    nbPlace: number;
  };
  fetchVehicles: () => Promise<void>;
  fetchNewVehicles: () => Promise<void>;
  fetchUsedVehicles: () => Promise<void>;
}

const useVehicleStore = create<VehicleStore>((set) => ({
  vehicles: [],
  isLoading: false,
  error: null,
  filter: {
    type: "",
    energy: "",
    gearbox: "",
    nbDoors: 0,
    nbPlace: 0,
  },
  fetchVehicles: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api/vehicles");
      const data = await response.json();
      set({ vehicles: data, isLoading: false });
    } catch {
      set({ error: "Failed to fetch vehicles", isLoading: false });
    }
  },
  fetchNewVehicles: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api/vehicles/new");
      const data = await response.json();
      set({ vehicles: data, isLoading: false });
    } catch {
      set({ error: "Failed to fetch vehicles", isLoading: false });
    }
  },
  fetchUsedVehicles: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("/api/vehicles/used");
      const data = await response.json();
      set({ vehicles: data, isLoading: false });
    } catch {
      set({ error: "Failed to fetch vehicles", isLoading: false });
    }
  },
}));

export default useVehicleStore;
