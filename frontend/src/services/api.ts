import type { Vehicle } from "../types/vehicle";

const BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "/api";

export const api = {
  vehicles: () =>
    fetch(`${BASE}/vehicles`).then((r) => r.json()) as Promise<Vehicle[]>,
  vehicle: (id: number) =>
    fetch(`${BASE}/vehicles/${id}`).then((r) => r.json()) as Promise<Vehicle>,
  newOnes: () =>
    fetch(`${BASE}/vehicles/new`).then((r) => r.json()) as Promise<Vehicle[]>,
  usedOnes: () =>
    fetch(`${BASE}/vehicles/used`).then((r) => r.json()) as Promise<Vehicle[]>,
};
