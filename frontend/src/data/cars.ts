type CarModel = {
  id: number;
  brand: string;
  name: string;
  price: number;
  model: string;
  type: string | null;
  energy: string | null;
  gearbox: string | null;
  nbDoors: number | null;
  nbSeats: number | null;
  nbPlace: number | null;
  horses: number | null;
  image: string;
  video: string | null;
};

const models: CarModel[] = [
  {
    id: 1,
    brand: "BMW",
    name: "BMW M3",
    price: 35000,
    model: "M3",
    type: "berline",
    energy: "essence",
    horses: 340,
    nbPlace: 5,
    nbSeats: 5,
    nbDoors: 4,
    gearbox: "manuelle",
    image: "/cars/BMW116.webp",
    video: null,
  },

  {
    id: 2,
    brand: "BMW",
    name: "BMW X5",
    price: 52000,
    model: "X5",
    type: "suv",
    energy: "diesel",
    horses: 265,
    nbPlace: 5,
    nbSeats: 5,
    nbDoors: 5,
    gearbox: "automatique",
    image: "/cars/BMWX5xDrive50e.webp",
    video: null,
  },
  {
    id: 3,
    brand: "BMW",
    name: "BMW i8",
    price: 78000,
    model: "i8",
    type: "coupé",
    energy: "hybride",
    horses: 374,
    nbPlace: 4,
    nbSeats: 4,
    nbDoors: 2,
    gearbox: "automatique",
    image: "/cars/BMWM3CSTouring.webp",
    video: null,
  },
  {
    id: 4,
    brand: "BMW",
    name: "BMW Série 1",
    price: 27000,
    model: "Série 1",
    type: "citadine",
    energy: "essence",
    horses: 140,
    nbPlace: 5,
    nbSeats: 5,
    nbDoors: 5,
    gearbox: "manuelle",
    image: "/cars/BMWM2CS.webp",
    video: null,
  },
  {
    id: 5,
    brand: "BMW",
    name: "BMW X3 Hybride",
    price: 48000,
    model: "X3 Hybride",
    type: "suv",
    energy: "hybride",
    horses: 292,
    nbPlace: 5,
    nbSeats: 5,
    nbDoors: 5,
    gearbox: "automatique",
    image: "/cars/BMWi4xDrive40.webp",
    video: null,
  },
  {
    id: 6,
    brand: "BMW",
    name: "BMW i3",
    price: 32000,
    type: "citadine",
    energy: "electrique",
    horses: 170,
    nbPlace: 4,
    nbSeats: 4,
    nbDoors: 5,
    gearbox: "automatique",
    image: "/cars/BMW320dxDrive.webp",
    video: null,
    model: "i3",
  },
];

export default models;
