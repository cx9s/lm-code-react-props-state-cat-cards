import { Image } from "./image";
export interface Pet {
  type: PetType;
  name: string;
  species: string;
  favFoods: string[];
  birthYear: number;
  image?: Image;
}
const petTypes = ["Cat", "Dog"] as const;
type PetType = typeof petTypes[number];

export interface Cat extends Pet {
  type: "Cat";
}

export interface Dog extends Pet {
  type: "Dog";
}
