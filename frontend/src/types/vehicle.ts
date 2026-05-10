export interface VehicleBase {
  id: number;
  brand: string;
  model: string;
  type: string;
  energy: string;
  gearbox: string;
  nbDoors: number;
  nbPlace: number;
  horses: number;
  price: number;
  images: string[];
  video: string | null;
}

export interface NewVehicle extends VehicleBase {
  dtype: "new";
  warranty: number;
}

export interface UsedVehicle extends VehicleBase {
  dtype: "used";
  mileage: number;
  generalState: string;
  nbPreviousOwner: number;
}

export type Vehicle = NewVehicle | UsedVehicle;

// dtype may be absent if backend not yet updated — fall back to field presence check
export const isNew = (v: Vehicle): v is NewVehicle =>
  v.dtype === "new" || ("warranty" in v && !("mileage" in v));
export const isUsed = (v: Vehicle): v is UsedVehicle =>
  v.dtype === "used" || "mileage" in v;
