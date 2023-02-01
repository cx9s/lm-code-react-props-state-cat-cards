interface Pet {
  name: string;
  species: string;
  favFoods: string[];
  birthYear: number;
}

export interface Cat extends Pet {}

export interface Dog extends Pet {}
