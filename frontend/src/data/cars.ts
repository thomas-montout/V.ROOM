export type CarModel = {
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
  nbPlaces: number | null;
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
    gearbox: "manuelle",
    nbDoors: 4,
    nbSeats: 5,
    nbPlaces: 5,
    horses: 340,
    image: "/cars/model1.webp",
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
    gearbox: "automatique",
    nbDoors: 5,
    nbSeats: 5,
    nbPlaces: 5,
    horses: 265,
    image: "/cars/model2.webp",
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
    gearbox: "automatique",
    nbDoors: 2,
    nbSeats: 4,
    nbPlaces: 4,
    horses: 374,
    image: "/cars/model3.webp",
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
    gearbox: "manuelle",
    nbDoors: 5,
    nbSeats: 5,
    nbPlaces: 5,
    horses: 140,
    image: "/cars/model4.webp",
    video: null,
  },
  {
    id: 5,
    brand: "BMW",
    name: "BMW X3 Hybride",
    price: 48000,
    model: "X3",
    type: "suv",
    energy: "hybride",
    gearbox: "automatique",
    nbDoors: 5,
    nbSeats: 5,
    nbPlaces: 5,
    horses: 292,
    image: "/cars/model5.webp",
    video: null,
  },
  {
    id: 6,
    brand: "BMW",
    name: "BMW i3",
    price: 32000,
    model: "i3",
    type: "citadine",
    energy: "electrique",
    gearbox: "automatique",
    nbDoors: 5,
    nbSeats: 4,
    nbPlaces: 4,
    horses: 170,
    image: "/cars/model6.webp",
    video: null,
  },
];

export default models;
