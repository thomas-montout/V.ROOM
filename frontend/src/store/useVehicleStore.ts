import { create } from "zustand";

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  price: number;
  type: string;
  energy: string;
  gearbox: string;
  nbDoors: number;
  nbPlaces: number;
  horses: number;
  image: string;
  video: string;
}

interface NewVehicle extends Vehicle {
  warranty: number;
}

interface UsedVehicle extends Vehicle {
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
    nbPlaces: number;
  };
  fetchVehicles: () => Promise<void>;
  fetchNewVehicles: () => Promise<void>;
  fetchUsedVehicles: () => Promise<void>;
}

const useVehicleStore = create((set) => ({
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
  // fetchNewVehicles: async () => {
  //   set({ isLoading: true, error: null });
  //   try {
  //     const response = await fetch("/api/vehicles/new");
  //     const data = await response.json();
  //     set({ vehicles: data, isLoading: false });
  //   } catch {
  //     set({ error: "Failed to fetch vehicles", isLoading: false });
  //   }
  // },
  // fetchUsedVehicles: async () => {
  //   set({ isLoading: true, error: null });
  //   try {
  //     const response = await fetch("/api/vehicles/used");
  //     const data = await response.json();
  //     set({ vehicles: data, isLoading: false });
  //   } catch {
  //     set({ error: "Failed to fetch vehicles", isLoading: false });
  //   }
  // },
}));

export default useVehicleStore;
