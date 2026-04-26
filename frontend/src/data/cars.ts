type CarModel = {
  id: number;
  name: string;
  price: number;
  type:
    | "suv"
    | "berline"
    | "citadine"
    | "coupé"
    | "break"
    | "monospace"
    | "4x4";
  energie: "essence" | "diesel" | "hybride" | "electrique";
  puissance: number;
  places: number;
  portes: number;
  boiteDeVitesses: "manuelle" | "automatique";
  image: string;
};

const models: CarModel[] = [
  {
    id: 1,
    name: "BMW M3",
    price: 35000,
    type: "berline",
    energie: "essence",
    puissance: 340,
    places: 5,
    portes: 4,
    boiteDeVitesses: "manuelle",
    image: "/cars/model1.webp",
  },
  {
    id: 2,
    name: "BMW X5",
    price: 52000,
    type: "suv",
    energie: "diesel",
    puissance: 265,
    places: 5,
    portes: 5,
    boiteDeVitesses: "automatique",
    image: "/cars/model2.webp",
  },
  {
    id: 3,
    name: "BMW i8",
    price: 78000,
    type: "coupé",
    energie: "hybride",
    puissance: 374,
    places: 4,
    portes: 2,
    boiteDeVitesses: "automatique",
    image: "/cars/model3.webp",
  },
  {
    id: 4,
    name: "BMW Série 1",
    price: 27000,
    type: "citadine",
    energie: "essence",
    puissance: 140,
    places: 5,
    portes: 5,
    boiteDeVitesses: "manuelle",
    image: "/cars/model4.webp",
  },
  {
    id: 5,
    name: "BMW X3 Hybride",
    price: 48000,
    type: "suv",
    energie: "hybride",
    puissance: 292,
    places: 5,
    portes: 5,
    boiteDeVitesses: "automatique",
    image: "/cars/model5.webp",
  },
  {
    id: 6,
    name: "BMW i3",
    price: 32000,
    type: "citadine",
    energie: "electrique",
    puissance: 170,
    places: 4,
    portes: 5,
    boiteDeVitesses: "automatique",
    image: "/cars/model6.webp",
  },
];

export default models;
